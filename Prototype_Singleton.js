// PADRÃO PROTOTYPE
// Classe Aluno
class Aluno {
    constructor(nome, idade, curso, unidade, periodo) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.unidade = unidade;
        this.periodo = periodo;
    }

    // Método clone (cópia superficial)
    clone() {
        return Object.assign(
            Object.create(Object.getPrototypeOf(this)),
            this
        );
    }
}

// PADRÃO SINGLETON
// Gerenciador de Alunos (SIGA)
class GerenciadorAlunos {

    constructor() {
        if (GerenciadorAlunos.instance) {
            return GerenciadorAlunos.instance;
        }

        this.listaAlunos = [];
        GerenciadorAlunos.instance = this;
    }

    adicionarAluno(aluno) {
        this.listaAlunos.push(aluno);
    }

    listarAlunos() {
        console.log("ALUNOS MATRICULADOS:");
        this.listaAlunos.forEach(aluno => {
            console.log(
                `Nome: ${aluno.nome}, Idade: ${aluno.idade}, Curso: ${aluno.curso}, Unidade: ${aluno.unidade}, Período: ${aluno.periodo}`
            );
        });
    }
}


//Instanciando o Singleton
const siga1 = new GerenciadorAlunos();
const siga2 = new GerenciadorAlunos();

console.log("SIGA é único?", siga1 === siga2);


//Criando Aluno Prototype
const alunoPrototipo = new Aluno(
    "Wilson",
    18,
    "Desenvolvimento de Software Multiplataforma",
    "Campus Central",
    "Noite"
);


// Criando clones do Prototype
const aluno1 = alunoPrototipo.clone();
aluno1.nome = "Leonardo";
aluno1.idade = 20;

const aluno2 = alunoPrototipo.clone();
aluno2.nome = "Ricardo";
aluno2.idade = 22;
aluno2.curso = "Administração";
aluno2.unidade = "Logística";
aluno2.periodo = "Matutino";

const aluno3 = alunoPrototipo.clone();
aluno3.nome = "Taynah";
aluno3.idade = 25;
aluno3.unidade = "Fatec Diadema";

//Adicionando ao Singleton
siga1.adicionarAluno(aluno1);
siga1.adicionarAluno(aluno2);
siga1.adicionarAluno(aluno3);


//Listando alunos matriculados
siga1.listarAlunos();


//Verificando se Prototype não mudou
console.log("\nProtótipo original permanece:");
console.log(alunoPrototipo);