import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from './Pages/forum/forum.component';
import { HomeComponent } from './Pages/home/home.component';
import { PostComponent } from './Pages/post/post.component';
import { ProfileListComponent } from './Pages/profile-list/profile-list.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
