import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetails, UserRegisterInfo } from '../Models/user.model';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username:string = '';
  private registeringUser: UserRegisterInfo | undefined;

  constructor(private http:HttpClient, private router: Router) {}

  login(loginDetails:LoginDetails){
    let errorContainer = new Subject<any>();
      this.http.post(`${environment.apiRoot}usuarios/verificacao-login`, loginDetails, {responseType: 'text'}).subscribe((response)=>{
      this.setUserName(response)
      window.sessionStorage.setItem('login', JSON.stringify(response));
      this.router.navigate(['/profiles']);
    }, (response)=>{
      errorContainer.next(response)
    })
    return errorContainer

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
    return this.http.get(`${environment.apiRoot}usuarios/encontra-usuario-login?login=${login}`)
  }

  getUserName(){
    return this.username
  }

  setUserName(username:string){
    this.username = username;
  }

  getAvailableAbilities(){
    return this.http.get(`${environment.apiRoot}habilidades/todas-habilidades`)
  }

  getAllUsers(){
    return this.http.get(`${environment.apiRoot}usuarios/todos-usuarios`)
  }
}
