import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/Models/comment.model';
import { ForumService } from 'src/app/Services/forum.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-comment-creator',
  templateUrl:'./comment-creator.component.html' ,
  styleUrls: ['./comment-creator.component.css']
})
export class CommentCreatorComponent implements OnInit {
  @Input() idPost?:number;
  comment:Comment = new Comment();
  imageUrl: string = ''
  constructor(private forumService: ForumService, private userService: UserService) { }

  ngOnInit(): void {
    this.imageUrl = `http://localhost:8080/usuarios/foto-perfil?login=${this.userService.getUserFromStorage()}`;
  }

  sendForm(){
    this.comment.idPost = this.idPost;
    this.comment.login = this.userService.getUserFromStorage();
    this.forumService.createComment(this.comment).subscribe( x => console.log(x));
    window.location.reload();
  }
}
