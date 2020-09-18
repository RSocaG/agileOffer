declare const UserController_base: import("@nestjs/common").Type<import("../mongo-rest/src/interfaces").ICrudController>;
export declare class UserController extends UserController_base {
    constructor();
    create(dto: any): Promise<any>;
}
export {};
