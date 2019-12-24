import {Component} from '@angular/core';
import {PersonService} from '../person.service';
@Component({
   selector:'pform',
   templateUrl:'./pform.component.html'
   
})
export class PformComponent{
    pid:number;
	name:string;
	sal:number;
	flag=false;
	constructor(private ps:PersonService){}
	displayData(){
		this.flag=true;
		this.ps.addParr(this.pid,this.name,this.sal);
		
		
	}

}