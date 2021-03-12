// import { ChainId, Token } from '@zeroexchange/sdk';

export type TokenConfig = {
  chainId?: string
  address: string
  decimals: number
  name?: string
  symbol?: string
  imageUri?: string
  resourceId: string
  isNativeWrappedToken?: boolean
  assetBase: string
}

export type BridgeConfig = {
  chainId: number
  networkId: number
  name: string
  bridgeAddress: string
  erc20HandlerAddress: string
  rpcUrl: string
  gasLimit?: number
  type: 'Ethereum' | 'Substrate'
  tokens: TokenConfig[]
  nativeTokenSymbol: string
  //This should be the full path to display a tx hash, without the trailing slash, ie. https://etherscan.io/tx
  blockExplorer?: string
  defaultGasPrice?: number
}

export type ChainbridgeConfig = {
  chains: BridgeConfig[]
}

export const crosschainConfig: ChainbridgeConfig = {
  chains: [
    {
      chainId: 1,
      networkId: 1,
      name: 'Ethereum',
      bridgeAddress: '0x278cDd6847ef830c23cac61C17Eab837fEa1C29A',
      erc20HandlerAddress: '0xB8B493600A5b200Ca2c58fFA9dced00694fB3E38',
      rpcUrl: 'https://mainnet.infura.io/v3/45174a29359d4b07ade01676259bc47a',
      type: 'Ethereum',
      blockExplorer: 'https://etherscan.io/tx',
      nativeTokenSymbol: 'ETH',
      tokens: [
        {
          address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
          name: 'WETH',
          symbol: 'WETH',
          assetBase: 'ETH',
          decimals: 18,
          resourceId: '0x0000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200'
        },
        // {
        //   address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        //   name: "USDT",
        //   symbol: "USDT",
        //   assetBase: 'USDT',
        //   decimals: 6,
        //   resourceId: "0x0000000000000000000000dAC17F958D2ee523a2206206994597C13D831ec700",
        // },
        {
          address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
          name: 'USDC',
          symbol: 'USDC',
          assetBase: 'USDC',
          decimals: 6,
          resourceId: '0x0000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4801'
        },
        {
          address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
          name: 'wBTC',
          symbol: 'wBTC',
          assetBase: 'BTC',
          decimals: 8,
          resourceId: '0x00000000000000000000002260fac5e5542a773aa44fbcfedf7c193bc2c59901'
        },
        {
          address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
          name: 'DAI',
          symbol: 'DAI',
          assetBase: 'DAI',
          decimals: 18,
          resourceId: '0x00000000000000000000006b175474e89094c44da98b954eedeac495271d0f01'
        },
        {
          address: '0xF0939011a9bb95c3B791f0cb546377Ed2693a574',
          name: 'ZERO(ETH)',
          symbol: 'ZERO',
          assetBase: 'ZERO',
          decimals: 18,
          resourceId: '0x0000000000000000000000F0939011a9bb95c3B791f0cb546377Ed2693a57401'
        },
        {
          address: '0x743864B0562754F47f91CD400Ac8d4356a8fc720',
          name: 'eAVAX',
          symbol: 'eAVAX',
          assetBase: 'C-AVAX',
          decimals: 18,
          resourceId: '0x0000000000000000000000743864B0562754F47f91CD400Ac8d4356a8fc72001'
        },
        {
          address: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
          name: 'LINK',
          symbol: 'LINK',
          assetBase: 'LINK',
          decimals: 18,
          resourceId: '0x0000000000000000000000514910771AF9Ca656af840dff83E8264EcF986CA01'
        },
        {
          address: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
          name: 'AAVE',
          symbol: 'AAVE',
          assetBase: 'AAVE',
          decimals: 18,
          resourceId: '0x00000000000000000000007Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE901'
        },
        {
          address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
          name: 'UNI',
          symbol: 'UNI',
          assetBase: 'UNI',
          decimals: 18,
          resourceId: '0x00000000000000000000001f9840a85d5aF5bf1D1762F925BDADdC4201F98401'
        },
        {
          address: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
          name: 'SUSHI',
          symbol: 'SUSHI',
          assetBase: 'SUSHI',
          decimals: 18,
          resourceId: '0x00000000000000000000006B3595068778DD592e39A122f4f5a5cF09C90fE201'
        },
        {
          address: '0x111111111117dC0aa78b770fA6A738034120C302',
          name: '1INCH',
          symbol: '1INCH',
          assetBase: '1INCH',
          decimals: 18,
          resourceId: '0x0000000000000000000000011111111117dC0aa78b770fA6A738034120C30201'
        },
        {
          address: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
          name: 'YFI',
          symbol: 'YFI',
          assetBase: 'YFI',
          decimals: 18,
          resourceId: '0x00000000000000000000000bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e01'
        }
      ]
    },
    {
      chainId: 2,
      networkId: 43114,
      name: 'Avalanche',
      bridgeAddress: '0xee8aE1088D02CCDA2CDd0FdA2381DB679d0b122E',
      erc20HandlerAddress: '0x40a07f36655A0724557cA53A9E5D1b5018e9Df32',
      rpcUrl: 'https://api.avax.network/ext/bc/C/rpc',
      type: 'Ethereum',
      blockExplorer: 'https://blockscout.com/etc/kotti/tx',
      nativeTokenSymbol: 'AVAX',
      defaultGasPrice: 470,
      tokens: [
        {
          address: '0xf6F3EEa905ac1da6F6DD37d06810C6Fcb0EF5183',
          name: 'zETH',
          symbol: 'zETH',
          assetBase: 'ETH',
          decimals: 18,
          resourceId: '0x0000000000000000000000f6F3EEa905ac1da6F6DD37d06810C6Fcb0EF518301'
        },
        // {
        //   address: "0x650CECaFE61f3f65Edd21eFacCa18Cc905EeF0B7",
        //   name: "zUSDT",
        //   symbol: "zUSDT",
        //   assetBase: 'USDT',
        //   decimals: 6,
        //   resourceId: "0x0000000000000000000000a14d2e53e7578cD69A6B97Bff054F56280A8d2C801",
        // },
        {
          address: '0x474Bb79C3e8E65DcC6dF30F9dE68592ed48BBFDb',
          name: 'zUSDC',
          symbol: 'zUSDC',
          assetBase: 'USDC',
          decimals: 6,
          resourceId: '0x000000000000000000000023729144FEf299FA056BBBe29e2f01e79d7A634b02'
        },
        {
          address: '0xc4f4Ff34A2e2cF5e4c892476BB2D056871125452',
          name: 'zBTC',
          symbol: 'zBTC',
          assetBase: 'BTC',
          decimals: 8,
          resourceId: '0x00000000000000000000003B8eCf240b4Ea45BD9C02e60cddA1225a49BC6DA02'
        },
        {
          address: '0x12f108E6138d4A9c58511e042399cF8f90D5673f',
          name: 'zDAI',
          symbol: 'zDAI',
          assetBase: 'DAI',
          decimals: 18,
          resourceId: '0x000000000000000000000012f108E6138d4A9c58511e042399cF8f90D5673f02'
        },
        {
          address: '0x008E26068B3EB40B443d3Ea88c1fF99B789c10F7',
          name: 'ZERO(AVA)',
          symbol: 'ZERO',
          assetBase: 'ZERO',
          decimals: 18,
          resourceId: '0x0000000000000000000000008E26068B3EB40B443d3Ea88c1fF99B789c10F702'
        },
        {
          address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
          name: 'WAVAX',
          symbol: 'WAVAX',
          assetBase: 'C-AVAX',
          decimals: 18,
          resourceId: '0x0000000000000000000000B31f66AA3C1e785363F0875A1B74E27b85FD66c702'
        },
        {
          address: '0xc770701264aD059DD5700Ff68e85ea7A2CaaeF0B',
          name: 'zLINK',
          symbol: 'zLINK',
          assetBase: 'LINK',
          decimals: 18,
          resourceId: '0x0000000000000000000000c770701264aD059DD5700Ff68e85ea7A2CaaeF0B02'
        },
        {
          address: '0xbf5a94cFe186FC22aFd6637243b9822586960825',
          name: 'zAAVE',
          symbol: 'zAAVE',
          assetBase: 'AAVE',
          decimals: 18,
          resourceId: '0x0000000000000000000000bf5a94cFe186FC22aFd6637243b982258696082502'
        },
        {
          address: '0xBa9aF11661520129Af69d233E92d69BD40CD90AF',
          name: 'zUNI',
          symbol: 'zUNI',
          assetBase: 'UNI',
          decimals: 18,
          resourceId: '0x0000000000000000000000Ba9aF11661520129Af69d233E92d69BD40CD90AF02'
        },
        {
          address: '0xD4feE2e3F88B9138B74a323B40bC63bcc1A1B9eC',
          name: 'zSUSHI',
          symbol: 'zSUSHI',
          assetBase: 'SUSHI',
          decimals: 18,
          resourceId: '0x0000000000000000000000D4feE2e3F88B9138B74a323B40bC63bcc1A1B9eC02'
        },
        {
          address: '0x5a0dDfA245c02d1256AfDcDa38aDFE89F34367Ce',
          name: 'z1INCH',
          symbol: 'z1INCH',
          assetBase: '1INCH',
          decimals: 18,
          resourceId: '0x00000000000000000000005a0dDfA245c02d1256AfDcDa38aDFE89F34367Ce02'
        },
        {
          address: '0xD94f76f8DD5c3832dd798621c0d673bBae9D946b',
          name: 'zYFI',
          symbol: 'zYFI',
          assetBase: 'YFI',
          decimals: 18,
          resourceId: '0x0000000000000000000000D94f76f8DD5c3832dd798621c0d673bBae9D946b02'
        }
      ]
    },
    {
      chainId: 3,
      networkId: 56,
      name: 'Smart Chain',
      bridgeAddress: '0xF82B6C89A1D3340733eA4f74F9D111b5D7127876',
      erc20HandlerAddress: '0xD02408A62ED3708429ccFb04d9dEA302884ab6a7',
      rpcUrl: 'https://bsc-dataseed2.binance.org',
      type: 'Ethereum',
      gasLimit: 6721975,
      defaultGasPrice: 12.5,
      blockExplorer: 'https://bscscan.com/',
      nativeTokenSymbol: 'BNB',
      tokens: [
        {
          address: '0x4022AfEB287052e6e587d39bA99f79cAFC47B570',
          name: 'zUSDC',
          symbol: 'zUSDC',
          assetBase: 'USDC',
          decimals: 6,
          resourceId: '0x00000000000000000000004022AfEB287052e6e587d39bA99f79cAFC47B57003'
        },
        {
          address: '0x7c815BBc21FED2B97CA163552991A5C30d6a2336',
          name: 'zETH',
          symbol: 'zETH',
          assetBase: 'ETH',
          decimals: 18,
          resourceId: '0x00000000000000000000007c815BBc21FED2B97CA163552991A5C30d6a233603',
        },
        {
          address: '0xB6D5487b00e53e7009E6560189EB8B8c22e11Bf3',
          name: 'zBTC',
          symbol: 'zBTC',
          assetBase: 'BTC',
          decimals: 8,
          resourceId: '0x0000000000000000000000B6D5487b00e53e7009E6560189EB8B8c22e11Bf303',
        },
        {
          address: '0x7e7bAFF135c42ed90C0EdAb16eAe48ecEa417018',
          name: 'zDAI',
          symbol: 'zDAI',
          assetBase: 'DAI',
          decimals: 18,
          resourceId: '0x00000000000000000000007e7bAFF135c42ed90C0EdAb16eAe48ecEa41701803',
        },
        {
          address: '0x1f534d2B1ee2933f1fdF8e4b63A44b2249d77EAf',
          name: 'ZERO',
          symbol: 'ZERO',
          assetBase: 'ZERO',
          decimals: 18,
          resourceId: '0x00000000000000000000001f534d2B1ee2933f1fdF8e4b63A44b2249d77EAf03',
        },
        {
          address: '0xaC532d2FC81a077C9F93Be7ea698E2f1d224Ec04',
          name: 'zAVAX',
          symbol: 'zAVAX',
          assetBase: 'AVAX',
          decimals: 18,
          resourceId: '0x0000000000000000000000aC532d2FC81a077C9F93Be7ea698E2f1d224Ec0403',
        },
        {
          address: '0xE1D075E79d17fBE745f575634Fb055c62c39CaF4',
          name: 'zLINK',
          symbol: 'zLINK',
          assetBase: 'LINK',
          decimals: 18,
          resourceId: '0x0000000000000000000000E1D075E79d17fBE745f575634Fb055c62c39CaF403',
        },
        {
          address: '0xc69CF0e0d00adbF1ab447340C31E39fcf9Ef6cb5',
          name: 'zAAVE',
          symbol: 'zAAVE',
          assetBase: 'AAVE',
          decimals: 18,
          resourceId: '0x0000000000000000000000c69CF0e0d00adbF1ab447340C31E39fcf9Ef6cb503',
        },
        {
          address: '0xA6b4a72a6f8116dab486fB88192450CF3ed4150C',
          name: 'zUNI',
          symbol: 'zUNI',
          assetBase: 'UNI',
          decimals: 18,
          resourceId: '0x0000000000000000000000A6b4a72a6f8116dab486fB88192450CF3ed4150C03',
        },
        {
          address: '0x2D6d5bc58adEDa28f62B0aBc3f53F5EAef497FCc',
          name: 'zSUSHI',
          symbol: 'zSUSHI',
          assetBase: 'SUSHI',
          decimals: 18,
          resourceId: '0x00000000000000000000002D6d5bc58adEDa28f62B0aBc3f53F5EAef497FCc03',
        },
        {
          address: '0xD83FEaB895bDebF9D3E1BE50b7d4d81cf4a0211c',
          name: 'z1INCH',
          symbol: 'z1INCH',
          assetBase: '1INCH',
          decimals: 18,
          resourceId: '0x0000000000000000000000D83FEaB895bDebF9D3E1BE50b7d4d81cf4a0211c03',
        },
        {
          address: '0xaaa777E372788F498462B7ed0fAaad7BA264586D',
          name: 'zYFI',
          symbol: 'zYFI',
          assetBase: 'YFI',
          decimals: 18,
          resourceId: '0x0000000000000000000000aaa777E372788F498462B7ed0fAaad7BA264586D03',
        },
        {
          address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
          name: 'BUSD',
          symbol: 'BUSD',
          assetBase: 'BUSD',
          decimals: 18,
          resourceId: '0x0000000000000000000000aaa777E372788F498462B7ed0fAaad7BA264586D03'
        }
      ]
    }
  ]

  // rinkeby - FUJI
  // chains: [
  //   {
  //     chainId: 0,
  //     networkId: 4,
  //     name: "Ethereum",
  //     bridgeAddress: "0x06E4d0FCd55eacb617dFCd0C5e75D8b005894bD2",
  //     erc20HandlerAddress: "0x754977d76601b473474Ba8FBac0Fa2A20Aa84694",
  //     rpcUrl: "https://rinkeby.infura.io/v3/45174a29359d4b07ade01676259bc47a",
  //     type: "Ethereum",
  //     blockExplorer: "https://ropsten.etherscan.io/tx",
  //     nativeTokenSymbol: "ETH",
  //     tokens: [
  //       {
  //         address: "0x6Cfe8eA9cb32dcf1Cd7188fA68366c099a8FfC7E",
  //         name: "wETH",
  //         symbol: "wETH",
  //         assetBase: 'ETH',
  //         decimals: 18,
  //         resourceId:
  //           "0x00000000000000000000006Cfe8eA9cb32dcf1Cd7188fA68366c099a8FfC7E00",
  //       },
  //       {
  //         address: "0x86D646e76806DCD652a5aFA7AaA20D428B76A356",
  //         name: "USDT",
  //         symbol: "USDT",
  //         assetBase: 'USDT',
  //         decimals: 18,
  //         resourceId:
  //           "0x000000000000000000000086D646e76806DCD652a5aFA7AaA20D428B76A35600",
  //       },
  //       {
  //         address: "0xA49992e58b3242852DE6D6c8c5B01e3f16Ec1c0a",
  //         name: "wBTC",
  //         symbol: "wBTC",
  //         assetBase: 'wBTC',
  //         decimals: 18,
  //         resourceId:
  //           "0x0000000000000000000000A49992e58b3242852DE6D6c8c5B01e3f16Ec1c0a00",
  //       },
  //       {
  //         address: "0x790Bdb1d44EcE3e6b45F3D4307C08e4636365D24",
  //         name: "wUSDC",
  //         symbol: "wUSDC",
  //         assetBase: 'wUSDC',
  //         decimals: 18,
  //         resourceId:
  //           "0x0000000000000000000000790Bdb1d44EcE3e6b45F3D4307C08e4636365D2400",
  //       },
  //     ],
  //   },
  //   {
  //     chainId: 1,
  //     networkId: 43113,
  //     name: "Avalanche",
  //     bridgeAddress: "0xeef5d5C87cDD5F1c2ec89AC6c7B86EeB76299603",
  //     erc20HandlerAddress: "0x267d83dD863cbc4E7926CbF776E392a937C65533",
  //     rpcUrl: "https://api.avax-test.network/ext/bc/C/rpc",
  //     type: "Ethereum",
  //     blockExplorer: "https://blockscout.com/etc/kotti/tx",
  //     nativeTokenSymbol: "AVAX",
  //     defaultGasPrice: 470,
  //     tokens: [
  //       {
  //         address: "0xbe113Dc920b8774c3f03195D6b3445F9B7884C2D",
  //         name: "zETH",
  //         symbol: "zETH",
  //         assetBase: 'ETH',
  //         decimals: 18,
  //         resourceId:
  //           "0x0000000000000000000000be113Dc920b8774c3f03195D6b3445F9B7884C2D01",
  //       },
  //       {
  //         address: "0x1569c1edc28F7141Cf5FdE18f27e5E4db6E85a34",
  //         name: "zUSDT",
  //         symbol: "zUSDT",
  //         assetBase: 'USDT',
  //         decimals: 18,
  //         resourceId:
  //           "0x00000000000000000000001569c1edc28F7141Cf5FdE18f27e5E4db6E85a3401",
  //       },
  //       {
  //         address: "0xBdc570Df37814c873C3a9bCF3751E52A36758d2f",
  //         name: "zBTC",
  //         symbol: "zBTC",
  //         assetBase: 'zBTC',
  //         decimals: 18,
  //         resourceId:
  //           "0x0000000000000000000000Bdc570Df37814c873C3a9bCF3751E52A36758d2f01",
  //       },
  //       {
  //         address: "0x961b714a7d2c4B263fcB91b26a5CFd6268b874ec",
  //         name: "zUSDC",
  //         symbol: "zUSDC",
  //         assetBase: 'zUSDC',
  //         decimals: 18,
  //         resourceId:
  //           "0x0000000000000000000000961b714a7d2c4B263fcB91b26a5CFd6268b874ec01",
  //       },
  //     ],
  //   },
  // ],

  // DEVNET
  //   erc20ResourceId:
  //   "0x00000000000000000000000021605f71845f372A9ed84253d2D024B7B10999f4",
  // chains: [
  // {
  //   chainId: 1,
  //   networkId: 5,
  //   name: "Ethereum - A",
  //   bridgeAddress: "0x62877dDCd49aD22f5eDfc6ac108e9a4b5D2bD88B",
  //   erc20HandlerAddress: "0x3167776db165D8eA0f51790CA2bbf44Db5105ADF",
  //   rpcUrl: "http://localhost:8545",
  //   type: "Ethereum",
  //   tokens: [
  //     {
  //       address: "0x21605f71845f372A9ed84253d2D024B7B10999f4",
  //       name: "Test EthA",
  //       symbol: "TESTA",
  //       imageUri: ETHIcon,
  //     },
  //   ],
  // },
  // {
  //   chainId: 2,
  //   networkId: 6,
  //   name: "Ethereum - B",
  //   bridgeAddress: "0x62877dDCd49aD22f5eDfc6ac108e9a4b5D2bD88B",
  //   erc20HandlerAddress: "0x3167776db165D8eA0f51790CA2bbf44Db5105ADF",
  //   rpcUrl: "http://localhost:8546",
  //   type: "Ethereum",
  //   tokens: [
  //     {
  //       address: "0x21605f71845f372A9ed84253d2D024B7B10999f4",
  //       name: "Test EthB",
  //       symbol: "TESTB",
  //       imageUri: ETHIcon,
  //     },
  //   ],
  // },
  // ]
}
