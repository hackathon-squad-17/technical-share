import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegisterInfo } from 'src/app/Models/user.model';
import { RegistrationService } from 'src/app/Services/registration.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register-skills',
  templateUrl: './register-skills.component.html',
  styleUrls: ['./register-skills.component.css']
})
export class RegisterSkillsComponent implements OnInit {
  constructor(private registrationService: RegistrationService, private router: Router) { }
  selectedCategories:string[] = [];
  @Output() onBackward = new EventEmitter<any>();

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  updateSelectedCategories(event: string[]){
    this.selectedCategories = event
  }

  goBack(){
    this.registrationService.setUserAbilities(this.selectedCategories)
    this.onBackward.emit();
  }

  completeRegistration(){
    this.registrationService.setUserAbilities(this.selectedCategories)
    this.registrationService.completeRegistration();
  }
}
