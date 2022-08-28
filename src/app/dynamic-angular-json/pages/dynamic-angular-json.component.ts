import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormField } from '../models/form-field';
import { FormfieldControlService } from '../service/formfield-control.service';

@Component({
  selector: 'app-dynamic-angular-json',
  templateUrl: './dynamic-angular-json.component.html',
  styleUrls: ['./dynamic-angular-json.component.scss'],
})
export class DynamicAngularJsonComponent implements OnInit {
  formFields: Observable<FormField<any>[]>;
  constructor(service: FormfieldControlService) {
    this.formFields = service.getFormFields();
  }

  ngOnInit(): void {}
}
