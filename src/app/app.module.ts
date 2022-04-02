import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AppModule } from './AppModule';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/pages/user/register/register.component';
import { ShowAllUserComponent } from './components/pages/user/show-all-user/show-all-user.component';
import { ShowSingleUserComponent } from './components/pages/user/show-single-user/show-single-user.component';
import { ShowSinglePostComponent } from './components/pages/post/show-single-post/show-single-post.component';
import { AddPostComponent } from './components/pages/post/add-post/add-post.component';
import { ShowAllPostComponent } from './components/pages/post/show-all-post/show-all-post.component';
import { LoginComponent } from './components/pages/user/login/login.component';
import { ProfileComponent } from './components/pages/user/profile/profile.component';
import { LoginAdminComponent } from './components/pages/user/login-admin/login-admin.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    ShowAllUserComponent,
    ShowSingleUserComponent,
    ShowSinglePostComponent,
    AddPostComponent,
    ShowAllPostComponent,
    LoginComponent,
    ProfileComponent,
    LoginAdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    // UsersService,
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
