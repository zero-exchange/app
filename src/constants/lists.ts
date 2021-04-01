  

const ls = localStorage.getItem('redux_localstorage_simple_crosschain')
let nameCurrentMainCurrency = 'ETH'
if(ls) {
    nameCurrentMainCurrency = JSON.parse(ls).currentChain.symbol
}

export function getListTokensByChain(chainId: string) {
console.log("🚀 ~ file: lists.ts ~ line 10 ~ getListTokensByChain ~ chainId", chainId)
   
}


// the Uniswap Default token list lives here
export const DEFAULT_TOKEN_LIST_URL = 'tokens.uniswap.eth'

// from uniswap exchanges
const COMPOUND_LIST = 'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json'
const UMA_LIST = 'https://umaproject.org/uma.tokenlist.json'
const AAVE_LIST = 'tokenlist.aave.eth'
const SYNTHETIX_LIST = 'synths.snx.eth'
const WRAPPED_LIST = 'wrapped.tokensoft.eth'
const SET_LIST = 'https://raw.githubusercontent.com/SetProtocol/uniswap-tokenlist/main/set.tokenlist.json'
const OPYN_LIST = 'https://raw.githubusercontent.com/opynfinance/opyn-tokenlist/master/opyn-v1.tokenlist.json'
const ROLL_LIST = 'https://app.tryroll.com/tokens.json'
const COINGECKO_LIST = 'https://tokens.coingecko.com/uniswap/all.json'
const CMC_ALL_LIST = 'defi.cmc.eth'
const CMC_STABLECOIN = 'stablecoin.cmc.eth'
const KLEROS_LIST = 't2crtokens.eth'
const GEMINI_LIST = 'https://www.gemini.com/uniswap/manifest.json'
// const BA_LIST = 'https://raw.githubusercontent.com/The-Blockchain-Association/sec-notice-list/master/ba-sec-list.json'

// from https://pangolin.exchange/ exchanges
const AVAX_DEFI = 'https://raw.githubusercontent.com/pangolindex/tokenlists/main/defi.tokenlist.json'
const AVAX_TOP_15 = 'https://raw.githubusercontent.com/pangolindex/tokenlists/main/top15.tokenlist.json'
const AVAX_ETH = 'https://raw.githubusercontent.com/pangolindex/tokenlists/main/aeb.tokenlist.json'
const AVAX_STABLECOINS = 'https://raw.githubusercontent.com/pangolindex/tokenlists/main/stablecoin.tokenlist.json'


// used to mark unsupported tokens, these are hosted lists of unsupported tokens
export const UNSUPPORTED_LIST_URLS: string[] = []
const listTokensFomChains = {
    ETHList: [
        COMPOUND_LIST,
        AAVE_LIST,
        SYNTHETIX_LIST,
        UMA_LIST,
        WRAPPED_LIST,
        SET_LIST,
        OPYN_LIST,
        ROLL_LIST,
        COINGECKO_LIST,
        CMC_ALL_LIST,
        CMC_STABLECOIN,
        KLEROS_LIST,
        GEMINI_LIST,
        ...UNSUPPORTED_LIST_URLS // need to load unsupported tokens as well
      ], 
      AVAXList: [
        AVAX_DEFI,
        AVAX_ETH,
        AVAX_STABLECOINS,
        AVAX_TOP_15
      ], 
      BNBList: []
}
// lower index == higher priority for token import
 
export const DEFAULT_LIST_OF_LISTS: string[] =  listTokensFomChains[`${nameCurrentMainCurrency}List`]
 
// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [DEFAULT_LIST_OF_LISTS[0]]
