import { Component } from '@angular/core';

@Component({
  selector: 'additionpage',
 templateUrl: './do-maths.component.html',
  styleUrls: ['./do-maths.component.css']
})
export class DoMathsComponent {
custname:string="Anita";

//property
firstNumber:number;
secondNumber:number;
imagePath:string='favicon.ico';


//using this property for attribute binding
Myanswer:number=100;


myinputvalue:string;

addclicked() {
 console.log("add clicked");
 console.log(this.firstNumber);
 console.log(this.secondNumber);
 let answervalue:number=this.firstNumber + this.secondNumber;
 console.log(answervalue);
 
 
}

subtractclicked($event:any){
console.log(this.myinputvalue);

  console.log($event.target);//event info means what is the html element where the event is attached
console.log("subtract clicked");
alert("subtract clicked");


}

}
