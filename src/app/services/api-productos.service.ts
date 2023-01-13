import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Products} from './../model/products';
import { Router } from '@angular/router';
import { AuthApiService } from './../auth/servicio/auth-api.service';

@Injectable({
  providedIn: 'root'
})
export class ApiProductosService {

  public productos : Array<Products> = [];

  private URL_PRODUCTS :string = 'https://dummyjson.com/auth/products';

  private token : string = '';



  constructor(
    private servicioAuth : AuthApiService,
    public cliente : HttpClient,
    public router : Router
    ) {
   }

  public obtenerProductos(){
    this.cliente.get(this.URL_PRODUCTS,{
      headers:{
          'Authorization': 'Bearer ' + this.servicioAuth.obtenerToken,
          'Content-Type': 'application/json'
      }

    })
  }

   public obtenerToken(){
    return this.servicioAuth.obtenerToken

   }



}
