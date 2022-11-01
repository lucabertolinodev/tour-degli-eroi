import { Injectable } from '@angular/core';
import { fintiEroi } from './finti-eroi';

import { Eroe } from './eroe';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EroeService {

  getEroi():Observable<Eroe[]> {
    return of(fintiEroi);
  }
  constructor() { }
}
