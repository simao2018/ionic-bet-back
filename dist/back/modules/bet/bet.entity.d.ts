import { BaseEntity } from "../../entities/base.entity";
import { MatchSelected } from "../match/match-selected.entity";
import { User } from "../user/user.entity";
import { BetDto } from "./bet.dto";
export declare enum BetState {
    IN_PROGRESS = "in_progress",
    END = "end",
    NOT_INIT = "not_init"
}
export declare enum BetResult {
    WIN = "win",
    LOST = "lost",
    UNINITIALIZED = "uninitialized"
}
export declare class Bet extends BaseEntity {
    matchs_selected: MatchSelected[];
    user: User;
    id_user: string;
    ref: string;
    state: BetState;
    result: BetResult;
    mise: number;
    quote_total: number;
    gain: number;
    toDto(): BetDto;
    fromDto(dto: BetDto): void;
}
