import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../Models/post.model';
import { Comment } from '../Models/comment.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http:HttpClient) {
  }

  public createPost(post:Post){
   return this.http.post(`${environment.apiRoot}postagens/nova-postagem`, post);
  }

  public createComment(comment:Comment){
    return this.http.post(`${environment.apiRoot}comentarios/novo-comentario`, comment);
  }

  public getAllPosts() {
    return this.http.get(`${environment.apiRoot}postagens/todas-postagens`);
  }

  public getPostById(id: number){
    return this.http.get(`${environment.apiRoot}postagens/postagem-id?id=${id}`);
  }

}
