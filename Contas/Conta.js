//classe abstrata
export class Conta {

    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta!");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
       
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        this._saldo;
    }

    //metodo abstrato
    sacar(valor){
        throw new Error("O método sacar é abstrato!")
    }

    _sacar(valor){
        if(this._saldo >= valor && valor > 0){
            this._saldo -= valor;
            return valor;
        }
        return 0;
    }

    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}