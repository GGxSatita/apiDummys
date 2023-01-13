import { Component } from '@angular/core';
import { AuthApiService } from './../auth/servicio/auth-api.service';
import {Router} from '@angular/router'
import {FormBuilder, FormGroup, Validator} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})
export class HomePage {

  public name : string = '';
  public password : string = '';

  constructor(
    public prueba: AuthApiService,
    public fb : FormBuilder
  ) {}
  public ingresar(){
    this.prueba.authenticate({
      username: this.name,
      password:  this.password
    })
  }

  public validarToken(){
    return
  }

}
