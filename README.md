![License: GPL](https://img.shields.io/badge/license-GPLv2-blue)![Version Badge](https://img.shields.io/badge/version-0.0.1-lightgrey.svg)
# Hardhat Template

## Install

`yarn`

## Get start

1. create `.env` file  and set your mnemonic as below

   `MNEMONIC="your mnemonic"`

2. compile contracts, it will generate contract artifacts also typechains

   `yarn build`

3. test contracts

   `yarn test`

4. deploy contracts, `network name` is configured in your [hardhat.config.ts](https://github.com/Alexandas/HardhatTemplate/blob/master/hardhat.config.ts#L48), once contracts are deployed, hardhat will generate deployments files

   `npx hardhat --network {{network name}} deploy`

5. verify contracts

   `npx hardhat --network {{network name}} verify {contract address}`

---

Once the rpc url is unavailable, check it [here](https://chainlist.org/)