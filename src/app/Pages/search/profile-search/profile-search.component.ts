import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.css']
})
export class ProfileSearchComponent implements OnInit {
  users:any[] = [];
  filteredUsers:any[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((value:any) => {
      this.users = value;
      this.filteredUsers= this.users;

    })
  }

  searchUsers(inputValue:string){
    if(inputValue){
      this.filteredUsers = this.users.filter(user => {
        return user.nome.toLowerCase().includes(inputValue)
      })
    } else {
      this.filteredUsers = this.users
    }
  }

}
