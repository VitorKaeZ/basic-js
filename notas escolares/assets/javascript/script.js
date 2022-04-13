const alunos = { 
     aluno1: {
         nome: "Vitor",
         nota: 90,
     },
     aluno2: {
        nome: "Maria",
        nota: 85,
    },
    aluno3: {
        nome: "Vitoria",
        nota: 75,
    },
     aluno4: {
        nome: "João",
        nota: 65,
    },
    aluno5: {
        nome: "James",
        nota: 20,
    }
}
let aluno = alunos.aluno1
if (aluno.nota >= 90) {
    Score = "A"
} else if (aluno.nota <= 90 && aluno.nota >= 81){
    Score ="B"
} else if (aluno.nota <= 80 && aluno.nota >= 71){
    Score ="C"
} else if (aluno.nota <= 70 && aluno.nota >= 61){
    Score = "D"
} else if (aluno.nota <= 60 && aluno.nota >= 0){
    Score = "F"
}

console.log(`A nota de ${aluno.nome} é ${Score}`)