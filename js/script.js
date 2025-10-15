// Associar dados do HTML com o JavaScript
const cabecalho = document.querySelector("#cabecalho");
const menu = document.querySelector("#menu");
const btn_home = document.querySelector("#btn_home");
const btn_tarefa = document.querySelector("#btn_tarefa");
const btn_projeto = document.querySelector("#btn_projeto");
const btn_sugestoes = document.querySelector("#btn_sugestoes");
const Login = document.querySelector("#btn_login");

// Botões de navegação
btn_home.addEventListener("click", (e) =>{
    selecionarAba(e.target)
    window.open("home.html","if_principal")
});
btn_tarefa.addEventListener("click",(e)=>{
    selecionarAba(e.target)
    window.open("tarefa.html","if_principal")
});
btn_projeto.addEventListener("click", (e)=>{
    selecionarAba(e.target)
    window.open("projeto.html","if_principal")
});
btn_sugestoes.addEventListener("click",(e)=>{
    selecionarAba(e.target)
    window.open("sugestoes.html","if_principal")
});

// Ajustando para Aba Selecionada
const selecionarAba=(el)=>{
   const abas = [...document.querySelectorAll(".aba")];
   abas.forEach(e=>{
    e.classList.remove("abaSelecionada");
   });
   el.classList.add("abaSelecionada");
}