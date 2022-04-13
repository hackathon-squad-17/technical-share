import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginDetails, UserRegisterInfo } from 'src/app/Models/user.model';
import { RegistrationService } from 'src/app/Services/registration.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register-info',
  templateUrl: './register-info.component.html',
  styleUrls: ['./register-info.component.css']
})
export class RegisterInfoComponent implements OnInit {
  @Output() onForward = new EventEmitter<any>();
  userRegisterInfo = new UserRegisterInfo();
  confirmationPassword = '';
  validPassword = true;

  constructor(private userService: UserService, private registrationService: RegistrationService) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });

   this.userRegisterInfo = this.registrationService.getRegisteringUser();
   this.userRegisterInfo.password = '';
  }

  checkPassword(){
    if(this.userRegisterInfo.password != this.confirmationPassword){
      this.validPassword = false;
      console.log(this.validPassword);
    } else {
      this.validPassword = true;
      console.log(this.validPassword);
    }
  }

  goForward(){
    this.registrationService.setRegisteringUser(this.userRegisterInfo)
    this.onForward.emit();
  }


}
