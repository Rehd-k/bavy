import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from '../core/materisl.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    FlexLayoutModule,
    MaterialsModule,
    MDBBootstrapModule
  ]
})
export class IndexModule { }
