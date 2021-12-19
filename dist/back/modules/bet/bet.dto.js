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
exports.GetBetRequest = exports.GetBetAndMatchComputer = exports.GetBetsResponse = exports.GetBetResponse = exports.BetDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const genericResponse_1 = require("../generic/genericResponse");
const match_dto_1 = require("../match/match.dto");
const user_dto_1 = require("../user/user.dto");
const bet_entity_1 = require("./bet.entity");
class BetDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], BetDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], BetDto.prototype, "id_user", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], BetDto.prototype, "ref", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: bet_entity_1.BetState }),
    __metadata("design:type", String)
], BetDto.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: bet_entity_1.BetResult }),
    __metadata("design:type", String)
], BetDto.prototype, "result", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], BetDto.prototype, "mise", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], BetDto.prototype, "quote_total", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], BetDto.prototype, "gain", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => user_dto_1.UserDto }),
    __metadata("design:type", user_dto_1.UserDto)
], BetDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => match_dto_1.MatchSelectedDto, isArray: true }),
    __metadata("design:type", Array)
], BetDto.prototype, "matchsSelected", void 0);
exports.BetDto = BetDto;
class GetBetResponse extends genericResponse_1.GenericResponse {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => BetDto, isArray: false }),
    __metadata("design:type", BetDto)
], GetBetResponse.prototype, "bet", void 0);
exports.GetBetResponse = GetBetResponse;
class GetBetsResponse extends genericResponse_1.GenericResponse {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => BetDto, isArray: true }),
    __metadata("design:type", Array)
], GetBetsResponse.prototype, "bets", void 0);
exports.GetBetsResponse = GetBetsResponse;
class GetBetAndMatchComputer extends genericResponse_1.GenericResponse {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: BetDto }),
    __metadata("design:type", BetDto)
], GetBetAndMatchComputer.prototype, "bet", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: match_dto_1.MatchDto, isArray: true }),
    __metadata("design:type", Array)
], GetBetAndMatchComputer.prototype, "matchs", void 0);
exports.GetBetAndMatchComputer = GetBetAndMatchComputer;
class GetBetRequest {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'get bet by id_user' }),
    __metadata("design:type", String)
], GetBetRequest.prototype, "id_user", void 0);
exports.GetBetRequest = GetBetRequest;
//# sourceMappingURL=bet.dto.js.map