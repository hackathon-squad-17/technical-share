import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/Models/post.model';
import { ForumService } from 'src/app/Services/forum.service';

@Component({
  selector: 'app-post-creator',
  templateUrl: './post-creator.component.html',
  styleUrls: ['./post-creator.component.css']
})
export class PostCreatorComponent implements OnInit {
  post:Post = new Post();

  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
  }

  sendForm() {
    this.forumService.createPost(this.post).subscribe((x) => {
      console.log(x);
    });
  }

}
