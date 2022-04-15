import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from './Pages/forum/forum.component';
import { HelpComponent } from './Pages/help/help.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { PostComponent } from './Pages/post/post.component';
import { ProfileListComponent } from './Pages/profile-list/profile-list.component';
import { RegisterComponent } from './Pages/register/register.component';
import { ProfileSearchComponent } from './Pages/search/profile-search/profile-search.component';
import { UserProfileComponent } from './Pages/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'profiles',
    component: ProfileListComponent
  },
  {
    path: 'forum',
    component: ForumComponent
  },
  {
    path: 'post/:id',
    component: PostComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile/:login',
    component: UserProfileComponent
  },
  {
    path:'search',
    component: ProfileSearchComponent
  }, {
    path: 'help',
    component: HelpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
