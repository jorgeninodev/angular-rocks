import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Rocks';

  constructor(
    private titulo:Title,
    private meta:Meta
    ){}

  //Añadir Titulo y MetaTags
    ngOnInit(): void {
      this.titulo.setTitle(this.title);
      this.meta.addTags([
        {name: 'keywords', content: 'Angular, Rock, Bandas'},
        {name: 'description', content: 'Angular Rocks'},
        {name: 'author', content: 'Jorge Niño'},
        {name: 'robots', content: 'index, follow'}
      ]);

    }
}
