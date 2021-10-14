import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface UserDetails {
  id: string;
  username: string;
  email: string;
  rule:string;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
 id:string
}

@Injectable({
  providedIn: "root"
})
export class AuthApi {
  private token: string;

  constructor(private http: HttpClient, private router: Router) {}

  private saveToken(token: string): void {
    localStorage.setItem("flight-token", token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("flight-token");
    }
    return this.token;
  }

  private request(
    method: "post" | "get",
    type: "login" | "signup" | "dashboard",
    user?: TokenPayload
  ): Observable<any> {
    let base$;

    if (method === "post") {
      base$ = this.http.post(`/${type}`, user);
    } else {
      base$ = this.http.get(`/${type}`, {
        headers: { Authorization: `Bearer ${this.getToken()}` }
      });
    }

    const request = base$.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;
  }

  public logout(): void {
    this.token = "";
    window.localStorage.removeItem("flight-token");
    this.router.navigateByUrl("/");
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split(".")[1];
     // payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  public signup(user: TokenPayload): Observable<any> {
    return this.request("post", "signup", user);
  }

  public login(user: TokenPayload): Observable<any> {
    return this.request("post", "login", user);
  }

  public dushboard(): Observable<any> {
    return this.request("get", "dashboard");
  }
}

