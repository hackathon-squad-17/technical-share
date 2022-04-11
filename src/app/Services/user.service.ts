import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetails, UserRegisterInfo } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username:string = '';
  private registeringUser: UserRegisterInfo | undefined;

  constructor(private http:HttpClient, private router: Router) {}

  login(loginDetails:LoginDetails){
    return this.http.post('http://localhost:8080/usuarios/verificacao-login', loginDetails, {responseType: 'text'}).subscribe(response => {
      this.setUserName(response)
      window.sessionStorage.setItem('login', JSON.stringify(response));
      this.router.navigate(['/forum']);
      console.log(response)
    },
    (response) => {
      console.log(response)
    }
    )
  }

  logout(){
    sessionStorage.removeItem('login');
    this.router.navigate(['/'])
  }

  getUserFromStorage():string {
    let savedUser = sessionStorage.getItem('login');
    if(savedUser){
      savedUser = JSON.parse(savedUser)
    }
    return savedUser??'';
  }

  findUserByLogin(login: string){
    return this.http.get(`http://localhost:8080/usuarios/encontra-usuario-login?login=${login}`)
  }

  getUserName(){
    return this.username
  }

  setUserName(username:string){
    this.username = username;
  }


  setRegisteringUser(userRegisterInfo:UserRegisterInfo){
    this.registeringUser = userRegisterInfo
  }

  getRegisteringUser(){
    return this.registeringUser
  }

  registerUserInfo(userRegisterInfo:UserRegisterInfo){
    return this.http.post('http://localhost:8080/usuarios/novo-usuario', userRegisterInfo)
  }

  registerUserRole(userRole:string){
    return this.http.post('http://localhost:8080/usuarios/nova-area-atuacao', {
      login: this.registeringUser?.login,
      areaAtuacao: userRole
    })
  }

  getAvailableAbilities(){
    return this.http.get('http://localhost:8080/habilidades/todas-habilidades')
  }

  registerUserAbilities(abilities:string[]){
    return this.http.post('http://localhost:8080/usuarios/novas-habilidades', {
      login: this.registeringUser?.login,
      habilidades: abilities
    })
  }

  getAllUsers(){
    return this.http.get('http://localhost:8080/usuarios/todos-usuarios')
  }
}
