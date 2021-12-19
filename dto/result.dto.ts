import { ApiPropertyOptional } from "@nestjs/swagger";
import { ResultType } from "../entities/result.entity";
import { MatchResult } from "../shared/constant";

export class ResultDto {
    @ApiPropertyOptional()
    id?: string;

    @ApiPropertyOptional({ enum: MatchResult })
    value: MatchResult;

    @ApiPropertyOptional({ enum: ResultType })
    type: ResultType;

    @ApiPropertyOptional()
    score_home?: number;

    @ApiPropertyOptional()
    score_away?: number;
}


