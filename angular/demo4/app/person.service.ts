import {Injectable} from '@angular/core';
import{Person} from './person';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable()
export class PersonService{
	constructor(private http:HttpClient){}
	
  parr=[new Person(12,"Kishori",12345),
    new Person(13,"Rajan",222222),
    new Person(14,"Revati",33333),new Person(15,"Anil",5555555)];
	getArr():Observable<Person[]>{
	   return this.http.get<Person[]>("http://localhost:3000/persons");
	}
	addParr(id:number,nm:string,sal:number){
		console.log("in add Person service");
	   let p:Person=new Person(id,nm,sal);
      	   
	   this.http.post("http://localhost:3000/persons",p,{header:new HttpHeaders({"Content-Type":"application/json"})});
       this.getArr();	   
		
	}
	updatePerson(p:Person){
		console.log("in add Person service");
	   	this.http.put("http://localhost:3000/persons/"+p.getId(),p,{header:new HttpHeaders({"Content-Type":"application/json"})});
       this.getArr();	   
		
	}
	deletePerson(p:Person){
	   console.log("in add Person service");
	   this.http.delete("http://localhost:3000/persons/"+p.getId());
       this.getArr();	   
		
		
	}
}