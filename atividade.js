class contaBancaria{
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        if (valor > this._saldo) {
            return "Operacao negada, Saldo insuficiente."
        }
        this._saldo = this.saldo - valor;

        return this._saldo;
    }


    depositar(valor){
        this._saldo = this.saldo + valor;
        
        return this._saldo;
    }
}


class contaCorrente extends contaBancaria{
    constructor(agencia, numero, saldo, cartaoCredito){
        super(agencia, numero, saldo);
        this.tipo = 'corrente'; 
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria{
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = 'poupanca'; 
    }
}

class contaUniversitaria extends contaBancaria{
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = 'universitaria'; 
    }

    sacar(valor){
        if (valor > 500) {
            return "Operacao negada."
        }
        this._saldo = this.saldo - valor;

        return this._saldo;
    }
}




