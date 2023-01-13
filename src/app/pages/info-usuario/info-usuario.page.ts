import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.page.html',
  styleUrls: ['./info-usuario.page.scss'],
})
export class InfoUsuarioPage implements OnInit {

  public foto : string = '';
  public firstName : string = '';
  public lastName : string = '';
  public email : string = '';
  public gender : string = '';
  constructor(
    private activate : ActivatedRoute
  ) { }

  ngOnInit() {
    this.activate.params.subscribe(respuesta =>{
      this.foto = respuesta['image'],
      this.firstName = respuesta['firstName'],
      this.lastName = respuesta['lastName'],
      this.email = respuesta['email'],
      this.gender = respuesta ['gender']
    })
  }

}
