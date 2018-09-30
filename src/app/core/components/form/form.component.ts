import { Component, OnInit, Input } from '@angular/core';
import { Form } from '../../../core/models';

@Component({
  selector: 'dyn-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input()
  form: Form;

  constructor() { }

  ngOnInit() {

  }
  
}
