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
exports.MatchSelected = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../entities/base.entity");
const result_entity_1 = require("../../entities/result.entity");
const bet_entity_1 = require("../bet/bet.entity");
const match_entity_1 = require("./match.entity");
let MatchSelected = class MatchSelected extends base_entity_1.BaseEntity {
    toDto() {
        return {
            id: this.id,
            id_match: this.id_match,
            id_result: this.id_result,
            match: this.match ? this.match.toDto() : null,
            bet: this.bet ? this.bet.toDto() : null,
            result: this.result ? this.result.toDto() : null,
            id_bet: this.id_bet,
        };
    }
    fromDto(dto) {
        console.log("🚀 ~ fromDto ~ dto - match_selected", dto);
        this.id = dto.id;
        this.id_match = dto.id_match;
        this.id_result = dto.id_result;
        this.id_bet = dto.id_bet;
        if (dto.result) {
            const result = new result_entity_1.Result();
            result.fromDto(dto.result);
            this.result = result;
        }
    }
};
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'id_match', nullable: false }),
    __metadata("design:type", String)
], MatchSelected.prototype, "id_match", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'id_bet', nullable: false, length: 36 }),
    __metadata("design:type", String)
], MatchSelected.prototype, "id_bet", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => match_entity_1.Match),
    (0, typeorm_1.JoinColumn)({ name: 'id_match' }),
    __metadata("design:type", match_entity_1.Match)
], MatchSelected.prototype, "match", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => bet_entity_1.Bet, bet => bet.matchs_selected, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_bet' }),
    __metadata("design:type", bet_entity_1.Bet)
], MatchSelected.prototype, "bet", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'id_result', length: 36, nullable: true }),
    __metadata("design:type", String)
], MatchSelected.prototype, "id_result", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => result_entity_1.Result, { cascade: true, onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_result' }),
    __metadata("design:type", result_entity_1.Result)
], MatchSelected.prototype, "result", void 0);
MatchSelected = __decorate([
    (0, typeorm_1.Entity)({ name: 'match_selected' })
], MatchSelected);
exports.MatchSelected = MatchSelected;
//# sourceMappingURL=match-selected.entity.js.map