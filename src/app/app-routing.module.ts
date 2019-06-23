import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { ListComponent } from './books/list/list.component';
import { NewComponent } from './books/new/new.component';

const routes: Routes = [
  { path: 'login', 
    component: LoginComponent 
  },
  { path: 'allbooks', 
    component: ListComponent 
  },
  { path: 'new', 
    component: NewComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
