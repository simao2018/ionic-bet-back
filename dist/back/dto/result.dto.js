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
exports.ResultDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const constant_1 = require("../../shared/constant");
const result_entity_1 = require("../entities/result.entity");
class ResultDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ResultDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: constant_1.MatchResult }),
    __metadata("design:type", String)
], ResultDto.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: result_entity_1.ResultType }),
    __metadata("design:type", String)
], ResultDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], ResultDto.prototype, "score_home", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], ResultDto.prototype, "score_away", void 0);
exports.ResultDto = ResultDto;
//# sourceMappingURL=result.dto.js.map