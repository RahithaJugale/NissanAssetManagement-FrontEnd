import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  //get login details from REST API
  
  getLoginCredentials(login:Login):Observable<any>{
   return this.httpClient.post(environment.apiUrl + '/api/login', login);
  }
}

