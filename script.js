document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. Sistema da Curiosidade Aleatória ---
    const btnCuriosidade = document.getElementById("btn-curiosidade");
    const textoCuriosidade = document.getElementById("texto-curiosidade");

    const curiosidades = [
        "O plantio direto na palha pode reduzir em até 60% a erosão do solo e conservar muito mais água na terra.",
        "Drones agrícolas conseguem identificar pragas antes que elas se espalhem, reduzindo o uso de defensivos em até 30%.",
        "O Paraná é um dos estados líderes nacionais em práticas de conservação de solos e projetos de microbacias.",
        "A rotação de culturas quebra o ciclo de pragas naturalmente e enriquece o solo com nutrientes diferentes a cada safra."
    ];

    btnCuriosidade.addEventListener("click", function () {
        // Sorteia uma frase da lista
        const indiceAleatorio = Math.floor(Math.random() * curiosidades.length);
        textoCuriosidade.textContent = curiosidades[indiceAleatorio];
        
        // Exibe o texto alterando a propriedade do CSS de forma suave
        textoCuriosidade.style.display = "block";
    });


    // --- 2. Simulador de Práticas Sustentáveis ---
    const selectPratica = document.getElementById("pratica");
    const resultadoBox = document.getElementById("resultado");
    const resultadoTexto = document.getElementById("resultado-texto");

    selectPratica.addEventListener("change", function () {
        const valorSelecionado = selectPratica.value;

        // Se o usuário selecionar a opção padrão, esconde a caixa de resposta
        if (valorSelecionado === "default") {
            resultadoBox.classList.add("hidden");
            return;
        }

        let mensagemImpacto = "";

        // Analisa qual opção foi selecionada e define o texto explicativo
        switch (valorSelecionado) {
            case "plantio":
                mensagemImpacto = "Excelente escolha! O Plantio Direto mantém a cobertura orgânica, fixa o carbono no solo (ajudando o clima) e evita o assoreamento dos rios da sua região.";
                break;
            case "rotacao":
                mensagemImpacto = "A Rotação de Culturas (como alternar soja e milho com braquiária) melhora a estrutura física do solo e diminui drasticamente a dependência de fertilizantes químicos.";
                break;
            case "drones":
                mensagemImpacto = "Tecnologia pura! Com a aplicação cirúrgica via drones, você economiza água, economiza combustível dos tratores e protege as áreas de preservação próximas.";
                break;
            default:
                mensagemImpacto = "Prática sustentável detectada.";
        }

        // Atualiza o texto e revela a caixa removendo a classe 'hidden'
        resultadoTexto.textContent = mensagemImpacto;
        resultadoBox.classList.remove("hidden");
    });
});