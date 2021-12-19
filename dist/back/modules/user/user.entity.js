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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../entities/base.entity");
const bet_entity_1 = require("../bet/bet.entity");
let User = class User extends base_entity_1.BaseEntity {
    toDto() {
        return {
            id: this.id,
            email: this.email,
            credit: this.credit,
        };
    }
    fromDto(dto) {
        var _a;
        this.id = dto.id;
        this.email = dto.email;
        this.password = dto.password;
        this.credit = dto.credit;
        if (dto.bets) {
            if (!((_a = this.bets) === null || _a === void 0 ? void 0 : _a.length))
                this.bets = [];
            for (const item of dto.bets) {
                const bet = new bet_entity_1.Bet();
                bet.fromDto(item);
                this.bets.push(bet);
            }
        }
    }
};
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'email', nullable: true, length: 36 }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'password', nullable: true, length: 255 }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'credit', nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "credit", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => bet_entity_1.Bet, bet => bet.user),
    __metadata("design:type", Array)
], User.prototype, "bets", void 0);
User = __decorate([
    (0, typeorm_1.Entity)('user')
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map