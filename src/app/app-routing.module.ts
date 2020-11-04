import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorCodesComponent } from 'app/error-codes/error-codes.component';
import { RepairsComponent } from 'app/repairs/repairs.component';
import { SolutionsComponent } from 'app/solutions/solutions.component';

const routes: Routes = [
  {
    path: 'errorcodes',
    component: ErrorCodesComponent,
  }, {
    path: 'solutions',
    component: SolutionsComponent,
  }, {
    path: 'repairs',
    component: RepairsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
