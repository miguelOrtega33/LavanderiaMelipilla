import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProblemaPage } from './problema.page';

const routes: Routes = [
  {
    path: '',
    component: ProblemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProblemaPageRoutingModule {}
