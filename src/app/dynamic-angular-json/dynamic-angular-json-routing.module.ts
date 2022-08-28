import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicAngularJsonComponent } from './pages/dynamic-angular-json.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicAngularJsonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicAngularJsonRoutingModule {}
