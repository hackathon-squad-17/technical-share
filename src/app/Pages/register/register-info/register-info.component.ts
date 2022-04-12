import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserRegisterInfo } from 'src/app/Models/user.model';
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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
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

  submit(){
    this.userService.registerUserInfo(this.userRegisterInfo).subscribe((e: any) => {
      this.userService.setRegisteringUser(this.userRegisterInfo)
    }

      , (error: any) => console.log(error));
    this.onForward.emit();
  }


}
