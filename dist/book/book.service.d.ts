import { Book } from "./data/book.dto";
export declare class BookService {
    books: Book[];
    addBookService(book: Book): string;
    updateBookService(book: Book): string;
    deleteBookService(bookId: string): string;
    findAllBooks(): Book[];
}
