import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  expression:string = "0";
  disablebButton:boolean = false;

  calculate():void{
    try{
      this.expression = eval(this.expression);

      if(this.expression == "Infinity"){
        this.expression = eval("Cannot divide by zero");
        this.disablebButton = true;
      } 
      
    }
    catch(e:any){
      this.disablebButton = true;
      this.expression = e.message;
    }
  }

  clear():void{
    this.disablebButton = false;
    this.expression = "0";
  }

  addOperation(value:string):void{

    let hasOperator:boolean = ['+','-','*','/'].includes(this.expression[this.expression.length-1]);

    if(hasOperator){
      this.expression = this.expression.slice(0,this.expression.length-1)+value;
    }else{
      this.expression += value;
    }
  }

  addNumber(value:string):void{
    if(this.expression == "0"){
      this.expression = value;
    }else{
      this.expression += value;
    } 
  }

}
