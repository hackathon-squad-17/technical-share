import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RegistrationService } from 'src/app/Services/registration.service';

@Component({
  selector: 'app-register-about',
  templateUrl: './register-about.component.html',
  styleUrls: ['./register-about.component.css']
})
export class RegisterAboutComponent implements OnInit {
  @Output() onForward = new EventEmitter<any>();
  @Output() onBackward = new EventEmitter<any>();
  userAbout: string = '';

  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.userAbout = this.registrationService.getUserAbout();
  }

  completeRegistration(){
    this.registrationService.setUserAbout(this.userAbout)
    this.registrationService.completeRegistration();
  }

  goBack(){
    this.registrationService.setUserAbout(this.userAbout)
    this.onBackward.emit();
  }

}
