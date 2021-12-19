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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const genericResponse_1 = require("../generic/genericResponse");
const match_selected_entity_1 = require("./match-selected.entity");
const match_dto_1 = require("./match.dto");
const match_entity_1 = require("./match.entity");
let MatchController = class MatchController {
    constructor(matchRepository, matchSelectedRepository) {
        this.matchRepository = matchRepository;
        this.matchSelectedRepository = matchSelectedRepository;
    }
    async getMatchs() {
        const response = new match_dto_1.GetMatchList();
        try {
            const getMatchResponse = await this.matchRepository.find({ relations: ['team_home', 'team_away'] });
            response.matchs = getMatchResponse ? getMatchResponse : [];
            response.success = true;
        }
        catch (e) {
            response.handleError(e);
        }
        return response;
    }
    async saveMatchSelected(matchSelected) {
        console.log("🚀 ~ saveMatchSelected ~ matchSelected", matchSelected);
        const response = new genericResponse_1.GenericResponse();
        try {
            await this.matchSelectedRepository.save(matchSelected);
            response.success = true;
        }
        catch (e) {
            response.handleError(e);
        }
        return response;
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'get all match', operationId: 'getMatchs' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'get all match', type: match_dto_1.GetMatchList }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "getMatchs", null);
__decorate([
    (0, common_1.Post)('saveMatchSelected'),
    (0, swagger_1.ApiOperation)({ summary: 'add match selected', operationId: 'saveMatchSelected' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'add match selected', type: genericResponse_1.GenericResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [match_dto_1.MatchSelectedDto]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "saveMatchSelected", null);
MatchController = __decorate([
    (0, swagger_1.ApiTags)('match'),
    (0, common_1.Controller)('match'),
    __param(0, (0, typeorm_1.InjectRepository)(match_entity_1.Match)),
    __param(1, (0, typeorm_1.InjectRepository)(match_selected_entity_1.MatchSelected)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], MatchController);
exports.MatchController = MatchController;
//# sourceMappingURL=match.controller.js.map