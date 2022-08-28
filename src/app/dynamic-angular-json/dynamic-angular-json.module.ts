import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicAngularJsonRoutingModule } from './dynamic-angular-json-routing.module';
import { DynamicFormInputComponent } from './component/dynamic-form-input/dynamic-form-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './component/dynamic-form/dynamic-form.component';
import { DynamicAngularJsonComponent } from './pages/dynamic-angular-json.component';

@NgModule({
  declarations: [
    DynamicFormInputComponent,
    DynamicFormComponent,
    DynamicAngularJsonComponent,
  ],
  imports: [
    CommonModule,
    DynamicAngularJsonRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class DynamicAngularJsonModule {}
