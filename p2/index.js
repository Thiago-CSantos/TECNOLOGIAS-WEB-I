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
    Vestados: '',

    // produto
    VnomeProduto: '',
    Vdescricao: '',
    Vpreco: '',

    // Vendas
    Vcliente: '',
    VprodutoSelecionado: '',
    Vquantidade: '',
  },
  methods: {
    actionCadastraCliente() {
      this.carregaFormulario = true;
      this.carregaFormularioProduto = false;
      this.carregaFormularioVendas = false;
    },
    actionCadastraProdutos() {
      this.carregaFormularioProduto = true;
      this.carregaFormulario = false;
      this.carregaFormularioVendas = false;
    },
    actionCadastraVendas() {
      this.carregaFormularioVendas = true;
      this.carregaFormularioProduto = false;
      this.carregaFormulario = false;
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

    enviarFormularioProduto() {

      console.log('Dados do formulário de produto:', this.VnomeProduto, this.Vdescricao, this.Vpreco);

      this.Produtos.push({
        nome: this.VnomeProduto,
        descricao: this.Vdescricao,
        preco: this.Vpreco
      });

      console.log(this.Produtos);

      this.resetarFormularioProduto();
    },

    enviarFormularioVendas() {

      this.Clientes.push({
        nomeCli: this.Vcliente,
        produtoSelecionado: this.VprodutoSelecionado,
        quantidade: this.Vquantidade
      });

      this.resetarFormularioVendas();
    },

    resetarFormulario() {

      this.Vemail = '';
      this.Vnome = '';
      this.Vrua = '';
      this.Vbairro = '';
      this.Vcidade = '';
      this.Vestados = '';
      this.carregaFormulario = false;
      this.VnomeProduto = '';
      this.Vdescricao = '';
      this.Vpreco = '';
    },

    resetarFormularioProduto() {
      this.VnomeProduto = '';
      this.Vdescricao = '';
      this.Vpreco = '';
      this.carregaFormularioProduto = false;
    },

    resetarFormularioVendas() {
      this.Vcliente = '';
      this.VprodutoSelecionado = '';
      this.Vquantidade = '';
      carregaFormularioVendas = false;
    },
    actionVisualizar() {
      this.carregaFormulario = false;
      this.carregaFormularioProduto = false;
      this.carregaFormularioVendas = false;
    },
  }
});
