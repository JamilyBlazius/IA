const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Você acha a IA importante?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Ótimo, a IA é realmente importante por diversos fatores."
            },
            {
                texto: "Não",
                afirmacao: "Poxa, é melhor você conhecer mais sobre a IA."
            }
            
        ]
    },
    {
        enunciado: "Quanto você sabe sobre a IA?",
        alternativas: [
            {
                texto: "Bastante",
                afirmacao: "Perfeito!."
            },
            {
                texto: "Pouco",
                afirmacao: "Você precisa aprender mais!"
            }
            
        ]
    },
    {
        enunciado: "A IA ajuda no seu dia-a-dia?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Pefeito, a IA é uma ótima ajudante!."
            },
            {
                texto: "Não",
                afirmacao: "Tente utiliza-lá!"
            }
            
        ]
    },
    {
        enunciado: "A IA ajuda os alunos nas escolas?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Vejamos que sim, pois ela é um ótimo ambiente de pesquisas, mas temos que tomar cuidado com o seu uso exagerado!"
            },
            {
                texto: "Não",
                afirmacao: "A IA pode prejudicar no conhecimento quando usado em grande escala, mas também pode ajudar muito em trabalhos e pesquisas!"
            }
            
        ]
    },
    {
        enunciado: "Você gostou das perguntas?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "Fico feliz! Obrigada pelo seu feedback!"
            },
            {
                texto: "Não.",
                afirmacao: "Poxa, me diga o que posso fazer para melhorar. Obrigada pelo seu feedback!"
            }
            
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    } 
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", ()=>RespostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}


function RespostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual ++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "De acordo com suas respostas..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();