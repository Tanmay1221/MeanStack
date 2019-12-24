import { Component } from '@angular/core';
import {PersonService} from '../person.service';
import{Person} from '../person';

@Component({
 selector:'plist',
 templateUrl:'./plist.component.html',
 styleUrls:['./plist.component.css']

})
export class PlistComponent{
    parr:Person[];
	constructor(private ps:PersonService){}
	ngOnInit(){
		this.ps.getArr().subscribe((s)=>{this.parr=s;});
	}
}