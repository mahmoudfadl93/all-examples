import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../../models/form-field';

@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.scss']
})
export class DynamicFormInputComponent {

  @Input() input!: FormField<string>;
  @Input() form!: FormGroup;

  get isValid() { return this.form.controls[this.input.key].valid; }

}