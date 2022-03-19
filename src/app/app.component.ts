import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
     @ViewChild(MatSidenav) 
     Sidenav!: MatSidenav;
     constructor(private observer:BreakpointObserver){

   }
   ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if(res.matches){
        this.Sidenav.mode = 'over';
        this.Sidenav.close();
      
      }else{
        this.Sidenav.mode = 'side';
        this.Sidenav.open();
      }

    });
   }
  }