import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }

  createUser(newUser){
    console.log("**http service_Create User**", newUser)
    return this._http.post('/app/users/create', newUser);
  }
}
