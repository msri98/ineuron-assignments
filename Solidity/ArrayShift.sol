// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract ArrayShift {

    uint[] public arr;

    constructor(uint[] memory _arr) {
        arr = _arr;
    }

    // [1, 2, 3] --> remove[1] --> [1, 3, 3] --> [1, 3]
    // [1, 2, 3, 4, 5, 6] --> remove[2] --> [1, 2, 4, 5, 6, 6] --> [1, 2, 4, 5, 6]
    // [1] --> remove[0] --> [1] --> []

    function remove(uint index) public {

        require(index < arr.length - 1 , "Index out of bound");
        for(uint i = index ; i < arr.length - 1; i++) {
            arr[i] = arr[i+1];
        }
        arr.pop;
    } 
}
