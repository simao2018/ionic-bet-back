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
exports.Match = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../entities/base.entity");
const result_entity_1 = require("../../entities/result.entity");
const team_entity_1 = require("../team/team.entity");
let Match = class Match extends base_entity_1.BaseEntity {
    toDto() {
        return {
            id: this.id,
            quote_home: this.quote_home,
            quote_away: this.quote_away,
            id_team_home: this.id_team_home,
            id_team_away: this.id_team_away,
            result: this.result ? this.result.toDto() : null,
            id_result: this.id_result,
            team_away: this.team_away ? this.team_away.toDto() : null,
            team_home: this.team_home ? this.team_home.toDto() : null,
        };
    }
    fromDto(dto) {
        this.id = dto.id;
        this.id_result = dto.id_result;
        this.id_team_away = dto.id_team_away;
        this.id_team_home = dto.id_team_home;
        this.quote_away = dto.quote_away;
        this.quote_home = dto.quote_home;
        this.quote_null = dto.quote_null;
    }
};
__decorate([
    (0, typeorm_1.Column)('float', { name: 'quote_home', nullable: false }),
    __metadata("design:type", Number)
], Match.prototype, "quote_home", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'quote_away', nullable: false }),
    __metadata("design:type", Number)
], Match.prototype, "quote_away", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'quote_null', nullable: false }),
    __metadata("design:type", Number)
], Match.prototype, "quote_null", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'id_team_home', nullable: false }),
    __metadata("design:type", String)
], Match.prototype, "id_team_home", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => team_entity_1.Team, { onDelete: 'NO ACTION' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_team_home' }),
    __metadata("design:type", team_entity_1.Team)
], Match.prototype, "team_home", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'id_team_away', nullable: false }),
    __metadata("design:type", String)
], Match.prototype, "id_team_away", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => team_entity_1.Team, { onDelete: 'NO ACTION' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_team_away' }),
    __metadata("design:type", team_entity_1.Team)
], Match.prototype, "team_away", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'id_result', length: 36, nullable: true }),
    __metadata("design:type", String)
], Match.prototype, "id_result", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => result_entity_1.Result, { cascade: true, onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_result' }),
    __metadata("design:type", result_entity_1.Result)
], Match.prototype, "result", void 0);
Match = __decorate([
    (0, typeorm_1.Entity)({ name: 'match' })
], Match);
exports.Match = Match;
//# sourceMappingURL=match.entity.js.map