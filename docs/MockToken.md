# MockToken
> Test Token contract

## Functions
### mint
> mint token for `to` address, can only be called by owner

#### Declaration
```
function mint(address to,uint256 amount) external onlyOwner
```
#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`to` | address | user address
|`amount` | uint256 | token amount