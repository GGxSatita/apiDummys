import { Component, OnInit } from '@angular/core';
import {ApiProductosService} from './../../services/api-productos.service';
import {Products} from './../../model/products';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  public productos : Array<Products> = [];


  constructor(
    public servicio : ApiProductosService
  ) { }

  ngOnInit() {
  }

  public ionViewWillEnter(){

  }

}
