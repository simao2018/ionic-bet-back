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
exports.Bet = exports.BetResult = exports.BetState = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../entities/base.entity");
const match_selected_entity_1 = require("../match/match-selected.entity");
const user_entity_1 = require("../user/user.entity");
var BetState;
(function (BetState) {
    BetState["IN_PROGRESS"] = "in_progress";
    BetState["END"] = "end";
    BetState["NOT_INIT"] = "not_init";
})(BetState = exports.BetState || (exports.BetState = {}));
var BetResult;
(function (BetResult) {
    BetResult["WIN"] = "win";
    BetResult["LOST"] = "lost";
    BetResult["UNINITIALIZED"] = "uninitialized";
})(BetResult = exports.BetResult || (exports.BetResult = {}));
let Bet = class Bet extends base_entity_1.BaseEntity {
    toDto() {
        return {
            id: this.id,
            state: this.state,
            result: this.result,
            mise: this.mise,
            quote_total: this.quote_total,
            gain: this.gain,
            id_user: this.id_user,
            user: this.user ? this.user.toDto() : null,
            ref: this.ref,
            matchsSelected: this.matchs_selected ? this.matchs_selected.map(x => x.toDto()) : []
        };
    }
    fromDto(dto) {
        this.id = dto.id;
        this.state = dto.state;
        this.result = dto.result;
        this.mise = dto.mise;
        this.quote_total = dto.quote_total;
        this.gain = dto.gain;
        this.id_user = dto.id_user;
        this.ref = dto.ref;
        if (dto.matchsSelected) {
            this.matchs_selected = [];
            for (const item of dto.matchsSelected) {
                const match_selected = new match_selected_entity_1.MatchSelected();
                match_selected.fromDto(item);
                this.matchs_selected.push(match_selected);
            }
        }
    }
};
__decorate([
    (0, typeorm_1.OneToMany)(() => match_selected_entity_1.MatchSelected, match_selected => match_selected.bet, { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    __metadata("design:type", Array)
], Bet.prototype, "matchs_selected", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.bets),
    (0, typeorm_1.JoinColumn)({ name: 'id_user' }),
    __metadata("design:type", user_entity_1.User)
], Bet.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'id_user', length: 36 }),
    __metadata("design:type", String)
], Bet.prototype, "id_user", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ref', nullable: true }),
    __metadata("design:type", String)
], Bet.prototype, "ref", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', { name: 'state', enum: BetState, default: BetState.NOT_INIT }),
    __metadata("design:type", String)
], Bet.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', { name: 'result', enum: BetResult, default: BetResult.UNINITIALIZED }),
    __metadata("design:type", String)
], Bet.prototype, "result", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'mise', nullable: false }),
    __metadata("design:type", Number)
], Bet.prototype, "mise", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'quote_total', nullable: false }),
    __metadata("design:type", Number)
], Bet.prototype, "quote_total", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'gain', nullable: false }),
    __metadata("design:type", Number)
], Bet.prototype, "gain", void 0);
Bet = __decorate([
    (0, typeorm_1.Entity)({ name: 'bet' })
], Bet);
exports.Bet = Bet;
//# sourceMappingURL=bet.entity.js.map