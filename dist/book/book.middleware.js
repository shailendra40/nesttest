"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookMiddleware = void 0;
const common_1 = require("@nestjs/common");
let BookMiddleware = class BookMiddleware {
    use(req, res, next) {
        let protocol = req.protocol;
        let host = req.get('host');
        let originalUrl = req.originalUrl;
        let method = req.method;
        let date = new Date().toDateString();
        console.log(protocol + '://' + host + originalUrl + ' ' + method + ' ' + date);
        next();
    }
};
exports.BookMiddleware = BookMiddleware;
exports.BookMiddleware = BookMiddleware = __decorate([
    (0, common_1.Injectable)()
], BookMiddleware);
//# sourceMappingURL=book.middleware.js.map