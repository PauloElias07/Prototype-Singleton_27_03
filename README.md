# Sistema de Matrículas – Singleton e Prototype

## Descrição

Projeto em **JavaScript** que simula um sistema de matrículas acadêmicas utilizando os padrões de projeto **Singleton** e **Prototype**. O sistema possui um **Registro Acadêmico Central (SIGA)** responsável por gerenciar os alunos matriculados.

## Padrões Utilizados

**Singleton**
A classe `GerenciadorAlunos` garante que exista apenas uma instância do sistema responsável por armazenar e gerenciar os alunos.

**Prototype**
A classe `Aluno` possui o método `clone()` que permite criar novos alunos a partir de um objeto protótipo, modificando apenas os dados individuais.

## Funcionamento

1. Instancia o gerenciador de alunos (Singleton).
2. Cria um aluno protótipo com dados padrão do curso.
3. Gera clones do protótipo para novos alunos.
4. Modifica os dados individuais de cada aluno.
5. Adiciona os alunos ao sistema.
6. Lista todos os alunos matriculados.

## Tecnologias

* JavaScript
* Programação Orientada a Objetos
* Design Patterns

## Autor

Paulo Roberto Santos Elias
