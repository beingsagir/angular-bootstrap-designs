import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EcceptionComponent } from './ecceptions/ecception/ecception.component';

//const routes: Routes = [];
const routes: Routes = [
  { path: 'setting', component: AppComponent },
  { path: 'home',      component: AppComponent },
  {
    path: 'ok',
    component: AppComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: EcceptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
