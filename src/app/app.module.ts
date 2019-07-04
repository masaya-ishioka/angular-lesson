import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductNewComponent } from './product/product-new/product-new.component';
import { HeroGetComponent } from './heros/hero-get/hero-get.component';
import { HeroFightComponent } from './heros/hero-fight/hero-fight.component';
import { HeroSetComponent } from './heros/hero-set/hero-set.component';
import { HeroIndexComponent } from './heros/hero-index/hero-index.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductNewComponent,
    HeroGetComponent,
    HeroFightComponent,
    HeroSetComponent,
    HeroIndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <- ここを追加
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }