import { Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { AchatComponent } from './achat/achat.component';
import { VenteComponent } from './vente/vente.component';

export const appRoutes: Routes = [
  { path: 'clients',
    component: ClientComponent 
  },
  {
    path: 'achats',
    component: AchatComponent
  },
  {
    path: 'ventes',
    component: VenteComponent
  }
];