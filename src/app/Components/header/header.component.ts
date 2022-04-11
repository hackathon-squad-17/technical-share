import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  buttonState:string = 'Entrar'
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.checksLogin();
  }

  checksLogin(){
    if(this.userService.getUserFromStorage()){
      this.isLoggedIn = true
      this.buttonState = 'Perfil'
    }
      else {
        this.isLoggedIn = false
        this.buttonState = 'Entrar'
      }
  }

}
