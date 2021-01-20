import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandasComponent } from './bandas/bandas.component';
import { BandaDetalleComponent } from './banda-detalle/banda-detalle.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { AgregarBandaComponent } from './agregar-banda/agregar-banda.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DomseguroPipe } from '../pipes/domseguro.pipe';



@NgModule({
  declarations: [
    BandasComponent,
    BandaDetalleComponent,
    NavbarComponent,
    HomeComponent,
    BuscadorComponent,
    AgregarBandaComponent,
    DomseguroPipe


  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  exports:[
    BandasComponent,
    BandaDetalleComponent,
    NavbarComponent,
    HomeComponent,
    BuscadorComponent,
    AgregarBandaComponent
  ]
})
export class ComponentesModule { }
