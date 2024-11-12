function validar() {
    const dataInput = document.getElementById("dataR");
    const diasSemana = document.getElementById("diasSemana");
    const diasContainer = document.getElementById("diasContainer");

    const dataSelecionada = new Date(dataInput.value);
    const diaSemana = dataSelecionada.getDay(); 

    // Verifica se é segunda-feira
    if (diaSemana != 0) {
        alert("Por favor, selecione uma segunda-feira.");
    } else {
        diasSemana.style.display = "block";
        gerarDiasSemana(dataSelecionada);
    }
}

function gerarDiasSemana(dataInicio) {
    const diasContainer = document.getElementById("diasContainer");
    diasContainer.innerHTML = ""; // Limpa o conteúdo anterior

    // Gera os dias da segunda a sexta
    for (let i = 0; i < 5; i++) {
        const novaData = new Date(dataInicio);
        novaData.setDate(dataInicio.getDate() + i);

        const dataFormatada = novaData.toISOString().split("T")[0];

        // Cria as opções de refeição para cada dia
        const divDia = document.createElement("div");
        divDia.classList.add("dia-semana");

        const tituloDia = document.createElement("h4");
        tituloDia.innerText = `${novaData.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "numeric" })}`;
        divDia.appendChild(tituloDia);

        const refeicoes = ["Café da Manhã", "Almoço", "Café da Tarde"];
        refeicoes.forEach((refeicao) => {
            const label = document.createElement("label");
            label.innerText = refeicao;

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = `${dataFormatada}_${refeicao.replace(" ", "_").toLowerCase()}`;
            checkbox.dataset.data = dataFormatada; // Armazena a data no atributo dataset
            checkbox.dataset.refeicao = refeicao.replace(" ", "_").toLowerCase(); // Nome da refeição

            label.appendChild(checkbox);
            divDia.appendChild(label);
            divDia.appendChild(document.createElement("br"));
        });

        diasContainer.appendChild(divDia);
    }
}

function gerarJson() {
    const userId = document.getElementById("userId").value;
    const diasContainer = document.getElementById("diasContainer");
    const refeicoes = [];

    // Itera sobre os dias da semana (segunda a sexta)
    for (let i = 0; i < diasContainer.children.length; i++) {
        const divDia = diasContainer.children[i];
        const data = divDia.querySelector("input").dataset.data; // Extrai a data

        const refeicaoData = {
            "data": data,
            "cafe_manha": document.getElementById(`${data}_cafe_manha`).checked,
            "almoco": document.getElementById(`${data}_almoco`).checked,
            "cafe_tarde": document.getElementById(`${data}_cafe_tarde`).checked
        };

        refeicoes.push(refeicaoData);
    }

    return {
        "id_usuario": userId,
        "refeicoes": refeicoes
    };
}

function enviarDados() {
    const jsonData = gerarJson();

    axios.post('/refeicaoAgendada', jsonData)
        .then(response => {
            console.log("Dados enviados com sucesso:", response.data);
            alert("Dados enviados com sucesso!");
        })
        .catch(error => {
            console.error("Erro ao enviar os dados:", error);
            alert("Erro ao enviar os dados.");
        });
}