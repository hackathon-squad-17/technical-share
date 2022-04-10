import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/Services/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(private forumService: ForumService) { }

  posts: any[] = [];

  ngOnInit(): void {
    this.forumService.getAllPosts().subscribe((value:any) => {
      this.posts = value;
     });
  }
}
