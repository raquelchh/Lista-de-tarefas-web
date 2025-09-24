function adicionarTarefa() {
   //paragrafo com variavel mensagem
   let mensagem = "Tarefa adicionada com sucesso!";
   //entrada de input id mencionada en la variable input
   let inputTarefa = document.getElementById("inputTarefa") 
   //crea variable tarea y la convierte en un valor
   let tarefa = inputTarefa.value
   //imprime  la tarefa
   console.log(tarefa)
   //muestra el mensaje que fue adicionado en mensagem
   document.getElementById("mensagem").textContent = mensagem;
   //variable que adiciona el id listaTaefas de ul
   let listaTarefas = document.getElementById("listaTarefas")
  //crea un elemento li que es dominada como novaTarefa
   let novaTarefa = document.createElement("li")
   //adiciona la variable Tarefa a novaTarefa
   novaTarefa.textContent = tarefa
   //agrega un hijo(novaTarefa) a la clase padre(listaTarefas)
   listaTarefas.appendChild(novaTarefa)
   //retorna el input con texto o vazio en ""
   inputTarefa.value = ""

   
}

 

