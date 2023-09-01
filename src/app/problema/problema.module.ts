import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProblemaPageRoutingModule } from './problema-routing.module';

import { ProblemaPage } from './problema.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProblemaPageRoutingModule
  ],
  declarations: [ProblemaPage]
})
export class ProblemaPageModule {}
