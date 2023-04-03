// SPDX-License-Identifier: GPL-2.0-or-later

pragma solidity >=0.8.0;

import '@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

/// @dev Test Token contract
/// @author Alexandas
contract MockToken is ERC20Burnable, Ownable {
	constructor() ERC20('MockToken', 'Mock') {
		_mint(msg.sender, 1e28);
	}
	/// @dev mint token for `to` address, can only be called by owner
	/// @param to user address
	/// @param amount token amount
	function mint(address to, uint256 amount) external onlyOwner {
		_mint(to, amount);
	}
}
