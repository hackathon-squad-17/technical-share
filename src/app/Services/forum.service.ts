import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http:HttpClient) {
  }

  public getAllPosts() {
    return this.http.get('http://localhost:8080/postagens/todas-postagens');
  }

  public getPostById(id: number){
    return this.http.get(`http://localhost:8080/postagens/postagem-id?id=${id}`)
  }

}
