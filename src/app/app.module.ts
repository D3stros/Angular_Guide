import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule, ErrorHandler } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses.component";
import { CourseComponent } from "./course/course.component";
import { CoursesService } from "./courses.service";
import { AuthorsComponent } from "./authors/authors.component";
import { AuthorsService } from "./authors.service";
import { SummaryPipe } from "./summary.pipe";
import { FavoriteComponent } from "./favorite/favorite.component";
import { TitleCasePipe } from "./title-case.pipe";
import { PanelComponent } from "./panel/panel.component";
import { LikeComponent } from "./like/like.component";
import { InputFormatDirective } from "./input-format.directive";
import { ZippyComponent } from "./zippy/zippy.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { NewCourseFormComponent } from "./new-course-form/new-course-form.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { PostsComponent } from "./posts/posts.component";
import { HttpClientModule } from "@angular/common/http";
import { PostService } from "./services/post.service";
import { DataService } from "./services/data.service";
import { AppErrorHandler } from "./common/app-error-handler";
import { GithubFollowersComponent } from "./github-followers/github-followers.component";
import { GithubFollowersService } from "./github-followers.service";

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    PostService,
    CoursesService,
    AuthorsService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
