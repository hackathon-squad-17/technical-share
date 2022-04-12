import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comentario:any = null;
  imageUrl:string = ''
  constructor() { }

  ngOnInit(): void {
    this.imageUrl = `${environment.apiRoot}usuarios/foto-perfil?login=${this.comentario.usuario.login}`
  }

}
