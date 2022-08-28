import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../../models/form-field';
import { FormfieldControlService } from '../../service/formfield-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {


  @Input() formFields: FormField<string>[] | null= [];
  form!: FormGroup;
  payLoad = ' ';

  constructor(private formfieldService: FormfieldControlService) { }

  ngOnInit(): void {
    this.form = this.formfieldService.toFormGroup(this.formFields!);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }


}
