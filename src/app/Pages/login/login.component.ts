import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetails } from 'src/app/Models/user.model';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, public router: Router) { }

  loginDetails: LoginDetails = new LoginDetails();
  loginError:string='';

  ngOnInit(): void {

  }

  login(){

      this.userService.login(this.loginDetails).subscribe(response => {
      this.userService.setUserName(response)
      window.sessionStorage.setItem('login', JSON.stringify(response));
      this.router.navigate(['/forum']);
    },
    (response) => {
      this.loginError = response.error
  })
}}
