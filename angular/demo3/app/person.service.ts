import {Injectable} from '@angular/core';
import{Person} from './person';
@Injectable()
export class PersonService{
  parr=[new Person(12,"Kishori",12345),
    new Person(13,"Rajan",222222),
    new Person(14,"Revati",33333),new Person(15,"Anil",5555555)];
	getArr(){
	   return this.parr;
	}
	addParr(id:number,nm:string,sal:number){
	   let p=new Person(id,nm,sal);
       
	   this.parr.push(p);
       	   
		
	}
	updatePerson(p:Person){
		for(let i=0;i<this.parr.length;i++){
			if(this.parr[i].getId()==p.getId()){
				this.parr.splice(i,1,p)
				break;
			}
		}
		
	}
	deletePerson(p:Person){
		for(let i=0;i<this.parr.length;i++){
			if(this.parr[i].getId()==p.getId()){
				this.parr.splice(i,1);
				break;
			}
		}
		
		
	}
}