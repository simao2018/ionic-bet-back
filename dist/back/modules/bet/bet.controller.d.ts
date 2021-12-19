import { Repository } from "typeorm";
import { User } from "../user/user.entity";
import { BetDto, GetBetAndMatchComputer, GetBetRequest, GetBetResponse, GetBetsResponse } from "./bet.dto";
import { Bet } from "./bet.entity";
import { Match } from "../match/match.entity";
export declare class BetController {
    private betRepository;
    private userRepository;
    private matchRepository;
    constructor(betRepository: Repository<Bet>, userRepository: Repository<User>, matchRepository: Repository<Match>);
    getAllBets(request: GetBetRequest): Promise<GetBetsResponse>;
    saveBet(betRequest: BetDto): Promise<GetBetResponse>;
    simulateMatch(betId: string): Promise<GetBetAndMatchComputer>;
}
