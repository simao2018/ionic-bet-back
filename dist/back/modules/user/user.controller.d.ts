import { GetLoginRequest, GetUserResponse } from "./user.dto";
import { UserService } from "./user.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    logUser(request: GetLoginRequest): Promise<GetUserResponse>;
}
