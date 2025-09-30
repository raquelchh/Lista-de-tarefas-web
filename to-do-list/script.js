let tarefas = []; // array global para armazenar tarefas

function adicionarTarefa() {
   const inputTarefa = document.getElementById("inputTarefa");
   let mensagem = "Tarefa adicionada com sucesso!";
   let tarefaTexto = inputTarefa.value.trim();

   if (tarefaTexto !== "") {
      tarefas.push(tarefaTexto); // add tarefas ao array
      console.log(tarefaTexto);
      document.getElementById("mensagem").textContent = mensagem
      document.getElementById("mensagem").style.color = "green";
      inputTarefa.focus();
      //limpa el mensaje despues de 3 segundos
      setTimeout(() => {
         document.getElementById("mensagem").textContent = "";
      },3000);
      renderizarTarefas(); // renderiza a lista atualizada

   } else {
      document.getElementById("mensagem").textContent = "Por favor, insira uma tarefa válida.";
      document.getElementById("mensagem").style.color = "red";
   }
   inputTarefa.value = "";
}

function renderizarTarefas() {
   const listaTarefas = document.getElementById("listaTarefas");
   listaTarefas.innerHTML = ""; // limpa a lista antes de renderizar

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
    document.getElementById("listaTarefas").innerHTML = "";
}

function editarTarefa(i){
   const tarefaEditada = prompt("Edite a tarefa: ");
   if (tarefaEditada !== null && tarefaEditada.trim() !== ""){
      tarefas[i] = tarefaEditada.trim();
      renderizarTarefas();
   }
}
