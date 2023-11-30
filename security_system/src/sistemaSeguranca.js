"use strict";
class SistemaSeguranca {
    constructor() {
        this.senhaBaseSecreta = "senhaSuperSecreta";
    }
    static obterInstancia() {
        if (!SistemaSeguranca.instancia) {
            SistemaSeguranca.instancia = new SistemaSeguranca();
        }
        return SistemaSeguranca.instancia;
    }
    acessarBaseSecreta(senhaInserida) {
        if (senhaInserida === this.senhaBaseSecreta) {
            return "Acesso concedido à Base Secreta!";
        }
        else {
            return "Acesso negado. Senha incorreta.";
        }
    }
}
SistemaSeguranca.instancia = null;
// Programa principal
const sistemaSeguranca = SistemaSeguranca.obterInstancia();
const senhaInseridaCorreta = "senhaSuperSecreta";
const resultadoAcessoCorreto = sistemaSeguranca.acessarBaseSecreta(senhaInseridaCorreta);
console.log(resultadoAcessoCorreto);
const senhaInseridaIncorreta = "senhaIncorreta";
const resultadoAcessoIncorreto = sistemaSeguranca.acessarBaseSecreta(senhaInseridaIncorreta);
console.log(resultadoAcessoIncorreto);
