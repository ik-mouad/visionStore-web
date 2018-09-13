import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AchatService } from './achat.service';
import { Achat } from '../model/achat.model';
@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})

export class AchatComponent implements OnInit {
  title = 'Add achat';
  achats : any;
  achat : Achat= new Achat;
  createOrEdit : any;
  edit : any;
  keyword : any;

	constructor (private achatService : AchatService){
		
	}
    ngOnInit() {
      this.createOrEdit = false;
      this.achatService.getAchat()
        .subscribe(data => {
          this.achats = data;
        });
    };

    enregistrerAchat(achat: Achat): void {
      if(this.edit == false)
      {
        this.achatService.createAchat(achat)
          .subscribe( data => {
            this.achats.push(data);
        });      
      }
      else (this.edit == true)
      {
        this.achatService.updateAchat(achat)
        .subscribe(data => {
        });          
      }
      this.createOrEdit = false;
  };
	deleteAchat(achat: Achat): void {
    this.achatService.deleteAchat(achat)
      .subscribe( data => {
        this.achats = this.achats.filter(n => n !== achat);
      });
      this.createOrEdit = false;      
  };

  updateAchat(achat: Achat): void {
    this.achatService.updateAchat(achat)
      .subscribe(data => {
      });
  };

  editAchat(achat: Achat): void {
    this.achat = achat;
    this.createOrEdit = true;
    this.edit = true;
  }
  addAchat(): void {
    this.achat = new Achat;
    this.createOrEdit = true;
    this.edit = false;
  }
  annuler(): void {
    this.createOrEdit = false;
  }
  searchAchat(keyword: String): void {
    this.achatService.searchAchat(keyword)
      .subscribe(data => {
        this.achats = data;
      });
  }
};
