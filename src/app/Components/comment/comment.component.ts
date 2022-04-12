import { Component, Input, OnInit } from '@angular/core';

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
    this.imageUrl = `http://localhost:8080/usuarios/foto-perfil?login=${this.comentario.usuario.login}`
  }

}
