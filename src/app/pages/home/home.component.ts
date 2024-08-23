//angular
import { Component, OnInit, ViewChild } from '@angular/core';
//bootstrab
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {NgForm} from "@angular/forms";
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { generalService } from 'src/app/services/general.service';
import { NgFor } from '@angular/common';

import { NgbPaginationModule, NgbModalConfig  } from '@ng-bootstrap/ng-bootstrap';
//service

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
	imports: [NgbCarouselModule, FormsModule],
  styleUrls: ['./home.component.css']
})

export class HomePageComponent implements OnInit {
  contacto:any;
  page=4;
  message:any;
  modalId:any;
  modalName:any;
  constructor(
    private service:generalService, private Router:Router,
    config: NgbModalConfig,
		private modalService: NgbModal,
  ){
    config.backdrop = 'static';
		config.keyboard = false;
  }

  ngOnInit():void{
    this.allContacto();
  }

  provider(id:any=0){
      this.Router.navigate(['provider/'+id]);
  }

  allContacto(){
    this.service.getContactos().subscribe((response:any) => {
      this.contacto=response;

      console.log(this.contacto);

      //return this.Contacto;
      //console.log("respuesta ejecutada getReservation===>",this.getReservationResponse);
    },error =>{
      console.log(error)
    });
  }

  destroyProvider(id:any=0){
    if(id!=0){
      this.service.destroyContacto(id).subscribe((response:any) => {
        this.message=response.message;
        //return this.Contacto;
        //console.log("respuesta ejecutada getReservation===>",this.getReservationResponse);
        this.allContacto();
      },error =>{
        console.log(error)
      });
    }
  }
	open(content:any, id:any, name:any) {
    this.modalId=id;
    this.modalName=name;
		this.modalService.open(content);
	}
}

