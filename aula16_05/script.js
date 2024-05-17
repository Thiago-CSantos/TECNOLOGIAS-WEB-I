let app = new Vue({

    el: "#app",
    data: {
        alt: null,
        quilo: null,
        resultadoIMC: null,

        vDolar: null,
        vReal: null,
        resultadoMoeda: null
    },
    methods: {
        exibirIMC() {
            if (this.alt && this.quilo) {
                const altura = parseFloat(this.alt.replace(',', '.'));
                const peso = parseFloat(this.quilo.replace(',', '.'));
                const imc = peso / (altura * altura);

                if (imc < 18.50) {
                    this.resultadoIMC = imc.toFixed(2);
                    alert("abaixo do peso");
                }
                else if (imc > 15.50 && imc < 25.00) {
                    this.resultadoIMC = imc.toFixed(2);
                    alert("Peso ideal (parabens)");
                }
                else if (imc >= 25.00 && imc <= 29.9) {
                    this.resultadoIMC = imc.toFixed(2);
                    alert("Levemente acima do peso!");
                }
                else if (imc >= 30.00 && imc <= 34.90) {
                    this.resultadoIMC = imc.toFixed(2);
                    alert("Obesidade grau 1")
                }
                else if (imc >= 35.00 && imc <= 39.9) {
                    this.resultadoIMC = imc.toFixed(2);
                    alert("Obsidade grau 2 (severa)");
                }
                else {
                    this.resultadoIMC = imc.toFixed(2);
                    alert("Obsidade grau 3 (mórbida)")
                }
            }
        },
        exibirMoeda() {

            if (this.vDolar && this.vReal) {
                
                this.resultadoMoeda = (this.vDolar * this.vReal).toFixed(2);
            } else {
                this.resultadoMoeda = null;
            }
        }
    },
    watch: {
        alt: function (newAlt, oldAlt) {
            console.log(newAlt);
            this.exibirIMC();
        },
        quilo: function (newQuilo, oldQuilo) {
            console.log(newQuilo);
            this.exibirIMC();
        }
    }

});