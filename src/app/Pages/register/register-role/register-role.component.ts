import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register-role',
  templateUrl: './register-role.component.html',
  styleUrls: ['./register-role.component.css']
})
export class RegisterRoleComponent implements OnInit {
  @Output() onForward = new EventEmitter<any>();
  userRole: string = '';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  submit(){
    this.userService.registerUserRole(this.userRole).subscribe(() => {
      this.onForward.emit();
      }, (error) => {
        console.log(error);
      }
    )
  }

}
