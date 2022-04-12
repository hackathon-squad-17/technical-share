import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/Models/post.model';
import { ForumService } from 'src/app/Services/forum.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-post-creator',
  templateUrl: './post-creator.component.html',
  styleUrls: ['./post-creator.component.css']
})
export class PostCreatorComponent implements OnInit {
  post:Post = new Post();
  imageUrl: string = '';
  constructor(private forumService: ForumService, private userService: UserService) { }

  ngOnInit(): void {
    this.imageUrl = `http://localhost:8080/usuarios/foto-perfil?login=${this.userService.getUserFromStorage()}`;
  }

  sendForm() {
    this.post.login = this.userService.getUserFromStorage();
    this.forumService.createPost(this.post).subscribe((x) => {
      console.log(x);
    });
    window.location.reload();
  }

}
