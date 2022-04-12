import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

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
    this.imageUrl = `${environment.apiRoot}usuarios/foto-perfil?login=${this.user.login}`;
  }
  checkUser(){
    console.log(this.user)
  }
}
