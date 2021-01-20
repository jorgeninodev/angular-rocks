import { Component, OnInit } from '@angular/core';
import { Banda } from 'src/app/model/banda';
import { ActivatedRoute, Router } from '@angular/router';
import { BandasService } from 'src/app/services/bandas.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-banda-detalle',
  templateUrl: './banda-detalle.component.html',
  styleUrls: ['./banda-detalle.component.css']
})
export class BandaDetalleComponent implements OnInit {

  banda:Banda;

  constructor(
    private route:ActivatedRoute,
    private bandasService:BandasService,
    private router:Router

    ) { }

  ngOnInit(): void {

    this.getHero();
  }

  //Cargar una banda

  getHero():void{

    const id:number = +this.route.snapshot.paramMap.get('id');
    this.banda = this.bandasService.obtenerBanda(id)
  }

  borrarBanda(id:number){
    Swal.fire({
      title: '¿Deseas Eliminar Esta Banda?',
      text: "Seguro es muy buena banda",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar'
    }).then((result) => {
      if (result.value) {
        console.log(id);
        this.bandasService.borrarBanda(id);
        Swal.fire(
          'Eliminada!',
          `${this.banda.nombre} no sonara más!`,
          'success'
        )
        this.router.navigateByUrl('/bandas');
      }
    });


  }

}
