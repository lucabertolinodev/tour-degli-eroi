import { Component, OnInit } from '@angular/core';
import {Eroe} from '../eroe';
import { fintiEroi } from '../finti-eroi';
import { EroeService } from '../eroe.service';
import { Subscription } from 'rxjs';
import { NotificheService } from '../notifiche.service';

@Component({
  selector: 'app-eroi',
  templateUrl: './eroi.component.html',
  styleUrls: ['./eroi.component.css']
})
export class EroiComponent implements OnInit {

  eroi! : Eroe[];
  subscription!: Subscription;
  
  eroeSelezionato!: Eroe;

  onSelect(eroe:Eroe):void {
    this.eroeSelezionato = eroe;
    this.notifiche.aggiungiNotifica(`Aggiunto Eroe ID:${eroe.id}`);
  }

  constructor(
    private eroeService:EroeService, 
    private notifiche:NotificheService
    ) { }

  ngOnInit(): void {
    this.subscription = this.eroeService.getEroi().subscribe(
      eroi => this.eroi =eroi);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }  
}
