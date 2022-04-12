import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.css']
})
export class ForumPostComponent implements OnInit {
  @Input() post:any;
  imageUrl: string = '';
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.imageUrl = `${environment.apiRoot}usuarios/foto-perfil?login=${this.post.usuario.login}`;
  }

}
