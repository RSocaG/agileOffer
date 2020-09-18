import { UserRole } from "./user-role.enum";
export declare class User {
    name: String;
    lastName: String;
    userName: String;
    phone: String;
    facebook: String;
    twitter: String;
    role?: UserRole;
    active?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    id?: String;
}
