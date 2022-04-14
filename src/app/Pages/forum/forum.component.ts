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
  noResults: boolean = false;

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
        this.noResults = false;
        return selectedCategories.includes(post.categoria)
      });
      if(this.filteredPosts.length==0){
        this.noResults = true;
      }
    } else {
      this.filteredPosts = this.posts
    }
  }

  searchPosts(inputValue:string){
    if(inputValue){
      this.filteredPosts = this.posts.filter(post => {
        this.noResults = false;
        return post.titulo.toLowerCase().includes(inputValue) || post.conteudo.toLowerCase().includes(inputValue)
      })
      if(this.filteredPosts.length==0){
        this.noResults = true;
      }
    } else {
      this.filteredPosts = this.posts
    }
  }


  showModal = false;

  showingModal(){
    this.showModal = true;
  }

  hidingModal(){
    this.showModal = false;
  }
}
