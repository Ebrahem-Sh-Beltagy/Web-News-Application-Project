import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from 'src/app/components/pages/user/login/login.component';
import { RegisterComponent} from 'src/app/components/pages/user/register/register.component';
import { ShowAllUserComponent} from 'src/app/components/pages/user/show-all-user/show-all-user.component';
import { ShowSingleUserComponent} from 'src/app/components/pages/user/show-single-user/show-single-user.component';
import { ShowSinglePostComponent } from "src/app/components/pages/post/show-single-post/show-single-post.component"
import { ShowAllPostComponent } from "src/app/components/pages/post/show-all-post/show-all-post.component"
import { AddPostComponent } from "src/app/components/pages/post/add-post/add-post.component"
import { ProfileComponent } from "src/app/components/pages/user/profile/profile.component"
import { LoginAdminComponent } from './components/pages/user/login-admin/login-admin.component';

const routes: Routes = [
  {path:"user/login", component:LoginComponent},
  {path:"user/loginAdmin", component:LoginAdminComponent},
  {path:"", component:RegisterComponent},
  {path:"user/profile", component:ProfileComponent},
  {path:"user/showAllUser", component:ShowAllUserComponent},
  {path:"user/showSingleUser/:id", component:ShowSingleUserComponent},
  {path:"post/addPost", component:AddPostComponent},
  {path:"post/showAllPost", component:ShowAllPostComponent},
  {path:"post/showSinglePost/:id", component:ShowSinglePostComponent},
  // {path:"post/showAllPost", component:ShowAllPostComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
