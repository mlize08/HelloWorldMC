function inserirNome() {
    let nomeUsuario = prompt("Qual o seu nome?");
    let elemento = document.querySelector("#nome-usuario");
    elemento.textContent = nomeUsuario;
}

inserirNome();

let linguagens = ["Javascript", "Python", "C", "PHP"];
const lista= document.querySelector("#lista");

for (let linguagem of linguagens) {
  lista.innerHTML += `<li>${linguagem}</li>`;
}






let aluno1 = {
  nome: "Gabriel",
  idade: 13,
  anoLetivo: "2ºsérie",
  materiasFavoritas: ["Geografia","Programação","Arte"]
}

console.log(aluno1.nome);
console.log(aluno1.idade);
console.log(aluno1.anoLetivo);
console.log(aluno1.materiasFavoritas);
console.log(aluno1.materiasFavoritas[2]);

const objeto = document.querySelector("#aluno");
objeto.textContent = aluno1.nome;
objeto.textContent = aluno1.idade;
objeto.textContent = aluno1.materiasFavoritas;
objeto.textContent = aluno1.materiasFavoritas[0];




//template String
console.log(`Nome: ${aluno1.nome}`);
console.log(`Idade: ${aluno1.idade}`);
console.log(`Ano Letivo: ${aluno1.anoLetivo}`);
console.log(`Materias Favoritas: ${aluno1.materiasFavoritas}`);
console.log(`Materias Favorita: ${aluno1.materiasFavoritas[2]}`);