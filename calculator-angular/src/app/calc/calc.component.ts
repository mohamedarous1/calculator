import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NONE_TYPE } from '@angular/compiler';
@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  display :string = "0";
  var1 : boolean = true;
  var2 : boolean = false;
  number1 : string = "";
  number2 : string = "";
  operater : string = "none";
  display2 : string = "";
  temp : boolean = true;
  dot1 : boolean = false ;
  dot2 : boolean = false;
  output: string = "";
  constructor(private service : HttpClient) { }

  ngOnInit(): void {
  }

  setnum(n : number){
    if((this.display == "0"||this.display == "E")&& this.var1 == true){
      
      this.number1 = n.toString();
    }  
    else if(this.var1){
      
      this.number1 += n.toString();
    }else if((this.display == "x"||this.display == "/"|| this.display == "-" || this.display == "+" )&&this.var2 == true){
      
      this.number2 += n.toString();
    }else{
      
      this.number2 += n.toString();
    }
    this.show();
  }

  clear(){
    this.display = "0";
    this.var1 = true;
    this.var2 = false;
    this.number1 = "";
    this.number2 = "";
    this.operater = "none";
  }

  del(){
    if(this.display =="0")
      return;
    if(this.var1 && this.operater == "none"){
      this.display = this.display.slice(0,-1);
      this.number1 = this.number1.slice(0,-1);
      if(this.display == ""){
        this.display = "0";
      }
    }else if(this.number2 == ""){
      this.display = this.number1;
      this.operater = "none";
      this.var1 = true;
      this.var2 = false;
    }
    else{
      this.display = this.display.slice(0,-1);
      this.number2 = this.number2.slice(0,-1);
      if(this.number2 == ""){
        this.display = this.display2;
      }
    }
  }

  show(){
    if(this.number1 == ""){
      this.display ="0";
    }else{
      this.display = this.number1 ;
      if(this.operater == "none"){
        return;
      }else{
        this.display += this.display2;
        if(this.number2==""){
          return ;
        }else{
          this.display += this.number2;
        }
      }
    }
  }

  set_dot(){
    if(this.var1){
      if(this.dot1){
        return;
      }else{
        this.number1 += '.';
      }
    }else{
      if(this.dot2){
        return ;
      }else{
        this.number2 += '.'
      }
    }
    this.show();
  }

  set_operation(operation : string ){
    if(this.number1 == ""){
      return;
    }
    if(operation=="equal"){
      if(this.number2==""){
        return;
      }
      this.evalute(this.operater , this.number1 , this.number2, false );
      return ;
    }
    
    if(operation == "sqrt" || operation == "invert" || operation == "percintile" 
        || operation == "multi-inverse" 
        || operation == "square" ){
          
      if(this.var1){
        this.evalute(operation,this.number1 , "4",false);
      }else{
        this.evalute(operation,this.number2, this.number1,true);
      }
      return;
    }
    if(this.operater != "none"){
      if(this.number2==""){
        return;
      }
      this.evalute(this.operater,this.number1 , this.number2, false);
    }
    
    this.operater = operation ;
    if(operation == "add"){
      this.display2 = "+";
    }else if( operation == "division"){
      this.display2= "/";
    }else if(operation == "sub"){
      this.display2 = "-";
    }else{
      this.display2 = "*";
    }

    this.show();
    this.var1 =  false;
    this.var2 = true;
    console.log(this.display);

  }

  evalute(op: string,n1 : string , n2 : string , t : boolean){
  
    if(this.number1==""){
      return ;
    }
    this.service.get('http://localhost:8080/spring/do_operation' ,
     {
      responseType : 'text',

      params:{
        operation : op,
        num1 : n1,
        num2 : n2,

      },
      observe: 'response',
     }

    ).subscribe(response =>{
      console.log(response.body + "");
      if(response.body+"" == "E"){
        this.display = "E";
        this.number1 = "";
        this.operater = "none";
        this.number2 = "";
        this.var1 = true;
        this.var2 = false;
      }
      if(t){
        this.number2 = response.body+"";
      }else{
        this.number1 = response.body+"";
        this.operater = "none";
        this.number2 = "";
        this.var1 = true;
        this.var2 = false;
      }
      this.show();
      this.temp = false;
    });

    


  }


}
