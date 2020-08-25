import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';
import { MaterialsModule } from '../core/materisl.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    FormsModule,
    MaterialsModule,
    MDBBootstrapModule
  ]
})
export class ProductDetailsModule { }
