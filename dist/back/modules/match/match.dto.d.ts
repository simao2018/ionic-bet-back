import { ResultDto } from "../../dto/result.dto";
import { BetDto } from "../bet/bet.dto";
import { GenericResponse } from "../generic/genericResponse";
import { TeamDto } from "../team/team.dto";
export declare class MatchDto {
    id?: string;
    id_team_home?: string;
    id_team_away?: string;
    quote_home?: number;
    quote_away?: number;
    quote_null?: number;
    result?: ResultDto;
    id_result?: string;
    team_home?: TeamDto;
    team_away?: TeamDto;
}
export declare class MatchSelectedDto {
    id?: string;
    id_match?: string;
    match?: MatchDto;
    bet: BetDto;
    result?: ResultDto;
    id_result?: string;
    id_bet?: string;
}
export declare class GetMatchList extends GenericResponse {
    matchs: MatchDto[];
}
export declare class GetMatch extends GenericResponse {
    match: MatchDto;
}
