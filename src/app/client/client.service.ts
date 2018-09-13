
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../model/client.model';

const httpOptions = {
	headers : new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ClientService {

    constructor(private http: HttpClient) { }

    private clientUrl = 'http://localhost:8081/clients';

    public getClient() {
        return this.http.get(this.clientUrl);
    }

    public deleteClient(client) {
        return this.http.delete(this.clientUrl + "/" + client.id);
    }

    public createClient(client) {
        return this.http.post(this.clientUrl, client);
    }

    public updateClient(client) {
        return this.http.put(this.clientUrl + "/" + client.id, client);
    }

    public searchClient(keyword) {
        return this.http.get(this.clientUrl + "/" + keyword);
    }
}