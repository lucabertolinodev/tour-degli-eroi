import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EroiComponent } from './eroi/eroi.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DettagliEroeComponent } from './dettagli-eroe/dettagli-eroe.component';

const routes: Routes = [
  {path:'', redirectTo:'/dashboard',pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'eroi', component:EroiComponent},
  {path:'dettagli/:id', component:DettagliEroeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
