import { Component } from '@angular/core';


@Component({
   selector:'ptab',
   templateUrl:'./ptable.component.html',
   styleUrls:['./ptable.component.css']
})
export class PtableComponent{
    parr=[{id:12,name:"Kishori",sal:12345},
    {id:13,name:"Rajan",sal:222222},
    {id:14,name:"Revati",sal:33333}];
} 