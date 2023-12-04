import { Component, OnInit } from '@angular/core';
import { EroeService } from '../eroe.service';
import { Eroe } from '../eroe';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  miglioriEroi!: Eroe[];

  constructor(private eroiServizio:EroeService) { }

  ngOnInit(): void {
    this.eroiServizio.getEroi().subscribe(
      eroi => this.miglioriEroi =eroi.slice(1,4)
    )
  }

}
