import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UpdateDeletePostComponent } from './update-delete-post/update-delete-post.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'login',   component: LoginComponent }, // redirect to `login-component`
  { path: 'header',   component: HeaderComponent }, // redirect to `header-component`
  { path: 'home',   component: HomeComponent }, // redirect to `home-component`
  { path: 'posts',   component: CreatePostComponent }, // redirect to `createpost-component`
  { path: 'view-posts',   component: ViewPostComponent }, // redirect to `viewpost-component`
  { path: 'update-delete-posts',   component: UpdateDeletePostComponent }, // redirect to `viewpost-component`
  { path: 'sign-up',   component: SignUpComponent }, // redirect to `signup-component`
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
