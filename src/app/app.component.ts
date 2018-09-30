import { Component } from '@angular/core';
import { Form } from "./core/models";
import entities from "../assets/mock.data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: Form = entities[0].forms[0];

  constructor() {
    //console.log(entities);    
  }

  
}
