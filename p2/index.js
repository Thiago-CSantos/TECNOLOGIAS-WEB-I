let app = new Vue({
  el: "#app",
  data: {
    carregaFormulario: false,
    carregaFormularioProduto: false,
    carregaFormularioVendas: false,
    clienteExiste: false,
    Clientes: [],
    Produtos: [],
    Vendas: [],
    Vemail: '',
    Vnome: '',
    Vrua: '',
    Vbairro: '',
    Vcidade: '',
    Vestados: ''
  },
  methods: {
    actionCadastraCliente() {
      this.carregaFormulario = true;
    },
    actionCadastraProdutos(){
      this.carregaFormularioProduto = true;
    },
    actionCadastraVendas(){
      this.carregaFormularioVendas = true;
    },
    enviarFormulario() {
      
      console.log('Dados do formulário:', this.Vemail, this.Vnome, this.Vrua, this.Vbairro, this.Vcidade, this.Vestados);

      
      this.Clientes.push({
        email: this.Vemail,
        nome: this.Vnome,
        rua: this.Vrua,
        bairro: this.Vbairro,
        cidade: this.Vcidade,
        estado: this.Vestados
      });

      console.log(this.Clientes);

      this.resetarFormulario();
    },
    resetarFormulario() {
      
      this.Vemail = '';
      this.Vnome = '';
      this.Vrua = '';
      this.Vbairro = '';
      this.Vcidade = '';
      this.Vestados = '';

      
      this.carregaFormulario = false;
    },
  }
});
