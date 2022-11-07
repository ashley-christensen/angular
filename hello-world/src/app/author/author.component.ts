import { AuthorService } from './../author.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-author',
  template: `
  <h2>{{authors}}</h2>`,
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  authors;
  constructor(service: AuthorService) {
     this.authors = service.getAuthors();
   }
 
}
