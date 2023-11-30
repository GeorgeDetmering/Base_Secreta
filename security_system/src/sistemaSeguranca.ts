class SistemaSeguranca {
    private static instancia: SistemaSeguranca | null = null;
    private senhaBaseSecreta: string = "senhaSuperSecreta";
  
    private constructor() {}
  
    public static obterInstancia(): SistemaSeguranca {
      if (!SistemaSeguranca.instancia) {
        SistemaSeguranca.instancia = new SistemaSeguranca();
      }
      return SistemaSeguranca.instancia;
    }
  
    public acessarBaseSecreta(senhaInserida: string): string {
      if (senhaInserida === this.senhaBaseSecreta) {
        return "Acesso concedido à Base Secreta!";
      } else {
        return "Acesso negado. Senha incorreta.";
      }
    }
  }
  
  // Programa principal
  const sistemaSeguranca = SistemaSeguranca.obterInstancia();
  
  const senhaInseridaCorreta = "senhaSuperSecreta";
  const resultadoAcessoCorreto = sistemaSeguranca.acessarBaseSecreta(senhaInseridaCorreta);
  console.log(resultadoAcessoCorreto);
  
  const senhaInseridaIncorreta = "senhaIncorreta";
  const resultadoAcessoIncorreto = sistemaSeguranca.acessarBaseSecreta(senhaInseridaIncorreta);
  console.log(resultadoAcessoIncorreto);
