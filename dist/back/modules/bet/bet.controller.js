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
exports.BetController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
const bet_dto_1 = require("./bet.dto");
const bet_entity_1 = require("./bet.entity");
const result_entity_1 = require("../../entities/result.entity");
const constant_1 = require("../../../shared/constant");
const match_entity_1 = require("../match/match.entity");
const uuid_1 = require("uuid");
let BetController = class BetController {
    constructor(betRepository, userRepository, matchRepository) {
        this.betRepository = betRepository;
        this.userRepository = userRepository;
        this.matchRepository = matchRepository;
    }
    async getAllBets(request) {
        const response = new bet_dto_1.GetBetsResponse();
        try {
            let findOptions;
            if (request && request.id_user)
                findOptions = { where: { id_user: request.id_user } };
            const getResponse = await this.betRepository.find(findOptions);
            response.bets = getResponse ? getResponse.map(x => x.toDto()) : [];
            response.success = true;
        }
        catch (e) {
            response.handleError(e);
        }
        return response;
    }
    async saveBet(betRequest) {
        const response = new bet_dto_1.GetBetResponse();
        try {
            const bet = new bet_entity_1.Bet();
            betRequest.state = bet_entity_1.BetState.IN_PROGRESS;
            betRequest.ref = (0, uuid_1.v4)();
            console.log("🚀 ~ saveBet ~ betRequest.ref", betRequest.ref);
            bet.fromDto(betRequest);
            const betResponse = await this.betRepository.save(bet);
            const userResponse = await this.userRepository.findOne(betRequest.id_user);
            if (userResponse && userResponse.credit > 0) {
                console.log("🚀 ~ saveBet ~ userResponse", userResponse);
                userResponse.credit -= betRequest.mise;
                await this.userRepository.save(userResponse);
            }
            response.bet = betResponse.toDto();
            response.success = true;
        }
        catch (e) {
            response.handleError(e);
        }
        return response;
    }
    async simulateMatch(betId) {
        const response = new bet_dto_1.GetBetAndMatchComputer();
        try {
            const matchsRespone = await this.matchRepository.find({ relations: ['result'] });
            console.log("🚀 ~ simulateMatch ~ matchsRespone", matchsRespone);
            if (matchsRespone && (matchsRespone === null || matchsRespone === void 0 ? void 0 : matchsRespone.length) > 0) {
                const betResponse = await this.betRepository.findOne({
                    where: { 'id': betId, state: bet_entity_1.BetState.IN_PROGRESS },
                    relations: ['matchs_selected', 'matchs_selected.result']
                });
                for (const match of matchsRespone) {
                    const result = new result_entity_1.Result();
                    result.type = result_entity_1.ResultType.COMPUTER;
                    result.score_away = Math.floor(Math.random() * 3);
                    result.score_home = Math.floor(Math.random() * 4);
                    if (result.score_home > result.score_away)
                        result.value = constant_1.MatchResult.HOME;
                    else if (result.score_home === result.score_away)
                        result.value = constant_1.MatchResult.DRAW;
                    else
                        result.value = constant_1.MatchResult.AWAY;
                    match.result = result;
                    const matchRes = await this.matchRepository.save(match);
                    console.log("🚀 ~ simulateMatch ~ matchRes", matchRes);
                }
                const getMatchBetOn = matchsRespone.filter(x => betResponse.matchs_selected.some(y => x.id === y.id_match));
                response.matchs = getMatchBetOn;
                betResponse.result = getMatchBetOn.every(x => betResponse.matchs_selected.every(y => x.result.value === y.result.value)) ? bet_entity_1.BetResult.WIN : bet_entity_1.BetResult.LOST;
                betResponse.state = bet_entity_1.BetState.END;
                const betResponseSave = await this.betRepository.save(betResponse);
                response.bet = betResponseSave.toDto();
                response.success = true;
            }
        }
        catch (e) {
            response.handleError(e);
        }
        return response;
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'get all bets', operationId: 'getBets' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'get all bets', type: bet_dto_1.GetBetsResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bet_dto_1.GetBetRequest]),
    __metadata("design:returntype", Promise)
], BetController.prototype, "getAllBets", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'save bet', operationId: 'saveBet' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'save bet', type: bet_dto_1.GetBetResponse }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bet_dto_1.BetDto]),
    __metadata("design:returntype", Promise)
], BetController.prototype, "saveBet", null);
__decorate([
    (0, common_1.Post)('/simulate/:betId'),
    (0, swagger_1.ApiOperation)({ summary: 'simulate match', operationId: 'simulateMatch' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'simulate match', type: bet_dto_1.GetBetAndMatchComputer }),
    __param(0, (0, common_1.Param)('betId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BetController.prototype, "simulateMatch", null);
BetController = __decorate([
    (0, swagger_1.ApiTags)('bet'),
    (0, common_1.Controller)('bet'),
    __param(0, (0, typeorm_1.InjectRepository)(bet_entity_1.Bet)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(match_entity_1.Match)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], BetController);
exports.BetController = BetController;
//# sourceMappingURL=bet.controller.js.map