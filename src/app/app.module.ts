import { DataLocalService } from './services/data-local.service';
import { AppMaterialModule } from './app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './Model/client/client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientFormReactiveComponent } from './client-form-reactive/client-form-reactive.component';
import { DemoComponent } from './demo/demo.component';
import { FicheClientComponent } from './fiche-client/fiche-client.component'
import { HttpClientModule } from '@angular/common/http';
import { DataRestHttpService } from './services/data-rest-http.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientComponent,
    ClientFormComponent,
    ClientFormReactiveComponent,
    DemoComponent,
    FicheClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:'DataService', useClass:DataRestHttpService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
