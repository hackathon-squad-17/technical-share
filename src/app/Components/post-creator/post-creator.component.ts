import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/Models/post.model';
import { ForumService } from 'src/app/Services/forum.service';
import { UserService } from 'src/app/Services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post-creator',
  templateUrl: './post-creator.component.html',
  styleUrls: ['./post-creator.component.css']
})
export class PostCreatorComponent implements OnInit {
  @Output() onCancelClick:EventEmitter<null> = new EventEmitter();
  post:Post = new Post();
  imageUrl: string = '';
  categories:[] = [];
  constructor(private forumService: ForumService, private userService: UserService) { }

  ngOnInit(): void {
    this.imageUrl = `${environment.apiRoot}usuarios/foto-perfil?login=${this.userService.getUserFromStorage()}`;
    this.userService.getAvailableAbilities().subscribe((listAbilities:any) => {
      this.categories = listAbilities.map((ability: { habilidadePossivel: any; }) => {
        return ability.habilidadePossivel
      })
    })
  }

  sendForm() {
    this.post.login = this.userService.getUserFromStorage();
    console.log(this.categories)
    this.forumService.createPost(this.post).subscribe((x) => {
      console.log(x);
    });
    window.location.reload();
  }

  cancel(){
    this.onCancelClick.emit()
  }
}

