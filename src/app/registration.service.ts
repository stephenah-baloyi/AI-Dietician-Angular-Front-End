import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import {​​​​​​​​ HttpClient, HttpClientModule }​​​​​​​​ from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private htttpClient: HttpClient) { }

  public userLoginFromRemote(user :User):Observable<any>{
    return this.htttpClient.post<any>("http://localhost:8080/app/login", user)
  }
}
