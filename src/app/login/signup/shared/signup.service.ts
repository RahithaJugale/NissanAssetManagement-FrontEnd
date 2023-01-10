import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Signup } from './signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient:HttpClient) { }

  //sign up
  signUp(signup:Signup):Observable<any>{
    return this.httpClient.post(environment.apiUrl+'/api/signup', signup);
  }
}
