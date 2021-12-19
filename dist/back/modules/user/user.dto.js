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
exports.GetLoginRequest = exports.GetUserResponse = exports.UserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const bet_dto_1 = require("../bet/bet.dto");
const genericResponse_1 = require("../generic/genericResponse");
class UserDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], UserDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], UserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], UserDto.prototype, "credit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => bet_dto_1.BetDto, isArray: true }),
    __metadata("design:type", Array)
], UserDto.prototype, "bets", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], UserDto.prototype, "access_token", void 0);
exports.UserDto = UserDto;
class GetUserResponse extends genericResponse_1.GenericResponse {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => UserDto }),
    __metadata("design:type", UserDto)
], GetUserResponse.prototype, "user", void 0);
exports.GetUserResponse = GetUserResponse;
class GetLoginRequest {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], GetLoginRequest.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], GetLoginRequest.prototype, "password", void 0);
exports.GetLoginRequest = GetLoginRequest;
//# sourceMappingURL=user.dto.js.map