import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response, } from 'express';

@Injectable()
export class BookMiddleware implements NestMiddleware {

    use(req: Request, res: Response, next: Function) {
        // console.log("This is class based middleware implemented for book module");
        let protocol = req.protocol; // http https
        let host = req.get('host'); // localhost:3000
        let originalUrl = req.originalUrl; // /book/add
        let method = req.method; // GET POST PUT DELETE
        let date = new Date().toDateString();

        console.log(protocol + '://' + host + originalUrl + ' ' + method + ' ' + date);
        next();
    }
}
 