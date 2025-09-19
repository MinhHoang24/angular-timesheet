import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    private baseUrl = 'https://dev-api-timesheet.nccsoft.vn/api';

    constructor(private http: HttpClient) {}

    login(loginData: {
        userNameOrEmailAddress: string;
        password: string;
        rememberClient: boolean
    }): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/TokenAuth/Authenticate`, loginData);
    }
}