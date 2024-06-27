import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
    public books : Book[] = [];
    
    //add book
    addBookService(book : Book) : string{
        //id auto generation
        book.id = uuidv4();
        this.books.push(book);
        return "Book has been successfully added";
    }

    //update book
    updateBookService(book : Book) : string {
        let index = this.books.findIndex((curentBook) =>{
            return curentBook.id === book.id;
        });
    this.books[index] = book;
    return "Book has been successfully updated";
}
    //delete book
    deleteBookService(bookId : string) : string{
        this.books = this.books.filter((book) => {
            return book.id !== bookId;
        });
        return "Book has been successfully deleted";
    }
    // find all books
    findAllBooks() : Book[]{
        return this.books;
    }
    
}


// import { Injectable } from '@nestjs/common';
// import { Book } from './data/book.dto';
// import { v4 as uuidv4 } from 'uuid';

// @Injectable()
// export class BookService {
//   public books: Book[] = [];

//   addBookService(book: Book): string {
//     book.id = uuidv4();
//     this.books.push(book);
//     return 'Book has been successfully added';
//   }

//   updateBookService(book: Book): string {
//     const index = this.books.findIndex((currentBook) => currentBook.id === book.id);
//     if (index !== -1) {
//       this.books[index] = book;
//       return 'Book has been successfully updated';
//     }
//     return 'Book not found';
//   }

//   deleteBookService(bookId: string): string {
//     const originalLength = this.books.length;
//     this.books = this.books.filter((book) => book.id !== bookId);
//     if (this.books.length < originalLength) {
//       return 'Book has been successfully deleted';
//     }
//     return 'Book not found';
//   }

//   findAllBooks(): Book[] {
//     return this.books;
//   }

//   findBookById(id: string): Book {
//     return this.books.find((book) => book.id === id);
//   }
// }
