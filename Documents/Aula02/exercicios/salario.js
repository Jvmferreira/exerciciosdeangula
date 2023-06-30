export class Salario{

    _resultado;

    constructor(salario,meta,venda){
        this.salario = salario;
        this.meta = meta;
        this.venda = venda;
        
    }
    calculaSalario(){
        if(this.venda >= this.meta){
            this._resultado = this.salario * 1.1;
        }else{
            let msg = "Você não atingiu a meta";
            return msg;
        }
    }
    get resultado(){
        return this._resultado;
    }
}