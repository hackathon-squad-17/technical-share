import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDetails, UserRegisterInfo } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username:string = '';

  constructor(private http:HttpClient) {}

  login(loginDetails:LoginDetails){
    return this.http.post('http://localhost:8080/usuarios/verificacao-login', loginDetails, {responseType: 'text'}).subscribe(response => {
      this.username = response
      console.log(response)
    },
    (response) => {
      console.log(response)
    }
    )
  }

  getUserName(){
    return this.username
  }

  registerUserInfo(userRegisterInfo:UserRegisterInfo){
    return this.http.post('http://localhost:8080/usuarios/novo-usuario', userRegisterInfo)
  }
}
