import { Repository } from "typeorm";
import { User } from "../modules/user/user.entity";
import { Match } from "../modules/match/match.entity";
import { Team } from "../modules/team/team.entity";
export declare class DatabaseService {
    private userRepository;
    private matchRepository;
    private teamRepository;
    constructor(userRepository: Repository<User>, matchRepository: Repository<Match>, teamRepository: Repository<Team>);
    createInitialUser(): Promise<void>;
    private createUser;
    private createInitialMatch;
    private createInitialTeams;
}
