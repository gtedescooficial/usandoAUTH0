import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PrecosComponent } from './components/precos/precos.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: 'prices', component: PrecosComponent},
  {
    path: 'protected',
    component: ProtegidaComponent,
    canActivate: [ AuthGuard]
},
  { path: '**', pathMatch:'full', redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
