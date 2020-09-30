var botaoDeMais = document.querySelector("#adicionar-tarefa");
var inputTarefa = document.querySelector("#tarefa-digitada");
var tarefas = document.querySelector("#tarefas");


function addAcao(){
    let listaDeBotoes = document.querySelectorAll(".botao-tarefa");
    
    for(let botao of listaDeBotoes){
        botao.addEventListener("click",function(){
            botao.parentElement.parentElement.remove();
        })
    }
}
addAcao();

function criarTarefa(){
    
    if(inputTarefa.value.trim() == ""){
        alert("Escreva alguma coisa");
    }else{
        let tarefa = `                
        <div class="col-md-4">
            <div class="card-tarefa">
                <div class="texto-tarefa">
                    ${inputTarefa.value}
                </div>
                <div class="botao-tarefa">
                    <img src="img/check.png" width="32" alt="Botão para finalizar tarefa" title="Botão para finalizar tarefa">
                </div>
            </div>
        </div>`
        tarefas.innerHTML += tarefa;
       /*  alert("Tarefa Criada: " + inputTarefa.value); */
       addAcao();
       
    }
    inputTarefa.value = "";
    
}

botaoDeMais.addEventListener("click", criarTarefa);
inputTarefa.addEventListener("keypress", function(e){
    if(e.key ==='Enter'){
        criarTarefa();
    }
});