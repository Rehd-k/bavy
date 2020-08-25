import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { MaterialsModule } from '../core/materisl.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MaterialsModule,
    FormsModule
  ]
})
export class CategoriesModule { }
