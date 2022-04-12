import { Component, OnInit } from '@angular/core';
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
  loggedUser:any = ''
  loggedUserImageUrl:string = ''
  constructor(private forumService: ForumService, private userService: UserService) { }

  ngOnInit(): void {
    this.forumService.getAllPosts().subscribe((value:any) => {
      this.posts = value;
     });

    this.userService.getAllUsers().subscribe((value:any) => {
      this.users = value;
      console.log(this.users);
    })

    this.userService.findUserByLogin(this.userService.getUserFromStorage()).subscribe((value:any) => {
    this.loggedUser = value;
    this.loggedUserImageUrl = `${environment.apiRoot}usuarios/foto-perfil?login=${value.login}`;

    });


  }

}
