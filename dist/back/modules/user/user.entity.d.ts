import { BaseEntity } from "../../entities/base.entity";
import { Bet } from "../bet/bet.entity";
import { UserDto } from "./user.dto";
export declare class User extends BaseEntity {
    email: string;
    password: string;
    credit: number;
    bets: Bet[];
    toDto(): UserDto;
    fromDto(dto: UserDto): void;
}
