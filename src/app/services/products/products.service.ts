import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Mainproduct} from '../../modals/products'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<Mainproduct[]>{
     return this.httpClient.get<Mainproduct[]>("http://localhost:3000/products")
  }
  getProduct(id:Number):Observable<Mainproduct>{
     return this.httpClient.get<Mainproduct>(`http://localhost:3000/products/${id}`)
  }
  UpdateProduct(id:Number,newProd:Mainproduct):Observable<Mainproduct>{
     return this.httpClient.patch<Mainproduct>(`http://localhost:3000/products/${id}`,newProd)
  }
  deleteProduct(id:Number):Observable<Mainproduct>{
     return this.httpClient.delete<Mainproduct>(`http://localhost:3000/products/${id}`)
  }
}

