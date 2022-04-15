import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false;
  login:string = ''

  cards = [
    {
      icon: 'search',
      text: 'Encontre um consultor'
    },
    {
      icon: 'event',
      text: 'Agende uma mentoria'
    },
    {
      icon: 'question_answer',
      text: 'Tire suas dúvidas'
    }
  ];


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.checksLogin();
    this.login = this.userService.getUserFromStorage();

  }

  checksLogin(){
    if(this.userService.getUserFromStorage()){
      this.isLoggedIn = true
    }
      else {
        this.isLoggedIn = false
      }
  }
}
