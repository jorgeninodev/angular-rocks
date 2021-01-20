import { Component, OnInit } from '@angular/core';
import { Banda } from 'src/app/model/banda';
import { BandasService } from 'src/app/services/bandas.service';

@Component({
  selector: 'app-bandas',
  templateUrl: './bandas.component.html',
  styleUrls: ['./bandas.component.css']
})
export class BandasComponent implements OnInit {

  bandas:Array<Banda> = [];

  constructor(private bandasService:BandasService) { }

  ngOnInit(): void {
    this.bandas = this.bandasService.obtenerBandas();
  }

}
