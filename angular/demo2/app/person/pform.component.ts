import {Component} from '@angular/core';

@Component({
   selector:'pform',
   templateUrl:'./pform.component.html'
   
})
export class PformComponent{
    pid:number;
	name:string;
	sal:number;
	flag=false;
	displayData(){
		this.flag=true;
		
	}

}