//SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

contract structure{
    struct Book{
        string title;
        string author;
        uint bookID;
        uint price;
    }

// define  a struct - name of the struct variable to represent the struct

    Book book;

    function setBook() public {
        book = Book("Blockchain for beginners Blockchain is the future.Blockchain is a great new technology","Ineuron",4,1000);
    // Total Gas: 388592 ; Transaction Cost: 337906; Execution Cost:  337906
    }
    
    function getTitle() public view returns(string memory) {
        return book.title;
        // Execution Cost: 24599
    }
    
    function getAuthor() public view returns(string memory) {
        return book.author;
        // Execution Cost: 24533
    }

    function getBookID() public view returns(uint) {
        return book.bookID;
        // Execution Cost: 23551
    }

    function getPrice() public view returns(uint) {
        return book.price;
       // Execution Cost: 23485
    }
}


