import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Pages/home/home.component';
import { ProfileListComponent } from './Pages/profile-list/profile-list.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { CardProfileComponent } from './Components/card-profile/card-profile.component';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { ForumComponent } from './Pages/forum/forum.component';
import { ForumPostComponent } from './Components/forum-post/forum-post.component';
import { CommentBoxComponent } from './Components/comment-box/comment-box.component';
import { CommentPostComponent } from './Components/comment-post/comment-post.component';
import { PostComponent } from './Pages/post/post.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileListComponent,
    CarouselComponent,
    FooterComponent,
    CategoriesComponent,
    CardProfileComponent,
    SearchBarComponent,
    ForumComponent,
    ForumPostComponent,
    CommentBoxComponent,
    CommentPostComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
