import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDetails, UserRegisterInfo } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username:string = '';
  private registeringUser: string = '';

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

  setRegisteringUser(username:string){
    this.registeringUser = username
  }

  getRegisteringUser():string{
    return this.registeringUser
  }

  registerUserInfo(userRegisterInfo:UserRegisterInfo){
    return this.http.post('http://localhost:8080/usuarios/novo-usuario', userRegisterInfo)
  }

  registerUserRole(userRole:string){
    return this.http.post('http://localhost:8080/usuarios/nova-area-atuacao', {
      login: this.registeringUser,
      areaAtuacao: userRole
    })
  }

  getAvailableAbilities(){
    return this.http.get('http://localhost:8080/habilidades/todas-habilidades')
  }

  registerUserAbilities(abilities:string[]){
    return this.http.post('http://localhost:8080/usuarios/novas-habilidades', {
      login: this.registeringUser,
      habilidades: abilities
    })
  }

}
