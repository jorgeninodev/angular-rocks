import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Banda } from 'src/app/model/banda';
import { BandasService } from 'src/app/services/bandas.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-banda',
  templateUrl: './agregar-banda.component.html',
  styleUrls: ['./agregar-banda.component.css']
})
export class AgregarBandaComponent implements OnInit {

  forma:FormGroup;


  constructor(
              private formBuilder:FormBuilder,
              private bandasService:BandasService,
              private router:Router
              ) {

    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  //Getters para validar los campos

  get nombreNoValido(){
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }

  get origenNoValido(){
    return this.forma.get('origen').invalid && this.forma.get('origen').touched;
  }

  get miembrosNoValido(){
    return this.forma.get('miembros').invalid && this.forma.get('miembros').touched;
  }

  //Crear Formulario
  crearFormulario(){

    this.forma = this.formBuilder.group({

      nombre:['',Validators.required],
      origen:['', Validators.required],
      historia:[''],
      miembros:['', Validators.required],
      periodo:[''],
      sitioWeb:[''],
      foto:['assets/images/nofoto.png'],
      video:['https://www.youtube.com/embed/mcrFSxedmS0']
    })

  }

  //Guardar los datos de las bandas
  guardar(){
    console.log(this.forma);

    if(this.forma.invalid){

      return Object.values(this.forma.controls).forEach(control => {
        control.markAllAsTouched();
      });
    }
    //Inicializar el Objeto con los datos que vienen del formulario
    let banda:Banda ={
      id: Date.now(),
      nombre:this.forma.value.nombre,
      origen:this.forma.value.origen,
      historia:this.forma.value.historia,
      miembros:this.forma.value.miembros,
      periodo:this.forma.value.periodo,
      sitioWeb:this.forma.value.sitioWeb,
      foto:this.forma.value.foto,
      video:this.forma.value.video
    }

    this.bandasService.agregarBanda(banda);

    this.forma.reset();

    Swal.fire({
      icon: 'success',
      title: 'Guardado',
      text: 'Se ha guardo correctamente la banda',
    })
    this.router.navigateByUrl('/bandas');
  }

}
