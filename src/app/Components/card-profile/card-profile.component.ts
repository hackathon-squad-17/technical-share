import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.css']
})
export class CardProfileComponent implements OnInit {
  @Input() slide:any;
  @Input() user:any;
  constructor() { }

  ngOnInit(): void {
  }
  checkUser(){
    console.log(this.user)
  }
}
