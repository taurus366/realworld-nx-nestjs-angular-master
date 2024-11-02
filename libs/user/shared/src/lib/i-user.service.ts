import { Injectable } from "@angular/core";
import { ActionSuccessResponse, DetailSuccessResponse } from "@realworld/shared/client-server";
import { IBaseDataService } from "@realworld/shared/foundation";
import { ILoginUser, INewUser, IUser } from "@realworld/user/api-interfaces";
import { Observable } from "rxjs";
import { UserService } from "./user.service";

@Injectable({
    providedIn: 'root',
    useClass: UserService
})
export abstract class IUserService extends IBaseDataService<IUser> {
    isAuth: boolean
    userInfo: IUser | null
    abstract updateAuthState(user: IUser|null)
    abstract login(body: ILoginUser, loading?:boolean): Observable<ActionSuccessResponse<IUser>>
    abstract logout()
    abstract register(data: INewUser, loading?:boolean): Observable<ActionSuccessResponse<IUser>>
    abstract getCurrentUser(loading?:boolean): Observable<DetailSuccessResponse<Partial<IUser>>>
}