
function validar() {
    const dataInput = document.getElementById("dataR");
    const diasSemana = document.getElementById("diasSemana");
    const diasContainer = document.getElementById("diasContainer");

    console.log(dataInput.value)
    const dataSelecionada = new Date(dataInput.value.split('-'));
    const diaSemana = dataSelecionada.getDay();
    console.log(dataSelecionada)
    if (diaSemana != 1) {
        alert("Por favor, selecione uma segunda-feira.");
    } else {
        diasSemana.style.display = "block";
        gerarDiasSemana(dataSelecionada);
    }
}

function gerarDiasSemana(dataInicio) {
    const diasContainer = document.getElementById("diasContainer");

    // Gera os dias da segunda a sexta
    for (let i = 0; i < 5; i++) {
        const novaData = new Date(dataInicio);

        novaData.setDate(dataInicio.getUTCDate() + i);

        const dataFormatada = novaData.toISOString().split("T")[0];



        const divDia = document.createElement("div");
        divDia.className = 'corsinha'

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
        });

        diasContainer.appendChild(divDia);
    }
}

function gerarJson() {
    const userId = document.getElementById("userID").value;
    const diasContainer = document.getElementById("diasContainer");
    const refeicoes = [];

    // Itera sobre os dias da semana (segunda a sexta)
    for (let i = 0; i < diasContainer.children.length; i++) {
        const divDia = diasContainer.children[i];
        const data = divDia.querySelector("input").dataset.data; // Extrai a data

        const cafeCheckbox = document.getElementById(`${data}_cafe_manha`);
        const almocoCheckbox = document.getElementById(`${data}_almoco`);
        const tardeCheckbox = document.getElementById(`${data}_cafe_tarde`);

        console.log('FFFFFFF', data)

        const refeicaoData = {
            "data": data,
            "cafe_manha": cafeCheckbox ? cafeCheckbox.checked : false,
            "almoco": almocoCheckbox ? almocoCheckbox.checked : false,
            "cafe_tarde": tardeCheckbox ? tardeCheckbox.checked : false
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
    console.log(jsonData)
        .then(response => {
            console.log("Dados enviados com sucesso:", response.data);
            alert("Dados enviados com sucesso!");
        })
        .catch(error => {
            console.error("Erro ao enviar os dados:", error);
            alert("Erro ao enviar os dados.");
        });
}