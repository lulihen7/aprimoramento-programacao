// Criando classe Fila (FIFO)
class Fila {
  constructor() {
    this.itens = [];
  }

  enfileirar(elemento) {
    this.itens.push(elemento);
  }

  desenfileirar() {
    if (this.estaVazia()) return null;
    return this.itens.shift();
  }

  frente() {
    return this.itens[0];
  }

  estaVazia() {
    return this.itens.length === 0;
  }

  imprimir() {
    return this.itens.join(", ");
  }
}

// Criando classe Pilha (LIFO)
class Pilha {
  constructor() {
    this.itens = [];
  }

  empilhar(elemento) {
    this.itens.push(elemento);
  }

  desempilhar() {
    if (this.estaVazia()) return null;
    return this.itens.pop();
  }

  estaVazia() {
    return this.itens.length === 0;
  }

  imprimir() {
    return this.itens.slice().reverse().join(", ");
  }
}

// Criando fila de atendimento e pilha de prontuários
const filaAtendimento = new Fila();
const pilhaProntuarios = new Pilha();

// Adicionando pacientes à fila
filaAtendimento.enfileirar("Ana");
filaAtendimento.enfileirar("Bruno");
filaAtendimento.enfileirar("Carla");
filaAtendimento.enfileirar("Diego");
filaAtendimento.enfileirar("Eduarda");

console.log("Fila inicial de pacientes:");
console.log(filaAtendimento.imprimir());

console.log("Próximo paciente a ser atendido:", filaAtendimento.frente());

// Simulando o atendimento de dois pacientes
for (let i = 0; i < 2; i++) {
  const pacienteAtendido = filaAtendimento.desenfileirar();
  if (pacienteAtendido) {
    console.log(`Paciente atendido: ${pacienteAtendido}`);
    pilhaProntuarios.empilhar(pacienteAtendido);
  }
}

// Exibindo o estado final da fila e dos prontuários
console.log("\nFila de pacientes restante:");
console.log(filaAtendimento.imprimir());

console.log("\nProntuários empilhados:");
console.log(pilhaProntuarios.imprimir());
