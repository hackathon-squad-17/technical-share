import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/Services/forum.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  // user = 'Fernanda';
  // dynamicSlides = [
  //   {
  //     id: "1",
  //     src:'/assets/img/foto-jorge.png',
  //     nome:'Jorge Souza',
  //     title: 'Dev Front-End',
  //     skills: [
  //       "Mobile", 'Angular', 'CSS', 'React', 'Svelte'
  //     ]
  //   },
  //   {
  //     id: "2",
  //     src:'/assets/img/foto-julia.png',
  //     nome:'Julia Garcia',
  //     title: 'UX Designer',
  //     skills: [
  //       "Photoshop", 'Illustrator', 'Research', 'UX Writing', 'Figma'
  //     ]
  //   },
  //   {
  //     id: "3",
  //     src:'/assets/img/foto-julia.png',
  //     nome:'Julia Garcia',
  //     title: 'UX Designer',
  //     skills: [
  //       "Mobile", 'Angular', 'CSS', 'React', 'Svelte'
  //     ]
  //   },
  //   {
  //     id: "4",
  //     src:'/assets/img/foto-julia.png',
  //     nome:'Julia Garcia',
  //     title: 'UX Designer',
  //     skills: [
  //       "Mobile", 'Angular', 'CSS', 'React', 'Svelte'
  //     ]
  //   },
  //   {
  //     id: "6",
  //     src:'/assets/img/foto-julia.png',
  //     nome:'Julia Garcia',
  //     title: 'UX Designer',
  //     skills: [
  //       "Mobile", 'Angular', 'CSS', 'React', 'Svelte'
  //     ]
  //   }
  // ]

  posts: any[] = [];
  users: any[] = [];
  loggedUser:string = ''
  constructor(private forumService: ForumService, private userService: UserService) { }

  ngOnInit(): void {
    this.forumService.getAllPosts().subscribe((value:any) => {
      this.posts = value;
     });

    this.userService.getAllUsers().subscribe((value:any) => {
      this.users = value;
      console.log(this.users);
    })

    this.userService.findUserByLogin().subscribe((value:any) => {
    this.loggedUser = value.nome;
    });


  }

}
