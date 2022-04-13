import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserRegisterInfo } from '../Models/user.model';
import { ImageService } from './image-service.service';
import { UserService } from './user.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  userRegisterInfo: UserRegisterInfo = new UserRegisterInfo();
  imageInput:any;
  userRole: string = '';
  userAbilities: string[] = [];

  constructor(private http:HttpClient, private router: Router, private imageService: ImageService, private userService: UserService) { }

  setRegisteringUser(userRegisterInfo:UserRegisterInfo){
    this.userRegisterInfo = userRegisterInfo
  }

  setImage(imageInput:File){
    this.imageInput = imageInput;
  }

  setUserRole(userRole:string){
    this.userRole = userRole;
  }

  setUserAbilities(userAbilities:string[]){
    this.userAbilities = userAbilities;
  }

  getRegisteringUser(){
    return this.userRegisterInfo
  }

  getImage(){
    return this.imageInput
  }

  getUserRole(){
    return this.userRole
  }

  getUserAbilities(){
    return this.userAbilities
  }

  registerUserInfo(){
    return this.http.post(`${environment.apiRoot}usuarios/novo-usuario`, this.userRegisterInfo)
  }

  registerProfileImage(){
    const file: File = this.imageInput.files[0];
      // TODO consertar ?? tipagem
     return this.imageService.uploadImage(file, this.userRegisterInfo.login)

  }

  registerUserRole(){
    return this.http.post(`${environment.apiRoot}usuarios/nova-area-atuacao`, {
      login: this.userRegisterInfo.login,
      areaAtuacao: this.userRole
    })
  }

  registerUserAbilities(){
    return this.http.post(`${environment.apiRoot}usuarios/novas-habilidades`, {
      login: this.userRegisterInfo?.login,
      habilidades: this.userAbilities
    })
  }

  registrationIsValid(){
    // TODO Validar formulário
    return true
  }

  completeRegistration(){
    if(this.registrationIsValid()){
    this.registerUserInfo().subscribe(() => {
      this.registerProfileImage().subscribe(() => {
        this.registerUserRole().subscribe(() => {
          this.registerUserAbilities().subscribe(() => {
            this.userService.login({loginOuEmail: this.userRegisterInfo.login, senha: this.userRegisterInfo.password});
            this.router.navigate(['/profiles'])
          })
        })
      })
    })
    }
  }
}


