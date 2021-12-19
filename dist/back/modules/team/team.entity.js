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
exports.Team = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../entities/base.entity");
let Team = class Team extends base_entity_1.BaseEntity {
    toDto() {
        return {
            id: this.id,
            label: this.label,
            logo: this.logo,
            sigle: this.sigle,
        };
    }
    fromDto(dto) {
        this.id = dto.id;
        this.label = dto.label;
        this.logo = dto.logo;
        this.sigle = dto.sigle;
    }
};
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'label', length: 36, nullable: false }),
    __metadata("design:type", String)
], Team.prototype, "label", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'logo', length: 255, nullable: true }),
    __metadata("design:type", String)
], Team.prototype, "logo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'sigle', length: 15, nullable: true }),
    __metadata("design:type", String)
], Team.prototype, "sigle", void 0);
Team = __decorate([
    (0, typeorm_1.Entity)({ name: 'team' })
], Team);
exports.Team = Team;
//# sourceMappingURL=team.entity.js.map