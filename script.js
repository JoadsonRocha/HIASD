//abri o hino ao apertar enter teclado
const myInput = document.getElementById("file-input");
const myButton = document.getElementById("play-button");

myInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        myButton.click();
    }
});

myButton.addEventListener("click", function () {
    executarFuncao();
});

function executarFuncao() {
    // Ação a ser executada quando o usuário clicar no botão
    // vai abrir os hinos direto
}

//Limpa Input ao clicar nele depois de executar o arquivo

const meuInput = document.getElementById('file-input');
meuInput.addEventListener('mouseup', () => {
    meuInput.value = '';
});


