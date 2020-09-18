import { UserRole } from "../models/user-role.enum";
export declare class UserDto {
    name: String;
    lastName: String;
    userName: String;
    phone: String;
    facebook: String;
    twitter: String;
    role?: UserRole;
}
