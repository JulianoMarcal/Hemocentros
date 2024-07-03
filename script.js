function showHemocentros() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            // Simulação de busca de hemocentros próximos
            var hemocentrosProximos = buscarHemocentrosProximos(latitude, longitude);

            // Mostrar os hemocentros na tela
            var resultsElement = document.getElementById('results');
            resultsElement.innerHTML = '<h2>Hemocentros Próximos:</h2>';
            
            if (hemocentrosProximos.length > 0) {
                hemocentrosProximos.forEach(function(hemocentro) {
                    var hemocentroElement = document.createElement('div');
                    hemocentroElement.className = 'hemocentro';
                    hemocentroElement.innerHTML = '<strong>' + hemocentro.nome + '</strong><br>' + hemocentro.endereco;
                    resultsElement.appendChild(hemocentroElement);
                });
            } else {
                resultsElement.innerHTML += '<p>Nenhum hemocentro encontrado próximo.</p>';
            }

            // Esconder o botão após exibir os hemocentros
            var button = document.getElementById('findButton');
            button.style.display = 'none';
        }, function(error) {
            alert('Erro ao obter geolocalização: ' + error.message);
        });
    } else {
        alert('Geolocalização não suportada pelo seu navegador.');
    }
}

// Função para calcular a distância entre duas coordenadas (em quilômetros)
function calcularDistancia(lat1, lon1, lat2, lon2) {
    var p = 0.017453292519943295; // Math.PI / 180
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p) / 2 + 
            c(lat1 * p) * c(lat2 * p) * 
            (1 - c((lon2 - lon1) * p)) / 2;

    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

// Função para buscar os hemocentros próximos
function buscarHemocentrosProximos(latitude, longitude) {
    var hemocentros = [
        {
            nome: 'Hemoacre',
            endereco: 'Av. Getúlio Vargas, 2787 - Vila Ivonete - Rio Branco, Acre - Cep: 69914-500',
            latitude: -9.9643421,
            longitude: -67.8141186
        },
        {
            nome: 'Hemocentro De Alagoas - Hemoal',
            endereco: 'Av. Jorge De Lima, 58 - Trapiche - Maceió, Alagoas - Cep: 57010-300',
            latitude: -9.683077,
            longitude: -35.735620
        },
        {
            nome: 'Hemoap',
            endereco: 'Av Fab, 0 - Central - Macapá, Amapá - Cep: 68900-073',
            latitude: 0.038036,
            longitude: -51.066150
        },
        {
            nome: 'Fhemoam',
            endereco: 'Av Constantino Nery, 4397 - Chapada - Manaus, Amazonas - Cep: 69050-000',
            latitude: -3.102014,
            longitude: -60.025636
        },
        {
            nome: 'Hemoba',
            endereco: 'Ld Do Hospital Geral, 0 2º Andar - Brotas - Salvador, Bahia - Cep: 40286-240',
            latitude: -12.988721,
            longitude: -38.512369
        },
        {
            nome: 'Hemoce',
            endereco: 'Av. José Bastos, 3390 Rodolfo Teófilo - Fortaleza - CE - Cep: 60431-086',
            latitude: -3.735938,
            longitude: -38.538698
        },
        {
            nome: 'Fundação Hemocentro De Brasília',
            endereco: 'Smhn, 03 Qd.03 Conj.a Bloco03 - Asa Norte - Brasília, Distrito Federal - Cep: 70710-908',
            latitude: -15.780149,
            longitude: -47.892527
        },
        {
            nome: 'Hemoes',
            endereco: 'Av Mal Campos, 1468 - Maruípe - Vitória, Espírito Santo - Cep: 29045-460',
            latitude: -20.315498,
            longitude: -40.299689
        },
        {
            nome: 'Hemocentro De Goiás',
            endereco: 'Av. Anhanguera, 5195 - Setor Coimbra - Goiânia, Goiás - Cep: 74535-010',
            latitude: -16.6744883,
            longitude: -49.2826410
        },
        {
            nome: 'Centro De Hematologia E Hemoterapia Do Maranhão',
            endereco: 'R Cinco De Janeiro, 0 - Jordoa - São Luís, Maranhão - Cep: 65040-450',
            latitude: -2.535233,
            longitude: -44.269091
        },
        {
            nome: 'Mt Hemocentro',
            endereco: 'R Treze De Junho, 1055 - Porto - Cuiabá, Mato Grosso - Cep: 78025-000',
            latitude: -15.601410,
            longitude: -56.096192
        },
        {
            nome: 'Hemosul',
            endereco: 'Av Fernando C Da Costa, 1304 - Centro - Campo Grande, Mato Grosso Do Sul - Cep: 79004-310',
            latitude: -20.460315,
            longitude: -54.609867
        },
        {
            nome: 'Núcleo de Divinópolis',
            endereco: 'Rua José Gabriel Medef, 221 - Bairro: Padre Libério - Cep: 35500-139',
            latitude: -20.1451261,
            longitude: -44.8916447
        },
        {
            nome: 'Núcleo Regional De Patos De Minas',
            endereco: 'Rua Major Gote, 1255 - Centro - Patos De Minas, Minas Gerais - Cep: 38700-001',
            latitude: -18.579776,
            longitude: -46.515879
        },
        {
            nome: 'Núcleo Regional De Ponte Nova',
            endereco: 'Rua Carlos Gomes, 17 - Esplanada - Ponte Nova, Minas Gerais - Cep: 35430-069',
            latitude: -20.411560,
            longitude: -42.905859
        },
        {
            nome: 'Núcleo Regional De Pouso Alegre',
            endereco: 'Rua Comendador José Garcia, 825 - Centro - Pouso Alegre, Minas Gerais - Cep: 37550-000',
            latitude: -22.227905,
            longitude: -45.934717
        },
        {
            nome: 'Núcleo Regional De São João Del Rei',
            endereco: 'Rua Prefeito Nascimento Teixeira, 175 - Segredo - São João Del Rei, Minas Gerais - Cep: 36307-404',
            latitude: -21.128924,
            longitude: -44.251935
        },
        {
            nome: 'Núcleo Regional De Sete Lagoas',
            endereco: 'Avenida Renato Azeredo, 3170 - Canaã - Sete Lagoas, Minas Gerais - Cep: 35700-312',
            latitude: -19.469750,
            longitude: -44.253250
        },
        {
            nome: 'Posto De Coleta De Betim Hemominas',
            endereco: 'Rua Salvador Gonçalves Diniz, 191 - Baixada - Betim, Minas Gerais - Cep: 36900-000',
            latitude: -19.969356,
            longitude: -44.195319
        },
        {
            nome: 'Unidade De Coleta E Transfusão De Além Paraíba Hemominas',
            endereco: 'Rua Felizardo Esquerdo, 45 - Ilha Recreio - Além Paraíba, Minas Gerais - Cep: 36660-000',
            latitude: -21.884702,
            longitude: -42.700836
        },
        {
            nome: 'Unidade De Coleta E Transfusão HJK',
            endereco: 'Rua Dr. Cristiano Rezende, 2505 - Flavio Marques Lisboa - Belo Horizonte, Minas Gerais - Cep: 30620-470',
            latitude: -19.950564,
            longitude: -43.970417
        },
        {
            nome: 'Fundação Hemominas De Belo Horizonte',
            endereco: 'Alameda Ezequiel Dias, 321 - Centro - Belo Horizonte, Minas Gerais - Cep: 30130-110',
            latitude: -19.919831,
            longitude: -43.934493
        },
        {
            nome: 'Hemocentro Regional De Juiz De Fora',
            endereco: 'Rua Barão de Cataguases, 0 - Santa Helena - Juiz De Fora, Minas Gerais - Cep: 36015-370',
            latitude: -21.757160,
            longitude: -43.348650
        },
        {
            nome: 'Hemocentro Regional De Montes Claros',
            endereco: 'Rua Urbino Viana, 640 - Vila Guilhermina - Montes Claros, Minas Gerais - Cep: 39400-000',
            latitude: -16.727480,
            longitude: -43.862510
        },
        {
            nome: 'Hemocentro Regional De Uberaba',
            endereco: 'Avenida Getulio Guarita, 250 - Nossa Senhora Da Abadia - Uberaba, Minas Gerais - Cep: 38025-440',
            latitude: -19.743097,
            longitude: -47.950297
        },
        {
            nome: 'Hemocentro Regional De Uberlândia',
            endereco: 'Avenida Levino De Souza, 1845 - Umuarama - Uberlândia, Minas Gerais - Cep: 38405-322',
            latitude: -18.933674,
            longitude: -48.289472
        },
        {
            nome: 'Hemominas De Governador Valadares',
            endereco: 'Rua Rui Barbosa, 149 - Centro - Governador Valadares, Minas Gerais - Cep: 35020-510',
            latitude: -18.850370,
            longitude: -41.944833
        },
        {
            nome: 'Hemominas De Ituiutaba',
            endereco: 'Avenida 5 A, 0 - Progresso - Ituiutaba, Minas Gerais - Cep: 38302-010',
            latitude: -18.977060,
            longitude: -49.460369
        },
        {
            nome: 'Hemominas Passos',
            endereco: 'Rua Dr. Jose L De Barros, 313 - Belo Horizonte - Passos, Minas Gerais - Cep: 37900-030',
            latitude: -20.719778,
            longitude: -46.609028
        },
        {
            nome: 'Hemominas Poços De Caldas',
            endereco: 'Avenida Jose R Prezia, 303 - Jardim Dos Estados - Poços De Caldas, Minas Gerais - Cep: 37701-102',
            latitude: -21.787949,
            longitude: -46.565874
        },
        {   nome: 'Núcleo Regional De Diamantina Hemominas',
            endereco: 'Rua Da Glória, 469 Fundos - Centro - Diamantina, Minas Gerais - Cep: 39100-000',
            latitude: -18.241246,
            longitude: -43.602912 
        },
        {   nome: 'Núcleo Regional De Manhuaçu',
            endereco:'Rua Frederico Dolabela, 289 - Baixada - Manhuaçu, Minas Gerais - Cep: 36900-000',
            latitude: -20.258464,
            longitude:  -42.036686
        },
        {
            nome: 'Fundação Hemopa',
            endereco: 'Tv. Padre Eutiquio, 2109 - Batista Campos - Belém, Pará - Cep: 66033-000',
            latitude: -1.452169,
            longitude: -48.491963
        },
        {
            nome:'Hemocentro Coordenador Paraíba',
            endereco: 'Av D Pedro II, 1119 - Centro - João Pessoa, Paraíba - Cep: 58013-420',
            latitude:-7.121763,
            longitude:-34.872812
        },
        {
            nome: 'Hemope',
            endereco: 'R Joaquim Nabuco, 171 - Graças - Recife, Pernambuco - Cep: 52011-000',
            latitude: -8.049937,
            longitude: -34.891312
        },
        {
            nome: 'Hemepar Curitiba',
            endereco: 'R. Travessa João Prosdócimo, 145 - Alto da XV, Curitiba - PR, 80045-145',
            latitude: -25.425296,
            longitude: -49.244631
        },
        {
            nome: 'Hospital Universitário Regional Do Norte Do Paraná',
            endereco: 'Rua Cláudio D. Cavalieri, 156 - Jardim Aruba - Londrina, Paraná - Cep: 86038-350',
            latitude: -23.313152,
            longitude: -51.162508
        },
        {
            nome: 'Unidade De Coleta E Transfusão De Toledo',
            endereco: 'Rua Alm. Barroso, 2490 - Centro - Toledo, Paraná - Cep: 85900-020',
            latitude: -24.724631,
            longitude: -53.738176
        },
        {
            nome: 'Hemepar Guarapuava',
            endereco: 'Rua Afonso Botelho, 134 - Trianon - Guarapuava, Paraná - Cep: 85015-000',
            latitude: -25.393902,
            longitude: -51.462456
        },
        {
            nome: 'Hemepar Irati',
            endereco: 'Rua Coronel Garcia, 761 - Centro - Irati, Paraná - Cep: 84500-000',
            latitude: -25.470206,
            longitude: -50.657872
        },
        {
            nome: 'Hemepar Jacarezinho',
            endereco: 'Rua Coronel Cecílio Rocha, 425 - Centro - Jacarezinho, Paraná - Cep: 86400-000',
            latitude: -23.161741,
            longitude: -49.974239
        },
        {
            nome: 'Hemepar Paranaguá',
            endereco: 'Rua Gabriel De Lara, 481 - Centro Histórico - Paranaguá, Paraná - Cep: 83203-250',
            latitude: -25.520602,
            longitude: -48.511579
        },
        {
            nome: 'Hemepar Ponta Grossa',
            endereco: 'Rua Gen. Osório, 2390 - Centro - Ponta Grossa, Paraná - Cep: 84010-080',
            latitude: -25.090902,
            longitude: -50.161168
        },
        {
            nome: 'Hemepar Telemaco Borba',
            endereco: 'Rua Osório De Almeida Taques, 62 - Centro - Telêmaco Borba, Paraná - Cep: 84261-060',
            latitude: -24.324479,
            longitude: -50.617738
        },
        {
            nome: 'Hemepar Umuarama',
            endereco: 'Avenida Manaus, 4444 - Centro Cívico - Umuarama, Paraná - Cep: 87501-130',
            latitude: -23.762834,
            longitude: -53.326418
        },
        {
            nome: 'Hemobanco - Curitiba',
            endereco: 'Rua Capitão Souza Franco, 290 Casa - Batel - Curitiba, Paraná - Cep: 80730-420',
            latitude: -25.437248,
            longitude: -49.289234
        },
        {
            nome: 'Hemocentro Regional De Cascavel',
            endereco: 'Rua Avaetes, 37 - Santo Onofre - Cascavel, Paraná - Cep: 85806-380',
            latitude: -24.961401,
            longitude: -53.459163
        },
        {
            nome: 'Hemocentro Regional De Maringá',
            endereco: 'Avenida Mandacaru, 1600 - Parque Das Laranjeiras - Maringá, Paraná - Cep: 87083-240',
            latitude: -23.406436,
            longitude: -51.933206
        },
        {
            nome: 'Hemonúcleo De Foz Do Iguaçu',
            endereco: 'Avenida Gramado, 364 - Vila Residencial A - Foz Do Iguaçu, Paraná - Cep: 85860-460',
            latitude: -25.548263,
            longitude: -54.576215
        },
        {
            nome: 'Hemonúcleo Regional De Francisco Beltrão',
            endereco: 'Rua Marília, 1327 - Padre Ulrico - Francisco Beltrão, Paraná - Cep: 85604-400',
            latitude: -26.080468,
            longitude: -53.053227
        },
        {
            nome: 'Hemonúcleo Regional De Paranavaí',
            endereco: 'Rua Rio Grande do Sul, 2390 - Centro - Paranavaí, Paraná - Cep: 87703-320',
            latitude: -23.083330,
            longitude: -52.462347
        },
        {
            nome: 'Hospital De Clínicas - UFPR',
            endereco: 'Avenida Agostinho Leão Junior, 108 Térreo - Centro - Curitiba, Paraná - Cep: 80030-110',
            latitude: -25.416853,
            longitude: -49.260113
        },
        {
            nome: 'Hospital Erasto Gaertner',
            endereco: 'Rua Dr. Ovande Do Amaral, 201 - Hospital Erasto Gaertner - Jardim Das Américas - Curitiba, Paraná - Cep: 81520-060',
            latitude: -25.449905,
            longitude: -49.226612
        },
        {
            nome: 'Hemonúcleo de Pato Branco',
            endereco: 'Rua Paraná, 1633 - Sambugaro - Pato Branco, Paraná - Cep: 85501-090',
            latitude: -26.229844,
            longitude: -52.670241
        },
        {
            nome: 'Banco De Sangue Na Santa Casa',
            endereco: 'Praça Rui Barbosa, 694 - Centro - Curitiba, Paraná - Cep: 80010-030',
            latitude: -25.430069,
            longitude: -49.269272
        },
        {
            nome: 'UCT União da Vitória',
            endereco: 'Rua Castro Alves, 26 Prédio - Centro - União Da Vitória, Paraná - Cep: 84600-000',
            latitude: -26.227981,
            longitude: -51.087984
        },
        {
            nome: 'Consórcio De Saúde - Cianorte',
            endereco: 'Praça Da República, 71 - Centro - Cianorte, Paraná - Cep: 87200-000',
            latitude: -23.659066,
            longitude: -52.605960
        },
        {
            nome: 'Hemepar Apucarana',
            endereco: 'Rua Antonio Ostrenski, 03 - Centro - Apucarana, Paraná - Cep: 86800-200',
            latitude: -23.550625,
            longitude: -51.460013
        },
        {
            nome: 'Hemepar Campo Mourão',
            endereco: 'Rua Mamborê, 1500 - Centro - Campo Mourão, Paraná - Cep: 87302-140',
            latitude: -24.044836,
            longitude: -52.376526
        },
        //fim do paraná
        {
            nome: 'Fundação De Hematologia E Hemoterapia De Pernambuco',
            endereco: 'Rua Joaquim Nabuco, 171 - Graças - Recife, Pernambuco - Cep: 52011-100',
            latitude: -8.043247,
            longitude: -34.897519
        },
        {
            nome: 'Hemocentro Regional Caruaru',
            endereco: 'Av Oswaldo Cruz, 0 - Maurício De Nassau - Caruaru, Pernambuco - Cep: 55012-040',
            latitude: -8.287828,
            longitude: -35.974509
        },
        {
            nome: 'Hemocentro Regional De Garanhuns',
            endereco: 'Av Gonçalves Maia, 0 - Heliópolis - Garanhuns, Pernambuco - Cep: 55296-270',
            latitude: -8.890614,
            longitude: -36.492392
        },
        {
            nome: 'Núcleo De Hemoterapia Regional Arcoverde',
            endereco: 'Av Joaquim Nabuco, 0 - Centro - Arcoverde, Pernambuco - Cep: 56506-470',
            latitude: -8.417184,
            longitude: -37.062732
        },
        {
            nome: 'Núcleo De Hemoterapia Regional Ouricuri',
            endereco: 'Rua Ulisses Guimarães, 0 - Centro - Ouricuri, Pernambuco - Cep: 56200-970',
            latitude: -7.881077,
            longitude: -40.079834
        },
        {
            nome: 'Núcleo De Hemoterapia Regional Petrolina',
            endereco: 'Rua Pacífico Da Luz, 0 - Centro - Petrolina, Pernambuco - Cep: 56304-010',
            latitude: -9.396902,
            longitude: -40.503377
        },
        {
            nome: 'Núcleo De Hemoterapia Regional Salgueiro',
            endereco: 'Rua Joaquim Gondim, 65 - Centro - Salgueiro, Pernambuco - Cep: 56000-970',
            latitude: -8.074349,
            longitude: -39.119030
        },
        {
            nome: 'Núcleo De Hemoterapia Regional Serra Talhada',
            endereco: 'Rua Joaquim Godoy, 0 - Nossa Senhora Da Penha - Serra Talhada, Pernambuco - Cep: 56912-450',
            latitude: -7.992151,
            longitude: -38.294678
        },
        {
            nome: 'Hemopi',
            endereco: 'Rua 1º De Maio, 235 - Centro/Sul - Teresina, Piauí - Cep: 64001-430',
            latitude: -5.086339,
            longitude: -42.805634
        },
        {
            nome: 'Hemocampos - Hemocentro Regional de Campos dos Goytacazes',
            endereco: 'Rua Rocha Leão, 2 - Cajú - Campos dos Goytacazes, RJ - Cep: 28051-170',
            latitude: -21.761611,
            longitude: -41.330093
        },
        {
            nome: 'Núcleo de Hemoterapia do Hospital Universitário Pedro Ernesto - UERJ',
            endereco: 'Boulevard 28 de setembro, 109 - Vila Isabel - Rio de Janeiro, RJ - CEP 20551-030',
            latitude: -22.916726,
            longitude: -43.249097
        },
        {
            nome: 'Banco De Sangue Do Instituto Nacional De Câncer José Alencar Gomes Da Silva',
            endereco: 'Praça Cruz Vermelha, 23 2º Andar - Centro - Rio De Janeiro, RJ - Cep: 20230-130',
            latitude: -22.909475,
            longitude: -43.195351
        },
        {
            nome: 'Hemonorte',
            endereco: 'Av Alm Alexandrino De Alencar, 1800 - Tirol - Natal, RN - Cep: 59015-350',
            latitude: -5.801502,
            longitude: -35.207873
        },
        {
            nome: 'Hemovida',
            endereco: 'Av Nilo Peçanha, 199 - Petrópolis - Natal, RN - Cep: 59012-300',
            latitude: -5.797897,
            longitude: -35.207335
        },
        {
            nome: 'Hemosar',
            endereco: 'Rua Boa Vista, 401 - Centro, Santa Rosa, Rio Grande do Sul',
            latitude: null,
            longitude: null
        },
        {
            nome: 'Hospital Conceição',
            endereco: 'Av Francisco Trein, 596 - Passo D\'areia, Porto Alegre, Rio Grande do Sul',
            latitude: -30.012055,
            longitude: -51.171381
        },
        {
            nome: 'Hospital de Clínicas de Porto Alegre',
            endereco: 'R Ramiro Barcelos, 2350 - Santana, Porto Alegre, Rio Grande do Sul',
            latitude: -30.035222,
            longitude: -51.205941
        },
        {
            nome: 'Hemocentro Regional de Alegrete',
            endereco: 'R Gen Sampaio, 10 - Vila Nova, Alegrete, Rio Grande do Sul',
            latitude: -29.787696,
            longitude: -55.781935
        },
        {
            nome: 'Hemocentro Regional de Caxias do Sul',
            endereco: 'R Ernesto Alves, 2260 - Nossa Senhora de Lourdes, Caxias do Sul, Rio Grande do Sul',
            latitude: -29.168376,
            longitude: -51.192248
        },
        {
            nome: 'Hemocentro Regional de Cruz Alta',
            endereco: 'R Br do Rio Branco, 1445 - Centro, Cruz Alta, Rio Grande do Sul',
            latitude: -28.643962,
            longitude: -53.610650
        },
        {
            nome: 'Hemocentro Regional de Palmeira das Missões',
            endereco: 'Rua Nassib Nassif, 503 - Loteamento Céu Azul, Palmeira das Missões, Rio Grande do Sul',
            latitude: -27.909096,
            longitude: -53.309309
        },
        {
            nome: 'Hemocentro Regional de Santa Maria',
            endereco: 'Al Santiago do Chile, 35 - Nossa Senhora de Lourdes, Santa Maria, Rio Grande do Sul',
            latitude: -29.686469,
            longitude: -53.811232
        },
        {
            nome: 'Hemopasso - Hemocentro Regional de Passo Fundo',
            endereco: 'Av Sete de Setembro, 1055 - Centro, Passo Fundo, Rio Grande do Sul',
            latitude: -28.263993,
            longitude: -52.410683
        },
        {
            nome: 'Hemopel',
            endereco: 'Av Bento Gonçalves, 4569 - Centro, Pelotas, Rio Grande do Sul',
            latitude: -31.767647,
            longitude: -52.342208
        },
        {
            nome: 'Hemorgs',
            endereco: 'Av Bento Gonçalves, 3722 - Partenon, Porto Alegre, Rio Grande do Sul',
            latitude: -30.043833,
            longitude: -51.201586
        },
        {
            nome: 'Fhemeron',
            endereco: 'R Benedito de S Brito, 0 - Industrial, Porto Velho, Rondônia',
            latitude: -8.771293,
            longitude: -63.879558
        },
        {
            nome: 'UCT de Ji Paraná',
            endereco: 'R Vilagran Cabrita, 1440 - Centro, Ji-Paraná, Rondônia',
            latitude: -10.882212,
            longitude: -61.950225
        },
        {
            nome: 'Hemocentro de Roraima',
            endereco: 'Av Brg Eduardo Gomes, 3418 - Aeroporto, Boa Vista, Roraima',
            latitude: 2.835186,
            longitude: -60.686290
        },
        {
            nome: 'Centro de Hematologia e Hemoterapia de Santa Catarina (HEMOSC)',
            endereco: 'Av Prof Othon Gama D\'Eça, 756 - Centro, Florianópolis, Santa Catarina',
            latitude: -27.597208,
            longitude: -48.549176
        },
        {
            nome: 'Irmandade Santa Casa de São Carlos',
            endereco: 'Rua Paulino Botelho de Abreu Sampaio, 535 - Jardim Pureza, São Carlos, São Paulo',
            latitude: -22.013293,
            longitude: -47.890393
        },
        {
            nome: 'Hemocentro de Ribeirão Preto',
            endereco: 'R Ten Catao Roxo, 2501 - Vila Monte Alegre, Ribeirão Preto, São Paulo',
            latitude: -21.182219,
            longitude: -47.818867
        },
        {
            nome: 'Hemonúcleo de Santos',
            endereco: 'Rua Oswaldo Cruz, 197 - Boqueirão, Santos, São Paulo',
            latitude: -23.957964,
            longitude: -46.325693
        },
        {
            nome: 'Hemonúcleo de Bauru',
            endereco: 'R Mons Claro, 888 - Centro, Bauru, São Paulo',
            latitude: -22.314853,
            longitude: -49.060308
        },
        {
            nome: 'Hospital Amaral Carvalho',
            endereco: 'R Da Silveria, 150 - Chácara Braz Miraglia, Jaú, São Paulo',
            latitude: -22.298032,
            longitude: -48.570176
        },
        {
            nome: 'Hospital de Câncer de Barretos',
            endereco: 'R Antenor D Vilela, 1331 - Doutor Paulo Prata, Barretos, São Paulo',
            latitude: -20.545595,
            longitude: -48.569283
        },
        {
            nome: 'Hospital São Paulo de Ensino da UNIFESP',
            endereco: 'R Dr Diogo de Faria, 824 - Vila Clementino, São Paulo, São Paulo',
            latitude: -23.597236,
            longitude: -46.637837
        },
        {
            nome: 'Núcleo de Atendimento à Comunidade Farmácia Araraquara',
            endereco: 'R Exps do Brasil, 1621 - Centro, Araraquara, São Paulo',
            latitude: -21.794233,
            longitude: -48.176657
        },
        {
            nome: 'Colsan',
            endereco: 'Av Cônego Pereira Inácio, 564 - Jardim Faculdade, Sorocaba, São Paulo',
            latitude: -23.496537,
            longitude: -47.457766
        },
        {
            nome: 'Fundação Faculdade Regional de Medicina de São José do Rio Preto',
            endereco: 'R Jamil Feres Kfouri, 80 - Jardim Panorama, São José do Rio Preto, São Paulo',
            latitude: -20.832889,
            longitude: -49.371308
        },
        {
            nome: 'Hemocentro da Faculdade de Medicina de Marília',
            endereco: 'R Lourival Freire, 240 - Fragata, Marília, São Paulo',
            latitude: -22.221408,
            longitude: -49.934421
        },
        {
            nome: 'Hemocentro da Santa Casa de São Paulo / Laboratório de Histocompatibilidade',
            endereco: 'R Mq de Itu, 579 - Vila Buarque, São Paulo, São Paulo',
            latitude: -23.545280,
            longitude: -46.656893
        },
        {
            nome: 'Hemocentro de Botucatu',
            endereco: 'Distrito de Rubião Júnior, s/n - Rubião Junior, Botucatu, São Paulo',
            latitude: -22.885688,
            longitude: -48.462432
        },
        {
            nome: 'Hemocentro de Campinas / UNICAMP',
            endereco: 'R Carlos Chagas, 480 - Cidade Universitária, Campinas, São Paulo',
            latitude: -22.818620,
            longitude: -47.068767
        },
        {
            nome: 'Hemose',
            endereco: 'Av Pres Tancredo Neves, s/n - Capucho, Aracaju, Sergipe',
            latitude: -10.961433,
            longitude: -37.074256
        },
        {
            nome: 'Unidade de Coleta de Transfusão Augustinópolis',
            endereco: 'Rua Anicuns, 200 - Centro, Augustinópolis, Tocantins',
            latitude: -5.466235,
            longitude: -47.880666
        },
        {
            nome: 'Hemocentro Coordenador de Palmas',
            endereco: '301 Norte, Av. NS 01, Conj. 02, Lote 01 - Plano Diretor Norte, Palmas, Tocantins',
            latitude: -10.175507,
            longitude: -48.331220
        },
        {
            nome: 'Hemocentro Regional de Araguaína',
            endereco: 'R Treze de Maio, 1336 - Setor Central, Araguaína, Tocantins',
            latitude: -7.193064,
            longitude: -48.207713
        },
        {
            nome: 'Núcleo de Hemoterapia de Gurupi',
            endereco: 'R Quatorze de Novembro, Quadra 117, Lote 18 - Setor Central, Gurupi, Tocantins',
            latitude: -11.729847,
            longitude: -49.067176
        }
    ];

    // Filtrar hemocentros próximos (distância < 50 km)
    var distanciaMaxima = 50; // em quilômetros
    var hemocentrosProximos = hemocentros.filter(function(hemocentro) {
        var distancia = calcularDistancia(latitude, longitude, hemocentro.latitude, hemocentro.longitude);
        return distancia <= distanciaMaxima;
    });

    return hemocentrosProximos;
}
