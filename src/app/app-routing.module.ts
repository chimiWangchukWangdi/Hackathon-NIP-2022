import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/auth/auth-container/login/login.component";
import { SignupComponent } from "./components/auth/auth-container/signup/signup.component";
import {AuthContainerComponent} from "./components/auth/auth-container/auth-container.component";
import { PetitionListComponent } from "./components/petition-list/petition-list.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { EndorsementListComponent } from "./components/endorsement-list/endorsement-list.component";
import { BlogPostComponent } from "./screens/blog-post/blog-post.component";
import { PostEndorsementComponent } from "./screens/post-endorsement/post-endorsement.component";
import { UploadPetitionComponent } from "./components/upload-petition/upload-petition.component";
import { BlogCreationComponent } from "./components/blog-creation/blog-creation.component";
import { ProfileListComponent } from "./components/profile-list/profile-list.component";
import { AuthComponent } from "./components/auth/auth-container/auth/auth.component";
import { PublicProfileComponent } from './components/public-profile/public-profile.component';
import { PetitionComponent } from './components/petition/petition.component';
import {PostLocationComponent} from "./components/post-location/post-location.component";
import { EndorsementComponent } from './screens/endorsement/endorsement.component';
import { BlogComponent } from './components/blog/blog.component';


const routes: Routes = [
  {path: 'signin', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'petition', component: PetitionListComponent},
  {path: 'petition/:id', component: PetitionComponent},
  {path: 'endorsement', component: EndorsementListComponent},
  {path: 'endorsement/:id', component: EndorsementComponent},
  {path: 'blog', component: BlogPostComponent},
  {path: 'blog/:id', component: BlogComponent},
  {path: 'create-endorsement', component: PostEndorsementComponent},
  {path: 'create-petition', component: UploadPetitionComponent},
  {path: 'create-post', component: BlogCreationComponent},
  {path: 'home', component: LandingPageComponent},
  {path: 'people', component: ProfileListComponent},
  {path: 'login', component: AuthComponent},
  {path: 'user/:id', component: PublicProfileComponent},
  {path: 'post-locations/:location', component: PostLocationComponent},
  {path: '**', redirectTo: 'home'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
