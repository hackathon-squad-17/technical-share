import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/Models/comment.model';
import { ForumService } from 'src/app/Services/forum.service';

@Component({
  selector: 'app-comment-creator',
  templateUrl:'./comment-creator.component.html' ,
  styleUrls: ['./comment-creator.component.css']
})
export class CommentCreatorComponent implements OnInit {
  @Input() idPost?:number;
  comment:Comment = new Comment();

  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
  }

  sendForm(){
    this.comment.idPost = this.idPost;
    this.forumService.createComment(this.comment).subscribe( x => console.log(x));
  }
}
