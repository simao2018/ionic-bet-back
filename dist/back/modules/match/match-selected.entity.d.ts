import { BaseEntity } from "../../entities/base.entity";
import { Result } from "../../entities/result.entity";
import { Bet } from "../bet/bet.entity";
import { MatchSelectedDto } from "./match.dto";
import { Match } from "./match.entity";
export declare class MatchSelected extends BaseEntity {
    id_match: string;
    id_bet: string;
    match: Match;
    bet: Bet;
    id_result: string;
    result: Result;
    toDto(): MatchSelectedDto;
    fromDto(dto: MatchSelectedDto): void;
}
