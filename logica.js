
var string = '' // Variável da função histórico

function calcular(tipo, valor) {
	        
	if(tipo == 'acao') {

	if(valor == 'c') {  // Limpar o visor
	  document.getElementById('resultado').value = ''
	}

	if(valor == '+' || valor == '-' || valor == '/'
	 || valor == '*' || valor == '%' || valor == '.' ) {   // Botões de ação
	    document.getElementById('resultado').value += valor
	}

var operacao = document.getElementById('resultado').value  // Salva a operação para depois ser exibida no histórico        

	if(valor == '=') {  // Efetuar o cálculo matemático (eval realiza as operações)
		
	    operacao += valor + ' '
	    var valor_campo = eval(document.getElementById('resultado').value)

	  if(valor_campo == null) {
	  	document.getElementById('resultado').value = 0
	  } else {
	    document.getElementById('resultado').value = valor_campo
	    operacao += valor_campo
	    historico(operacao)  // Chama Operação com o resultado    
	  }  
	}

	} else if (tipo == 'valor') {   // Números no visor
	   document.getElementById('resultado').value += valor  
	}
}

function historico(operacao) { // Função que armazena e exibe o histórico           
	string += operacao + '\n'	       	
    document.getElementById('historico').value = string
}

function limparHistorico() { // Função que limpa o histórico          
	string = ''       	
    document.getElementById('historico').value = string
}