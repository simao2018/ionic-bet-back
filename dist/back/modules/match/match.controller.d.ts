import { Repository } from "typeorm";
import { GenericResponse } from "../generic/genericResponse";
import { MatchSelected } from "./match-selected.entity";
import { GetMatchList, MatchSelectedDto } from "./match.dto";
import { Match } from "./match.entity";
export declare class MatchController {
    private matchRepository;
    private matchSelectedRepository;
    constructor(matchRepository: Repository<Match>, matchSelectedRepository: Repository<MatchSelected>);
    getMatchs(): Promise<GetMatchList>;
    saveMatchSelected(matchSelected: MatchSelectedDto): Promise<GenericResponse>;
}
