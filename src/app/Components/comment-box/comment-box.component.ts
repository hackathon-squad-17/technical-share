import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/Models/post.model';
import { ForumService } from 'src/app/Services/forum.service';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {
  @Input() placeholder:string = '';

  post?:Post;
  conteudo?:string;

  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
  }

  sendForm(){
    this.post = new Post();
    this.post.conteudo = this.conteudo;
    this.forumService.createPost(this.post);
    console.log(this.post);
  }
}
