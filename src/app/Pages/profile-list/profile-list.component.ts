import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForumService } from 'src/app/Services/forum.service';
import { UserService } from 'src/app/Services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  posts: any[] = [];
  users: any[] = [];
  filteredUsers: any[] = [];
  loggedUser:any = ''
  loggedUserImageUrl:string = ''
  noResults:boolean = false

  constructor(private forumService: ForumService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.forumService.getAllPosts().subscribe((value:any) => {
      this.posts = value;
     });

    this.userService.getAllUsers().subscribe((value:any) => {
      this.users = value;
      this.filteredUsers = this.users;
    })

    this.userService.findUserByLogin(this.userService.getUserFromStorage()).subscribe((value:any) => {
    this.loggedUser = value;
    this.loggedUserImageUrl = `${environment.apiRoot}usuarios/foto-perfil?login=${value.login}`;

    });
  }

  updateSelectedCategories(selectedCategories:string[]){
    if(selectedCategories.length){
      this.filteredUsers = this.users.filter(user => {
        this.noResults = false;
        return selectedCategories.every(r=> user.habilidades.includes(r))
      });
      if(this.filteredUsers.length==0){
        this.noResults = true;
      }
    } else {
      this.noResults = false;
      this.filteredUsers = this.users
    }
  }

  handleSearch(inputValue: string){
    this.router.navigate([`/search`],{queryParams:{search:inputValue}})
  }
}
