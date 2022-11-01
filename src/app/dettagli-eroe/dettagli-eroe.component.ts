import { Component, OnInit, Input } from '@angular/core';
import { Eroe } from '../eroe';

@Component({
  selector: 'app-dettagli-eroe',
  templateUrl: './dettagli-eroe.component.html',
  styleUrls: ['./dettagli-eroe.component.css']
})
export class DettagliEroeComponent implements OnInit {

  @Input() eroeDaVisualizzare!: Eroe;

  constructor() { }

  ngOnInit(): void {
  }

}
