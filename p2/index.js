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

    // flag
    Veditar: null,
    VeditarProduto: null,
    VeditarVenda: null,
    clienteEditIndex: null,
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
      this.Vendas.push({
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
    openModal(index) {
      this.Veditar = true;
      this.clienteEditIndex = index;
      this.Vemail = this.Clientes[index].email;
      this.Vnome = this.Clientes[index].nome;
      this.Vrua = this.Clientes[index].rua;
      this.Vbairro = this.Clientes[index].bairro;
      this.Vcidade = this.Clientes[index].cidade;
      this.Vestados = this.Clientes[index].estado;
    },
    closeModal() {
      this.Veditar = null;
      this.resetarFormulario();
      this.clienteEditIndex = null;
    },
    salvarEdicao() {
      this.Clientes[this.clienteEditIndex] = {
        email: this.Vemail,
        nome: this.Vnome,
        rua: this.Vrua,
        bairro: this.Vbairro,
        cidade: this.Vcidade,
        estado: this.Vestados
      };
      this.closeModal();
    },
    excluirCliente(index) {
      this.Clientes.splice(index, 1);
    },

    openModalProduto(index) {
      this.VeditarProduto = index;
      this.VnomeProduto = this.Produtos[index].nome;
      this.Vdescricao = this.Produtos[index].descricao;
      this.Vpreco = this.Produtos[index].preco;
    },

    closeModalProduto() {
      this.VeditarProduto = null;
      this.VnomeProduto = '';
      this.Vdescricao = '';
      this.Vpreco = 0;
    },

    excluirProduto(index) {
      this.Produtos.splice(index, 1);
    },

    salvarEdicaoProduto() {
      if (this.VeditarProduto !== null && this.VeditarProduto >= 0 && this.VeditarProduto < this.Produtos.length) {
        this.Produtos[this.VeditarProduto].nome = this.VnomeProduto;
        this.Produtos[this.VeditarProduto].descricao = this.Vdescricao;
        this.Produtos[this.VeditarProduto].preco = this.Vpreco;

        this.closeModalProduto();
      }
    },

    openModalVenda(index) {
      this.VeditarVenda = index;
      this.Vcliente = this.Vendas[index].nomeCli;
      this.VprodutoSelecionado = this.Vendas[index].produtoSelecionado;
      this.Vquantidade = this.Vendas[index].quantidade;
    },

    closeModalVenda() {
      this.VeditarVenda = null;
      this.resetarFormularioVendas();
    },

    excluirVenda(index) {
      if (confirm("Tem certeza que deseja excluir esta venda?")) {
        this.Vendas.splice(index, 1);
      }
    },

    salvarEdicaoVenda() {
      if (this.VeditarVenda !== null && this.VeditarVenda >= 0 && this.VeditarVenda < this.Vendas.length) {
        this.Vendas[this.VeditarVenda].nomeCli = this.Vcliente;
        this.Vendas[this.VeditarVenda].produtoSelecionado = this.VprodutoSelecionado;
        this.Vendas[this.VeditarVenda].quantidade = this.Vquantidade;

        this.closeModalVenda();
      }
    }
  }
});
