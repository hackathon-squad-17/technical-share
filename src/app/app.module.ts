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
import { CommentCreatorComponent } from './Components/comment-creator/comment-creator.component';
import { CommentComponent } from './Components/comment/comment.component';
import { PostComponent } from './Pages/post/post.component';
import { FormsModule } from '@angular/forms';
import { PostCreatorComponent } from './Components/post-creator/post-creator.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { RegisterInfoComponent } from './Pages/register/register-info/register-info.component';
import { RegisterRoleComponent } from './Pages/register/register-role/register-role.component';
import { RegisterSkillsComponent } from './Pages/register/register-skills/register-skills.component';
import { RegisterPictureComponent } from './Pages/register/register-picture/register-picture.component';
import { UserProfileComponent } from './Pages/user-profile/user-profile.component';
import { ProfileSearchComponent } from './Pages/search/profile-search/profile-search.component';
import { HelpComponent } from './Pages/help/help.component';
import { RegisterAboutComponent } from './Pages/register/register-about/register-about.component';

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
    CommentCreatorComponent,
    CommentComponent,
    PostComponent,
    PostCreatorComponent,
    LoginComponent,
    RegisterComponent,
    RegisterInfoComponent,
    RegisterRoleComponent,
    RegisterSkillsComponent,
    RegisterPictureComponent,
    UserProfileComponent,
    ProfileSearchComponent,
    HelpComponent,
    RegisterAboutComponent,
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
