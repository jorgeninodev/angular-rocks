import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  titulo:string;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  buscarBanda(texto:string){
    console.log(texto);
    this.router.navigate(['/buscar',texto]);
  }

}
