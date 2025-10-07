class Tarefa {
  constructor(texto) {
    this.texto = texto;
    this.concluida = false;
    this.comentario = "";
  }

  editar(novoTexto) {
    this.texto = novoTexto.trim();
  }

  concluir() {
    this.concluida = true;
  }

  desfazerConclusao(){
    this.concluida = false;
  }
  
}
 

class ListaDeTarefas {
  constructor() {
    this.tarefas = [];
  }

  adicionar(texto) {
    if (texto.trim() !== "") {
      this.tarefas.push(new Tarefa(texto)); 
      this.mostrarMensagem("Tarefa adicionada com sucesso!", "green");
      this.renderizar();}
    else{ this.mostrarMensagem("Por favor, insira uma tarefa.", "red")}
    document.getElementById("inputTarefa").value = "";
    document.getElementById("inputTarefa").focus();
  }

  remover(index) {
    this.tarefas.splice(index, 1);
    this.mostrarMensagem("Tarefa removida com sucesso!", "green");
    this.renderizar();
  }

  editar(index) {
    const novoTexto = prompt("Edite a tarefa:");
    if (novoTexto !== null && novoTexto.trim() !== "") {
      this.tarefas[index].editar(novoTexto);
      this.mostrarMensagem("Tarefa editada com sucesso!", "green");
      this.renderizar();}
  }

  limpar() {
    this.tarefas = [];
    this.mostrarMensagem("Todas as tarefas foram removidas!", "green");
    this.renderizar();
  }

  mostrarMensagem(mensagem, cor) {
    const el = document.getElementById("mensagem");
    el.textContent = mensagem;
    el.style.color = cor;
    setTimeout(() => {
      el.textContent = "";
    }, 3000); 
  }

  adicionarComentario(mensagem, cor){
    this.mnostrarMensagem("Clique aqui para adicionar na agenda", "grey")
    this.renderizar()
  }

  renderizar() {
    const lista = document.getElementById("listaTarefas"); // 
    lista.innerHTML = ""; 

    this.tarefas.forEach((tarefa, i) => {
      const li = document.createElement("li");
      li.textContent = tarefa.texto;

      const btnremove = document.createElement("button");
      btnremove.textContent = "Remover";
      btnremove.className = "remover";
      btnremove.onclick = () => this.remover(i);

      const btneditar = document.createElement("button");
      btneditar.textContent = "Editar";
      btneditar.className = "editar";
      btneditar.onclick = () => this.editar(i);

      const concluir = document.createElement("button");
      concluir.textContent = "✅";
      concluir.className = "concluir";
      concluir.onclick = () => {
        this.tarefas[i].concluir();
        this.renderizar();}

      const desfazer = document.createElement("button");
      desfazer.textContent = "🔄";
      desfazer.className = "desfazer";
      desfazer.onclick = () => {
        this.tarefas[i].desfazerConclusao();
        this.renderizar()}
      if (tarefa.concluida) {
         li.style.textDecoration = "line-through";
         concluir.disabled = true;
         li.appendChild(desfazer);}

         li.appendChild(btnremove);
         li.appendChild(btneditar);
         li.appendChild(concluir);
         lista.appendChild(li);  
       
    });

    const btnLimpar = document.getElementById("limpar-button");
    btnLimpar.style.display = this.tarefas.length > 0 ? "inline-block" : "none";
 
  }
}

const listaDeTarefas = new ListaDeTarefas();

function adicionarTarefa() {
  const texto = document.getElementById("inputTarefa").value;
  listaDeTarefas.adicionar(texto);
}

function limparLista() { 
  listaDeTarefas.limpar();
}

