import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductService } from '../../shared/services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { forviddenWordValidator } from '../../shared/validators/forvidden-word';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  productForm = this.fb.group({
    id: [''],
    name: ['', forviddenWordValidator('ぬるぽ')],
    price: ['', Validators.min(100)],
    description: [''],
  });

  constructor(
  	  private productService: ProductService,
  	  private router: Router,
      private route: ActivatedRoute,
      private fb: FormBuilder,
  	) { }

  get name() { return this.productForm.get('name'); }
  get price() { return this.productForm.get('price'); }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.productService.get(params['id']).subscribe((product: Product) => {
        this.productForm.setValue({
          id: product.id,
          name: product.name,
          price: product.price,
          description: product.description,
        });
      });
    });
  }

  saveProduct(): void {
    if (this.productForm.valid) {
      const { id, name, price, description } = this.productForm.getRawValue(); // <= 追加
      this.productService.update(new Product(id, name, price, description)).subscribe(() => {
        this.router.navigate(['/products', this.productForm.controls.id.value]);
      });
    };
  }

  deleteProduct(): void {
    if (window.confirm('本当に削除しますか？')) {
      const { id, name, price, description } = this.productForm.getRawValue();
      this.productService.delete(new Product(id, name, price, description)).subscribe(() => {
        this.router.navigate(['/products']);
      });
    }
  }
}
