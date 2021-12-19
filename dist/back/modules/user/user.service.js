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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_dto_1 = require("./user.dto");
const user_entity_1 = require("./user.entity");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let UserService = class UserService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async getUser(id) {
        const userResponse = new user_dto_1.GetUserResponse();
        try {
            const response = await this.userRepository.findOne({ where: { 'id': id } });
            userResponse.success = true;
            if (response) {
                userResponse.user = response.toDto();
            }
        }
        catch (error) {
            console.log(error.message);
            userResponse.handleError(error.message);
        }
        return userResponse;
    }
    async save(user) {
        try {
            await this.userRepository.save(user);
        }
        catch (error) {
            console.log(error);
        }
    }
    async validateUser(request) {
        let response = new user_dto_1.GetUserResponse();
        try {
            if (!(request === null || request === void 0 ? void 0 : request.email) || !request.password)
                throw new Error('no request sended');
            const userResponse = await this.userRepository.findOne({ where: { email: request.email } });
            if (!userResponse)
                throw new common_1.NotFoundException('cet utilisateur n\'existe pas.');
            if (!await bcrypt.compare(request.password, userResponse.password))
                throw new common_1.NotFoundException('password or user not found');
            const payload = {
                id: userResponse.id,
                email: userResponse.email,
                credit: userResponse.credit,
            };
            const jwt = await this.jwtService.signAsync(payload);
            console.log(`🚀 ~ jwt`, jwt);
            response.user = userResponse.toDto();
            response.user.access_token = jwt;
            console.log(`🚀 ~ response`, response);
            response.success = true;
        }
        catch (err) {
            console.log(`🚀 ~ err`, err);
            response.handleError(err.message);
        }
        return response;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map