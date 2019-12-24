import { Component } from '@angular/core';
import {PersonService} from '../person.service'
import{Person} from '../person';

@Component({
   selector:'ptab',
   templateUrl:'./ptable.component.html',
   styleUrls:['./ptable.component.css']
})
export class PtableComponent{
    parr:Person[];
	p1:Person;
	flag=false;
	
	constructor(private ps:PersonService){}//dependency injection
	ngOnInit(){
		this.parr=this.ps.getArr();
	}
	editPerson(p:Person){
		this.flag=true;
		this.p1=new Person(p.getId(),p.getName(),p.getSal());
		
	}
	updatePer(p:Person){
		this.ps.updatePerson(p);
		this.flag=false;
		
	}
	
} 