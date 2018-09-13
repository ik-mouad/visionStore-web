
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Achat } from '../model/achat.model';

const httpOptions = {
	headers : new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AchatService {

    constructor(private http: HttpClient) { }

    private achatUrl = 'http://localhost:8081/achats';

    public getAchat() {
        return this.http.get(this.achatUrl);
    }

    public deleteAchat(achat) {
        return this.http.delete(this.achatUrl + "/" + achat.id);
    }

    public createAchat(achat) {
        return this.http.post(this.achatUrl, achat);
    }

    public updateAchat(achat) {
        return this.http.put(this.achatUrl + "/" + achat.id, achat);
    }

    public searchAchat(keyword) {
        return this.http.get(this.achatUrl + "/" + keyword);
    }
}