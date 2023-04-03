import '@nomiclabs/hardhat-ethers'
import 'hardhat-deploy'

import { task } from 'hardhat/config'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { MockToken } from './Contracts'
import { ethers } from 'hardhat'

task('MockToken:balanceOf')
	.addParam('addr', 'user address')
	.setAction(async (args: any, env: HardhatRuntimeEnvironment) => {
		const mockToken = await MockToken(env)
		const balance = await mockToken.balanceOf(args.addr)
		console.log('balance:', ethers.utils.parseEther(balance.toString()))
	})