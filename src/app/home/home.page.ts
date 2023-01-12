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

  constructor(
    public prueba: AuthApiService,
    public fb : FormBuilder
  ) {}
  public probarLogin(){
    this.prueba.authenticate({
      username: 'kminchelle',
      password: '0lelplR'
    })
  }

  public validarToken(){

  }

}
