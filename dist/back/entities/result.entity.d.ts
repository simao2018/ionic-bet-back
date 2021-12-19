import { ResultDto } from "../dto/result.dto";
import { BaseEntity } from "./base.entity";
import { MatchResult } from "../../shared/constant";
export declare enum ResultType {
    USER = "USER",
    COMPUTER = "COMPUTER",
    UNDEFINED = "UNDEFINED"
}
export declare class Result extends BaseEntity {
    value: MatchResult;
    type: ResultType;
    score_home: number;
    score_away: number;
    toDto(): ResultDto;
    fromDto(dto: ResultDto): void;
}
