import { Token } from '@zeroexchange/sdk'
import React, { useCallback, useMemo, useState } from 'react'
import { useDefaultsFromURLSearch } from '../../state/swap/hooks'

import AppBody from '../AppBody'
import { SwapPoolTabs } from '../../components/NavigationTabs'
import SwapsTabs from '../../components/SwapsTabs'
import TokenWarningModal from '../../components/TokenWarningModal'
import { useCurrency } from '../../hooks/Tokens'

export default function Swap() {
  const loadedUrlParams = useDefaultsFromURLSearch()

  // token warning stuff
  const [loadedInputCurrency, loadedOutputCurrency] = [
    useCurrency(loadedUrlParams?.inputCurrencyId),
    useCurrency(loadedUrlParams?.outputCurrencyId)
  ]
  const [dismissTokenWarning, setDismissTokenWarning] = useState<boolean>(false)
  const urlLoadedTokens: Token[] = useMemo(
    () => [loadedInputCurrency, loadedOutputCurrency]?.filter((c): c is Token => c instanceof Token) ?? [],
    [loadedInputCurrency, loadedOutputCurrency]
  )
  const handleConfirmTokenWarning = useCallback(() => {
    setDismissTokenWarning(true)
  }, [])
  // swaps or cross chain
  const [isCrossChain, setIsCrossChain] = useState<boolean>(false)
  const handleSetIsCrossChain = (bool: boolean) => {
    setIsCrossChain(bool)
  }

  return (
    <>
      <TokenWarningModal
        isOpen={urlLoadedTokens.length > 0 && !dismissTokenWarning}
        tokens={urlLoadedTokens}
        onConfirm={handleConfirmTokenWarning}
      />
      <AppBody>
        <SwapPoolTabs active={'swap'} />
        <SwapsTabs isCrossChain={isCrossChain} onSetIsCrossChain={handleSetIsCrossChain} />
        {isCrossChain ? <span>cross chain</span> : <span>one chain</span>}
      </AppBody>
    </>
  )
}
