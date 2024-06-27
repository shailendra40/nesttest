import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './data/book.dto';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  //find all books
  @Get('/findAll')
  getAllBooks(): Book[] {
    return this.bookService.findAllBooks();
  }

  //update book
  @Put('/update')
  updateBook(@Body() book: Book): string {
    return this.bookService.updateBookService(book);
  }

  //delete book
  @Delete('/delete/:id')
  deleteBook(@Param('id') bookId: string): string {
    return this.bookService.deleteBookService(bookId);
  }

  //add book
  @Post('/add')
  addBook(@Body() book: Book): string {
    return this.bookService.addBookService(book);
  }

  @Get('/findBookById:bookId')
  findBookById(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.bookId} `;
  }

}






// import { Body, Controller, Delete, Get, Param, Put, Post } from '@nestjs/common';
// import { BookService } from './book.service';
// import { Book } from './data/book.dto';

// @Controller('book')
// export class BookController {
//   constructor(private bookService: BookService) {}

//   @Get()
//   getAllBooks(): Book[] {
//     return this.bookService.findAllBooks();
//   }

//   @Get(':id')
//   getBookById(@Param('id') id: string): Book {
//     return this.bookService.findBookById(id);
//   }

//   @Post()
//   addBook(@Body() book: Book): string {
//     return this.bookService.addBookService(book);
//   }

//   @Put(':id')
//   updateBook(@Param('id') id: string, @Body() book: Book): string {
//     book.id = id;
//     return this.bookService.updateBookService(book);
//   }

//   @Delete(':id')
//   deleteBook(@Param('id') bookId: string): string {
//     return this.bookService.deleteBookService(bookId);
//   }
// }
