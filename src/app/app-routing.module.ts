import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'index'
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then(m => m.IndexModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)
  },
  { path: 'products', loadChildren: () => import('./product-details/product-details.module').then(m => m.ProductDetailsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
