import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register-role',
  templateUrl: './register-role.component.html',
  styleUrls: ['./register-role.component.css']
})
export class RegisterRoleComponent implements OnInit {
  @Output() onForward = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    this.onForward.emit();
  }

}
