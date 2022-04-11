import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.css']
})
export class CardProfileComponent implements OnInit {
  @Input() slide:any;
  @Input() user:any;
  imageUrl:string=''

  constructor() { }

  ngOnInit(): void {
    this.imageUrl = `http://localhost:8080/usuarios/foto-perfil?login=${this.user.login}`;
  }
  checkUser(){
    console.log(this.user)
  }
}
