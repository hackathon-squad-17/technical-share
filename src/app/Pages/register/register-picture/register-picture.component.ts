import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register-picture',
  templateUrl: './register-picture.component.html',
  styleUrls: ['./register-picture.component.css']
})
export class RegisterPictureComponent implements OnInit {
  @Output() onForward = new EventEmitter<any>();

  image?:File;
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    this.onForward.emit();
  }
}
