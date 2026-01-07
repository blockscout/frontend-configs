// IS_TESTNET=true node configs/cross-chain/avalanche.js <-- for testnet
// node configs/cross-chain/avalanche.js <-- for mainnet

import path from 'path'
import fs from 'fs'
const dirname = path.dirname(new URL(import.meta.url).pathname)
const IS_TESTNET = process.env.IS_TESTNET === 'true'

// export interface ExternalChain {
//     id: string;
//     name: string;
//     logo: string | undefined;
//     explorer_url: string;
// }

async function getNonSupportedChains() {
  const response = await fetch(
    IS_TESTNET
      ? 'https://api.avascan.info/v2/network/testnet/evm/all/blockchains'
      : 'https://api.avascan.info/v2/network/mainnet/evm/all/blockchains'
  )
  const data = await response.json()
  return data.items.map((chain) => ({
    id: chain.chainId,
    name: chain.name,
    logo: chain.logoUrls?.['64'] ?? chain.logo,
    explorer_url: IS_TESTNET
      ? `https://testnet.avascan.info/blockchain/${chain.avascanId}`
      : `https://avascan.info/blockchain/${chain.avascanId}`,
  }))
}

async function getSupportedChains() {
  const CHAIN_LIST = IS_TESTNET ? [] : ['https://numine.blockscout.com']
  const result = await Promise.all(
    CHAIN_LIST.map(async (chain) => {
      const response = await fetch(`${chain}/node-api/config`)
      const { envs } = await response.json()
      return {
        id: envs.NEXT_PUBLIC_NETWORK_ID,
        name: envs.NEXT_PUBLIC_NETWORK_NAME,
        // TODO: Get the logo url from Chainscout
        logo: envs.NEXT_PUBLIC_NETWORK_ICON,
        explorer_url: chain,
      }
    })
  )
  return result
}

async function main() {
  const supportedChains = await getSupportedChains()
  const nonSupportedChains = await getNonSupportedChains()

  const json = JSON.stringify(
    [...supportedChains, ...nonSupportedChains],
    null,
    2
  )
  const filePath = path.join(
    dirname,
    IS_TESTNET ? 'avalanche-testnet.json' : 'avalanche-mainnet.json'
  )
  fs.writeFileSync(filePath, json)
}

main()
