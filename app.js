//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


var listaDeNomes = [];
function adicionarAmigo() {
    let nome = document.getElementById("amigo");
    if (nome.value.trim() === "") {
        alert("Por favor, digite um nome válido");
        return;
    } else {
        listaDeNomes.push(nome.value);
        limparCampo();
        let listaNomes = document.getElementById('listaAmigos')
        listaNomes.innerHTML = listaDeNomes.join('<br>');
        console.log(listaDeNomes);
    }
}

function sortearAmigo() {
    if (listaDeNomes.length === 0) {
        alert("Não existe nome na lista para sortear");
        return;
    }
    // sorteia um nome aleatório da lista
    let nomeSorteado = listaDeNomes[Math.floor(Math.random() * listaDeNomes.length)];
    let exibeResultadoDoSorteio = document.getElementById('resultado');
    // limpa a lista de nomes antes de mostrar o nome sorteado
    let listaNomes = document.getElementById('listaAmigos');
    listaNomes.innerHTML = '';
    // exibe o nome do amigo secreto sorteado
    exibeResultadoDoSorteio.innerHTML = `O amigo secreto sorteado é ${nomeSorteado}`;
    limparCampo();
}   

function limparCampo() {
    nome = document.getElementById("amigo");
    nome.value = "";
}