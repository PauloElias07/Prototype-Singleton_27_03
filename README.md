# Sistema de Matrículas com Singleton e Prototype

## Descrição

Este projeto implementa um sistema simples de matrículas acadêmicas utilizando **JavaScript** e aplicando dois padrões de projeto importantes: **Singleton** e **Prototype**.

O objetivo é simular o funcionamento de um **Registro Acadêmico Central (SIGA)** que gerencia os alunos matriculados em uma instituição de ensino, garantindo que exista **apenas uma instância responsável pelo armazenamento dos dados** e permitindo a **criação rápida de novos alunos a partir de um modelo base**.

---

## Padrões de Projeto Utilizados

### Singleton

O padrão **Singleton** é utilizado na classe `GerenciadorAlunos`, garantindo que exista **apenas uma instância do sistema SIGA** durante toda a execução da aplicação.

Isso evita inconsistências e conflitos de dados no gerenciamento das matrículas.

Funções principais:

* Armazenar alunos matriculados
* Adicionar novos alunos
* Listar todos os alunos registrados

---

### Prototype

O padrão **Prototype** é aplicado na classe `Aluno`.

Um **aluno protótipo** é criado com informações padrão do curso, como:

* curso
* unidade
* período

A partir desse protótipo, novos alunos são criados utilizando o método `clone()`, permitindo copiar rapidamente as características base e alterar apenas os dados individuais.

---

## Estrutura do Projeto

### Classe Aluno

Responsável por representar um aluno no sistema.

Propriedades:

* `nome`
* `idade`
* `curso`
* `unidade`
* `periodo`

Método principal:

* `clone()` → cria uma cópia superficial do objeto.

---

### Classe GerenciadorAlunos

Responsável pelo gerenciamento centralizado dos alunos matriculados.

Métodos:

* `adicionarAluno(aluno)` → adiciona um aluno ao sistema.
* `listarAlunos()` → exibe todos os alunos cadastrados.

---

## Funcionamento do Sistema

O programa executa as seguintes etapas:

1. Instancia o **Gerenciador de Alunos (Singleton)** e valida que apenas uma instância existe.
2. Cria um **Aluno Protótipo** com dados padrão do curso.
3. Gera **clones do protótipo** para diferentes alunos.
4. Modifica apenas os dados individuais dos clones.
5. Adiciona os alunos ao sistema SIGA.
6. Lista todos os alunos matriculados.
7. Demonstra que o **protótipo original não foi alterado**.

---

## Exemplo de Saída

```
SIGA é único? true

ALUNOS MATRICULADOS:
Nome: Leonardo, Idade: 20, Curso: Desenvolvimento de Software Multiplataforma, Unidade: Campus Central, Período: Noite
Nome: Ricardo, Idade: 22, Curso: Administração, Unidade: Logística, Período: Matutino
Nome: Taynah, Idade: 25, Curso: Desenvolvimento de Software Multiplataforma, Unidade: Fatec Diadema, Período: Noite

Protótipo original permanece:
Aluno {
  nome: 'Wilson',
  idade: 18,
  curso: 'Desenvolvimento de Software Multiplataforma',
  unidade: 'Campus Central',
  periodo: 'Noite'
}
```

---

## Tecnologias Utilizadas

* JavaScript (ES6)
* Programação Orientada a Objetos
* Padrões de Projeto (Design Patterns)

---

## Autor

Paulo Elias
Estudante de Tecnologia e Desenvolvimento de Software
