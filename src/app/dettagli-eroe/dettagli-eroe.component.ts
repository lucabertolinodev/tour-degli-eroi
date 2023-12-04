import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Eroe } from '../eroe';
import { EroeService } from '../eroe.service';

@Component({
  selector: 'app-dettagli-eroe',
  templateUrl: './dettagli-eroe.component.html',
  styleUrls: ['./dettagli-eroe.component.css']
})
export class DettagliEroeComponent implements OnInit {

  eroeDaVisualizzare!: Eroe;

  constructor(
    private servizioEroi: EroeService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.servizioEroi.getEroe(id).subscribe(eroe => this.eroeDaVisualizzare = eroe)
  }

}
