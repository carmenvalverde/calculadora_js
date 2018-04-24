  var display=document.getElementById("display");
  var coma=0;
  var numero1=0;
  var numero2=0;
  var numero3=0;
  var operacion="";
  var resultado=0;
  var primerOp = false;
  var igual1 = false;
  

  var calculadora = {
  init:function(){
  
  document.getElementById("1").addEventListener ("mousedown",this.presion_tecla1);
  document.getElementById("1").addEventListener("mouseup", this.tamaño_tecla1);
  document.getElementById("2").addEventListener("mousedown", this.presion_tecla2);
  document.getElementById("2").addEventListener("mouseup", this.tamaño_tecla2);
  document.getElementById("3").addEventListener("mousedown", this.presion_tecla3);
  document.getElementById("3").addEventListener("mouseup", this.tamaño_tecla3);
  document.getElementById("4").addEventListener("mousedown", this.presion_tecla4);
  document.getElementById("4").addEventListener("mouseup", this.tamaño_tecla4);
  document.getElementById("5").addEventListener("mousedown", this.presion_tecla5);
  document.getElementById("5").addEventListener("mouseup", this.tamaño_tecla5);
  document.getElementById("6").addEventListener("mousedown", this.presion_tecla6);
  document.getElementById("6").addEventListener("mouseup", this.tamaño_tecla6);
  document.getElementById("7").addEventListener("mousedown", this.presion_tecla7);
  document.getElementById("7").addEventListener("mouseup", this.tamaño_tecla7);
  document.getElementById("8").addEventListener("mousedown",this. presion_tecla8);
  document.getElementById("8").addEventListener("mouseup", this.tamaño_tecla8);
  document.getElementById("9").addEventListener("mousedown", this.presion_tecla9);
  document.getElementById("9").addEventListener("mouseup", this.tamaño_tecla9);
  document.getElementById("0").addEventListener("mousedown", this.presion_tecla0);
  document.getElementById("0").addEventListener("mouseup", this.tamaño_tecla0);
  document.getElementById("punto").addEventListener("mousedown", this.presion_teclaPunto);
  document.getElementById("punto").addEventListener("mouseup", this.tamaño_teclaPunto);
  document.getElementById("sign").addEventListener("mousedown", this.presion_teclaNegativo);
  document.getElementById("sign").addEventListener("mouseup", this.tamaño_teclaNegativo);
  document.getElementById("on").addEventListener("mousedown", this.presion_teclaOn);
  document.getElementById("on").addEventListener("mouseup", this.tamaño_teclaOn);
  document.getElementById("raiz").addEventListener("mousedown", this.presion_teclaRaiz);
  document.getElementById("raiz").addEventListener("mouseup", this.tamaño_teclaRaiz);
  document.getElementById("mas").addEventListener("mousedown", this.presion_teclaSuma);
  document.getElementById("mas").addEventListener("mouseup", this.tamaño_teclaSuma);
   document.getElementById("menos").addEventListener("mousedown", this.presion_teclaResta);
  document.getElementById("menos").addEventListener("mouseup", this.tamaño_teclaResta);
  document.getElementById("por").addEventListener("mousedown", this.presion_teclaPor);
  document.getElementById("por").addEventListener("mouseup", this.tamaño_teclaPor);
  document.getElementById("dividido").addEventListener("mousedown", this.presion_teclaDivision);
  document.getElementById("dividido").addEventListener("mouseup", this.tamaño_teclaDivision);
  document.getElementById("igual").addEventListener("mousedown", this.presion_teclaIgual);
  document.getElementById("igual").addEventListener("mouseup", this.tamaño_teclaIgual);

  
 },
  
  presion_tecla1:function() {
    document.getElementById("1").style.width= "28.50%";
    document.getElementById("1").style.height= "63.51px";
      if (display.textContent=="0"){
            
           document.getElementById("display").innerHTML="1";
         }else if  (display.textContent.length  == 8 ){
          display.textContent = display.textContent ;
         } 
         else  {display.textContent = display.textContent +"1";
          }
       },
     
  
  tamaño_tecla1: function(){
        document.getElementById("1").style.width= "29%";
        document.getElementById("1").style.height= "62.91px";
             
    },

  

  presion_tecla2:function (){
      document.getElementById("2").style.width= "28.50%";
     document.getElementById("2").style.height= "63.51px";
        if (display.textContent=="0"){
           
           document.getElementById("display").innerHTML="2";
         }else if  (display.textContent.length  == 8 ){
            display.textContent = display.textContent ;
         } else { 
          display.textContent = display.textContent + "2";
         }
      },
  

  tamaño_tecla2:function() {
      document.getElementById("2").style.width= "29%";
      document.getElementById("2").style.height= "62.91px";
           
    },


  presion_tecla3 :function(){
     document.getElementById("3").style.width= "28.50%";
     document.getElementById("3").style.height= "63.51px";
        if (display.textContent=="0"){
          
           document.getElementById("display").innerHTML="3";
         }else if  (display.textContent.length  == 8 ){
            display.textContent = display.textContent ;  
         }else{
          display.textContent = display.textContent + "3";
         }
     },
  

   tamaño_tecla3 :function(){
     document.getElementById("3").style.width= "29%";
     document.getElementById("3").style.height= "62.91px";
         
    },

  presion_tecla4 :function(){
     document.getElementById("4").style.width= "22.50%";
     document.getElementById("4").style.height= "63.51px";
        if (display.textContent=="0"){
           
           document.getElementById("display").innerHTML="4";
           }else if  (display.textContent.length  == 8 ){
            display.textContent = display.textContent ;
         }else{
          display.textContent = display.textContent + "4";   
         }
      },
  

   tamaño_tecla4 :function(){
      document.getElementById("4").style.width= "22%";
      document.getElementById("4").style.height= "62.91px";
            
    },

  presion_tecla5 :function(){
     document.getElementById("5").style.width= "22.5%";
     document.getElementById("5").style.height= "63.51px";
        if (display.textContent=="0"){
          
           document.getElementById("display").innerHTML="5";
           }else if  (display.textContent.length  == 8 ){
            display.textContent = display.textContent ;
         }else{
          display.textContent = display.textContent + "5";
     
         }

    },
  

  tamaño_tecla5 :function(){
     document.getElementById("5").style.width= "22%";
     document.getElementById("5").style.height= "62.91px";
           
    },

  presion_tecla6 :function(){
      document.getElementById("6").style.width= "22.5%";
      document.getElementById("6").style.height= "63.51px";
        if (display.textContent=="0"){
           
           document.getElementById("display").innerHTML="6";
           }else if  (display.textContent.length  == 8 ){
            display.textContent = display.textContent ;
         }else{
          display.textContent = display.textContent + "6";
     
         }

    },
  

   tamaño_tecla6 :function(){
     document.getElementById("6").style.width= "22%";
     document.getElementById("6").style.height= "62.91px";
       
            
    },

  presion_tecla7 :function(){
      document.getElementById("7").style.width= "22.5%";
      document.getElementById("7").style.height= "63.51px";
        if (display.textContent=="0"){
            
           document.getElementById("display").innerHTML="7";
           }else if  (display.textContent.length  == 8 ){
            display.textContent = display.textContent ;
         }else{
          display.textContent = display.textContent + "7";
     
         }

    },
  

  tamaño_tecla7 :function(){
     document.getElementById("7").style.width= "22%";
     document.getElementById("7").style.height= "62.91px";
            
    },

  presion_tecla8 :function(){
      document.getElementById("8").style.width= "22.5%";
      document.getElementById("8").style.height= "63.51px";
        if (display.textContent=="0"){
          
           document.getElementById("display").innerHTML="8";
           }else if  (display.textContent.length  == 8 ){
            display.textContent = display.textContent ;
         }else{
          display.textContent = display.textContent + "8";
     
         }

    },
  

  tamaño_tecla8 :function(){
     document.getElementById("8").style.width= "22%";
     document.getElementById("8").style.height= "62.91px";
           
    },
        
  presion_tecla9 :function(){
     document.getElementById("9").style.width= "22.5%";
     document.getElementById("9").style.height= "63.51px";
        if (display.textContent=="0"){
          
           document.getElementById("display").innerHTML="9";
           }else if  (display.textContent.length  == 8 ){
            display.textContent = display.textContent ;
         }else{
          display.textContent = display.textContent + "9";
     
         }

    },
  

  tamaño_tecla9 :function(){
     document.getElementById("9").style.width= "22%";
     document.getElementById("9").style.height= "62.91px";
            
    },

  presion_tecla0 :function(){
     document.getElementById("0").style.width= "29.5%";
     document.getElementById("0").style.height= "63.51px";
        if (display.textContent=="0") {
           document.getElementById("display").innerHTML="0";
           }else if  (display.textContent.length  == 8 ){
            display.textContent = display.textContent ;
         }else{
        
          display.textContent = display.textContent + "0";
     
         }

    },
 

   tamaño_tecla0 :function(){
     document.getElementById("0").style.width= "29%";
     document.getElementById("0").style.height= "62.91px";
           
    },

   presion_teclaPunto :function(){
     document.getElementById("punto").style.width= "29.5%";
     document.getElementById("punto").style.height= "63.51px";
      x=".";
      
        if (display.textContent=="0" && x=="."){
           
           document.getElementById("display").innerHTML="0.";

           coma=1;
           
           } else if  (display.textContent.length== 8){
              display.textContent = display.textContent ;
           } else if (x=="." && coma==0){
             
             document.getElementById("display").innerHTML= display.textContent +".";
            coma =1;
           }
             else {
             display.textContent = display.textContent ;
            
              }         
    },
 
     
     tamaño_teclaPunto :function(){
        document.getElementById("punto").style.width= "29%";
        document.getElementById("punto").style.height= "62.91px";
              
    },
  
    presion_teclaNegativo :function(){
      document.getElementById("sign").style.width= "22.5%";
      document.getElementById("sign").style.height= "63.51px";
      
        if (display.textContent!="0") {
          n1=parseFloat(display.textContent);
          n1=-n1;
          n2=String(n1);
         document.getElementById("display").innerHTML=n2;
        
         }
     },
 

    tamaño_teclaNegativo :function(){
     document.getElementById("sign").style.width= "22%";
     document.getElementById("sign").style.height= "62.91px";
          
    },

    presion_teclaOn :function(){
      document.getElementById("on").style.width= "22.5%";
      document.getElementById("on").style.height= "63.51px";
      coma = 0;
        if (display.textContent!="0") {
         
         document.getElementById("display").innerHTML="0";
          numero1=0;
          numero2=0;
          resultado=0;
         display.textContent="0"; 
          primerOp = false;
          operacion = "";
          igual1=false;
         }
     },
 

   tamaño_teclaOn :function(){
      document.getElementById("on").style.width= "22%";
      document.getElementById("on").style.height= "62.91px";
          
    },

   presion_teclaRaiz:function(){
    document.getElementById("raiz").style.width= "22.5%";
     document.getElementById("raiz").style.height= "63.51px";
      
     },
 

   tamaño_teclaRaiz:function(){
      document.getElementById("raiz").style.width= "22%";
      document.getElementById("raiz").style.height= "62.91px";
          
    },

   presion_teclaSuma :function(){
      igual1 = false;
      document.getElementById("mas").style.width= "91.5%";
      document.getElementById("mas").style.height= "100%";
      if (primerOp == false){
      numero1= display.textContent;
      operacion="+";
      primerOp = true;
    }
      else {numero2=display.textContent;
      numero1=resolver2();
      operacion="+";
      
      }
      
    limpiar();

     },
 

    tamaño_teclaSuma :function(){
      document.getElementById("mas").style.width= "90%";
      document.getElementById("mas").style.height= "98%";
          
    },

     presion_teclaResta :function(){
      igual1 = false;
      document.getElementById("menos").style.width= "22.5%";
      document.getElementById("menos").style.height= "63.51px";
      if (primerOp == false){
      numero1=display.textContent;
      operacion="-";
      primerOp = true;
    }
      else {numero2=display.textContent;
      numero1=resolver2();
      operacion="-";
      
      document.getElementById("display").innerHTML=numero1;

      }
       
      limpiar();  

     },
 

   tamaño_teclaResta :function(){
     document.getElementById("menos").style.width= "22%";
     document.getElementById("menos").style.height= "62.91px";
          
    },


     presion_teclaPor:function(){
      igual1 = false;
      document.getElementById("por").style.width= "22.5%";
      document.getElementById("por").style.height= "63.51px";
      if (primerOp == false){
      numero1=display.textContent;
      operacion="*";
      primerOp = true;
    }
      else {numero2=display.textContent;
      numero1=resolver2();
      operacion="*";
      
      }
     limpiar();    

     },
 

    tamaño_teclaPor :function(){
      document.getElementById("por").style.width= "22%";
      document.getElementById("por").style.height= "62.91px";
          
    },

  presion_teclaDivision :function(){
      igual1 = false;
      document.getElementById("dividido").style.width= "22.5%";
      document.getElementById("dividido").style.height= "63.51px";
      if (primerOp == false){
      numero1=display.textContent;
      operacion="/";
      primerOp = true;
    }
      else {numero2=display.textContent;
      numero1=resolver2();
      operacion="/";
      
      }
     limpiar();
     
     },
 

  tamaño_teclaDivision :function(){
     document.getElementById("dividido").style.width= "22%";
     document.getElementById("dividido").style.height= "62.91px";
          
    },

    presion_teclaIgual :function(){
      document.getElementById("igual").style.width= "29.5%";
      document.getElementById("igual").style.height= "63.51px";
     if (operacion == "" ){
         if (display.textContent != 0){
         document.getElementById("display").innerHTML= display.textContent; 
         return;
       }
         else {document.getElementById("display").innerHTML= 0 ;
         return;
          }
        }
         
         
      if ( igual1 == false){
        numero2 = display.textContent;
        igual1 = true;
      }
       
      
      numero1= resolver2();
      
      document.getElementById("display").innerHTML=numero1;
   
      primerOp= false;
      coma=1;
     },
 

  tamaño_teclaIgual:function(){
     document.getElementById("igual").style.width= "29%";
     document.getElementById("igual").style.height= "62.91px";
          
    },

};
    
   function limpiar(){
     
    document.getElementById("display").innerHTML=""; 
    coma =0;      

   }

   function resolver2(){
   
    switch (operacion) {
       
       case "+":
         resultado= parseFloat(numero1)+ parseFloat(numero2);
         
         
         if (resultado>9999999 ){
          resultado=resultado.toExponential(4);

         }
         if (resultado<0){
         
          numero1=numero1.toFixed(6);
          numero2=numero2.toFixed(6);
          resultado= parseFloat(numero1)+ parseFloat(numero2);
         
         }
          
         return resultado;
   
       case "-":
         resultado= parseFloat(numero1) - parseFloat(numero2);
           
         if (resultado>99999999){
          resultado=resultado.toExponential(4);
        }
        
         return resultado;
        

       case "*":
         resultado= parseFloat(numero1)* parseFloat(numero2);
           
           if (resultado>9999999){
          resultado=resultado.toExponential(4);
          }else {
            resultado=resultado.toString();
             resultado=resultado.substring(0,8);
         resultado=parseFloat(resultado);
          
          }
          if (resultado[0]=="0"){
           resultado=resultado.toString();
         resultado=resultado.substring(0,8);
         resultado=parseFloat(resultado);
          
         }
      
         return resultado;

       case "/":
         resultado= parseFloat(numero1)/ parseFloat(numero2);
         resultado=resultado.toString();
         resultado=resultado.substring(0,8);
         resultado=parseFloat(resultado);
          
         return resultado;
         
     default:
     
   }
   primerOp = true;
     
 }

calculadora.init();

