import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BandasComponent} from './components/bandas/bandas.component'
import {BandaDetalleComponent } from './components/banda-detalle/banda-detalle.component';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { AgregarBandaComponent } from './components/agregar-banda/agregar-banda.component';


//Rutas

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'bandas',component:BandasComponent},
  {path:'agregar',component:AgregarBandaComponent},
  {path:'detalle/:id',component:BandaDetalleComponent},
  {path:'buscar/:texto',component:BuscadorComponent},
  {path:'**', pathMatch:'full', redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
