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
exports.DatabaseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../modules/user/user.entity");
const bcrypt = require("bcrypt");
const match_entity_1 = require("../modules/match/match.entity");
const team_entity_1 = require("../modules/team/team.entity");
let DatabaseService = class DatabaseService {
    constructor(userRepository, matchRepository, teamRepository) {
        this.userRepository = userRepository;
        this.matchRepository = matchRepository;
        this.teamRepository = teamRepository;
    }
    async createInitialUser() {
        await this.createUser({ email: 'test@test.com', password: 'test', credit: 10000 });
        await this.createInitialTeams();
        await this.createInitialMatch();
    }
    async createUser(user) {
        const getUserResponse = await this.userRepository.findOne({ where: { email: user.email } });
        if (!getUserResponse) {
            console.log('create user...');
            user.password = await bcrypt.hash(user.password, 10);
            await this.userRepository.save(user);
            console.log('create user success');
        }
    }
    async createInitialMatch() {
        var _a, _b, _c, _d;
        const teams = await this.teamRepository.find();
        if (teams.length) {
            for (let i = 0; i < teams.length; i += 2) {
                const team_home = (_a = teams[i]) === null || _a === void 0 ? void 0 : _a.toDto();
                const team_away = (_b = teams[i + 1]) === null || _b === void 0 ? void 0 : _b.toDto();
                if (!team_away || !team_home)
                    break;
                const matchList = [
                    {
                        id_team_away: team_away.id,
                        id_team_home: team_home.id,
                        quote_away: Math.floor(Math.random() * (3.9 - 1.8 + 1)) + 1.8,
                        quote_null: Math.floor(Math.random() * (1.9 - 1.1 + 1)) + 1.1,
                        quote_home: Math.floor(Math.random() * (1.9 - 1.1 + 1)) + 1.1,
                        team_home: team_home,
                        team_away: team_away,
                    }
                ];
                for (const match of matchList) {
                    const getMatch = await this.matchRepository.findOne({ where: { id_team_home: match.id_team_home } });
                    if (getMatch)
                        continue;
                    console.log(`add match : ${(_c = match.team_home) === null || _c === void 0 ? void 0 : _c.label} VS ${(_d = match.team_away) === null || _d === void 0 ? void 0 : _d.label}`);
                    await this.matchRepository.save(match);
                }
            }
        }
    }
    async createInitialTeams() {
        const teams = [
            {
                label: 'Olympique de Marseille',
                logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/KfBX1kHNj26r9NxpqNaTkA_96x96.png',
                sigle: 'OM'
            },
            {
                label: 'Olympique Lyonnais',
                logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/SrKK55dUkCxe4mJsyshfCg_96x96.png',
                sigle: 'OL'
            },
            {
                label: 'Paris St-Germain',
                logo: 'https://i1.wp.com/i.imgur.com/v3w1LrB.png?resize=256%2C256&ssl=1',
                sigle: 'PSG',
            },
            {
                label: 'Real Madrid',
                logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_96x96.png',
                sigle: 'R. Madrid'
            },
            {
                label: 'Fc Barcelona',
                logo: 'https://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/FC-Barcelona-icon.png',
                sigle: 'FCB'
            },
            {
                label: 'Bayern Munich FC',
                logo: 'https://en.fodb.net/img/club/Germany/100/Bayern-Munich.png',
                sigle: 'Bay FC'
            },
            {
                label: 'Manchester city',
                logo: 'https://i.pinimg.com/originals/64/57/6c/64576cec097efaf87058b26cfb842e1b.png',
                sigle: 'Man City'
            },
            {
                label: 'Manchester utd',
                logo: 'https://companiesmarketcap.com/img/company-logos/256/MANU.png',
                sigle: 'Man Utd'
            },
            {
                label: 'Dortmund FC',
                logo: 'https://aux.iconspalace.com/uploads/borussia-dortmund-logo-icon-256.png',
                sigle: 'Dort. FC'
            },
            {
                label: 'Chelsea FC',
                logo: 'https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Chelsea-FC-icon.png',
                sigle: 'Chel. FC'
            },
            {
                label: 'Arsenal FC',
                logo: 'https://idreamleaguesoccerkits.com/wp-content/uploads/2018/01/Arsenal-Logo-URL-512x512.png',
                sigle: 'Ars. FC'
            },
            {
                label: 'Juventus',
                logo: 'https://aux.iconspalace.com/uploads/juventus-logo-icon-256.png',
                sigle: 'Juv'
            }
        ];
        for (const team of teams) {
            const getTeam = await this.teamRepository.findOne({ where: { label: team.label } });
            if (getTeam)
                continue;
            console.log(`add team : ${team.label}`);
            await this.teamRepository.save(team);
        }
    }
};
DatabaseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(match_entity_1.Match)),
    __param(2, (0, typeorm_1.InjectRepository)(team_entity_1.Team)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], DatabaseService);
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=database.service.js.map