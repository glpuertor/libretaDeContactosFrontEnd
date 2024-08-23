import { Component, HostListener } from '@angular/core';
import { Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'libretaDeContactosFrontEnd';

  navbarfixed:boolean = false;
  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 500)
    {
      this.navbarfixed = true;
    }
    else
    {
      this.navbarfixed = false;
    }
  }
  constructor(

  ){


  }

  ngOnInit(): void {
    //test



    //console.log("Date = " + date);
    /** spinner starts on init */
  }
}


