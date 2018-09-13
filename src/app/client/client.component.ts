import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ClientService } from './client.service';
import { Client } from '../model/client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  title = 'Add client';
  clients : any;
  client : Client= new Client;
  createOrEdit : any;
  edit : any;
  keyword : any;

	constructor (private clientService : ClientService){
		
	}
    ngOnInit() {
      this.createOrEdit = false;
      this.clientService.getClient()
        .subscribe(data => {
          this.clients = data;
        });
    };

    enregistrerClient(client: Client): void {
      if(this.edit == false)
      {
        this.clientService.createClient(client)
          .subscribe( data => {
            this.clients.push(data);
        });      
      }
      else (this.edit == true)
      {
        this.clientService.updateClient(client)
        .subscribe(data => {
        });          
      }
      this.createOrEdit = false;
  };
	deleteClient(client: Client): void {
    this.clientService.deleteClient(client)
      .subscribe( data => {
        this.clients = this.clients.filter(n => n !== client);
      });
      this.createOrEdit = false;      
  };

  updateClient(client: Client): void {
    this.clientService.updateClient(client)
      .subscribe(data => {
      });
  };

  editClient(client: Client): void {
    this.client = client;
    this.createOrEdit = true;
    this.edit = true;
  }
  addClient(): void {
    this.client = new Client;
    this.createOrEdit = true;
    this.edit = false;
  }
  annuler(): void {
    this.createOrEdit = false;
  }
  searchClient(keyword: String): void {
    this.clientService.searchClient(keyword)
      .subscribe(data => {
        this.clients = data;
      });
  }
};