import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from 'src/auth/auth.module';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'auth' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
