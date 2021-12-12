import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'concepts', 
    loadChildren: () => import('./concepts/concepts.module').then(m => m.ConceptsModule) },  
  { path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule) },
  // wildcard routes
  { path: '' , redirectTo:'/welcome', pathMatch:'full' },
  { path: '**', redirectTo:'/welcome', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
