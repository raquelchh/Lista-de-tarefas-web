let tarefas = []; // array global para armazenar tarefas

function adicionarTarefa() {
   const inputTarefa = document.getElementById("inputTarefa");
   let tarefaTexto = inputTarefa.value.trim();

   if (tarefaTexto !== "") {
      tarefas.push(tarefaTexto); 
      console.log(tarefaTexto);
      mostrarMensagem("Tarefa adicionada com sucesso!", "green");
      inputTarefa.focus();
      renderizarTarefas(); 
   } else {
      mostrarMensagem("Por favor, insira uma tarefa válida.", "red");
   }
   inputTarefa.value = "";
}

function renderizarTarefas() {
   const listaTarefas = document.getElementById("listaTarefas");
   listaTarefas.innerHTML = ""; 

   for (let i = 0; i < tarefas.length; i++) {
      let novaTarefa = document.createElement("li");
      novaTarefa.textContent = tarefas[i];
       
      let buttonRemove = document.createElement("button");
      buttonRemove.className = "remover";
      buttonRemove.textContent = "Remover";
      buttonRemove.onclick = () => removerTarefa(i);

      let editTarefa = document.createElement("button");
      editTarefa.className = "editar";
      editTarefa.textContent = "Editar";
      editTarefa.onclick = () => editarTarefa(i);

      novaTarefa.appendChild(buttonRemove);
      novaTarefa.appendChild(editTarefa);
      listaTarefas.appendChild(novaTarefa);
   }
}

function removerTarefa(i){
    tarefas.splice(i, 1);
    renderizarTarefas();
    mostrarMensagem("Tarefa removida com sucesso!", "green");
}

function editarTarefa(i){
   const tarefaEditada = prompt("Edite a tarefa: ");
   if (tarefaEditada !== null && tarefaEditada.trim() !== ""){
      tarefas[i] = tarefaEditada.trim();
      renderizarTarefas();
      mostrarMensagem("Tarefa editada com sucesso!", "green");
   } else {
      mostrarMensagem("Edição inválida, tente novamente.", "red");
   }
}

function limparLista(){
   tarefas.length = 0;
   renderizarTarefas();
   mostrarMensagem("Lista limpa com sucesso!", "green");
}

 
function mostrarMensagem(mensagem, cor){
   const mensagemElement = document.getElementById("mensagem");
   mensagemElement.textContent = mensagem;
   mensagemElement.style.color = cor;
   setTimeout(() => {
      mensagemElement.textContent = "";
   }, 3000);
}
