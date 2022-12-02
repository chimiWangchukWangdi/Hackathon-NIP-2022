import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { ProgressBarModule } from 'primeng/progressbar';
import { CheckboxModule } from 'primeng/checkbox';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { PaginatorModule } from 'primeng/paginator';
import { EndorsementComponent } from './screens/endorsement/endorsement.component';
import { PostEndorsementComponent } from './screens/post-endorsement/post-endorsement.component';
import { BlogPostComponent } from './screens/blog-post/blog-post.component';
import { MapComponent } from './components/map/map.component';
import { LoginComponent } from './components/auth/auth-container/login/login.component';
import { TabMenuModule } from "primeng/tabmenu";
import { ButtonModule } from "primeng/button";
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { PublicProfileComponent } from './components/public-profile/public-profile.component';
import { BlogComponent } from './components/blog/blog.component';
import { PetitionComponent } from './components/petition/petition.component';
import { UploadPetitionComponent } from './components/upload-petition/upload-petition.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TabViewModule } from "primeng/tabview";
import { SignupComponent } from "./components/auth/auth-container/signup/signup.component";
import {ReactiveFormsModule} from "@angular/forms";
import { EventComponent } from './screens/event/event.component';
import {AvatarGroupModule} from "primeng/avatargroup";
import {AvatarModule} from "primeng/avatar";
import { HostEventComponent } from './screens/event/host-event/host-event.component';
import { CalenderComponent } from './screens/calender/calender.component';
import {GMapModule} from "primeng/gmap";
import {HttpClientModule} from "@angular/common/http";
import { AuthContainerComponent } from './components/auth/auth-container/auth-container.component';

import { CommentComponent } from "./components/comment/comment.component";
import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { EndorsementListComponent } from './components/endorsement-list/endorsement-list.component';
import { PetitionListComponent } from './components/petition-list/petition-list.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BlogCreationComponent } from './components/blog-creation/blog-creation.component';
import { ShareComponent } from './components/share/share.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AuthComponent } from './components/auth/auth-container/auth/auth.component';
import { PostCreationComponent } from "./components/post-creation/post-creation.component";
import { TableModule } from 'primeng/table';
// import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { PostLocationComponent } from './components/post-location/post-location.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';
import {ChartModule} from "primeng/chart";
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatsComponent } from './components/chats/chats.component';
import { GuidanceComponent } from './components/guidance/guidance.component';
import {TreeModule} from "primeng/tree";
import {AccordionModule} from "primeng/accordion";


@NgModule({
  declarations: [
    AppComponent,
    EndorsementComponent,
    PostEndorsementComponent,
    BlogPostComponent,
    MapComponent,
    LoginComponent,
    SignupComponent,
    NavigationComponent,
    FooterComponent,
    PublicProfileComponent,
    BlogComponent,
    PetitionComponent,
    UploadPetitionComponent,
    LandingPageComponent,
    SignupComponent,
    EventComponent,
    HostEventComponent,
    CalenderComponent,
    AuthContainerComponent,
    PostCreationComponent,

    CommentComponent,
    ProfileListComponent,
    EndorsementListComponent,
    PetitionListComponent,
    BlogCreationComponent,
    CategoriesComponent,
    AuthComponent,
    // EditProfileComponent,
    ShareComponent,
    PostLocationComponent,
    AdminDashboardComponent,
    ChatBotComponent,
    ChatListComponent,
    ChatsComponent,
    GuidanceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    InputTextModule,
    ProgressBarModule,
    EditorModule,
    CheckboxModule,
    NgxDropzoneModule,
    PaginatorModule,
    TabMenuModule,
    TabViewModule,
    ButtonModule,
    ReactiveFormsModule,
    AvatarGroupModule,
    AvatarModule,
    HttpClientModule,
    GMapModule,
    DialogModule,
    TableModule,
    RatingModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    ChartModule,
    TreeModule,
    AccordionModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
