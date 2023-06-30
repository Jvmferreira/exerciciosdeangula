export class Calculadora{

    // método construtor para valores padroes da da Classe;
    constructor(n1,n2){


        this.num1 = parseFloat(n1);
        this.num2 = parseFloat(n2);
        
    }

    //teste dos calculos da classe
    operacao(op){
        let res;
        if(op == "+"){
            res =  this.num1 +  this.num2;
        }

         else if(op == "-"){
            res = this.num1 -  this.num2;
        }
       
         else if(op == "*"){
            res = this.num1 *  this.num2;
        }

        else if(op == "/"){
            res = this.num1 /  this.num2;
        }

        else{
            let msg = "valor inválido"
            return msg;
        }
        //variavel que retorna valor da operacao da classe!!
        return res;
    }
   
}

    

