import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  @Output() onCancelClick:EventEmitter<null> = new EventEmitter();
  @Input() user:User = new User();


  constructor(private userService:UserService) { }

  ngOnInit(): void {
    console.log(this.user)
  }


  cancel(){
    this.onCancelClick.emit()
  }

  sendChanges(){
    this.userService.editUser(this.user).subscribe((e)=>{
      console.log(e)
    }, (err)=>{
      console.log(err)
    })
  }
}
