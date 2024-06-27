"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
function globalMiddlewareOne(req, res, next) {
    console.log("This is a global middleware function 1");
    next();
}
function globalMiddleWareTwo(req, res, next) {
    console.log("This is a global middleware function 2");
    next();
}
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(globalMiddlewareOne);
    app.use(globalMiddleWareTwo);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map