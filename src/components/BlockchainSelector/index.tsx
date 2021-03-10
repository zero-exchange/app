import { ChevronDown, ChevronsRight, Link } from 'react-feather'

import BlockchainLogo from '../BlockchainLogo'
import { CrosschainChain } from '../../state/crosschain/actions'
import React, { useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border: 1px dashed rgba(38, 98, 255, 0.5);
  border-radius: 14px;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  h5 {
    margin-left: 0.3rem;
  }
  p {
    margin-left: auto;
    padding: 0.5rem 0.25rem;
    border-radius: 12px;
    background: rgba(38, 98, 255, 0.25);
    transition: all 0.2s ease-in-out;
    font-size: 0.85rem;
    span {
      margin-left: 4px;
      margin-right: 4px;
    }
    &:hover {
      background: rgba(38, 98, 255, 0.75);
      cursor: pointer;
    }
    &.crosschain {
      margin: auto;
    }
    &.currentchain {
      background: transparent;
    }
  }
`
const Row = styled.div<{ borderBottom: boolean; isCrossChain?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${({ isCrossChain }) => (!isCrossChain ? '0 1rem 0 1rem' : '1rem')};
  border-bottom: ${({ borderBottom }) => (borderBottom ? '1px dashed rgba(38, 98, 255, .5)' : 'none')};
`

const BlockchainSelector = ({
  blockchain,
  transferTo,
  onSetTransferTo,
  supportedChains,
  isCrossChain,
  onShowCrossChainModal,
  onShowTransferChainModal
}: {
  blockchain: string | CrosschainChain | undefined
  transferTo: any // tslint not working here, same as above
  isCrossChain?: boolean
  supportedChains: string[]
  onShowCrossChainModal: () => void
  onSetTransferTo: (name: string) => void
  onShowTransferChainModal: () => void
}) => {
  useEffect(() => {
    onSetTransferTo(transferTo?.name)
  }, [transferTo])

  const openChangeChainInfo = () => {
    onShowCrossChainModal()
  }

  const openTransferModal = () => {
    onShowTransferChainModal()
  }

  if (!blockchain) {
    return <div />
  }
  // @ts-ignore
  return (
    <Container>
      {!isCrossChain && (
        <Row borderBottom={false} isCrossChain={isCrossChain}>
          <Link size={16} />
          <h5>Blockchain:</h5>
          <p onClick={openChangeChainInfo}>
            <BlockchainLogo
              size="18px"
              blockchain={typeof blockchain === 'string' ? blockchain : ''}
              style={{ marginBottom: '-3px' }}
            />
            <span>{blockchain}</span>
            <ChevronDown size="18" style={{ marginBottom: '-3px' }} />
          </p>
        </Row>
      )}
      {isCrossChain && (
        <Row borderBottom={false} isCrossChain={isCrossChain}>
          <p className="crosschain currentchain">
            <BlockchainLogo
              size="18px"
              blockchain={typeof blockchain !== 'string' ? blockchain.name : blockchain}
              style={{ marginBottom: '-3px' }}
            />
            <span>{typeof blockchain !== 'string' ? blockchain.name : blockchain}</span>
          </p>
          <ChevronsRight />
          <p className="crosschain" onClick={openTransferModal}>
            <BlockchainLogo
              size="18px"
              blockchain={typeof transferTo !== 'string' ? transferTo.name : blockchain}
              style={{ marginBottom: '-3px' }}
            />
            <span>{typeof transferTo !== 'string' ? transferTo.name : blockchain}</span>
            <ChevronDown size="18" style={{ marginBottom: '-3px' }} />
          </p>
        </Row>
      )}
    </Container>
  )
}

export default BlockchainSelector
