import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificheService {

  notifiche: string[] = [];

  aggiungiNotifica(notifica: string):void{
    this.notifiche.push(notifica);

  }
  cancellaNotifiche():void{
    this.notifiche =[];
  }

  constructor() { }
}
