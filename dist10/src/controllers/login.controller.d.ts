import { UserRepository } from "../repositories/user.repository";
import { User } from "../models";
export declare class LoginController {
    protected userRepo: UserRepository;
    constructor(userRepo: UserRepository);
    verifyToken(jwt: string): string | object;
    loginUser(user: User): Promise<{
        token: string;
    }>;
}
