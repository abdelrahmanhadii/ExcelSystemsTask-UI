import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { EnviromentService } from './enviroment.service';
import { Token } from './token';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  header = new HttpHeaders();
  constructor(private http:HttpClient, private env:EnviromentService) { 
    this.header.append('content-type', 'application/json')
  }

  login(user:User){
    console.log(user);
    return this.http.post<Token>(this.env.baseURL + "/users/login", user, {headers: this.header});
  }
}
