import { createReducer } from '@reduxjs/toolkit'
import { getVersionUpgrade, VersionUpgrade } from '@uniswap/token-lists'
import { TokenList } from '@uniswap/token-lists/dist/types'
import { getListTokensByChain, MAIN_CURRENCY, CHAIN_ID } from '../../constants/lists'
import { updateVersion } from '../global/actions'
import { acceptListUpdate, addList, fetchTokenList, removeList, selectList, switchNewList } from './actions'

const { DEFAULT_TOKEN_LIST_URL, DEFAULT_LIST_OF_LISTS } = getListTokensByChain(MAIN_CURRENCY, CHAIN_ID)
export interface ListsState {
  readonly byUrl: {
    readonly [url: string]: {
      readonly current: TokenList | null
      readonly pendingUpdate: TokenList | null
      readonly loadingRequestId: string | null
      readonly error: string | null,
      readonly firstCurrency: string | null
    }
  }
  // this contains the default list of lists from the last time the updateVersion was called, i.e. the app was reloaded
  readonly lastInitializedDefaultListOfLists?: string[]
  readonly selectedListUrl: string | undefined
  readonly mainCurrency: string
}

type ListState = ListsState['byUrl'][string]

const NEW_LIST_STATE: ListState = {
  error: null,
  current: null,
  loadingRequestId: null,
  pendingUpdate: null,
  firstCurrency: null
}

type Mutable<T> = { -readonly [P in keyof T]: T[P] extends ReadonlyArray<infer U> ? U[] : T[P] }

const initialState: ListsState = {
  lastInitializedDefaultListOfLists: DEFAULT_LIST_OF_LISTS,
  byUrl: {
    ...DEFAULT_LIST_OF_LISTS.reduce<Mutable<ListsState['byUrl']>>((memo, listUrl) => {
      memo[listUrl] = NEW_LIST_STATE
      return memo
    }, {})
  },
  selectedListUrl: DEFAULT_TOKEN_LIST_URL,
  mainCurrency: MAIN_CURRENCY
}

export default createReducer(initialState, builder =>
  builder
    .addCase(fetchTokenList.pending, (state, { payload: { requestId, url } }) => {
      state.byUrl[url] = {
        current: null,
        pendingUpdate: null,
        ...state.byUrl[url],
        loadingRequestId: requestId,
        error: null,
        firstCurrency: null
      }
    })
    .addCase(fetchTokenList.fulfilled, (state, { payload: { requestId, tokenList, url } }) => {
      const current = state.byUrl[url]?.current
      const loadingRequestId = state.byUrl[url]?.loadingRequestId

      // no-op if update does nothing
      if (current) {
        const upgradeType = getVersionUpgrade(current.version, tokenList.version)
        if (upgradeType === VersionUpgrade.NONE) return
        if (loadingRequestId === null || loadingRequestId === requestId) {
          state.byUrl[url] = {
            ...state.byUrl[url],
            loadingRequestId: null,
            error: null,
            current: current,
            pendingUpdate: tokenList,
            firstCurrency: MAIN_CURRENCY
          }
        }
      } else {
        state.byUrl[url] = {
          ...state.byUrl[url],
          loadingRequestId: null,
          error: null,
          current: tokenList,
          pendingUpdate: null,
          firstCurrency: MAIN_CURRENCY
        }
      }
    })
    .addCase(fetchTokenList.rejected, (state, { payload: { url, requestId, errorMessage } }) => {
      if (state.byUrl[url]?.loadingRequestId !== requestId) {
        // no-op since it's not the latest request
        return
      }

      state.byUrl[url] = {
        ...state.byUrl[url],
        loadingRequestId: null,
        error: errorMessage,
        current: null,
        pendingUpdate: null,
        firstCurrency: null
      }
    })
    .addCase(selectList, (state, { payload: url }) => {
      state.selectedListUrl = url
      // automatically adds list
      if (!state.byUrl[url]) {
        state.byUrl[url] = NEW_LIST_STATE
      }
    })
    .addCase(addList, (state, { payload: url }) => {
      if (!state.byUrl[url]) {
        state.byUrl[url] = NEW_LIST_STATE
      }
    })
    .addCase(removeList, (state, { payload: url }) => {
      if (state.byUrl[url]) {
        delete state.byUrl[url]
      }
      if (state.selectedListUrl === url) {
        state.selectedListUrl = url === DEFAULT_TOKEN_LIST_URL ? Object.keys(state.byUrl)[0] : DEFAULT_TOKEN_LIST_URL
      }
    })
    .addCase(acceptListUpdate, (state, { payload: url }) => {
      if (!state.byUrl[url]?.pendingUpdate) {
        throw new Error('accept list update called without pending update')
      }
      state.byUrl[url] = {
        ...state.byUrl[url],
        pendingUpdate: null,
        current: state.byUrl[url].pendingUpdate
      }
    })
    .addCase(switchNewList, (state, { payload: {newCurrency, chainNumber} }) => {
      if (MAIN_CURRENCY !== newCurrency) {
        const newList = getListTokensByChain(newCurrency, chainNumber)
        //if(state.lastInitializedDefaultListOfLists) {     
          const keys = Object.keys(state.byUrl)
          keys.map( url => {
                delete state.byUrl[url]
          })
          
  //  }
        
        state.lastInitializedDefaultListOfLists = newList.DEFAULT_LIST_OF_LISTS
        state.mainCurrency = newList.MAIN_CURRENCY
        newList.DEFAULT_LIST_OF_LISTS.forEach(listUrl => {
          state.byUrl[listUrl] = NEW_LIST_STATE
        })
      }
    }

    )
    .addCase(updateVersion, state => {
      // state loaded from localStorage, but new lists have never been initialized
      const newList = getListTokensByChain(MAIN_CURRENCY, CHAIN_ID)
      if (!state.lastInitializedDefaultListOfLists) {
        state.byUrl = initialState.byUrl
        state.selectedListUrl = newList.DEFAULT_TOKEN_LIST_URL
      } else if (state.lastInitializedDefaultListOfLists) {
        const lastInitializedSet = state.lastInitializedDefaultListOfLists.reduce<Set<string>>(
          (s, l) => s.add(l),
          new Set()
        )
        const newListOfListsSet = newList.DEFAULT_LIST_OF_LISTS.reduce<Set<string>>((s, l) => s.add(l), new Set())

        newList.DEFAULT_LIST_OF_LISTS.forEach(listUrl => {
          if (!lastInitializedSet.has(listUrl)) {
            state.byUrl[listUrl] = NEW_LIST_STATE
          }
        })

        state.lastInitializedDefaultListOfLists.forEach(listUrl => {
          if (!newListOfListsSet.has(listUrl)) {
            delete state.byUrl[listUrl]
          }
        })
      }

      state.lastInitializedDefaultListOfLists = newList.DEFAULT_LIST_OF_LISTS
      state.mainCurrency = newList.MAIN_CURRENCY

      if (!state.selectedListUrl) {
        state.selectedListUrl = newList.DEFAULT_TOKEN_LIST_URL
        if (!state.byUrl[newList.DEFAULT_TOKEN_LIST_URL]) {
          state.byUrl[newList.DEFAULT_TOKEN_LIST_URL] = NEW_LIST_STATE
        }
      }
    })
)
