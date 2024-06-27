import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { Book } from './dist/book/data/book.dto';
import { Book } from './book/data/book.dto';
import { BookModule } from './book/book.module';
import { BookController } from './book/book.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [BookModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}



// import { Module } from '@nestjs/common';
// import { BookModule } from './book/book.module';

// @Module({
//   imports: [BookModule],
// })
// export class AppModule {}

