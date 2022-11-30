
class Veiculo {
    constructor(rodas) {
    this.rodas = rodas;
    this.combustivel = combustivel;
    }
        
    } 
     class Moto extends Veiculo {
        acelerar() {
        console.log('acelerou');
        }
   }
   class Moto {
    constructor(combustivel) {
    this.combustivel =combustivel;
    }
    acelerar() {
    console.log('Acelerando');
    }
   }

   class Moto extends honda {
    acelerar() {
    super.acelerar();
    console.log('Muito');
    }
   }
   class Moto extends Veiculo {
    empinar() {
    console.log('Empinou');
    }
   }
   class honda extends Veiculo {
    constructor(retrovisor, freio, capacete) {
    super(retrovisor, freio);
    this.capacete = capacete;
    }
   }
   const honda = new Moto(4, 'Gasolina', true);

   