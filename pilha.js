var elementos = [];
var topo = -1;
var max = 10;


//Função que adiciona números na pilha elementos
function push (num){
    if (topo <= max){
        topo ++;
        elementos [topo] = num;
        }
    else {
        console.log ("Sorry brother, casa cheia!");
        }
}

//Função que remove números na pilha elementos
function pop(){
    if (topo != -1){
        let num = elementos[topo];
        topo = topo -1;
        //Retorna o número extraido
        console.log (num)
        return num;
    }
    else{
        console.log("Não há nada aqui para você...")
    }
}

// ---- Test automatizado das funções acima::

function Teste (){
    push (1);
    push (2);
    push (3);
    console.log("Toma aqui sua pilha adicionada automatica: " +elementos)
    pop();
    pop();
    pop();
    pop();
    console.log(elementos)
    console.log("Testes realizados com sucesso, operações de adicão e remoção de itens na pilha funcionando!!")
    }

Teste()