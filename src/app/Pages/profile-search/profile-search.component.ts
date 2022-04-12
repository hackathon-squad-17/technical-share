import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.css']
})
export class ProfileSearchComponent implements OnInit {
  users:any[] = [];
  filteredUsers:any[] = [];
  noResults:boolean = false

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((value:any) => {
      this.users = value;
      this.filteredUsers= this.users;
      this.activatedRoute.queryParams.subscribe((params:any) => {
        this.searchUsers(params.search);
      })
    })
  }

  searchUsers(inputValue:string){
    this.router.navigate([],{queryParams:{search:inputValue}})
    if(inputValue){
      this.filteredUsers = this.users.filter(user => {
        this.noResults = false;
        return user.nome.toLowerCase().includes(inputValue) || user.areaAtuacao.toLowerCase().includes(inputValue)
      })
      if(this.filteredUsers.length==0){
        this.noResults = true;
      }
    } else {
      this.noResults = false;
      this.filteredUsers = this.users
    }
  }

}
