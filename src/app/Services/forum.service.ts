import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../Models/post.model';
import { Comment } from '../Models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http:HttpClient) {
  }

  public createPost(post:Post){
   return this.http.post('http://localhost:8080/postagens/nova-postagem', post);
  }

  public createComment(comment:Comment){
    return this.http.post('http://localhost:8080/comentarios/novo-comentario', comment);
  }

  public getAllPosts() {
    return this.http.get('http://localhost:8080/postagens/todas-postagens');
  }

  public getPostById(id: number){
    return this.http.get(`http://localhost:8080/postagens/postagem-id?id=${id}`);
  }

}
