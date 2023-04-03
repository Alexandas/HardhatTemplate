import '@nomiclabs/hardhat-ethers'
import 'hardhat-deploy'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { MockToken__factory } from '../types'

export const MockToken = async (env: HardhatRuntimeEnvironment) => {
	const deployment = await env.deployments.get('MockToken')
	const signers = await env.ethers.getSigners()
	return MockToken__factory.connect(deployment.address, signers[0])
}