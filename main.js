const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".texto-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realista. Qual o primeiro pensamento?",
        alternativas: [
            "Isso é assustador!",
            "Isso é maravilhoso!"
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada inteligencia artificial ( IA) uma professora de tecnologia da escola, decidiu fazer uma sequencia de aula sobre esta tecnologia, no fim de uma aula ela pede que você escreva um trabalho de sobre IA em sala de aula. Qual atitude você vai tomar?",
        alternativas: [
            "Ultiliza uma ferramenta de busca na internet que ultiliza IA para que ela ajude encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
            "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema."
        ]
    },

    {
        enunciado: "Após a elaboração do trabalho a professora realiso um debate entre a turma para entender como foi realisado a pesquisa e escrita. nessa conversa foi levantado também um ponto importante:como a IA impacta o futuro. Nesse debate, como você se posiciona?",
        alternativas:[
            "Defende a ideia de que a IA pode criar novas oportunidades de empregos e melhorar abilidades humanas.",
            "Me preucupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger trabalhadores."
        ]
    }
]