import { BetDto } from "../bet/bet.dto";
import { GenericResponse } from "../generic/genericResponse";
export declare class UserDto {
    id?: string;
    email?: string;
    password?: string;
    credit?: number;
    bets?: BetDto[];
    access_token?: string;
}
export declare class GetUserResponse extends GenericResponse {
    user?: UserDto;
}
export declare class GetLoginRequest {
    email?: string;
    password?: string;
}
