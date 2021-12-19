import { GenericResponse } from "../generic/genericResponse";
import { MatchDto, MatchSelectedDto } from "../match/match.dto";
import { UserDto } from "../user/user.dto";
import { BetResult, BetState } from "./bet.entity";
export declare class BetDto {
    id?: string;
    id_user?: string;
    ref?: string;
    state?: BetState;
    result?: BetResult;
    mise: number;
    quote_total?: number;
    gain: number;
    user: UserDto;
    matchsSelected: MatchSelectedDto[];
}
export declare class GetBetResponse extends GenericResponse {
    bet: BetDto;
}
export declare class GetBetsResponse extends GenericResponse {
    bets: BetDto[];
}
export declare class GetBetAndMatchComputer extends GenericResponse {
    bet?: BetDto;
    matchs?: MatchDto[];
}
export declare class GetBetRequest {
    id_user: string;
}
