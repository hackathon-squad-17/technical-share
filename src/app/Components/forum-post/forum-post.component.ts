import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForumService } from 'src/app/Services/forum.service';

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.css']
})
export class ForumPostComponent implements OnInit {
  @Input() post:any;
  constructor(public router: Router) { }

  ngOnInit(): void {


  }

}
