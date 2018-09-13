import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routerConfig';
import { AppComponent } from './app.component';
import { AchatComponent } from './achat/achat.component';
import { VenteComponent } from './vente/vente.component';
import { ClientComponent } from './client/client.component';
import { ClientService } from './client/client.service';
import { VenteService } from './vente/vente.service';
import { AchatService } from './achat/achat.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AchatComponent,
    VenteComponent,
    ClientComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [ClientService, AchatService, VenteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

