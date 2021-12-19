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
exports.Result = exports.ResultType = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const constant_1 = require("../../shared/constant");
var ResultType;
(function (ResultType) {
    ResultType["USER"] = "USER";
    ResultType["COMPUTER"] = "COMPUTER";
    ResultType["UNDEFINED"] = "UNDEFINED";
})(ResultType = exports.ResultType || (exports.ResultType = {}));
let Result = class Result extends base_entity_1.BaseEntity {
    toDto() {
        return {
            id: this.id,
            value: this.value,
            type: this.type,
            score_away: this.score_away,
            score_home: this.score_home,
        };
    }
    fromDto(dto) {
        this.id = dto.id;
        this.value = dto.value;
        this.type = dto.type;
        this.score_away = dto.score_away;
        this.score_home = dto.score_home;
    }
};
__decorate([
    (0, typeorm_1.Column)('enum', { name: 'value', enum: constant_1.MatchResult, default: constant_1.MatchResult.UNSET }),
    __metadata("design:type", String)
], Result.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', { name: 'type', enum: ResultType, default: ResultType.UNDEFINED }),
    __metadata("design:type", String)
], Result.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'score_home', nullable: true }),
    __metadata("design:type", Number)
], Result.prototype, "score_home", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'score_away', nullable: true }),
    __metadata("design:type", Number)
], Result.prototype, "score_away", void 0);
Result = __decorate([
    (0, typeorm_1.Entity)({ name: 'result' })
], Result);
exports.Result = Result;
//# sourceMappingURL=result.entity.js.map