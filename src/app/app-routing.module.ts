import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'd-form',
    loadChildren: () =>
      import('./dynamic-angular-json/dynamic-angular-json.module').then(
        (m) => m.DynamicAngularJsonModule
      ),
  },
  {
    path: 'd-table',
    loadChildren: () =>
      import('./dynamic-table/dynamic-table.module').then(
        (m) => m.DynamicTableModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
