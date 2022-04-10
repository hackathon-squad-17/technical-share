import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register-info',
  templateUrl: './register-info.component.html',
  styleUrls: ['./register-info.component.css']
})
export class RegisterInfoComponent implements OnInit {

  @Output() onForward = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    this.onForward.emit();
  }

}
