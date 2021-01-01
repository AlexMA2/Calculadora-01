/*
    Author = Alex
    Version = 1.0.1.
    Name = CalculatorJavaScript
*/

var huboOperacion = false;
var variable = false;
var operacion = "";
var valor = 0;

function display_num(num){
    if(operacion!=""){                                      
        if(!variable){           
            document.getElementById("display").value = num
            variable = true;
        }
        else{
            document.getElementById("display").value +=num;
        }
        
    }
    else{
        if(huboOperacion == true){
            document.getElementById("display").value = num;
            huboOperacion = false;
        }
        else{
            document.getElementById("display").value +=num;
        }        
    }
    
}

function clearScreen(){
    document.getElementById("display").value = "";
}

function operar(){
    huboOperacion = true;
    if(operacion=="sumar"){
        document.getElementById("display").value = Number(document.getElementById("display").value) + Number(valor);
        operacion="";
    }
    if(operacion=="restar"){
        document.getElementById("display").value = Number(valor) - Number(document.getElementById("display").value) ; //CASO ESPECIAL
        operacion="";
    }
    if(operacion=="multiplicar"){
        document.getElementById("display").value = Number(document.getElementById("display").value) * Number(valor);
        operacion="";
    }
    if(operacion=="dividir"){
        document.getElementById("display").value = Number(valor) / Number(document.getElementById("display").value);
        operacion="";
    }    
    variable = false; 
    
}

function sumar(){
 
    valor = document.getElementById("display").value;
    operacion = "sumar";
    
}
function restar(){

    valor = document.getElementById("display").value;
    operacion = "restar";
    
}
function multiplicar(){

    valor = document.getElementById("display").value;
    operacion = "multiplicar";
    
}
function dividir(){
    
    valor = document.getElementById("display").value;
    operacion = "dividir";
    
}

function decimal(){
    document.getElementById("display").value = document.getElementById("display").value + ".";
}