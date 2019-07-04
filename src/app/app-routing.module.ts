import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductNewComponent } from './product/product-new/product-new.component';
import { HeroFightComponent } from './heros/hero-fight/hero-fight.component';
import { HeroIndexComponent } from './heros/hero-index/hero-index.component';
import { HeroGetComponent } from './heros/hero-get/hero-get.component';
import { HeroSetComponent } from './heros/hero-set/hero-set.component';

const routes: Routes = [
	{ path: 'products', component: ProductListComponent},
	{ path: 'products/new', component: ProductNewComponent },
	{ path: 'products/:id', component: ProductDetailComponent },
	{ path: 'products/:id/edit', component: ProductEditComponent },
	{ path: '', redirectTo: '/products', pathMatch: 'prefix'  },
	{ path: 'heros', component: HeroIndexComponent },
	{ path: 'heros/set', component: HeroSetComponent },
	{ path: 'heros/get', component: HeroGetComponent },
	{ path: 'heros/fight', component: HeroFightComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
