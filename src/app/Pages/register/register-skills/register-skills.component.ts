import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register-skills',
  templateUrl: './register-skills.component.html',
  styleUrls: ['./register-skills.component.css']
})
export class RegisterSkillsComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) { }
  selectedCategories:string[] = [];

  ngOnInit(): void {
  }

  updateSelectedCategories(event: string[]){
    this.selectedCategories = event
  }

  registerSkills(){
    this.userService.registerUserAbilities(this.selectedCategories).subscribe((x) => {
      this.router.navigate(['/forum'])

    }, (err) => {
      console.log(err)
    })
  }
}
