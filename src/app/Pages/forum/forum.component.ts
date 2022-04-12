import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Models/post.model';
import { ForumService } from 'src/app/Services/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(private forumService: ForumService) { }

  posts:Post[] = [];
  filteredPosts:Post[] = [];

  ngOnInit(): void {
    this.forumService.getAllPosts().subscribe((value:any) => {
      // Mostrar os posts em ordem de mais recente para mais antigo
      this.posts = value.reverse();
      this.filteredPosts = this.posts;
     });
  }

  updateSelectedCategories(selectedCategories:string[]){
    if(selectedCategories.length){
      this.filteredPosts = this.posts.filter(post => {
        return selectedCategories.includes(post.categoria)
      });
    } else {
      this.filteredPosts = this.posts
    }
  }

  searchPosts(inputValue:string){
    if(inputValue){
      this.filteredPosts = this.posts.filter(post => {
        return post.titulo.toLowerCase().includes(inputValue) || post.conteudo.toLowerCase().includes(inputValue)
      })
    } else {
      this.filteredPosts = this.posts
    }
  }
}
