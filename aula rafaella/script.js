 function adicionarTarefa() {
   //entrada de input id mencionada en la variable input
   let inputTarefa = document.getElementById("inputTarefa") 
   //paragrafo com variavel mensagem
   const mensagem = "Tarefa adicionada com sucesso!";
   //crea variable tarea y la convierte en un valor, tim para eliminar espacios en blanco
   let tarefa = inputTarefa.value.trim();

   if (tarefa !== "") {
      console.log(tarefa);
      document.getElementById("mensagem").textContent = mensagem;
      document.getElementById("mensagem").style.color = "green";
      inputTarefa.value = "";
      inputTarefa.focus();
      //limpia el mensaje despues de 3 segundos
      setTimeout(() => {
         document.getElementById("mensagem").textContent = "";
      },3000);
      //agrega la tarea a la lista
      let listaTarefas = document.getElementById("listaTarefas");
      //crea el elemento li denomidado novaTarefa
      let novaTarefa = document.createElement("li");
      //agrega el texto de la tarea al elemento li
      novaTarefa.textContent = tarefa;
      //agrega el elemento li a la lista de tareas
      listaTarefas.appendChild(novaTarefa); 
   } else {
      document.getElementById("mensagem").textContent = "Por favor, digite uma tarefa.";
      document.getElementById("mensagem").style.color = "red";

   }
    
}