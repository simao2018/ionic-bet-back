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
exports.GetMatch = exports.GetMatchList = exports.MatchSelectedDto = exports.MatchDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const result_dto_1 = require("../../dto/result.dto");
const bet_dto_1 = require("../bet/bet.dto");
const genericResponse_1 = require("../generic/genericResponse");
const team_dto_1 = require("../team/team.dto");
class MatchDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], MatchDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], MatchDto.prototype, "id_team_home", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], MatchDto.prototype, "id_team_away", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], MatchDto.prototype, "quote_home", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], MatchDto.prototype, "quote_away", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], MatchDto.prototype, "quote_null", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => result_dto_1.ResultDto, isArray: false }),
    __metadata("design:type", result_dto_1.ResultDto)
], MatchDto.prototype, "result", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], MatchDto.prototype, "id_result", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => team_dto_1.TeamDto, isArray: false }),
    __metadata("design:type", team_dto_1.TeamDto)
], MatchDto.prototype, "team_home", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => team_dto_1.TeamDto, isArray: false }),
    __metadata("design:type", team_dto_1.TeamDto)
], MatchDto.prototype, "team_away", void 0);
exports.MatchDto = MatchDto;
class MatchSelectedDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], MatchSelectedDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], MatchSelectedDto.prototype, "id_match", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => MatchDto, isArray: false }),
    __metadata("design:type", MatchDto)
], MatchSelectedDto.prototype, "match", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => bet_dto_1.BetDto, isArray: false }),
    __metadata("design:type", bet_dto_1.BetDto)
], MatchSelectedDto.prototype, "bet", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => result_dto_1.ResultDto, isArray: false }),
    __metadata("design:type", result_dto_1.ResultDto)
], MatchSelectedDto.prototype, "result", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], MatchSelectedDto.prototype, "id_result", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], MatchSelectedDto.prototype, "id_bet", void 0);
exports.MatchSelectedDto = MatchSelectedDto;
class GetMatchList extends genericResponse_1.GenericResponse {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => MatchDto, isArray: true }),
    __metadata("design:type", Array)
], GetMatchList.prototype, "matchs", void 0);
exports.GetMatchList = GetMatchList;
class GetMatch extends genericResponse_1.GenericResponse {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => MatchDto, isArray: false }),
    __metadata("design:type", MatchDto)
], GetMatch.prototype, "match", void 0);
exports.GetMatch = GetMatch;
//# sourceMappingURL=match.dto.js.map