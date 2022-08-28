import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicTableRoutingModule } from './dynamic-table-routing.module';
import { DynamciTablePageComponent } from './pages/dynamci-table-page/dynamci-table-page.component';
import { DynamciTableComponent } from './components/dynamci-table/dynamci-table.component';


@NgModule({
  declarations: [
    DynamciTablePageComponent,
    DynamciTableComponent
  ],
  imports: [
    CommonModule,
    DynamicTableRoutingModule
  ]
})
export class DynamicTableModule { }
