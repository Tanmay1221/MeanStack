export class Person{
    private id:number;
	private name:string;
	private sal:number;
	constructor(id:number,nm:string,sal:number){
	   this.id=id;
	   this.name=nm;
	   this.sal=sal;
	}
	setId(id:number){
	this.id=id;
	}
	getId(){
	  return this.id;
	}
	setName(nm:string){
	this.name=nm;
	}
	getName(){
	  return this.name;
	}
	setSal(s:number){
	this.sal=s;
	}
	getSal(){
	  return this.sal;
	}
}