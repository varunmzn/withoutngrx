import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }      from './home/home.component';
import { AuthGuard } from './auth/auth.guard';

// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })

const routes: Routes = [
  // { 
  //   path: 'test', 
  //   component: TestComponent 
  // },
  {
    path: 'login',
    loadChildren: './user/sign-in/sign-in.module#SignInModule',
    data: {
      layoutName:'default'
    }
  },
  {
    path: 'signup',
    loadChildren: './user/sign-up/sign-up.module#SignUpModule',
    data: {
      layoutName:'default'
    }
  },
  {
    path: 'home',
    component: HomeComponent , canActivate: [AuthGuard],
    // loadChildren: './user/sign-up/sign-up.module#SignUpModule',
    data: {
      layoutName:'layoutOne'
    }
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, 
    // { useHash: true,onSameUrlNavigation: 'reload' }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }