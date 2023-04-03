import chai, { expect } from 'chai'
import { Signer } from 'ethers'
import { solidity } from 'ethereum-waffle'
import { ethers } from 'hardhat'
import {
	MockToken,
	MockToken__factory
} from '../types'

chai.use(solidity)

describe('Test ERC20', () => {
	let signers: Signer[]
	let token: MockToken

	beforeEach(async () => {
		signers = await ethers.getSigners()
		token = await new MockToken__factory(signers[0]).deploy()
	})

	it('check balance', async () => {
		const signer = await signers[0].getAddress()
		const balance = await token.balanceOf(signer)
		expect(balance.gte(0), 'no balance')
	})

})
