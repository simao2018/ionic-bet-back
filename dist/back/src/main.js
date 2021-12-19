"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const core_1 = require("@nestjs/core");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cookieParser());
    app.enableCors({ origin: ['http://localhost:8100'], credentials: true });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Template')
        .setDescription('Template Web API')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const swaggerDoc = swagger_1.SwaggerModule.createDocument(app, config);
    app.use('/api/docs/swagger.json', (req, res) => {
        res.send(swaggerDoc);
    });
    swagger_1.SwaggerModule.setup('swagger', app, null, {
        swaggerUrl: `/api/docs/swagger.json`,
        explorer: true,
        swaggerOptions: {
            docExpansion: 'list',
            filter: true,
            showRequestDuration: true,
        },
    });
    await app.listen(3018);
}
bootstrap();
//# sourceMappingURL=main.js.map