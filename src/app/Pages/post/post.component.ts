import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from 'src/app/Services/forum.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post:any = null;
  

  constructor(private route: ActivatedRoute, private forumService: ForumService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
    this.forumService.getPostById(params['id']).subscribe(post => {
        this.post = post
      })
    })
  }

}
