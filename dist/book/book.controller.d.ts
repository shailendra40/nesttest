import { BookService } from './book.service';
import { Book } from './data/book.dto';
export declare class BookController {
    private bookService;
    constructor(bookService: BookService);
    getAllBooks(): Book[];
    updateBook(book: Book): string;
    deleteBook(bookId: string): string;
    addBook(book: Book): string;
    findBookById(params: any): string;
}
