
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vente } from '../model/vente.model';

const httpOptions = {
	headers : new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class VenteService {

    constructor(private http: HttpClient) { }

    private venteUrl = 'http://localhost:8081/ventes';

    public getVente() {
        return this.http.get(this.venteUrl);
    }

    public deleteVente(vente) {
        return this.http.delete(this.venteUrl + "/" + vente.id);
    }

    public createVente(vente) {
        return this.http.post(this.venteUrl, vente);
    }

    public updateVente(vente) {
        return this.http.put(this.venteUrl + "/" + vente.id, vente);
    }

    public searchVente(keyword) {
        return this.http.get(this.venteUrl + "/" + keyword);
    }
}