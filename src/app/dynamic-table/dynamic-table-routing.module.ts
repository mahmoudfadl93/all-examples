import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamciTablePageComponent } from './pages/dynamci-table-page/dynamci-table-page.component';

const routes: Routes = [
  {
    path: '',
    component: DynamciTablePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicTableRoutingModule {}
