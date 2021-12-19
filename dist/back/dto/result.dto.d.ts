import { MatchResult } from "../../shared/constant";
import { ResultType } from "../entities/result.entity";
export declare class ResultDto {
    id?: string;
    value: MatchResult;
    type: ResultType;
    score_home?: number;
    score_away?: number;
}
