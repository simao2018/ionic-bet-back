import { Repository } from "typeorm";
import { GetLoginRequest, GetUserResponse, UserDto } from "./user.dto";
import { User } from "./user.entity";
import { JwtService } from "@nestjs/jwt";
export declare class UserService {
    private readonly userRepository;
    private jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    getUser(id: string): Promise<GetUserResponse>;
    save(user: UserDto): Promise<void>;
    validateUser(request: GetLoginRequest): Promise<GetUserResponse>;
}
