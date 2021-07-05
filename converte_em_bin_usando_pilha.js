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

function estaVazia() {
    return topo == -1;
}

var numDecimal = 10;
var resto;
//Convertendo 10 em binário....
while (numDecimal != 0) {
    resto = parseInt(numDecimal % 2)
    push (resto);
    numDecimal = parseInt (numDecimal / 2)
}

//O resultado é "+ resto)
//Removendo os itens da pilha....")
while (!estaVazia()){
    console.log(pop())
}