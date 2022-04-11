import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  abilities:string[] = ['Mobile', 'CSS', 'Angular', 'HTML', 'CSS'];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout();
  }
}
