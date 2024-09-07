function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById ("campo-pesquisa").value

    // se o campoPesquisa for uma string sem nada '
    if (!campoPesquisa) {
        section.innerHTML = "Não há nada a exibir."
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

//para cada dado dentro da lista de dados
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    //Se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href=${dado.site} target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <h3 class="valores-baterias">Valor da Bateria:</h3>${dado.valores}
            <h3 class="positivos">Pontos Positivos:</h3>${dado.positivo}
            <h3 class="negativos">Pontos Negativos:</h3>${dado.negativo}<br><br>
                <a href=${dado.link} target="_blank">Assista uma Volta Rápida!</a>
        </div>
    `;
    }
}

if (!resultados) {
    resultados = "<p>Kartódromo não encontrado com essa palavra.</p>"
}

section.innerHTML = resultados
};

//console.log(dados);