import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RegistrationService } from 'src/app/Services/registration.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register-role',
  templateUrl: './register-role.component.html',
  styleUrls: ['./register-role.component.css']
})
export class RegisterRoleComponent implements OnInit {
  @Output() onForward = new EventEmitter<any>();
  @Output() onBackward = new EventEmitter<any>();
  userRole: string = '';
  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.userRole = this.registrationService.getUserRole();
  }

  goForward(){
    this.registrationService.setUserRole(this.userRole)
    this.onForward.emit();
  }

  goBack(){
    this.registrationService.setUserRole(this.userRole)
    this.onBackward.emit();
  }

}
