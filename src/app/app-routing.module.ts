import { ClientFormReactiveComponent } from './client-form-reactive/client-form-reactive.component';
import { FicheClientComponent } from './fiche-client/fiche-client.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './Model/client/client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '', component: ClientsComponent, pathMatch:'full'
},{
  path: 'clients', component: ClientsComponent, pathMatch:'full'
},{
  path: 'newClients', component: ClientFormReactiveComponent, pathMatch:'full'
},{
  path: 'fiche-client/:id', component: FicheClientComponent, pathMatch:'full'
},{
  path:'**', redirectTo:'/clients'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
