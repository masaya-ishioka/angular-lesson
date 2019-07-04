import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs/index';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    body: null,
  };

  constructor(
    private http: HttpClient,
    ) { }

  list(): Observable<Product[]> {
  	return this.http.get('http://localhost:3001/items/', this.httpOptions).pipe(
      map((response: any) =>
        Object.keys(response).map((key: string) =>{
          const prd = response[key];
          return new Product(prd.id, prd.name, prd.price, prd.description);
        })
      )
    );
  }

  get(id: number): Observable<Product> {
    	return this.http.get(`http://localhost:3001/items/${id}`, this.httpOptions).pipe(
        map((response: any) => {
          return new Product( id, response.name, response.price, response.description);
        })
      );
  }

  create(product: Product): Observable<void> {
    return this.http.post('http://localhost:3001/items/', product, this.httpOptions).pipe(
       map(() => {}),
      );
  }

  update(product: Product): Observable<void> { // <= 追加
    return this.http.patch(`http://localhost:3001/items/${product.id}`, {
       id: product.id,
       name: product.name,
       price: product.price,
       description: product.description
     }, this.httpOptions).pipe(
        map(() => {})
      );
  }

  delete(product: Product): Observable<void> {
    return this.http.delete(`http://localhost:3001/items/${product.id}`, this.httpOptions).pipe(
        map((response: any) => {}),
      );
  }
}
