import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CourseComponent } from "./course/course.component";
import { CoursesComponent } from "./courses.component";
import { CoursesService } from "./courses.service";
import { EmailService } from "./email.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ResumePipe } from "./resume.pipe";
import { FavouriteComponent } from "./favourite/favourite.component";
import { PanelComponent } from "./panel/panel.component";
import { InputFormatDirective } from "./input-format.directive";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { PostsComponent } from "./posts/posts.component";
import { HttpClientModule } from "@angular/common/http";
import { GithubFollowersComponent } from "./github-followers/github-followers.component";
import { PostService } from "./services/post.service";
import { GithubFollowersService } from "./services/github-followers.service";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProfilFollowerComponent } from './profil-follower/profil-follower.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoutingModule } from './routing.module';



@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    ResumePipe,
    FavouriteComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,RoutingModule],
  providers: [
    CoursesService,
    EmailService,
    PostService,
    GithubFollowersService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
