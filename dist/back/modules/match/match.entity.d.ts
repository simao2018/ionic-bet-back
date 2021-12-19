import { BaseEntity } from "../../entities/base.entity";
import { Result } from "../../entities/result.entity";
import { Team } from "../team/team.entity";
import { MatchDto } from "./match.dto";
export declare class Match extends BaseEntity {
    quote_home: number;
    quote_away: number;
    quote_null: number;
    id_team_home: string;
    team_home?: Team;
    id_team_away?: string;
    team_away: Team;
    id_result?: string;
    result?: Result;
    toDto(): MatchDto;
    fromDto(dto: MatchDto): void;
}
