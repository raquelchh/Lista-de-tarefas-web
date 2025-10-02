 class Tarefa { 
   constructor(texto){    //construtor da classe Tarefa
      this.texto = texto; //armazena o texto da tarefa
      this.concluida = false;  //armazena se a tarefa foi concluida ou nao
   }
 

 editar(novoTexto) {
   this.texto = novoTexto.trim(); //actualiza el texto de la tarea
}

concluir(){
   this.concluida = true; // //marca la tarea como concluida
}
}

class ListaDeTarefas{
   constructor(){ //constructor de la clase Lista de tarefas
      this.Tarefa = []; 
   }

   






}