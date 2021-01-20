import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Banda } from 'src/app/model/banda';
import { BandasService } from 'src/app/services/bandas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  bandas:Array<Banda> = [];

  constructor(
              private route:ActivatedRoute,
              private bandasService:BandasService
              ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params =>{
      console.log(params['texto']);
      this.bandas = this.bandasService.buscarBanda(params['texto']);
      console.log(this.bandas);

    });
  }

}
