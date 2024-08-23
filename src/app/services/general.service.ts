//angular
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpErrorResponse, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
//import {HttpErrorResponse} from '@angular/common/http';
//services
//component
import {API} from '../../environments/api';

@Injectable({
  providedIn: 'root'
})

export class generalService {

  constructor(private router: Router,
    private http:HttpClient,
) { }



  getContacto(id:number) {
      return this.http.get( API.SERVER + API.GET_CONTACTO+"id="+id);
  }

  getContactos() {
    console.log( API.SERVER + API.GET_CONTACTOS)
    return this.http.get( API.SERVER + API.GET_CONTACTOS);
  }

  createContacto(data: any) {
    console.log("create Contacto")
    const body = new HttpParams()
      .set('name', data.name)
      .set('email', data.email)
      .set('phone', data.phone)
      .set('description', data.description)
      .set('status', data.status)
    ;

    return this.http.post( API.SERVER + API.POST_CREATECONTACTOS, body);
  }

  updateContacto(data: any) {
    const body = new HttpParams()
      .set('name', data.name)
      .set('email', data.email)
      .set('phone', data.phone)
      .set('description', data.description)
      .set('status', data.status)
    ;
    return this.http.put( API.SERVER + API.PUT_CONTACTO+data.id, body);
  }

  updateStatus(id:number) {
    const body = new HttpParams()
      .set('status', 0)
    ;

    return this.http.put( API.SERVER + API.PUT_CONTACTO+id, body);
  }


  destroyContacto(id:number) {
    return this.http.delete( API.SERVER + API.DELETE_CONTACTO+id);
  }

}
