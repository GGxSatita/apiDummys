import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Auth, AuthResponse }  from './../../model/auth';
import { AlertController } from '@ionic/angular';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  private URL_AUTH: string = 'https://dummyjson.com/auth/login';

  private datosUsuario: AuthResponse | null | Observable<null> = null;
  private cargando: boolean = false;

  public token : string = '';


  constructor(
    private client: HttpClient,
    private alert: AlertController,
    private router : Router
  ) { }

  public authenticate({ username, password}: Auth){
    this.cargando = true;
    this.client.post<AuthResponse>(this.URL_AUTH,{
      username,
      password
    }, {
      headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer /* YOUR_TOKEN_HERE */', //esto va en el servicio de productos, y se utiliza metodo get

      }
    })
    .pipe(
      catchError(async (error: HttpErrorResponse)=>{
        if(error.status === 400){
          const alerta = await this.alert.create({
            header: 'Usuario o contraseña incorectos',
            buttons: [
              {
                text: 'ok!',
                role: 'confirm'
              }
            ]
          });
          await alerta.present();
        }
        this.cargando = false;
        return null;
        // return of(null);
      })
    )
    .subscribe(async (datos)=>{
      this.cargando = false;
      if(datos){
        this.datosUsuario = datos;
        if(datos){
          this.router.navigate([
            'info-usuario',
            this.datosUsuario?.image,
            this.datosUsuario.firstName,
            this.datosUsuario.lastName,
            this.datosUsuario.email,
            this.datosUsuario.gender
          ])
        }
      }
      // La redirección

    })
  }

  public obtenerDatosUsuario(){
    return this.datosUsuario;
  }

  public obtenerCargando(){
    return this.cargando;
  }

  public obtenerToken(){
    return (this.datosUsuario as AuthResponse).token
  }



}
