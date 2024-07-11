
// Dados estáticos de estados, municípios e hemocentros
const dadosHemocentros = {
    "Acre": {
        "Rio Branco": [
            {
                "nome": "Hemoacre",
                "endereco": "Av. Getúlio Vargas, 2787 - Vila Ivonete - Rio Branco, Acre - Cep: 69914-500",
                "latitude": -9.9643421,
                "longitude": -67.8141186
            }
        ],
        "Cruzeiro do Sul": [],
        "Sena Madureira": [],
        "Tarauacá": [],
        "Feijó": [],
        "Brasiléia": [],
        "Epitaciolândia": [],
        "Xapuri": [],
        "Senador Guiomard": [],
        "Plácido de Castro": [],
        "Acrelândia": [],
        "Bujari": [],
        "Capixaba": [],
        "Jordão": [],
        "Mâncio Lima": [],
        "Manoel Urbano": [],
        "Marechal Thaumaturgo": [],
        "Porto Acre": [],
        "Porto Walter": [],
        "Rodrigues Alves": [],
        "Santa Rosa do Purus": []
    },
    "Alagoas": {
        "Maceió": [
            {
                "nome": "Hemocentro De Alagoas - Hemoal",
                "endereco": "Av. Jorge De Lima, 58 - Trapiche - Maceió, Alagoas - Cep: 57010-300",
                "latitude": -9.683077,
                "longitude": -35.735620
            }
        ],
        "Arapiraca": [],
        "Rio Largo": [],
        "Palmeira dos Índios": [],
        "União dos Palmares": [],
        "Penedo": [],
        "Coruripe": [],
        "Delmiro Gouveia": [],
        "Campo Alegre": [],
        "São Miguel dos Campos": [],
        "Teotônio Vilela": [],
        "Santana do Ipanema": [],
        "Marechal Deodoro": [],
        "Atalaia": [],
        "Girau do Ponciano": [],
        "São Luiz do Quitunde": [],
        "Boca da Mata": [],
        "Pilar": [],
        "Igaci": [],
        "Murici": [],
        "Porto Calvo": [],
        "Maragogi": [],
        "Capela": [],
        "Feira Grande": [],
        "Olho d'Água das Flores": [],
        "Pão de Açúcar": [],
        "Matriz de Camaragibe": [],
        "São Sebastião": [],
        "Joaquim Gomes": [],
        "São José da Tapera": [],
        "Batalha": [],
        "Flexeiras": [],
        "Anadia": [],
        "Messias": [],
        "Tanque d'Arca": [],
        "Santana do Mundaú": [],
        "Jundiá": [],
        "Roteiro": [],
        "Barra de Santo Antônio": [],
        "Barra de São Miguel": [],
        "Chã Preta": [],
        "Colônia Leopoldina": [],
        "Coqueiro Seco": [],
        "Feliz Deserto": [],
        "Japaratinga": [],
        "Jaramataia": [],
        "Jequiá da Praia": [],
        "Limoeiro de Anadia": [],
        "Major Isidoro": []
    },
    // Adicione outros estados e seus respectivos municípios e hemocentros aqui
};

// Evento de carregamento da página
window.onload = function() {
    const estadoSelect = document.getElementById("estado");
    const municipioSelect = document.getElementById("municipio");

    // Preencher opções de estado
    for (let estado in dadosHemocentros) {
        let option = document.createElement("option");
        option.value = estado;
        option.textContent = estado;
        estadoSelect.appendChild(option);
    }

    // Evento de mudança no estado
    estadoSelect.addEventListener("change", function() {
        // Limpar opções de municípios
        municipioSelect.innerHTML = "<option value=''>Selecione um município</option>";
        let municipios = dadosHemocentros[estadoSelect.value];
        if (municipios) {
            // Preencher opções de municípios do estado selecionado
            for (let municipio in municipios) {
                let option = document.createElement("option");
                option.value = municipio;
                option.textContent = municipio;
                municipioSelect.appendChild(option);
            }
        }
    });
};

//Função para buscar hemocentros
function buscarHemocentros() {
    const estadoSelecionado = document.getElementById("estado").value;
    const municipioSelecionado = document.getElementById("municipio").value;
    const resultadosDiv = document.getElementById("resultados");

    // Limpar resultados anteriores
    resultadosDiv.innerHTML = "";

    if (estadoSelecionado) {
        if (municipioSelecionado) {
            // Buscar hemocentros para o município selecionado
            const hemocentros = dadosHemocentros[estadoSelecionado][municipioSelecionado];
            if (hemocentros && hemocentros.length > 0) {
                hemocentros.forEach(hemocentro => {
                    mostrarHemocentro(hemocentro, municipioSelecionado); // Passa o nome do município como parâmetro
                });
            } else {
                // Mostrar mensagem e listar todos os hemocentros do estado
                const mensagem = document.createElement("p");
                mensagem.textContent = "Sua cidade não possui hemocentro, aqui estão todos os hemocentros em seu estado:";
                resultadosDiv.appendChild(mensagem);
                mostrarTodosHemocentrosEstado(estadoSelecionado);
            }
        } else {
            alert("Por favor, selecione um município.");
        }
    } else {
        alert("Por favor, selecione o estado.");
    }
}

// Função para mostrar hemocentro na interface
function mostrarHemocentro(hemocentro, municipio) {
    const resultadosDiv = document.getElementById("resultados");

    const hemocentroDiv = document.createElement("div");
    hemocentroDiv.classList.add("hemocentro");

    const nomeHemocentro = document.createElement("h2");
    nomeHemocentro.textContent = `${hemocentro.nome} - ${municipio}`; // Destaca o município junto ao nome do hemocentro

    const enderecoHemocentro = document.createElement("p");
    enderecoHemocentro.textContent = hemocentro.endereco;

    hemocentroDiv.appendChild(nomeHemocentro);
    hemocentroDiv.appendChild(enderecoHemocentro);

    resultadosDiv.appendChild(hemocentroDiv);
}


// Função para mostrar todos os hemocentros do estado
function mostrarTodosHemocentrosEstado(estado) {
    const resultadosDiv = document.getElementById("resultados");

    const hemocentrosEstado = dadosHemocentros[estado];
    if (hemocentrosEstado) {
        for (let municipio in hemocentrosEstado) {
            hemocentrosEstado[municipio].forEach(hemocentro => {
                mostrarHemocentro(hemocentro, municipio); // Passa o nome do município como parâmetro
            });
        }
    }
}
