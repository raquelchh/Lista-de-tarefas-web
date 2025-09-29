let tarefas = []; // array global para armazenar tarefas

function adicionarTarefa() {
   const inputTarefa = document.getElementById("inputTarefa");
   let mensagem = ["Tarefa adicionada com sucesso!", "Por favor, digite uma tarefa.!"]
   let tarefaTexto = inputTarefa.value.trim();

   if (tarefaTexto !== "") {
      tarefas.push(tarefaTexto); // add tarefas ao array
      console.log(tarefaTexto);
      document.getElementById("mensagem").textContent = mensagem[0];
      document.getElementById("mensagem").style.color = "green";
      inputTarefa.focus();
      //limpa el mensaje despues de 3 segundos
      setTimeout(() => {
         document.getElementById("mensagem").textContent = "";
      },3000);
      renderizarTarefas(); // renderiza a lista atualizada
   } else {
      document.getElementById("mensagem").textContent = mensagem[1];
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
      listaTarefas.appendChild(novaTarefa);
   }
}