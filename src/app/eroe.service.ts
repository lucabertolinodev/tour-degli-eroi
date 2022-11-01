import { Injectable } from '@angular/core';
import { fintiEroi } from './finti-eroi';

import { Eroe } from './eroe';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { NotificheService } from './notifiche.service';

@Injectable({
  providedIn: 'root'
})
export class EroeService {

  getEroi():Observable<Eroe[]> {
    this.notifiche.aggiungiNotifica('Eroi Aggiunti!');
    return of(fintiEroi);
  }
  constructor(private notifiche:NotificheService) { }
}
