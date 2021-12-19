"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("../modules/user/user.module");
const database_service_1 = require("./database.service");
const user_entity_1 = require("../modules/user/user.entity");
const EnvironnementJsonFile = require("../environment/env.json");
const bet_module_1 = require("../modules/bet/bet.module");
const team_module_1 = require("../modules/team/team.module");
const match_module_1 = require("../modules/match/match.module");
const team_entity_1 = require("../modules/team/team.entity");
const match_entity_1 = require("../modules/match/match.entity");
const PATH = process.cwd();
let AppModule = class AppModule {
    constructor(dbService) {
        this.dbService = dbService;
        this.init();
    }
    async init() {
        await this.dbService.createInitialUser();
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: EnvironnementJsonFile.DB_TYPE,
                host: EnvironnementJsonFile.DB_HOST,
                port: EnvironnementJsonFile.DB_PORT,
                username: EnvironnementJsonFile.DB_USERNAME,
                database: EnvironnementJsonFile.DB_NAME,
                password: EnvironnementJsonFile.DB_PASSWORD,
                entities: [
                    `${PATH}/entities/**/*.entity{.ts,.js}`, `${PATH}/**/**/*.entity{.ts,.js}`
                ],
                synchronize: true,
                logging: false,
            }),
            user_module_1.UserModule,
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            typeorm_1.TypeOrmModule.forFeature([team_entity_1.Team]),
            typeorm_1.TypeOrmModule.forFeature([match_entity_1.Match]),
            bet_module_1.BetModule,
            team_module_1.TeamModule,
            match_module_1.MatchModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            database_service_1.DatabaseService,
        ],
    }),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map