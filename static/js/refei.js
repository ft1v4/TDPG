function validar() {
    const dataInput = document.getElementById("dataR");
    const divForms = document.getElementById('divForms')
    const diasSemana = document.getElementById("diasSemana");
  

    const dataSelecionada = new Date(dataInput.value.split('-'));
    const diaSemana = dataSelecionada.getDay();
    if (diaSemana != 1) {
        alert("Por favor, selecione uma segunda-feira.");
    } else {
        diasSemana.style.display = "block";
        divForms.style.display = 'none'
        gerarDiasSemana(dataSelecionada);
    }
}

function gerarDiasSemana(dataInicio) {
    const diasContainer = document.getElementById("diasContainer");
    diasContainer.innerHTML = ''


    for (let i = 0; i < 5; i++) {
        const novaData = new Date(dataInicio);

        novaData.setDate(dataInicio.getUTCDate() + i);

        const dataFormatada = novaData.toISOString().split("T")[0];



        const divDia = document.createElement("div");
        divDia.className = 'corsinha'

        const divDiaSmn = document.createElement('div')
        divDiaSmn.id = 'divDiaSmn'


        const tituloDia = document.createElement("h4");
        tituloDia.innerText = `${novaData.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "numeric" })}`;
        tituloDia.style.fontWeight = 'bold'
        divDiaSmn.appendChild(tituloDia);
        divDia.appendChild(divDiaSmn)

        const divEscolhaRef = document.createElement('div')
        divEscolhaRef.id = 'divEscolhaRef'

        const refeicoes = ["Café da Manhã", "Almoço", "Café da Tarde"];
        refeicoes.forEach((refeicao) => {
            const label = document.createElement("label");
            label.innerText = refeicao;

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.style.cursor = 'pointer'
            checkbox.id = `${dataFormatada}_${refeicao.replace(" ", "_").toLowerCase()}`;
            checkbox.dataset.data = dataFormatada;
            checkbox.dataset.refeicao = refeicao.replace(" ", "_").toLowerCase();

            label.appendChild(checkbox);
            divEscolhaRef.appendChild(label);
            divDia.appendChild(divEscolhaRef)
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
        const data = divDia.querySelector("input").dataset.data


        const cafeCheckbox = document.getElementById(`${data}_café_da manhã`).checked
        const almocoCheckbox = document.getElementById(`${data}_almoço`).checked
        const tardeCheckbox = document.getElementById(`${data}_café_da tarde`).checked



        const refeicaoData = {
            "data": data,
            "cafe_manha": cafeCheckbox,
            "almoco": almocoCheckbox,
            "cafe_tarde": tardeCheckbox
        };

        refeicoes.push(refeicaoData);
    }

    return {
        "id_usuario": userId,
        "refeicoes": refeicoes
    };
}

const divConfirma = document.getElementById('divConfirma')
function fecharDiv() {
    const divForms = document.getElementById('divForms')
    const diasSemana = document.getElementById("diasSemana");
    divConfirma.style.display = 'none'
    diasSemana.style.display = "none";
    divForms.style.display = 'flex'
}

function enviarDados() {
    const dataInput = document.getElementById("dataR");
    const userId = document.getElementById("userID")
    const jsonData = gerarJson();

    axios.post('/refeicaoAgendada', jsonData)

    try {
        const divConfirma = document.getElementById('divConfirma')
        divConfirma.style.display = 'flex'
        dataInput.value = ''
        userId.value = ''


    } catch (error) {
        console.log(error)
        alert("Erro ao enviar os dados.")
    }


}