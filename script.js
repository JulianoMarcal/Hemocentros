// Dados estáticos de estados, municípios e hemocentros
const dadosHemocentros = {
    "Acre": {
        "Rio Branco": [
            {
                "nome": "HEMOACRE",
                "endereco": "Av. Getúlio Vargas, 2787 - Bosque - Rio Branco, Acre - CEP:69914-500",
                "latitude": null,
                "longitude": null,
                "contato": "(68) 3248-1380 | (68) 3248-1377 | (68) 3228-1494"
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
                "nome": "HEMOAL Unidade Trapiche",
                "endereco": "Rua Dr. Jorge de Lima, 58 – Trapiche da Barra – CEP: 57010-382 – Maceió/AL",
                "latitude": null,
                "longitude": null,
                "contato": "(82) 3315-2109 | (82) 3315-2105 | (82) 3315-2106"
            },
            {
                "nome": "Hemopac",
                "endereco": "R. Itatiaia, 96 - Farol, Maceió - AL, 57051-380",
                "latitude": null,
                "longitude": null,
                "contato": "(82) 3311-1500"
            }
        ],
        "Arapiraca": [
            {
                "nome": "HEMOAL - Arapiraca",
                "endereco": "Rua Geraldo Barbosa, s/n - Centro, Arapiraca - AL, 57300-090",
                "latitude": null,
                "longitude": null,
                "contato": "(82) 3521-4934"
            }
        ],
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
        "Amapá": {
            "Macapá": [
                {
                    "nome": "Instituto de Hematologia e Hemoterapia do Amapá - HEMOAP",
                    "endereco": "Av. Raimundo Álvares da Costa, 1106 - Central, Macapá - AP, 68900-074",
                    "contato": "(96) 98811-0200 e (96) 3212-6139"
                }
            ],
            "Santana": [],
            "Laranjal do Jari": [],
            "Oiapoque": [],
            "Porto Grande": [],
            "Mazagão": [],
            "Pedra Branca do Amapari": [],
            "Tartarugalzinho": [],
            "Vitória do Jari": [],
            "Calçoene": [],
            "Ferreira Gomes": [],
            "Cutias": [],
            "Amapá": [],
            "Itaubal": [],
            "Pracuúba": [],
            "Serra do Navio": []
        },
            "Amazonas": {
                "Manaus": [
                    {
                        "nome": "HEMOAM - Manaus - AM",
                        "endereco": "Av Constantino Nery, 4397 - Chapada - Manaus, Amazonas - CEP:69050-000",
                        "contato": "(92) 3655-0100"
                    }
                ],
                "Parintins": [],
                "Itacoatiara": [],
                "Manacapuru": [],
                "Coari": [],
                "Tefé": [],
                "Maués": [],
                "Eirunepé": [],
                "Lábrea": [],
                "Autazes": [],
                "Manicoré": [],
                "Borba": [],
                "Humaitá": [],
                "Careiro": [],
                "Presidente Figueiredo": [],
                "Tabatinga": [],
                "São Gabriel da Cachoeira": [],
                "Benjamin Constant": [],
                "Iranduba": [],
                "Novo Airão": [],
                "Boca do Acre": [],
                "Urucurituba": [],
                "Jutaí": [],
                "Nova Olinda do Norte": [],
                "Barreirinha": [],
                "Rio Preto da Eva": [],
                "Carauari": [],
                "Anori": [],
                "Beruri": [],
                "Envira": [],
                "Fonte Boa": [],
                "Guajará": [],
                "Ipixuna": [],
                "Itapiranga": [],
                "Japurá": [],
                "Juruá": [],
                "Nhamundá": [],
                "Novo Aripuanã": [],
                "Pauini": [],
                "Santa Isabel do Rio Negro": [],
                "Santo Antônio do Içá": [],
                "São Paulo de Olivença": [],
                "Silves": [],
                "Tapauá": [],
                "Tonantins": [],
                "Uarini": []
            },

                "Bahia": {
                    "Feira de Santana": [
                        {
                            "nome": "HEMOBA",
                            "endereco": "Av. Eduardo Fróes da Mota, S/Nº Bloco 35 - CEP: 44.100-000",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(75) 3221-6888"
                        },
                        {
                            "nome": "IHEF",
                            "endereco": "Avenida Getúlio Vargas, 844 - Centro, Feira de Santana - BA, 44001-496",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(75) 2101-5011 / 2101-5012 / 5000"
                        }
                    ],
                    "Camaçari": [
                        {
                            "nome": "HEMOBA",
                            "endereco": "Avenida Jorge Amado, s/n - Bairro Jardim Limoeiro - Camaçari/BA - CEP: 42802-580",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(71) 3644-4252"
                        }
                    ],
                    "Salvador": [
                        {
                            "nome": "HEMOBA - Unidade Hospital do Subúrbio",
                            "endereco": "Rua Manuel Lino, 141 - Periperi, Salvador - BA, 40720-460",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(71) 3217-8824 | (71) 3217-8905 | (71) 3217-8823"
                        },
                        {
                            "nome": "HEMOBA - Coleta Itinerante Salvador Norte Shopping",
                            "endereco": "Rodovia BA-526, 305 - São Cristóvão, Salvador - BA, 41510-000",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(71) 3116-5643"
                        },
                        {
                            "nome": "HEMOBA - Unidade Hospital Santo Antônio",
                            "endereco": "Avenida Dendezeiros do Bonfim, 161 - Bonfim, Salvador - BA, 40415-180",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(71) 3310-1349"
                        },
                        {
                            "nome": "HEMOBA - Coleta Itinerante Salvador Shopping",
                            "endereco": "Av. Tancredo Neves, 3133 - Caminho das Árvores, Salvador - BA, 41820-021 Posto de coleta: Piso G1, na Praça de Serviços.",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(71) 3116-5643"
                        },
                        {
                            "nome": "HEMOBA",
                            "endereco": "Ladeira do Hospital Geral, S/N - Bairro Brotas - Salvador/BA - CEP 40286-240",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(71) 3116-5664 | (71) 3116-5600"
                        },
                        {
                            "nome": "Hospital Aliança de Salvador",
                            "endereco": "Av. Juracy Magalhães Júnior, 2096 - Rio Vermelho, Salvador - BA, 41920-180",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(71) 2108-4693"
                        },
                        {
                            "nome": "Hemocentro São Lucas",
                            "endereco": "Av. Princesa Isabel, 914 - Barra, Salvador - BA, 40140-000",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(71) 3245-2891"
                        }
                    ],
                    "Vitória da Conquista": [
                        {
                            "nome": "Serviço de Hemoterapia do Sudoeste de Vitória da Conquista",
                            "endereco": "R. Santos Dumont, 53 - Centro, Vitória da Conquista - BA, 45000-015",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(77) 3427-0327 | (77) 98829-4051"
                        }
                    ],
                    "Itabuna": [
                        {
                            "nome": "Santa Casa - Itabuna",
                            "endereco": "Rua Antônio Muniz, 200 - Pontalzinho, Itabuna - BA, 45603-023",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(73) 3214-9126 | (73) 3214-9127 | (73) 3214-9154"
                        }
                    ],
                    "Juazeiro": [
                        {
                            "nome": "HEMOBA - Juazeiro",
                            "endereco": "Rua Joaquim Bispo dos Santos, s/n - Bairro Santo Antônio - Juazeiro/BA - CEP: 48903-190",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(74) 3611-7532"
                        }
                    ],
                    "Lauro de Freitas": [],
                    "Ilhéus": [],
                    "Jequié": [
                        {
                            "nome": "HEMOBA - Jequié",
                            "endereco": "Rua São Cristóvão, s/n - Centro - Jequié - BA, 45203-110",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(73) 3528-7153 | (73) 3528-7154 | (73) 3528-7159"
                        }
                    ],
                    "Teixeira de Freitas": [
                        {
                            "nome": "HEMOBA - Teixeira de Freitas",
                            "endereco": "Rua Massanori Nagao, nº 355 Bairro Centro - Teixeira de Freitas/BA - CEP: 45985-199",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(73) 3011-2740"
                        }
                    ],
                    "Alagoinhas": [
                        {
                            "nome": "HEMOBA - Alagoinhas",
                            "endereco": "R. Dr. Dantas Bião, 49 - Centro, Alagoinhas - BA, 48000-000",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(75) 3422-2042"
                        }
                    ],
                    "Barreiras": [
                        {
                            "nome": "HEMOBA - Barreiras",
                            "endereco": "Rua Paulo Afonso, s/n - Barreirinhas, Barreiras - BA, 47810-608",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(77) 3613-3799"
                        }
                    ],
                    "Porto Seguro": [],
                    "Simões Filho": [],
                    "Paulo Afonso": [],
                    "Santo Antônio de Jesus": [
                        {
                            "nome": "HEMOBA - Santo Antônio de Jesus",
                            "endereco": "Avenida Cosme Damião, BR 101 - Bairro Andaiá - Santo Antônio de Jesus/BA - CEP: 44434-040",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(75) 3631-5191"
                        }
                    ],
                    "Valença": [
                        {
                            "nome": "HEMOBA - Valença",
                            "endereco": "Rua Barão de Jiquiriça, s/n - Bairro Centro - Valença/BA - CEP: 45400-000",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(75) 3641-8428"
                        }
                    ],
                    "Jacobina": [
                        {
                            "nome": "HEMOBA - Jacobina",
                            "endereco": "R. Rui Barbosa, 7 - Leader, Jacobina - BA, 44700-000",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(74) 3621-9397 | (74) 3621-3021"
                        }
                    ],
                    "Serrinha": [],
                    "Senhor do Bonfim": [
                        {
                            "nome": "HEMOBA - Senhor do Bonfim",
                            "endereco": "Praça Duque de Caxias, nº 172 - Bairro Centro - Senhor do Bonfim/BA - CEP: 48970-000",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(74) 3541-3256"
                        }
                    ],
                    "Guanambi": [
                        {
                            "nome": "HEMOBA - Guanambi",
                            "endereco": "Rua Dr. José Umberto Nunes, nº 1750 - Bairro Paraíso - Guanambi/BA - CEP: 46430-000",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(77) 3451-7004"
                        }
                    ],
                    "Dias d'Ávila": [],
                    "Brumado": [
                        {
                            "nome": "HEMOBA - Brumado",
                            "endereco": "Rua Manoel Fernandes dos Santos, nº 87 - Bairro Jardim Brasil - Brumado/BA - CEP: 46100-000",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(77) 3441-1363"
                        }
                    ],
                    "Itapetinga": [
                        {
                            "nome": "HEMOBA - Itapetinga",
                            "endereco": "Avenida Cinquentenário, s/n - Bairro Jardim Morumbi - Itapetinga/BA - CEP: 45700-000",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(77) 3261-7697"
                        }
                    ],
                    "Irecê": [
                        {
                            "nome": "HEMOBA - Irecê",
                            "endereco": "Rua Noel Nuteles, 61-147 - Irecê - BA, 44900-000",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(74) 3641-0379 | (74) 3641-3011"
                        }
                    ],
                    "Campo Formoso": [],
                    "Candeias": [],
                    "Eunápolis": [
                        {
                            "nome": "HEMOBA - Eunápolis",
                            "endereco": "Av. Brilhante, 563 - Dinah Borges, Eunápolis - BA, 45825-000",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(73) 3281-3260 | Fax (73) 3261-1845"
                        }
                    ],
                    "Conceição do Coité": [],
                    "Tucano": [],
                    "Itamaraju": [],
                    "Santa Maria da Vitória": [],
                    "Ipirá": [],
                    "Ipiaú": [],
                    "Itaberaba": [
                        {
                            "nome": "HEMOBA - Itaberaba",
                            "endereco": "Avenida Brigadeiro Eduardo Gomes, nº 600 - Bairro Centro - Itaberaba/BA - CEP: 46880-000",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(75) 3251-2575"
                        }
                    ],
                    "Itaparica": [],
                    "São Francisco do Conde": [],
                    "Ubaitaba": [],
                    "Jaguaquara": [],
                    "Cruz das Almas": [],
                    "Mata de São João": [],
                    "Ibotirama": [],
                    "Euclides da Cunha": [],
                    "Conquista": [],
                    "Porto Seguro": [],
                    "Seabra": [
                        {
                            "nome": "HEMOBA - Seabra",
                            "endereco": "Avenida Franklin de Queiroz, s/n - Bairro Tamboril - Seabra/BA - CEP: 46900-000",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(75) 3331-3576"
                        }
                    ],
                    "Ribeira do Pombal": [
                        {
                            "nome": "HEMOBA - Ribeira do Pombal",
                            "endereco": "Rua Júlio Guerra de Almeida, s/n - Bairro Centro - Ribeira do Pombal/BA - CEP: 48400-000",
                            "latitude": null,
                            "longitude": null,
                            "contato": "(75) 3276-4210"
                        }
                    ]
                },
                    "Ceará": {
                        "Fortaleza": [
                            {
                                "nome": "HEMOCE Sede",
                                "endereco": "Av. José Bastos, 3390 - Rodolfo Teófilo, Fortaleza - CE, 60431-086",
                                "latitude": null,
                                "longitude": null,
                                "contato": "(85) 99681-7597 WhatsApp | (85) 3101-2305"
                            },
                            {
                                "nome": "HEMOCE Posto de coleta IJF",
                                "endereco": "R. Barão do Rio Branco, 1816 - Centro, Fortaleza - CE, 60025-061",
                                "latitude": null,
                                "longitude": null,
                                "contato": "(85) 99142-5352 WhatsApp | (85) 3101-2305"
                            },
                            {
                                "nome": "Fujisan Centro de Hemoterapia e Hematologia do Ceará",
                                "endereco": "Av. Barão de Studart, 2626 - Joaquim Távora, Fortaleza - CE, 60120-002",
                                "latitude": null,
                                "longitude": null,
                                "contato": "(85) 4009-6612"
                            },
                            {
                                "nome": "HEMOCE Posto de coleta Praça das Flores",
                                "endereco": "Av. Desembargador Moreira, s/n - Aldeota, Fortaleza - CE, 60140-200",
                                "latitude": null,
                                "longitude": null,
                                "contato": "(85) 3101-2296"
                            }
                        ],
                        "Caucaia": [],
                        "Juazeiro do Norte": [
                            {
                                "nome": "Hemonúcleo de Juazeiro do Norte (Hemoce)",
                                "endereco": "Rua Beata Maria de Araújo, 30 - Romeirão - Juazeiro do Norte - CEP 63051-210",
                                "latitude": null,
                                "longitude": null,
                                "contato": "(88) 3102-1169 | (88) 3102-1170"
                            }
                        ],
                        "Maracanaú": [],
                        "Sobral": [
                            {
                                "nome": "HEMOCE - Sobral",
                                "endereco": "Rua José Maria Alverne, 383 – Centro - CEP: 62010-570 – Sobral/CE",
                                "latitude": null,
                                "longitude": null,
                                "contato": "(88) 3677-4624 | (88) 3677-4627"
                            }
                        ],
                        "Itapipoca": [],
                        "Maranguape": [],
                        "Crato": [
                            {
                                "nome": "Hemocentro Regional de Crato",
                                "endereco": "Rua Cel. Antônio Luíz, 1111 - Pimenta, Crato - CE, 63100-010",
                                "latitude": null,
                                "longitude": null,
                                "contato": "(88) 3102-1260/1261"
                            }
                        ],
                        "Iguatu": [
                            {
                                "nome": "HEMOCE - Iguatu",
                                "endereco": "Rua Edilson de Melo, S/N - Vila Centenário, Iguatu - CE, 63505-182",
                                "latitude": null,
                                "longitude": null,
                                "contato": "(88) 3581-9409/3581-9408 – Fax: (88) 3581-9410"
                            }
                        ],
                        "Quixadá": [
                            {
                                "nome": "HEMOCE - Quixadá",
                                "endereco": "Av. Francisco Almeida Pinheiro, 2340, Planalto Universitário – CEP: 63902-125 – Quixadá/CE",
                                "latitude": null,
                                "longitude": null,
                                "contato": "(88) 3445-1009 | (88) 99902-4306"
                            }
                        ],
                        "Pacajus": [],
                        "Quixeramobim": [],
                        "Russas": [],
                        "Canindé": [],
                        "Tianguá": [],
                        "Aracati": [],
                        "Camocim": [],
                        "Morada Nova": [],
                        "Icó": [],
                        "Acaraú": [],
                        "Horizonte": [],
                        "Viçosa do Ceará": [],
                        "Boa Viagem": [],
                        "Baturité": [],
                        "Santa Quitéria": [],
                        "Granja": [],
                        "Varjota": [],
                        "Ubajara": [],
                        "Redenção": [],
                        "Tauá": [],
                        "Barbalha": [],
                        "Itapajé": [],
                        "Ipu": [],
                        "São Benedito": [],
                        "Amontada": [],
                        "São Gonçalo do Amarante": [],
                        "Araripe": [],
                        "Nova Russas": [],
                        "Guaraciaba do Norte": [],
                        "Campos Sales": [],
                        "Brejo Santo": [],
                        "Jaguaribe": [],
                        "Mombaça": [],
                        "Pentecoste": [],
                        "Ipueiras": []   
                    },
        
                        "Distrito Federal": {
                            "Brasília": [
                                {
                                    "nome": "Hemocentro de Brasília",
                                    "endereco": "BL 3 - SMHN conjunto A - Asa Norte, Brasília - DF, 70710-908",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "160 opção 2 ou 0800 644 0160 para agendamentos individuais e (61) 3327-4447 ou (61) 3327-4413 para agendamentos em grupo"
                                },
                                {
                                    "nome": "GSH Banco de Sangue de Brasília",
                                    "endereco": "I - SGAS, 915 2º Subsolo - Centro Clínico Advance - Asa Sul, Brasília - DF, 70390-150",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(61) 3011-7531 // (61) 99632-3648"
                                },
                                {
                                    "nome": "Hospital Santa Luzia",
                                    "endereco": "SHLS Conjunto E Lote 05 - Asa Sul, Brasília - DF, 70390-903",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(61) 3445-6000 e (61) 3346-9788 e 3345-6929 – ramais 215/216"
                                },
                                {
                                    "nome": "Hemoclínica de Brasília",
                                    "endereco": "SHLS, 716 - Asa Sul, Brasília - DF, 70390-904",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(61) 3245-6929 | (61) 3346-9788"
                                },
                                {
                                    "nome": "Hemocentro São Lucas",
                                    "endereco": "SHIS QI 15, bl. O - Lago Sul, Brasília - DF 71635-610",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(61) 3248-7272"
                                }
                            ]
                        },
                        "Espírito Santo": {
                            "Vitória": [
                                {
                                    "nome": "UNIHEMO",
                                    "endereco": "R. Dr. Joaquim Cortês, 44 - Centro, Vitória - ES, 29015-550",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(27) 3232-4700 | (27) 3232-4714"
                                },
                                {
                                    "nome": "UNIHEMO Hospital Santa Rita",
                                    "endereco": "Av. Mal. Campos, 1579 - Santa Cecilia, Vitória - ES, 29043-260",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(27) 3089-6040"
                                },
                                {
                                    "nome": "HEMOES",
                                    "endereco": "Av. Mal. Campos, 1468 - Nazareth, Vitória - ES, 29047-100",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(27) 3636-7921 | (27) 3636-7900"
                                }
                            ],
                            "Vila Velha": [],
                            "Serra": [
                                {
                                    "nome": "HEMOES Hospital Estadual Dório Silva",
                                    "endereco": "Av. Eldes Scherrer Souza, s/n - Parque Res. Laranjeiras, Serra - ES, 29165-680",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(27) 3218-9200"
                                }
                            ],
                            "Cariacica": [],
                            "Linhares": [
                                {
                                    "nome": "Hemocentro de Linhares",
                                    "endereco": "Av. João Felipe Calmom, 1305 - Centro, Linhares - ES, 29901-627",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(27) 3264-6000 e (27) 3171-4361/4363/4362"
                                }
                            ],
                            "Cachoeiro de Itapemirim": [],
                            "Colatina": [
                                {
                                    "nome": "Hemocentro de Colatina",
                                    "endereco": "R. Cassiano Castelo, 276 - Centro, Colatina - ES, 29700-060",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(27) 3717-2801"
                                }
                            ],
                            "Guarapari": [],
                            "Aracruz": [],
                            "São Mateus": [
                                {
                                    "nome": "Hemocentro Regional de São Mateus",
                                    "endereco": "Rod. Othovarino Duarte Santos, Km 3, 02 - Res. Park Washington, São Mateus - ES, 29938-010",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(27) 3767-7954"
                                }
                            ],
                            "Viana": [],
                            "Nova Venécia": [],
                            "Barra de São Francisco": [],
                            "Santa Teresa": [],
                            "Baixo Guandu": [],
                            "Alegre": [],
                            "Castelo": [],
                            "Domingos Martins": [],
                            "Iúna": [],
                            "Ibiraçu": [],
                            "Mimoso do Sul": [],
                            "Piúma": [],
                            "Venda Nova do Imigrante": [],
                            "Anchieta": [],
                            "Marataízes": [],
                            "Muniz Freire": [],
                            "Presidente Kennedy": [],
                            "Rio Bananal": [],
                            "Santa Maria de Jetibá": [],
                            "São Gabriel da Palha": [],
                            "Sooretama": [],
                            "Iconha": [],
                            "Pancas": [],
                            "São Domingos do Norte": [],
                            "Jaguaré": [],
                            "Ibatiba": [],
                            "Itapemirim": [],
                            "João Neiva": [],
                            "Laranja da Terra": [],
                            "Pedro Canário": [],
                            "Santa Leopoldina": []
                        },
                        "Goiás": {
                            "Goiânia": [
                                {
                                    "nome": "Banco de Sangue HUGOL",
                                    "endereco": "Av. Anhanguera, 14527 - St. Santos Dumont, Goiânia - GO, 74463-350",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(62) 3270-6661"
                                },
                                {
                                    "nome": "HEMOGO - Goiânia",
                                    "endereco": "Av. Anhanguera, 5195 - St. Coimbra, Goiânia - GO, 74535-010",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(62) 3201-4570 | (62) 3201-4564 | (62) 3201-4575 | 0800 642 0457"
                                },
                                {
                                    "nome": "Instituto de Hemoterapia de Goiania",
                                    "endereco": "Av. Dr. Ismerino Soares de Carvalho, 623 - St. Aeroporto, Goiânia - GO, 74075-040",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(62) 3773-2786"
                                },
                                {
                                    "nome": "Hemolabor",
                                    "endereco": "R. 5-A, 90 - St. Aeroporto, Goiânia - GO, 74075-210",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(62) 3605-6600"
                                },
                                {
                                    "nome": "Banco de Sangue Hospital Araújo Jorge",
                                    "endereco": "R. 239, 206 - Setor Leste Universitário, Goiânia - GO, 74605-070",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(62) 3243-7031"
                                },
                                {
                                    "nome": "INGOH - Banco de Sangue Goiano",
                                    "endereco": "R. 87, n 598 - St. Sul, Goiânia - GO, 74093-300",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(62) 3226-0200"
                                }
                            ],
                            "Aparecida de Goiânia": [
                                {
                                    "nome": "IHG",
                                    "endereco": "R. Silva Bueno, Qd. 13 - LT. 21 - Jardim Nova Era, Aparecida de Goiânia - GO, 74916-150",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(62) 3280-3383"
                                }
                            ],
                            "Anápolis": [
                                {
                                    "nome": "IOHA - Anápolis",
                                    "endereco": "R. Washington de Carvalho, 155 - St. Central, Anápolis - GO, 75020-120",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(62) 3327-0697"
                                }
                            ],
                            "Rio Verde": [
                                {
                                    "nome": "Hemocentro Rio Verde",
                                    "endereco": "Rua Luiz de Bastos, 395 - Centro, Rio Verde - GO, 75901-110",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(64) 3613-1026"
                                }
                            ],
                            "Itumbiara": [
                                {
                                    "nome": "Climec Banco de Sangue",
                                    "endereco": "R. Benjamin Constant, 165-A - centro, Itumbiara - GO, 75503-050",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(64) 3404-5950"
                                }
                            ],
                            "Catalão": [
                                {
                                    "nome": "HEMOGO - Catalão",
                                    "endereco": "R. Osório Viêira Leite, 70 - São João, Catalão - GO, 75703-280",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(64) 3441-4013 / 3441-3411"
                                }
                            ],
                            "Quirinópolis": [
                                {
                                    "nome": "UCT de Quirinópolis",
                                    "endereco": "Av. Ver. Júlio Borges, 304 - Ce",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(64) 3651-8860"
                                }
                            ],
                            "Jataí": [
                                {
                                    "nome": "HEMOGO de Jataí",
                                    "endereco": "Rua Joaquim Caetano, 1876 - Divino Espírito Santo, Jataí - GO, 75805-020",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(64) 3632-8778/ 3632-8765 / (64) 3632-8700"
                                }
                            ],
                            "Formosa": [
                                {
                                    "nome": "HEMOGO - Formosa",
                                    "endereco": "Av. Maestro João Luiz do Espírito Santo, 450 - Parque Laguna II, Formosa - GO, 73813-120",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(61) 3642-3418 | (61) 3642-3707 | 0800 642 0457 (agendamento)"
                                }
                            ],
                            "Iporá": [
                                {
                                    "nome": "HEMOGO - Iporá",
                                    "endereco": "Av. São Paulo, 257-385 - Vila Ipiranga, Iporá - GO, 76200-000",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(64) 3603-7294"
                                }
                            ],
                            "Ceres": [
                                {
                                    "nome": "HEMOGO - Ceres",
                                    "endereco": "R. 29, nº 576 - Centro, Ceres - GO, 76300-000",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(62) 3323-2538"
                                }
                            ],
                            "Porangatu": [
                                {
                                    "nome": "Hemocentro de Porangatu",
                                    "endereco": "Rua 4, s/n - Porangatu - GO, 76550-000",
                                    "latitude": null,
                                    "longitude": null,
                                    "contato": "(62) 3362-5085"
                                }
                            ],
                            "Águas Lindas de Goiás": [],
                            "Valparaíso de Goiás": [],
                            "Trindade": [],
                            "Novo Gama": [],
                            "Senador Canedo": [],
                            "Planaltina": [],
                            "Cristalina": [],
                            "Goianésia": [],
                            "Mineiros": [],
                            "Niquelândia": [],
                            "São Luís de Montes Belos": [],
                            "Inhumas": [],
                            "Goiatuba": [],
                            "Jaraguá": [],
                            "Caldas Novas": [],
                            "Uruaçu": [],
                            "Pires do Rio": [],
                            "Anicuns": [],
                            "Pontalina": [],
                            "Palmeiras de Goiás": [],
                            "Belém de Goiás": [],
                            "Alexânia": [],
                            "Morrinhos": [],
                            "Campos Belos": [],
                            "Itapaci": [],
                            "Minaçu": [],
                            "Buriti Alegre": [],
                            "Santa Helena de Goiás": [],
                            "Pirenópolis": [],
                            "Alto Paraíso de Goiás": [],
                            "Caiapônia": [],
                            "Itapuranga": [],
                            "Cachoeira Alta": [],
                            "Goiás": [],
                            "Padre Bernardo": []
                        },
 "Maranhão": {
    "São Luís": [
        {
            "nome": "Instituto Haima",
            "endereco": "R. Frei Querubim, 62 - Apicum, São Luís - MA, 65025-420",
            "latitude": null,
            "longitude": null,
            "contato": "(98) 3232-3342"
        },
        {
            "nome": "HEMOMAR - Centro De Hematologia E Hemoterapia Do Maranhão",
            "endereco": "R. Cinco de Janeiro, S/N - Jórdoa, São Luís - MA, 65040-450",
            "latitude": null,
            "longitude": null,
            "contato": "(98) 3216-1100"
        }
    ],
    "Imperatriz": [
        {
            "nome": "HEMOMAR - Imperatriz",
            "endereco": "R. Coriolano Milhomem - Centro, Imperatriz - MA, 65900-330",
            "latitude": null,
            "longitude": null,
            "contato": "(99) 3526-6777 | (99) 9178-2541"
        }
    ],
    "Caxias": [
        {
            "nome": "HEMOMAR - Caxias",
            "endereco": "Av. Valter Brito - Campo de Belem, Caxias - MA, 65609-050",
            "latitude": null,
            "longitude": null,
            "contato": "(99) 99164-0230"
        }
    ],
    "Codó": [
        {
            "nome": "HEMOMAR - Codó",
            "endereco": "R. Barão do Rio Branco, 665 - Codó, MA, 65400-000",
            "latitude": null,
            "longitude": null,
            "contato": "(99) 98144-0081"
        }
    ],
    "Pedreiras": [
        {
            "nome": "HEMOMAR - Pedreiras",
            "endereco": "Tv. Otávio Passos, 1 - Goiabal, Pedreiras - MA, 65725-000",
            "latitude": null,
            "longitude": null,
            "contato": "(99) 98152-2444"
        }
    ],
    "Santa Inês": [
        {
            "nome": "HEMOMAR - Santa Inês",
            "endereco": "389, R. da Pedra Branca, 309 - Nova Santa Inês, Santa Inês - MA, 65300-000",
            "latitude": null,
            "longitude": null,
            "contato": "(98) 99169-8710"
        }
    ],
    "Pinheiro": [
        {
            "nome": "HEMOMAR - Pinheiro",
            "endereco": "R. Maria Pinheiro Paiva, 316, Pinheiro - MA, 65200-000",
            "latitude": null,
            "longitude": null,
            "contato": "(98) 98526-8926"
        }
    ],
    "São José de Ribamar": [],
    "Timon": [],
    "Paço do Lumiar": [],
    "Açailândia": [],
    "Bacabal": [],
    "Balsas": [
        {
            "nome": "HEMOMAR - Balsas",
            "endereco": "R. José Leão, 170-198, Balsas - MA, 65800-000",
            "latitude": null,
            "longitude": null,
            "contato": "(99) 3541-5666"
        }
    ],
    "Barra do Corda": [],
    "Chapadinha": [],
    "Santa Luzia": [],
    "Coroatá": [],
    "Grajaú": [],
    "Itapecuru Mirim": [],
    "Zé Doca": [],
    "Viana": [],
    "São Bento": [],
    "Coelho Neto": [],
    "Barreirinhas": [],
    "Presidente Dutra": [],
    "Tutóia": [],
    "Colinas": [],
    "Cantanhede": [],
    "Rosário": [],
    "Vargem Grande": [],
    "Tuntum": [],
    "Vitória do Mearim": [],
    "São Mateus do Maranhão": [],
    "Carolina": [],
    "Matões": [],
    "Arari": [],
    "Icatu": [],
    "Timbiras": [],
    "Axixá": [],
    "Pindaré-Mirim": [],
    "Lago da Pedra": [],
    "Humberto de Campos": [],
    "Araioses": [],
    "Buriticupu": [],
    "Duque Bacelar": [],
    "Paraibano": [],
    "Bacuri": [],
    "Cururupu": []
},
"Mato Grosso": {
    "Cuiabá": [
      {
        "nome": "Hemosan Cuiabá",
        "endereco": "R. Maria do Carmo Rêgo - Santa Helena, Cuiabá - MT, 78005-680",
        "latitude": null,
        "longitude": null,
        "contato": "(65) 3621-6667"
      },
      {
        "nome": "IHEMCO - Cuiabá",
        "endereco": "ANEXO SANTA CASA DE CUIABÁ, R. Cel. Peixoto, S/N° - Bandeirantes, Cuiabá - MT, 78010-100",
        "latitude": null,
        "longitude": null,
        "contato": "(65) 3622-0681"
      },
      {
        "nome": "Unidade de Coleta do Pronto Socorro de Cuiabá",
        "endereco": "Rua General Vale, 192 - Bairro Bandeirantes - Cuiabá/MT - CEP: 78010-000",
        "latitude": null,
        "longitude": null,
        "contato": "(65) 3324-1062"
      },
      {
        "nome": "Mt Hemocentro - Cuiaba",
        "endereco": "Rua 13 de Junho, 1055 - Centro Sul, Cuiabá - MT, 78005-100",
        "latitude": null,
        "longitude": null,
        "contato": "(65) 3623-0044"
      }
    ],
    "Rondonópolis": [
      {
        "nome": "MT Hemocentro - Rondonópolis",
        "endereco": "Rua Rio Branco, 2.802 - Bairro Jardim Santa Marta Rondonópolis – MT CEP: 78710-402",
        "latitude": null,
        "longitude": null,
        "contato": "(66) 3426-9848 | (66) 3426-9505"
      }
    ],
    "Barra do Garças": [
      {
        "nome": "Unidade de Coleta e Transfusão de Barra do Garças",
        "endereco": "Jardim Mariano, Barra do Garças - MT, 78600-000",
        "latitude": null,
        "longitude": null,
        "contato": "(66) 3407-2756"
      }
    ],
    "Jaciara": [
      {
        "nome": "Unidade de Coleta e Transfusão de Jaciara",
        "endereco": "Rua Guaicurus, 1165 - Centro, Jaciara - MT, 78820-000",
        "latitude": null,
        "longitude": null,
        "contato": "(66) 3461-3454"
      }
    ],
    "Primavera do Leste": [
      {
        "nome": "Unidade de Coleta e Transfusão de Primavera do Leste",
        "endereco": "R. Rio de Janeiro, 601 - Centro, Primavera do Leste - MT, 78850-000",
        "latitude": null,
        "longitude": null,
        "contato": "(66) 3498-1727"
      }
    ],
    "Água Boa": [
      {
        "nome": "MT Hemocentro - Água Boa",
        "endereco": "R. Dezesseis, 349 - Centro II, Água Boa - MT, 78635-000",
        "latitude": null,
        "longitude": null,
        "contato": "(66) 3468-5510"
      }
    ],
    "Porto Alegre do Norte": [
      {
        "nome": "Unidade de Coleta e Transfusão de Porto Alegre do Norte",
        "endereco": "Avenida Sabino Brito, s/n - Centro, Porto Alegre Do Norte – MT, 78655-000",
        "latitude": null,
        "longitude": null,
        "contato": "(66) 3569-1991"
      }
    ],
    "Barra do Bugres": [
      {
        "nome": "MT Hemocentro - Barra do Bugres",
        "endereco": "Rua Voluntários da Pátria, 385 - Bairro Maracanã Barra do Bugres – MT CEP: 78390-000",
        "latitude": null,
        "longitude": null,
        "contato": "(65) 3361-2702"
      }
    ],
    "Tangará da Serra": [
      {
        "nome": "MT Hemocentro - Tangará da Serra",
        "endereco": "Av. Tancredo Neves, nº 791 - Bairro Jardim Tanaka Tangará Da Serra - MT CEP: 78300-000",
        "latitude": null,
        "longitude": null,
        "contato": "(65) 3326-2529"
      }
    ],
    "Sorriso": [
      {
        "nome": "UCT Hospital Regional de Sorriso",
        "endereco": "Av. Porto Alegre, 3125 - Centro, Sorriso - MT, 78890-000",
        "latitude": null,
        "longitude": null,
        "contato": "(66) 3907-7107"
      }
    ],
    "Sinop": [
      {
        "nome": "MT Hemocentro - Sinop",
        "endereco": "Av. Itaúbas, 2795 - Setor Comercial, Sinop/MT - CEP: 78556-100",
        "latitude": null,
        "longitude": null,
        "contato": "(66) 3531-7325 | (66) 99292-2634"
      }
    ],
    "Alta Floresta": [
      {
        "nome": "Unidade de Coleta e Transfusão de Alta Floresta",
        "endereco": "Av. Ariosto Da Riva,1933 - Centro - Alta Floresta/MT - CEP: 78580-000",
        "latitude": null,
        "longitude": null,
        "contato": "(66) 3512-3407"
      }
    ],
    "Juína": [
      {
        "nome": "Unidade de Coleta e Transfusão de Juína",
        "endereco": "Av. Ives Ortolan, 314-384 - Módulo 03, Juína - MT, 78320-000",
        "latitude": null,
        "longitude": null,
        "contato": "(66) 3566-2201"
      }
    ],
    "Várzea Grande": [],
    "Cáceres": [],
    "Lucas do Rio Verde": [],
    "Pontes e Lacerda": [],
    "Nova Mutum": [],
    "Campo Verde": [],
    "Juara": [],
    "Peixoto de Azevedo": [],
    "Campo Novo do Parecis": [],
    "Canarana": [],
    "Guarantã do Norte": [],
    "São José do Rio Claro": [],
    "Mirassol d'Oeste": [],
    "Rosário Oeste": [],
    "Sapezal": [],
    "Diamantino": [],
    "Nobres": [],
    "Paranatinga": [],
    "Aripuanã": [],
    "Nova Xavantina": [],
    "Apiacás": [],
    "Itiquira": [],
    "Querência": [],
    "Matupá": [],
    "Poxoréu": [],
    "Nova Olímpia": [],
    "Nova Canaã do Norte": [],
    "Vila Bela da Santíssima Trindade": [],
    "Vila Rica": [],
    "Nova Bandeirantes": [],
    "Nova Brasilândia": [],
    "Nova Marilândia": [],
    "São Félix do Araguaia": [],
    "Santa Carmem": [],
    "Paranaíta": []
  },     
  "Mato Grosso do Sul": {
    "Campo Grande": [
        {
            "nome": "HEMOSUL Santa Casa de Campo Grande",
            "endereco": "R. Rui Barbosa, 3633 - Centro, Campo Grande - MS, 79002-363",
            "latitude": null,
            "longitude": null,
            "contato": "(67) 3322-4135"
        },
        {
            "nome": "HEMOSUL - Campo Grande",
            "endereco": "Av. Fernando Corrêa da Costa, 1304 - Centro, Campo Grande - MS, 79004-310",
            "latitude": null,
            "longitude": null,
            "contato": "(67) 3312-1500 PABX | (67) 3312-1517 | (67) 99298-6316 WhatsApp"
        },
        {
            "nome": "HEMOSUL Hospital Regional",
            "endereco": "Av. Eng. Lutero Lopes, nº 36 - Aero Rancho, Campo Grande - MS, 79084-180",
            "latitude": null,
            "longitude": null,
            "contato": "(67) 3378-2677"
        }
    ],
    "Dourados": [
        {
            "nome": "HEMOSUL - Dourados",
            "endereco": "R. Waldomiro de Souza, n° 295 - Vila Industrial, Dourados - MS, 79840-630",
            "latitude": null,
            "longitude": null,
            "contato": "(67) 3424-4192"
        }
    ],
    "Três Lagoas": [
        {
            "nome": "HEMOSUL - Três Lagoas",
            "endereco": "R. Manoel Rodrigues Artez, 520 - Jardim Primaveril, Três Lagoas - MS, 79620-230",
            "latitude": null,
            "longitude": null,
            "contato": "(67) 3522-7959"
        }
    ],
    "Paranaíba": [
        {
            "nome": "HEMOSUL - Paranaíba",
            "endereco": "Rua Selma Martins de Oliveira, n° 335 - Ipê Branco, Paranaíba - MS, 79368-000",
            "latitude": null,
            "longitude": null,
            "contato": "(67) 3503-1026"
        }
    ],
    "Ponta Porã": [
        {
            "nome": "HEMOSUL - Ponta Porã",
            "endereco": "R. 7 de Setembro, n° 1.896 - Santa Isabel, Ponta Porã - MS, 79904-512",
            "latitude": null,
            "longitude": null,
            "contato": "(67) 3431-6134"
        }
    ],
    "Naviraí": [],
    "Nova Andradina": [],
    "Aquidauana": [],
    "Sidrolândia": [],
    "Maracaju": [],
    "Amambai": [],
    "Rio Brilhante": [],
    "Coxim": [],
    "Caarapó": [],
    "Miranda": [],
    "Jardim": [],
    "Aparecida do Taboado": [],
    "Bela Vista": [],
    "Anastácio": [],
    "Itaporã": [],
    "Ivinhema": [],
    "Eldorado": [],
    "Costa Rica": [],
    "Sonora": [],
    "Bonito": [],
    "Guia Lopes da Laguna": [],
    "Bataguassu": [],
    "Porto Murtinho": [],
    "Iguatemi": [],
    "Nova Alvorada do Sul": [],
    "Mundo Novo": [],
    "Ribas do Rio Pardo": [],
    "Fátima do Sul": [],
    "Rio Verde de Mato Grosso": [],
    "São Gabriel do Oeste": [],
    "Cassilândia": [],
    "Angélica": [],
    "Sete Quedas": [],
    "Corguinho": [],
    "Glória de Dourados": [],
    "Paranhos": [],
    "Nioaque": [],
    "Dois Irmãos do Buriti": [],
    "Santa Rita do Pardo": [],
    "Antônio João": [],
    "Deodápolis": []
},
"Minas Gerais": {
    "Belo Horizonte": [
        {
            "nome": "HEMOMINAS - Belo Horizonte (Unidade Hospital Júlia Kubitschek)",
            "endereco": "Avenida Dr. Cristiano Rezende, 2505 - Bairro: Araguaia - Cep: 30.620-470",
            "latitude": null,
            "longitude": null,
            "contato": "(31) 3390-8013"
        },
        {
            "nome": "HEMOMINAS - Belo Horizonte (Unidade Santa Efigênia)",
            "endereco": "Alameda Ezequiel Dias, 321 - Santa Efigênia, Belo Horizonte - MG, 30130-110",
            "latitude": null,
            "longitude": null,
            "contato": "(31) 3248-4515 | (31) 3248-4516"
        },
        {
            "nome": "HEMOMINAS - Belo Horizonte (Unidade Shopping Estação)",
            "endereco": "Av. Cristiano Machado, 11.833 - loja 4002 B - Bairro: Vila Clóris - Cep: 31.744-007",
            "latitude": null,
            "longitude": null,
            "contato": "(31) 3878-1800"
        },
        {
            "nome": "Hemoservice - Belo Horizonte",
            "endereco": "R. Ceará, 195 - Santa Efigênia - Belo Horizonte - MG, 30150-310",
            "latitude": null,
            "longitude": null,
            "contato": "(31) 3218-1300"
        },
        {
            "nome": "Vita Hemoterapia - Belo Horizonte",
            "endereco": "Rua Juiz de Fora, 941 - Barro Preto, Belo Horizonte - MG, 30180-161",
            "latitude": null,
            "longitude": null,
            "contato": "(31) 3335 6600"
        }
    ],
    "Betim": [
        {
            "nome": "HEMOMINAS - Betim",
            "endereco": "Rua Salvador Gonçalves Diniz, 191 - Bairro: Jardim Brasília - Cep: 32.671-578",
            "latitude": null,
            "longitude": null,
            "contato": "(31) 3512-1050"
        }
    ],
    "Divinópolis": [
        {
            "nome": "HEMOMINAS - Hemonúcleo Divinópolis",
            "endereco": "Rua José Gabriel Medef, 221 - Padre Liberio, Divinópolis - MG, 35500-139",
            "latitude": null,
            "longitude": null,
            "contato": "(37) 3216-6500"
        }
    ],
    "Pouso Alegre": [
        {
            "nome": "HEMOMINAS - Pouso Alegre",
            "endereco": "R. Comendador José García, 846 - Santa Elisa, Pouso Alegre - MG, 37550-000, Brasil",
            "latitude": null,
            "longitude": null,
            "contato": "(35) 3449-9900"
        }
    ],
    "Uberlândia": [
        {
            "nome": "HEMOMINAS - Uberlândia",
            "endereco": "Av. Levino de Souza, 1845 - Umuarama, Uberlândia - MG, 38405-322",
            "latitude": null,
            "longitude": null,
            "contato": "(34) 3088-9236 | (34) 3088-9237 | (34) 3088-9238"
        }
    ],
    "Juiz de Fora": [
        {
            "nome": "HEMOMINAS - Juiz de Fora",
            "endereco": "Rua Barão de Cataguases, S/N - Centro, Juiz de Fora - MG, 36015-370, Brasil",
            "latitude": null,
            "longitude": null,
            "contato": "(32) 3257-3100"
        }
    ],
    "Teófilo Otoni": [
        {
            "nome": "Hospital Santa Rosalia",
            "endereco": "R. Dr. Onófre, 575 - Centro, Teófilo Otoni - MG, 39800-022",
            "latitude": null,
            "longitude": null,
            "contato": "(33) 3529-1618"
        }
    ],
    "Caratinga": [
        {
            "nome": "Casu - Hospital Irmã Denise",
            "endereco": "R. Niterói - Nossa Sra. das Graças, Caratinga - MG, 35300-345",
            "latitude": null,
            "longitude": null,
            "contato": "(33) 3322-7943"
        }
    ],
    "Diamantina": [
        {
            "nome": "HEMOMINAS - Diamantina",
            "endereco": "R. da Glória, 469 - Diamantina, MG, 39100-000",
            "latitude": null,
            "longitude": null,
            "contato": "(38) 3532-1350 e (38) 3532-1358 / 3532-1361"
        }
    ],
    "Governador Valadares": [
        {
            "nome": "HEMOMINAS - Governador Valadares",
            "endereco": "Rua Barão do Rio Branco, 707 - Centro, Governador Valadares - MG, 35010-030",
            "latitude": null,
            "longitude": null,
            "contato": "(33) 3212-5800"
        }
    ],
    "São João del-Rei": [
        {
            "nome": "HEMOMINAS - Hemonúcleo São João Del Rei",
            "endereco": "R. Pref. Nascimento Teixeira, 175 - Segredo, São João del-Rei - MG, 36307-404, Brasil",
            "latitude": null,
            "longitude": null,
            "contato": "(32) 3322-2900"
        }
    ],
    "Lavras": [
        {
            "nome": "HEMOMINAS - Lavras",
            "endereco": "Av. Ernesto Matioli, 885 - Planalto, Lavras - MG, 37200-000",
            "latitude": null,
            "longitude": null,
            "contato": "35 3694-4145"
        }
    ],
    "Montes Claros": [
        {
            "nome": "HEMOMINAS - Montes Claros",
            "endereco": "R. Urbino Viana, 640 - Vila Guilhermina, Montes Claros - MG, 39400-531",
            "latitude": null,
            "longitude": null,
            "contato": "(38) 3218-7813/ 3218-7814/ 3222-3946 / (38) 3218-7800"
        }
    ],
    "Araguari": [
        {
            "nome": "Hemominas - PACE",
            "endereco": "R. José Carrijo, 205 - Centro, Araguari - MG, 38440-264, Brasil",
            "latitude": null,
            "longitude": null,
            "contato": "(34) 3690-3174"
        }
    ],
    "Patos de Minas": [
        {
            "nome": "HEMOMINAS - Patos de Minas",
            "endereco": "R. Maj. Gote, 1255 - Centro, Patos de Minas - MG, 38700-001",
            "latitude": null,
            "longitude": null,
            "contato": "(34) 2106-2600"
        }
    ],
    "Uberaba": [
        {
            "nome": "HEMOMINAS - Uberaba",
            "endereco": "Av. Getúlio Guaritá, 250 - Nossa Sra. da Abadia, Uberaba - MG, 38025-440",
            "latitude": null,
            "longitude": null,
            "contato": "(34) 3074-3200"
        }
    ],
    "Ituiutaba": [
        {
            "nome": "HEMOMINAS Hemonúcleo - Ituiutaba",
            "endereco": "Av. Quarenta e Nove, 125 - Elândia, Ituiutaba - MG, 38304-252, Brasil",
            "latitude": null,
            "longitude": null,
            "contato": "(34) 2122-0400"
        }
    ],
    "Manhuaçu": [
        {
            "nome": "HEMOMINAS Hemonúcleo - Manhuaçu",
            "endereco": "R. Frederico Dolabela, 289 - Centro, Manhuaçu - MG, 36900-000, Brasil",
            "latitude": null,
            "longitude": null,
            "contato": "(33) 3339-3500 / (33) 3331-1021 - ramal: 2513 e 2527"
        }
    ],
    "Passos": [
        {
            "nome": "HEMOMINAS Hemonúcleo - Passos",
            "endereco": "R. Dr. José Lemos de Barros, 313 - Muarama, Passos - MG, 37900-030, Brasil",
            "latitude": null,
            "longitude": null,
            "contato": "(35) 3211-4800 - 3522-4202 / 7129"
        }
    ],
    "Ponte Nova": [
        {
            "nome": "HEMOMINAS Hemonúcleo - Ponte Nova",
            "endereco": "R. Carlos Gomes, 17 - Esplanada, Pte. Nova - MG, 35430-069, Brasil",
            "latitude": null,
            "longitude": null,
            "contato": "(31) 3604-2200"
        }
    ],
    "Sete Lagoas": [
        {
            "nome": "HEMOMINAS Hemonúcleo - Sete Lagoas",
            "endereco": "Avenida Doutor Renato Azeredo, R. Dante Lanza, 3170, MG, 35701-495, Brasil",
            "latitude": null,
            "longitude": null,
            "contato": "(31) 3027-2700"
        }
    ],
    "Bom Despacho": [
        {
            "nome": "HEMOMINAS PACE - Bom Despacho",
            "endereco": "Praça Olegário Maciel, 831 - Bom Despacho, MG, 35600-000",
            "latitude": null,
            "longitude": null,
            "contato": "(37) 99838-1245"
        }
    ],
    "Além Paraíba": [
        {
            "nome": "HEMOMINAS Unidade de coleta e transfusão - Além Paraíba",
            "endereco": "R. Felizarda Esquerdo, 45, Ilha Recreio - Além Paraíba - MG, 36660-000, Brasil",
            "latitude": null,
            "longitude": null,
            "contato": "(32) 3466-6600"
        }
    ],
    "Poços de Caldas": [
        {
            "nome": "HEMOMINAS Unidade de coleta e transfusão - Poços de Caldas",
            "endereco": "Av. José Remígio Prezia, 303 - Jardim dos Estados, Poços de Caldas - MG, 37701-102",
            "latitude": null,
            "longitude": null,
            "contato": "(35) 2101-9300"
        }
    ],
    "Barbacena": [
        {
            "nome": "HEMOMINAS - PACE - Barbacena",
            "endereco": "Rua Padre Toledo, s/n - São Sebastião, Barbacena - MG, 36202-290",
            "latitude": null,
            "longitude": null,
            "contato": null
        }
    ],
    "Itajubá": [
        {
            "nome": "HEMOMINAS - PACE - Itajubá",
            "endereco": "Av. Henriqueto Cardinale, 911 - Varginha, Itajubá - MG, 37501-150",
            "latitude": null,
            "longitude": null,
            "contato": null
        }
    ],
    "Leopoldina": [
        {
            "nome": "HEMOMINAS - PACE - Leopoldina",
            "endereco": "R. Santa Filomena, 250 - Centro, Leopoldina - MG, 36700-000",
            "latitude": null,
            "longitude": null,
            "contato": null
        }
    ],
    "Ipatinga": [
        {
            "nome": "Hospital Mário Cunha - Ipatinga",
            "endereco": "Av. Kiyoshi Tsunawaki, 41 - Das Águas, Ipatinga - MG, 35160-158",
            "latitude": null,
            "longitude": null,
            "contato": "(31) 3829-9600 e (31) 9686-1060"
        }
    ],
    "Alfenas": [
        {
            "nome": "Hospital Universitário UNIFENAS - Alfenas",
            "endereco": "R. Geraldo Freitas da Costa, 155 - Jardim Sao Lucas, Alfenas - MG, 37130-000",
            "latitude": null,
            "longitude": null,
            "contato": "(35) 3299-3544 e (35) 3299-3500"
        },
        {
            "nome": "Núcleo Hemoterápico da Santa Casa de Alfenas",
            "endereco": "R. Bias Fortes, 556 - Bosque dos Ipês, Alfenas - MG, 37130-000",
            "latitude": null,
            "longitude": null,
            "contato": "(35) 3292-3130"
        }
    ],
    "Muriaé": [
        {
            "nome": "HEMOMINAS - PACE - Muriaé",
            "endereco": "R. Dr. Ivan Americo, R. Menotti Porcaro, 0 - Centro, Muriaé - MG, 36880-109",
            "latitude": null,
            "longitude": null,
            "contato": null
        }
    ],
    "Conselheiro Lafaiete": [
        {
            "nome": "HEMOMINAS - PACE - Lafaiete",
            "endereco": "R. Higino Sebastião da Cunha, 135 - Parque dos Bandeirantes, Conselheiro Lafaiete - MG, 36400-000",
            "latitude": null,
            "longitude": null,
            "contato": null
        }
    ],   
    "Montes Claros": [],
    "Ribeirão das Neves": [],
    "Governador Valadares": [],
    "Santa Luzia": [],
    "Ibirité": [],
    "Patos de Minas": [],
    "Teófilo Otoni": [],
    "Sabará": [],
    "Varginha": [],
    "Itabira": [],
    "Araguari": [],
    "Nova Lima": [],
    "Caratinga": [],
    "São João del-Rei": [],
    "Araxá": [],
    "Lavras": [],
    "Unaí": [],
    "Pará de Minas": [],
    "Curvelo": [],
    "Timóteo": [],
    "Ubá": [],
    "Cataguases": [],
    "João Monlevade": [],
    "Viçosa": [],
    "Esmeraldas": [],
    "Itabirito": [],
    "Três Corações": [],
    "Congonhas": [],
    "Mariana": [],            
},
"Pará": {
    "Belém": [
        {
            "nome": "HEMOPA - Belém",
            "endereco": "Travessa Padre Eutíquio, 2109 - Batista Campos - Belém, Pará - CEP: 66033-000",
            "latitude": null,
            "longitude": null,
            "contato": "0800 280 8118"
        },
        {
            "nome": "HEMOPA - Posto de Coleta Pátio Belém",
            "endereco": "Tv. Padre Eutíquio, 1078 - Batista Campos, Belém - PA, 66023-710",
            "latitude": null,
            "longitude": null,
            "contato": "0800 280 8118 | (91) 3110-6500"
        },
        {
            "nome": "HEMOPA - Posto de Coleta Castanheira",
            "endereco": "Rodovia BR-316, Km 01 - Castanheira, Belém - PA, 66645-001",
            "latitude": null,
            "longitude": null,
            "contato": "0800 280 8118"
        }
    ],
    "Ananindeua": [],
    "Santarém": [
        {
            "nome": "HEMOPA - Santarém",
            "endereco": "Av. Frei Vicente - Aeroporto Velho, Santarém - PA, 68010-180",
            "latitude": null,
            "longitude": null,
            "contato": "(93) 3524-7550 / 3524-7560 / 0800 280 8118"
        }
    ],
    "Marabá": [
        {
            "nome": "HEMOPA - Marabá",
            "endereco": "Rod. Transamazônica, 251 - Amapá, Marabá - PA, 68502-290",
            "latitude": null,
            "longitude": null,
            "contato": "(94) 3312-9150 | (94) 99234-0264 WhatsApp"
        }
    ],
    "Parauapebas": [],
    "Castanhal": [
        {
            "nome": "HEMOPA - Castanhal",
            "endereco": "Alameda Rita de Cássia, 2 - Centro, Castanhal - PA, 68740-200",
            "latitude": null,
            "longitude": null,
            "contato": "(91) 3412-4400 | (91) 3412-4404"
        }
    ],
    "Abaetetuba": [
        {
            "nome": "HEMOPA - Abaetetuba",
            "endereco": "Tv. Santos Dumont, 1146 - Centro, Abaetetuba - PA, 68440-000",
            "latitude": null,
            "longitude": null,
            "contato": "(91) 98568-3396"
        }
    ],
    "Cametá": [],
    "Bragança": [],
    "Marituba": [],
    "Altamira": [
        {
            "nome": "HEMOPA - Altamira",
            "endereco": "Av. Brg. Eduardo Gomes - São Sebastiao, Altamira - PA, 68372-005",
            "latitude": null,
            "longitude": null,
            "contato": "(93) 3515-5223"
        }
    ],
    "Barcarena": [],
    "Tailândia": [],
    "Itaituba": [],
    "Redenção": [
        {
            "nome": "HEMOPA - Redenção",
            "endereco": "Av. Santa Tereza - St. Oeste, Redenção - PA, 68552-248",
            "latitude": null,
            "longitude": null,
            "contato": "(94) 98414-3955"
        }
    ],
    "Tucuruí": [
        {
            "nome": "HEMOPA - Tucuruí",
            "endereco": "Av. Raimundo Veridiano Cardoso - Bela Vista, Tucuruí - PA, 68456-760",
            "latitude": null,
            "longitude": null,
            "contato": "(94) 98415-9006 | (94) 3787-4444"
        }
    ],
    "Paragominas": [],
    "São Félix do Xingu": [],
    "Breves": [],
    "Vigia": [],
    "Souza": [],
    "Alenquer": [],
    "Capanema": [
        {
            "nome": "HEMOPA - Capanema",
            "endereco": "Rodovia BR-308, s/n - São Cristóvão, Capanema - PA, 68700-020",
            "latitude": null,
            "longitude": null,
            "contato": "(91) 98568-3339"
        }
    ],
    "Moju": [],
    "Conceição do Araguaia": [],
    "Ourilândia do Norte": [],
    "Dom Eliseu": [],
    "Xinguara": [],
    "Novo Repartimento": [],
    "Óbidos": [],
    "Oriximiná": [],
    "Uruará": [],
    "Juruti": [],
    "Irituia": [],
    "Muaná": [],
    "Capitão Poço": [],
    "Monte Alegre": [],
    "Portel": [],
    "Rondon do Pará": [],
    "Almeirim": [],
    "Ulianópolis": [],
    "São Miguel do Guamá": [],
    "Novo Progresso": [],
    "Viseu": [],
    "Goianésia do Pará": [],
    "Pacajá": [],
    "Quatro Bocas": [],
    "Curuçá": [],
    "Tracuateua": [],
    "Benevides": [],
    "Tomé-Açu": []
},
"Paraíba": {
    "João Pessoa": [
        {
            "nome": "HEMOÍBA - Centro de Hematologia e Hemoterapia da Paraíba",
            "endereco": "Av. Dom Pedro II, 1548 - Jaguaribe, João Pessoa - PB, 58013-420",
            "latitude": null,
            "longitude": null,
            "contato": "(83) 3133-3463"
        }
    ],
    "Campina Grande": [
        {
            "nome": "Hemocentro Regional de Campina Grande",
            "endereco": "R. Profa. Eutécia Vital Ribeiro, s/n - Catolé, Campina Grande - PB, 58104-460",
            "latitude": null,
            "longitude": null,
            "contato": "(83) 3344-5475/ 3344-5482"
        }
    ],
    "Santa Rita": [],
    "Patos": [
        {
            "nome": "Hemonúcleo de Patos",
            "endereco": "R. Juvenal Lêdo, s/n - Belo Horizonte, Patos - PB, 58704-470",
            "latitude": null,
            "longitude": null,
            "contato": "(83) 3423-2180 / 9-9930-4850"
        }
    ],
    "Bayeux": [],
    "Sousa": [],
    "Cabedelo": [],
    "Cajazeiras": [
        {
            "nome": "Hemonúcleo de Cajazeiras",
            "endereco": "R. José Rodovalho de Alençar - Bairro Cristo Rei, Cajazeiras - PB, 58900-000",
            "latitude": null,
            "longitude": null,
            "contato": "(83) 3531-6687"
        }
    ],
    "Guarabira": [],
    "Mamanguape": [],
    "Queimadas": [],
    "Monteiro": [],
    "Esperança": [],
    "Solânea": [],
    "Pedras de Fogo": [],
    "Itabaiana": [],
    "Catolé do Rocha": [],
    "Rio Tinto": [],
    "Alagoa Grande": [],
    "Santa Luzia": [],
    "Pombal": [],
    "Itaporanga": [],
    "Conde": [],
    "Areia": [],
    "Bananeiras": [],
    "Mari": [],
    "Sapé": [],
    "Alhandra": [],
    "Cuité": [],
    "Princesa Isabel": [],
    "Belém": [],
    "Cajazeirinhas": [],
    "São Bento": [],
    "Pocinhos": [],
    "Pilõezinhos": [],
    "Araruna": [],
    "Cacimba de Dentro": [],
    "Cuitegi": [],
    "Pedra Lavrada": [],
    "Riachão do Bacamarte": [],
    "São Mamede": [],
    "Sobrado": [],
    "São Sebastião de Lagoa de Roça": [],
    "São José dos Ramos": [],
    "São João do Tigre": [],
    "Salgado de São Félix": [],
    "Salgadinho": [],
    "Puxinanã": []
},
    "Paraná": {
        "Curitiba": [
            {
                "nome": "Banco de Sangue Instituto Pasquini de Hemoterapia e Hematologia",
                "endereco": "R. Alcídes Munhoz, 433 - Mercês, Curitiba - PR, 80810-040",
                "latitude": null,
                "longitude": null,
                "contato": "(41) 3240-6578"
            },
            {
                "nome": "Hemobanco",
                "endereco": "Rua Capitão Souza Franco, 290 - Bigorrilho, Curitiba - PR, 80730-420",
                "latitude": null,
                "longitude": null,
                "contato": "(41) 3023-5545"
            },
            {
                "nome": "HEMEPAR - Curitiba",
                "endereco": "Tv. João Prosdócimo, 145 - Alto da XV, Curitiba - PR, 80045-145",
                "latitude": null,
                "longitude": null,
                "contato": "(41) 3281-4000 | 0800 645 4555"
            },
            {
                "nome": "Banco de Sangue do Hospital Erasto Gaertner",
                "endereco": "R. Dr. Ovande do Amaral, 201 - Jardim das Américas, Curitiba - PR, 81520-060",
                "latitude": null,
                "longitude": null,
                "contato": "(41) 3165-4509"
            }
        ],
        "Londrina": [
            {
                "nome": "IHEL - Londrina",
                "endereco": "R. Sen. Souza Naves, 667 - Centro, Londrina - PR, 86010-160",
                "latitude": null,
                "longitude": null,
                "contato": "(43) 3374-7800"
            },
            {
                "nome": "HEMEPAR - Londrina",
                "endereco": "R. Cláudio Donizete Cavalieri, 156 - Jardim Taruma, Londrina - PR, 86038-670",
                "latitude": null,
                "longitude": null,
                "contato": "(43) 3371-2218 | Fax: 3371-2417"
            }
        ],
        "Maringá": [
            {
                "nome": "HEMEPAR - Maringá",
                "endereco": "Avenida Mandacarú, 1600 - Parque das Laranjeiras, Maringá - PR, 87080-000",
                "latitude": null,
                "longitude": null,
                "contato": "(44) 3011-9194"
            },
            {
                "nome": "Banco de Sangue Dom Bosco",
                "endereco": "Av. Cidade de Leiria, 374 - Centro, Maringá - PR, 87213-280",
                "latitude": null,
                "longitude": null,
                "contato": "(44) 3262-8100"
            }
        ],
        "Ponta Grossa": [
            {
                "nome": "HEMEPAR - Ponta Grossa",
                "endereco": "R. General Osório, 427 - Centro, Ponta Grossa - PR, 84010-080",
                "latitude": null,
                "longitude": null,
                "contato": "(42) 3223-1616"
            }
        ],
        "Cascavel": [
            {
                "nome": "Banco de Sangue - Cascavel",
                "endereco": "R. Santa Catarina, 1268 - Centro, Cascavel - PR, 85801-040",
                "latitude": null,
                "longitude": null,
                "contato": "(45) 3225-2120"
            },
            {
                "nome": "HEMEPAR - Cascavel",
                "endereco": "R. Avaetés, 370 - Santo Onofre, Cascavel - PR, 85806-380",
                "latitude": null,
                "longitude": null,
                "contato": "(45) 3226-4549"
            }
        ],
        "São José dos Pinhais": [],
        "Foz do Iguaçu": [
            {
                "nome": "HEMEPAR - Foz do Iguaçu",
                "endereco": "Av. Gramado, 364 - Vila A, Foz do Iguaçu - PR, 85860-460",
                "latitude": null,
                "longitude": null,
                "contato": "(45) 3576-8020"
            }
        ],
        "Colombo": [],
        "Guarapuava": [
            {
                "nome": "HEMEPAR - Guarapuava",
                "endereco": "R. Afonso Botelho, 134 - Santana, Guarapuava - PR, 85070-165",
                "latitude": null,
                "longitude": null,
                "contato": "(42) 3622-2819 | (42) 3622-3790"
            }
        ],
        "Paranaguá": [
            {
                "nome": "HEMEPAR – Paranaguá",
                "endereco": "Avenida Gabriel de Lara, 657 - Alto São Sebastião, Paranaguá - PR, 83203-737",
                "latitude": null,
                "longitude": null,
                "contato": "(41) 3420-6663 | 6662"
            }
        ],
        "Toledo": [
            {
                "nome": "HEMEPAR - Toledo",
                "endereco": "R. Eugênio Gustavo Keler - Jardim Coopagro, Toledo - PR, 85903-450",
                "latitude": null,
                "longitude": null,
                "contato": "(45) 3379-1993"
            }
        ],
        "Pinhais": [],
        "Araucária": [],
        "Cambé": [],
        "Campo Largo": [],
        "Umuarama": [
            {
                "nome": "HEMEPAR - Umuarama",
                "endereco": "Av. Manaus, 4444 - Zona Armazem, Umuarama - PR, 87501-060",
                "latitude": null,
                "longitude": null,
                "contato": "(44) 3621-8300"
            }
        ],
        "Arapongas": [],
        "Campo Mourão": [
            {
                "nome": "HEMEPAR – Campo Mourão",
                "endereco": "R. Mambore, 1500 - Centro, Campo Mourão - PR, 87302-140",
                "latitude": null,
                "longitude": null,
                "contato": "(44) 3525-1102 | (44) 3523-1844"
            }
        ],
        "Marechal Cândido Rondon": [],
        "Paranavaí": [
            {
                "nome": "Hemonúcleo Regional De Paranavaí",
                "endereco": "R. Rio Grande do Sul, 2490 - Centro, Paranavaí - PR, 87702-090",
                "latitude": null,
                "longitude": null,
                "contato": "(44) 3421-3588"
            }
        ],
        "Matinhos": [],
        "Dois Vizinhos": [],
        "Castro": [],
        "Palmas": [],
        "Irati": [
            {
                "nome": "HEMEPAR - Irati",
                "endereco": "Rua Coronel Gracia, 761 - Centro, Irati - PR, 84500-000",
                "latitude": null,
                "longitude": null,
                "contato": "(42) 3422-3119 | (42) 3423-2400"
            }
        ],
        "Telêmaco Borba": [
            {
                "nome": "HEMEPAR - Telêmaco Borba",
                "endereco": "Avenida Marechal Floriano Peixoto, s/n (Anexo ao Hospital Regional) - Alto das Oliveiras, Telêmaco Borba - PR, 84266-010",
                "latitude": null,
                "longitude": null,
                "contato": "(42) 3272-3743"
            }
        ],
        "Medianeira": [],
        "Rolândia": [],
        "Almirante Tamandaré": [],
        "Cianorte": [
            {
                "nome": "HEMEPAR – Cianorte",
                "endereco": "Av. Santa Catarina, 423 – Zona 1, Cianorte – PR, 87200-000",
                "latitude": null,
                "longitude": null,
                "contato": "(44) 3631-6292"
            }
        ],
        "Rio Negro": [],
        "União da Vitória": [
            {
                "nome": "HEMEPAR - União da Vitória",
                "endereco": "R. Castro Alves, 26 - Centro, União da Vitória - PR, 84600-000",
                "latitude": null,
                "longitude": null,
                "contato": "(42) 3522-1365 | (42) 3522-1793"
            }
        ],
        "São Mateus do Sul": [],
        "Pato Branco": [
            {
                "nome": "HEMEPAR – Pato Branco",
                "endereco": "R. Paraná, 1633 - Centro, Pato Branco - PR, 85501-025",
                "latitude": null,
                "longitude": null,
                "contato": "(46) 3225-1014 | (46) 3225-3585"
            }
        ],
        "Apucarana": [
            {
                "nome": "HEMEPAR - Apucarana",
                "endereco": "R. Antônio Ostrenski, 3 - Centro, Apucarana - PR, 86800-200",
                "latitude": null,
                "longitude": null,
                "contato": "(43) 3420-4200"
            }
        ],
        "Cornélio Procópio": [
            {
                "nome": "HEMEPAR - Cornélio Procópio",
                "endereco": "R. Justino Marquês Bonfim, 27 - Cornélio Procópio - PR, 86300-000",
                "latitude": null,
                "longitude": null,
                "contato": "(43) 3520-3500"
            }
        ],
        "Jacarezinho": [
            {
                "nome": "HEMEPAR – Jacarezinho",
                "endereco": "R. Cel. Cecílio Rocha, 425 - Jacarezinho - PR, 86400-000",
                "latitude": null,
                "longitude": null,
                "contato": "(43) 3525-1395"
            }
        ],
        "Lapa": [],
        "Sengés": [],
        "Cerro Azul": []
    },
        "Pernambuco": {
            "Recife": [
                {
                    "nome": "HEMOPE - Recife",
                    "endereco": "Rua Joaquim Nabuco, 171 - Graças - Recife - CEP: 52.011-000",
                    "latitude": null,
                    "longitude": null,
                    "contato": "(81) 3182-4600"
                },
                {
                    "nome": "Banco de Sangue Hemato Recife",
                    "endereco": "R. Dom Bôsco, 723 - Boa Vista, Recife - PE, 50070-070",
                    "latitude": null,
                    "longitude": null,
                    "contato": "(81) 3972-4050"
                }
            ],
            "Petrolina": [
                {
                    "nome": "HEMOPE - Petrolina",
                    "endereco": "R. Pacífico da Luz, s/n - Centro, Petrolina - PE, 56304-010",
                    "latitude": null,
                    "longitude": null,
                    "contato": "(87) 3182-5866 / 3866-6601"
                }
            ],
            "Garanhuns": [
                {
                    "nome": "HEMOPE - Garanhuns",
                    "endereco": "Av. Gonçalves Maia - Heliópolis, Garanhuns - PE, 55296-270",
                    "latitude": null,
                    "longitude": null,
                    "contato": "(87) 3761-8520 / 3761-8530"
                }
            ],
            "Caruaru": [
                {
                    "nome": "HEMOPE - Caruaru",
                    "endereco": "Av. Oswaldo Cruz, S/N - Maurício de Nassau, Caruaru - PE, 55012-040",
                    "latitude": null,
                    "longitude": null,
                    "contato": "(81) 3719-9565 / 3719-9570"
                }
            ],
            "Arcoverde": [
                {
                    "nome": "HEMOPE - Arcoverde",
                    "endereco": "Av. Joaquim Nabuco, 418 - Centro, Arcoverde - PE, 56505-150",
                    "latitude": null,
                    "longitude": null,
                    "contato": "(87) 3182-1462 / 3821-8551"
                }
            ],
            "Limoeiro": [
                {
                    "nome": "HEMOPE - Limoeiro",
                    "endereco": "Rua Santa Terezinha, 174 - José Fernades Salsa, Limoeiro - PE, 55700-000",
                    "latitude": null,
                    "longitude": null,
                    "contato": "(81) 3628.8806"
                }
            ],
            "Ouricuri": [
                {
                    "nome": "HEMOPE - Ouricuri",
                    "endereco": "R. Ulisses Guimarães, s/n - Centro, Ouricuri - PE, 56200-000",
                    "latitude": null,
                    "longitude": null,
                    "contato": "(87) 3874-4890"
                }
            ],
            "Salgueiro": [
                {
                    "nome": "HEMOPE - Salgueiro",
                    "endereco": "R. Joaquim Gondim, 65 - Santo Antonio, Salgueiro - PE, 56000-000",
                    "latitude": null,
                    "longitude": null,
                    "contato": "(87) 3871-8569"
                }
            ],
            "Jaboatão dos Guararapes": [],
            "Olinda": [],
            "Paulista": [],
            "Cabo de Santo Agostinho": [],
            "Camaragibe": [],
            "Vitória de Santo Antão": [],
            "Igarassu": [],
            "São Lourenço da Mata": [],
            "Santa Cruz do Capibaribe": [],
            "Abreu e Lima": [],
            "Ipojuca": [],
            "Serra Talhada": [],
            "Araripina": [],
            "Gravatá": [],
            "Carpina": [],
            "Goiana": [],
            "Belo Jardim": [],
            "Escada": [],
            "Pesqueira": [],
            "Surubim": [],
            "Palmares": [],
            "Bezerros": [],
            "Bom Conselho": [],
            "Afogados da Ingazeira": [],
            "Timbaúba": [],
            "Buique": [],
            "Paudalho": [],
            "Sirinhaém": [],
            "Lajedo": [],
            "Bonito": [],
            "Moreno": [],
            "Floresta": [],
            "Brejo da Madre de Deus": [],
            "Custódia": [],
            "Água Preta": [],
            "São José do Egito": [],
            "São Bento do Una": [],
            "Toritama": [],
            "Águas Belas": [],
            "Barreiros": []
        },
        "Piauí": {
            "Teresina": [
                {
                    "nome": "HEMOPI - Teresina - PI",
                    "endereco": "R. Primeiro de Maio, 235 - Centro (Sul), Teresina - PI, 64001-430",
                    "latitude": null,
                    "longitude": null,
                    "contato": "(86) 3221-8320 / 3221-8319 / 3226-4919"
                }
            ],
            "Parnaíba": [],
            "Picos": [],
            "Campo Maior": [],
            "Floriano": [],
            "Piripiri": [],
            "Barras": [],
            "José de Freitas": [],
            "Pedro II": [],
            "Oeiras": [],
            "Luzilândia": [],
            "Batalha": [],
            "Esperantina": [],
            "Luís Correia": [],
            "Corrente": [],
            "São Raimundo Nonato": [],
            "Cocal": [],
            "União": [],
            "Miguel Alves": [],
            "Altos": [],
            "Piracuruca": [],
            "Cristino Castro": [],
            "Paulistana": [],
            "Valença do Piauí": [],
            "São João do Piauí": [],
            "Demerval Lobão": [],
            "Capitão de Campos": [],
            "São Miguel do Tapuio": [],
            "Fronteiras": [],
            "Castelo do Piauí": [],
            "Amarante": [],
            "Simões": [],
            "Alegrete do Piauí": [],
            "Porto": [],
            "Bom Jesus": [],
            "Uruçuí": [],
            "Monsenhor Gil": [],
            "Canto do Buriti": [],
            "Palmeirais": [],
            "Beneditinos": [],
            "Simplício Mendes": [],
            "Caracol": []
    },
    "Rio de Janeiro": {
        "Petrópolis": [
            {
                "nome": "Banco de Sangue Hospital Santa Teresa",
                "endereco": "Rua Doutor Paulo Hervé, 1130 - Bingen, Petrópolis - RJ, 25665-510",
                "latitude": null,
                "longitude": null,
                "contato": "(24) 2245-2324 | (24) 98857-8769"
            }
        ],
        "Rio de Janeiro": [
            {
                "nome": "Banco de Sangue Herbert de Souza - Betinho",
                "endereco": "Boulevard Vinte e Oito de Setembro, 77 - Vila Isabel, Rio de Janeiro, 20551-030",
                "latitude": null,
                "longitude": null,
                "contato": "(21) 2868-8134"
            },
            {
                "nome": "Hematologistas Associados - Unidade 1",
                "endereco": "Rua Conde de Irajá, 183 - Botafogo, Rio de Janeiro - RJ, 22271-020",
                "latitude": null,
                "longitude": null,
                "contato": "(21) 2796-5464 | Whatsapp: (21) 99794-4904"
            },
            {
                "nome": "Hemocentro São Lucas",
                "endereco": "R. Manuela Barbosa, 50 - Méier Rio de Janeiro - RJ, 20735-110",
                "latitude": null,
                "longitude": null,
                "contato": "(21) 3795-7572"
            },
            {
                "nome": "Hemorio - Centro",
                "endereco": "R. Frei Caneca, 8 - Centro, Rio de Janeiro - RJ, 20211-030",
                "latitude": null,
                "longitude": null,
                "contato": "(21) 2332-8611"
            },
            {
                "nome": "Hospital Central da Polícia Militar",
                "endereco": "R. Estácio de Sá, 20 - Estácio, Rio de Janeiro - RJ, 20211-270",
                "latitude": null,
                "longitude": null,
                "contato": "(21) 2333-7632"
            },
            {
                "nome": "Instituto Nacional de Traumatologia e Ortopedia",
                "endereco": "Av. Brasil, 500 - São Cristóvão, Rio de Janeiro - RJ, 20940-070",
                "latitude": null,
                "longitude": null,
                "contato": "(21) 2134-4587"
            },
            {
                "nome": "Instituto de Biologia do Exército",
                "endereco": "R. Francisco Manuel, 102 - Benfica, Rio de Janeiro - RJ, 20911-270",
                "latitude": null,
                "longitude": null,
                "contato": "(21) 3890-2135"
            },
            {
                "nome": "Hospital Universitário Clementino Fraga Filho",
                "endereco": "R. Prof. Rodolpho Paulo Rocco, 255 - Cidade Universitária da Universidade Federal do Rio de Janeiro, Rio de Janeiro - RJ, 21941-617",
                "latitude": null,
                "longitude": null,
                "contato": "(21) 3938-2789"
            },
            {
                "nome": "Hospital Naval Marcílio Dias",
                "endereco": "R. César Zama, 185 - Lins de Vasconcelos, Rio de Janeiro - RJ, 20725-090",
                "latitude": null,
                "longitude": null,
                "contato": "(21) 2599-5481"
            },
            {
                "nome": "Hospital Federal do Bonsucesso",
                "endereco": "Av. Londres, 616 - Bonsucesso - Rio de Janeiro - RJ, 21041-030",
                "latitude": null,
                "longitude": null,
                "contato": "(21) 3977-9575 | (21) 3977-9577"
            },
            {
                "nome": "Hospital de Aeronáutica dos Afonsos",
                "endereco": "Av. Marechal Fontenele, 1628 - Campo dos Afonsos, Rio de Janeiro - RJ",
                "latitude": null,
                "longitude": null,
                "contato": "(21) 3289-6763 | (21) 3289-6859"
            },
            {
                "nome": "SERUM (Hospital da Ordem do Carmo)",
                "endereco": "Av. Mal. Floriano, 99 - Centro, Rio de Janeiro - RJ, 20230-010",
                "latitude": null,
                "longitude": null,
                "contato": "(21) 3233-5950 | (21) 3257-1100 | (21) 97177-9671"
            },
            {
                "nome": "Hematologistas Associados - Unidade 1",
                "endereco": "Rua Conde de Irajá, 183 - Botafogo, Rio de Janeiro - RJ, 22271-020",
                "latitude": null,
                "longitude": null,
                "contato": "(21) 2537-7440"
            },
            {
                "nome": "NÚCLEO DE HEMOTERAPIA ZONA SUL - INSTITUTO NACIONAL DE CARDIOLOGIA",
                "endereco": "R. das Laranjeiras, 374 - Laranjeiras, Rio de Janeiro - RJ, 22240-006",
                "latitude": null,
                "longitude": null,
                "contato": "(21) 3037-2215 | (21) 2285-3344"
            },
            {
                "nome": "Banco de Sangue da Santa Casa",
                "endereco": "R. Santa Luzia, 206 - Centro, Rio de Janeiro - RJ, 20020-022",
                "latitude": null,
                "longitude": null,
                "contato": "(21) 2524-6550"
            },
            {
                "nome": "Banco de Sangue Serum Barra",
                "endereco": "Av. Ayrton Senna, 2150 - Barra da Tijuca, Rio de Janeiro - RJ, 22775-900",
                "latitude": null,
                "longitude": null,
                "contato": "(21) 3233-5950 | (21) 99695-7470"
            }
        ],
        "Nova Iguaçu": [
            {
                "nome": "CTN - Centro de Transfusão de Nova Iguaçu",
                "endereco": "R. Cirílo, 183 - Juscelino, Nova Iguaçu - RJ, 26550-120",
                "latitude": null,
                "longitude": null,
                "contato": "(21) 2796-5464"
            },
            {
                "nome": "Hematologistas Associados - Unidade 4",
                "endereco": "R. Cirílo, 183 – Juscelino, Nova Iguaçu – RJ, 26550-120",
                "latitude": null,
                "longitude": null,
                "contato": "(21) 2796-5464 | Whatsapp: (21) 99794-4904"
            }
        ],
        "Niterói": [
            {
                "nome": "Clínica de Hemoterapia",
                "endereco": "R. Alm. Tefé, 594 - Centro, Niterói - RJ, 24030-080",
                "latitude": null,
                "longitude": null,
                "contato": "(21) 2621-9100"
            },
            {
                "nome": "Hemocentro Regional de Niterói",
                "endereco": "R. Marquês de Paraná, 303 - Centro, Niterói - RJ, 24030-215",
                "latitude": null,
                "longitude": null,
                "contato": "(21) 2629-9063"
            },
            {
                "nome": "Hematologistas Associados - Unidade 3",
                "endereco": "R. Alm. Tefé, 594 - Centro, Niterói - RJ, 24030-085",
                "latitude": null,
                "longitude": null,
                "contato": "(21) 2621-9140 | (21) 2621-9100 | Whatsapp: (21) 97165-6779"
            }
        ],
        "Vassouras": [
            {
                "nome": "Hemocentro Regional de Vassouras",
                "endereco": "R. Vicente Celestino, 201 - Madruga, Vassouras - RJ, 27700-000",
                "latitude": null,
                "longitude": null,
                "contato": "(24) 2471-8141 | (24) 2471-8136"
            }
        ],
        "Nova Friburgo": [
            {
                "nome": "Hemocentro Regional de Nova Friburgo",
                "endereco": "Avenida Presidente Costa e Silva, 349 - Centro, Nova Friburgo - RJ, 28605-010",
                "latitude": null,
                "longitude": null,
                "contato": "(22) 2523-9000 (Ramal: 210/263) | (22) 2523-8084"
            }
        ],
        "Cabo Frio": [
            {
                "nome": "Hemolagos",
                "endereco": "R. Barão do Rio Branco, 88 - Passagem, Cabo Frio - RJ, 28906-170",
                "latitude": null,
                "longitude": null,
                "contato": "(22) 2644-5076"
            }
        ],
        "Barra Mansa": [
            {
                "nome": "Hemonúcleo de Barra Mansa",
                "endereco": "Rua Pinto Ribeiro, 205 - Centro, Barra Mansa - RJ, 27310-420",
                "latitude": null,
                "longitude": null,
                "contato": "(24) 3322-8430 | (24) 3323-1918"
            }
        ],
        "Angra dos Reis": [
            {
                "nome": "Hemonúcleo da Costa Verde",
                "endereco": "R. Japoranga, 1700 - Japuíba, Angra dos Reis - RJ, 23934-050",
                "latitude": null,
                "longitude": null,
                "contato": "(24) 3369-6133"
            }
        ],
        "Rio Bonito": [
            {
                "nome": "Hemonúcleo Rio Bonito",
                "endereco": "R. Martinho de Almeida, 222 - Mangueirinha, Rio Bonito - RJ, 28800-000",
                "latitude": null,
                "longitude": null,
                "contato": "(21) 2734-9705"
            }
        ],
        "Teresópolis": [
            {
                "nome": "Hemonúcleo Municipal de Teresópolis",
                "endereco": "R. Francisco Sá, 299 - Vila Muqui, Teresópolis - RJ, 25953-010",
                "latitude": null,
                "longitude": null,
                "contato": "(21) 3641-5872"
            },
            {
                "nome": "Hematologistas Associados - Unidade 2",
                "endereco": "R. Judith Mauricio De Paula, 135 – Iucas, Teresópolis – RJ, 25964-220",
                "latitude": null,
                "longitude": null,
                "contato": "(21) 2741-4355 | (21) 2741-4300 (ramal 502)"
            }
        ],
        "São Gonçalo": [
            {
                "nome": "Hemonúcleo de São Gonçalo",
                "endereco": "R. Estefânia de Carvalho, 38 - Ze Garoto, São Gonçalo - RJ, 24440-195",
                "latitude": null,
                "longitude": null,
                "contato": "(21) 2604-6047 | (21) 2605-6795"
            }
        ],
        "Resende": [
            {
                "nome": "Núcleo de Hemoterapia Municipal de Resende",
                "endereco": "Av. Marcílio Dias, 800 - Jardim Jalisco, Resende - RJ, 27510-080",
                "latitude": null,
                "longitude": null,
                "contato": "(24) 3381-4834 | (24) 3381-2147 | (24) 3354-8907"
            }
        ],
        "Campos dos Goytacazes": [
            {
                "nome": "Núcleo Medicina Transfusional - Campos dos Goytacazes",
                "endereco": "R. Visc. de Itaboraí, 402 - Parque Rosario, Campos dos Goytacazes - RJ, 28027-141",
                "latitude": null,
                "longitude": null,
                "contato": "(22) 2728-2337"
            }
        ],
        "Macaé": [
            {
                "nome": "Serviço Municipal de Hemoteria de Macaé",
                "endereco": "R. Doutor Bueno, 40 - Centro, Macaé - RJ, 27948-307",
                "latitude": null,
                "longitude": null,
                "contato": "(22) 2796-1756"
            }
        ],
        "Duque de Caxias": [],
        "Belford Roxo": [],
        "São João de Meriti": [],
        "Volta Redonda": [],
        "Magé": [],
        "Itaboraí": [],
        "Macaé": [],
        "Rio das Ostras": [],
        "Mesquita": [],
        "Nilópolis": [],
        "Queimados": [],
        "Itaguaí": [],
        "Maricá": [],
        "Barra do Piraí": [],
        "Seropédica": [],
        "Araruama": [],
        "Saquarema": [],
        "Japeri": [],
        "Três Rios": [],
        "Paraíba do Sul": [],
        "Paracambi": [],
        "Quissamã": [],
        "Mangaratiba": [],
        "Casimiro de Abreu": [],
        "Iguaba Grande": [],
        "Cachoeiras de Macacu": [],
        "Valença": [],
        "Piraí": [],
        "Sapucaia": [],
        "São Fidélis": [],
        "Itaperuna": [],
        "Miracema": [],
        "Laje do Muriaé": [],
        "Natividade": [],
        "Porciúncula": [],
        "Varre-Sai": [],
        "Bom Jesus do Itabapoana": [],
        "Itaocara": []
},
"Rio Grande do Norte": {
    "Natal": [
        {
            "nome": "Hemovida - Petrópolis",
            "endereco": "Av. Nilo Peçanha, 199 - Petrópolis, Natal - RN, 59012-300",
            "latitude": null,
            "longitude": null,
            "contato": "(84) 3202-4289 / 3202-5366 / 9904-9200"
        },
        {
            "nome": "Hemocentro Dalton Cunha",
            "endereco": "Av. Alm. Alexandrino de Alencar, 1800 - Tirol, Natal - RN, 59015-350",
            "latitude": null,
            "longitude": null,
            "contato": "(84) 3232-6701"
        }
    ],
    "Mossoró": [
        {
            "nome": "Hemocentro de Mossoró",
            "endereco": "R. Projetada, s/n - Aeroporto, Mossoró - RN, 59600-971",
            "latitude": null,
            "longitude": null,
            "contato": "(84) 3315-3428"
        }
    ],
    "Pau dos Ferros": [
        {
            "nome": "Hemocentro Pau dos Ferros",
            "endereco": "Rodovia Br 405, Km 3, 1971 - Arizona, Pau dos Ferros - RN, 59900-000",
            "latitude": null,
            "longitude": null,
            "contato": "(84) 3351-9895"
        }
    ],
    "Caicó": [
        {
            "nome": "Hemocentro de Caicó",
            "endereco": "R. Dr. Renato Dantas, 455, Caicó - RN, 59300-000",
            "latitude": null,
            "longitude": null,
            "contato": "(84) 3421-6120"
        }
    ],
    "Currais Novos": [
        {
            "nome": "Hemocentro de Currais Novo",
            "endereco": "R. Carnaúba dos Dantas, 150 - JK, Currais Novos - RN, 59380-000",
            "latitude": null,
            "longitude": null,
            "contato": "(84) 3405-3629"
        }
    ],
    "Açu": [],
    "São José de Mipibu": [],
    "Santa Cruz": [],
    "Nova Cruz": [],
    "Apodi": [],
    "João Câmara": [],
    "Extremoz": [],
    "Canguaretama": [],
    "Touros": [],
    "Macau": [],
    "Areia Branca": [],
    "Baraúna": [],
    "Goianinha": [],
    "Nísia Floresta": [],
    "São Miguel": [],
    "Ipanguaçu": [],
    "Cerro Corá": [],
    "São Paulo do Potengi": [],
    "Tangará": [],
    "Maxaranguape": [],
    "Serra do Mel": [],
    "São José do Campestre": [],
    "Santo Antônio": [],
    "Lajes": [],
    "Jucurutu": [],
    "Monte Alegre": [],
    "Jardim de Piranhas": [],
    "Taipu": [],
    "Jardim do Seridó": [],
    "Jandaíra": [],
    "Campo Redondo": [],
    "Caraúbas": [],
    "São Tomé": [],
    "Patu": [],
    "Lagoa Nova": [],
    "Tibau do Sul": []
},
"Rio Grande do Sul": {
    "Porto Alegre": [
        {
            "nome": "Banco de Sangue do Grupo Hospitalar Conceição",
            "endereco": "Av. Francisco Trein, 596 - Cristo Redentor, Porto Alegre - RS, 91350-200",
            "latitude": null,
            "longitude": null,
            "contato": "(51) 3357-2139"
        },
        {
            "nome": "HEMORGS",
            "endereco": "Av. Bento Gonçalves, 3722 - Partenon, Porto Alegre - RS, 90650-001",
            "latitude": null,
            "longitude": null,
            "contato": "(51) 3336-6755"
        },
        {
            "nome": "Banco de Sangue do Hospital de Clínicas",
            "endereco": "R. São Manoel, 543 - Rio Branco, Porto Alegre - RS, 90620-110",
            "latitude": null,
            "longitude": null,
            "contato": "(51) 3359-8504 / 3359-7521 | WhatsApp (51) 99937-7892 / (51) 99735-9867"
        },
        {
            "nome": "Santa Casa de Misericórdia",
            "endereco": "Av. Independência, 75 - Centro Histórico, Porto Alegre - RS, 90020-090",
            "latitude": null,
            "longitude": null,
            "contato": "(51) 3214-8025"
        }
    ],
    "Caxias do Sul": [
        {
            "nome": "Hemocentro Regional",
            "endereco": "R. Ernesto Alves, 2260 - Centro, Caxias do Sul - RS, 95020-360",
            "latitude": null,
            "longitude": null,
            "contato": "(54) 3290-4536"
        },
        {
            "nome": "Hemovita",
            "endereco": "Edifício Century - R. Sinimbu, 520 - 6° andar - Bairro Lourdes, Caxias do Sul - RS, 95020-000",
            "latitude": null,
            "longitude": null,
            "contato": "(54) 3028-8010"
        }
    ],
    "Pelotas": [
        {
            "nome": "Hemocentro Regional",
            "endereco": "Av. Bento Gonçalves, 4569 - Fragata, Pelotas - RS, 96015-140",
            "latitude": null,
            "longitude": null,
            "contato": "(53) 3222-3002 / (53) 3225-4022"
        }
    ],
    "Uruguaiana": [
        {
            "nome": "Hospital Santa Casa de Uruguaiana",
            "endereco": "Rua Domingos José de Almeida, 3801 - São Miguel, Uruguaiana - RS, 97502-854",
            "latitude": null,
            "longitude": null,
            "contato": "(55) 3414-5500"
        }
    ],
    "Alegrete": [
        {
            "nome": "Hemocentro Regional de Alegrete",
            "endereco": "R. General Sampaio - Centro, Alegrete - RS, 97541-261",
            "latitude": null,
            "longitude": null,
            "contato": "(55) 3426-4127"
        }
    ],
    "Santiago": [
        {
            "nome": "Banco de Sangue Santiago",
            "endereco": "Rua 7 de Setembro, 570, Centro - Santiago - RS, 97700-000 - Fundos do HCS",
            "latitude": null,
            "longitude": null,
            "contato": "(55) 3251-1174 / (55) 99976-0430"
        }
    ],
    "Santa Rosa": [
        {
            "nome": "Hemocentro Regional de Santa Rosa",
            "endereco": "R. Boa Vista, 401 - Centro, Santa Rosa - RS, 98900-000",
            "latitude": null,
            "longitude": null,
            "contato": "(55) 3513-5140"
        }
    ],
    "Santa Maria": [
        {
            "nome": "Hemocentro Regional de Santa Maria",
            "endereco": "Alameda Santiago do Chile, 1-59 - Nossa Sra. das Dores, Santa Maria - RS, 97050-685",
            "latitude": null,
            "longitude": null,
            "contato": "(55) 3221-5262 / 3221-5192"
        }
    ],
    "Cruz Alta": [
        {
            "nome": "Hemocentro Regional de Cruz Alta",
            "endereco": "R. Barão do Rio Branco, 1445 - Centro, Cruz Alta - RS, 98005-030",
            "latitude": null,
            "longitude": null,
            "contato": "(55) 3326-3168"
        }
    ],
    "Passo Fundo": [
        {
            "nome": "Hemocentro Regional de Passo Fundo",
            "endereco": "Av. Sete de Setembro, 1055 - Centro, Passo Fundo - RS, 99010-120",
            "latitude": null,
            "longitude": null,
            "contato": "(54) 3311-5555 / 3311-1427"
        }
    ],
    "Lajeado": [
        {
            "nome": "HEMOVALE",
            "endereco": "Av. Benjamin Constant, 881 - Centro, Lajeado - RS, 95900-000",
            "latitude": null,
            "longitude": null,
            "contato": "(51) 3748-0442 / (51) 3011-0631"
        }
    ],
    "Venâncio Aires": [
        {
            "nome": "Vital Banco de Sangue",
            "endereco": "R. Jacob Becker, 1380 - Centro, Venâncio Aires - RS, 95800-000",
            "latitude": null,
            "longitude": null,
            "contato": "(51) 3712-3647"
        }
    ],
    "Santa Cruz do Sul": [
        {
            "nome": "Hospital Santa Cruz",
            "endereco": "Rua Fernando Abott, 174 - Centro, Santa Cruz do Sul - RS, 96810-072",
            "latitude": null,
            "longitude": null,
            "contato": "(51) 3056-2103 / (51) 3713-7400"
        }
    ],
    "Erechim": [
        {
            "nome": "Banco de Sangue do Alto Uruguai Gaúcho",
            "endereco": "Praça Joaquim Brasil Cabral, 443 - Centro, Erechim - RS, 99700-420",
            "latitude": null,
            "longitude": null,
            "contato": "(54) 3522-5366"
        }
    ],
    "Novo Hamburgo": [
        {
            "nome": "Hemovida - Hospital Regina",
            "endereco": "Av. Dr. Maurício Cardoso, 711 - Hamburgo Velho, Novo Hamburgo - RS, 93510-250",
            "latitude": null,
            "longitude": null,
            "contato": "(51) 3581-5241"
        }
    ],
    "Canoas": [],
    "Gravataí": [],
    "Viamão": [],
    "São Leopoldo": [],
    "Rio Grande": [],
    "Alvorada": [],
    "Bagé": [],
    "Bento Gonçalves": [],
    "Guaíba": [],
    "Sapucaia do Sul": [],
    "Santo Ângelo": [],
    "Esteio": [],
    "Ijuí": [],
    "Alegrete": [],
    "Farroupilha": [],
    "Santiago": [],
    "Charqueadas": [],
    "Sapiranga": [],
    "Cachoeira do Sul": [],
    "Taquara": [],
    "Carazinho": [],
    "Campo Bom": [],
    "São Domingos do Sul": [],
    "Santa Vitória do Palmar": [],
    "Três Coroas": [],
    "Capão da Canoa": [],
    "Marau": [],
    "Garibaldi": [],
    "Torres": []
},
"Rondônia": {
    "Porto Velho": [
        {
            "nome": "FHEMERON - Porto Velho",
            "endereco": "Av. Gov. Jorge Teixeira, 3766 - Industrial, Porto Velho - RO, 78905-160",
            "latitude": null,
            "longitude": null,
            "contato": "(69) 3216-2234"
        }
    ],
    "Ji-Paraná": [
        {
            "nome": "Unidade de Coleta e Transfusão de Ji-Paraná",
            "endereco": "Rua: Vilagran Cabrita, nº 1440 – Centro - Ji-Paraná – RO. CEP 76900-018",
            "latitude": null,
            "longitude": null,
            "contato": "(69) 3421-1615"
        }
    ],
    "Ariquemes": [
        {
            "nome": "FHEMERON - Ariquemes",
            "endereco": "255, R. Cassiterita, 3613, Ariquemes - RO, 76872-874",
            "latitude": null,
            "longitude": null,
            "contato": "(69) 3535-2659"
        }
    ],
    "Vilhena": [
        {
            "nome": "FHEMERON - Vilhena",
            "endereco": "Av. Jô Sato, 405 - Nova Vilhena, Vilhena - RO, 76980-000",
            "latitude": null,
            "longitude": null,
            "contato": "(69) 3322-2400 e 0800 642 5744"
        }
    ],
    "Cacoal": [
        {
            "nome": "FHEMERON - Cacoal",
            "endereco": "Av. Malaquita, 3721 - Josino Brito, Cacoal - RO, 76962-008",
            "latitude": null,
            "longitude": null,
            "contato": "(69) 3441-0823"
        }
    ],
    "Rolim de Moura": [
        {
            "nome": "FHEMERON - Rolim de Moura",
            "endereco": "R. Tocantins, 3932 - Planalto, Rolim de Moura - RO, 76940-000",
            "latitude": null,
            "longitude": null,
            "contato": "(69) 3442-1328"
        }
    ],
    "Guajará-Mirim": [],
    "Machadinho d'Oeste": [],
    "Buritis": [],
    "Pimenta Bueno": [],
    "Ouro Preto do Oeste": [],
    "Espigão d'Oeste": [],
    "Nova Mamoré": [],
    "Candeias do Jamari": [],
    "Alto Paraíso": [],
    "Alto Alegre dos Parecis": [],
    "Alta Floresta d'Oeste": [],
    "Costa Marques": [],
    "São Miguel do Guaporé": [],
    "Nova Brasilândia d'Oeste": [],
    "Presidente Médici": [],
    "Campo Novo de Rondônia": [],
    "Cujubim": [],
    "Monte Negro": [],
    "Seringueiras": [],
    "Vale do Anari": [],
    "Vale do Paraíso": [],
    "Chupinguaia": [],
    "São Francisco do Guaporé": []
},
"Roraima": {
    "Boa Vista": [
        {
            "nome": "Hemocentro de Boa Vista",
            "endereco": "Av. Brg. Eduardo Gomes, 3418 - Aeroporto, Boa Vista - RR, 69310-005",
            "latitude": null,
            "longitude": null,
            "contato": "(95) 98404-9593"
        }
    ],
    "Rorainópolis": [],
    "Caracaraí": [],
    "Mucajaí": [],
    "Alto Alegre": [],
    "Cantá": [],
    "Bonfim": [],
    "Pacaraima": [],
    "Iracema": [],
    "Amajari": [],
    "Normandia": [],
    "São João da Baliza": [],
    "São Luiz": [],
    "Uiramutã": []
},
"Santa Catarina": {
    "Criciúma": [
        {
            "nome": "HEMOSC - Criciúma",
            "endereço": "Av. Centenário, 1700 - Santa Barbara, Criciúma - SC, 88804-001",
            "latitude": null,
            "longitude": null,
            "contato": "(48) 3444 7400"
        }
    ],
    "Tubarão": [
        {
            "nome": "HEMOSC – Tubarão",
            "endereço": "Rua Lauro Muller, 354 - Centro, Tubarão - SC, 88705-701",
            "latitude": null,
            "longitude": null,
            "contato": "(48) 3444-7410 | (48) 3444-7414"
        }
    ],
    "Florianópolis": [
        {
            "nome": "HEMOSC – Florianópolis",
            "endereço": "Av. Prof. Othon Gama D'Eça, 756 - Centro, Florianópolis - SC, 88015-240",
            "latitude": null,
            "longitude": null,
            "contato": "(48) 3251 9712 ou 9758"
        }
    ],
    "Blumenau": [
        {
            "nome": "Hemosc - Blumenau",
            "endereço": "Rua Theodoro Holtrup, 40 - Vila Nova, Blumenau - SC, 89035-300",
            "latitude": null,
            "longitude": null,
            "contato": "(47) 3222-9800"
        }
    ],
    "Jaraguá do Sul": [
        {
            "nome": "HEMOSC Hospital São José - Jaraguá do Sul",
            "endereço": "Rua Doutor Waldemiro Mazurechen, 80 - Centro, Jaraguá do Sul - SC, 89251-830",
            "latitude": null,
            "longitude": null,
            "contato": "(47) 3055-0454"
        }
    ],
    "Joinville": [
        {
            "nome": "Hemosc - Joinville",
            "endereço": "Av. Getúlio Vargas, 198 - Anita Garibaldi, Joinville - SC, 89202-000",
            "latitude": null,
            "longitude": null,
            "contato": "(47) 3481-7400"
        }
    ],
    "Lages": [
        {
            "nome": "HEMOSC – Lages",
            "endereço": "R. Felipe Schmidt, 33 - Centro, Lages - SC, 88501-135",
            "latitude": null,
            "longitude": null,
            "contato": "(49) 3289 7011"
        }
    ],
    "Joaçaba": [
        {
            "nome": "Hemosc - Joaçaba",
            "endereço": "Av. XV de Novembro, 23 - Centro, Joaçaba - SC, 89600-000",
            "latitude": null,
            "longitude": null,
            "contato": "(49) 3527-2200"
        }
    ],
    "Concórdia": [
        {
            "nome": "Banco de Sangue no Hospital São Francisco",
            "endereço": "R. Getúlio Vargas, 547 - Centro - Concórdia - SC, 89700-000",
            "latitude": null,
            "longitude": null,
            "contato": "(49) 3441-4580"
        }
    ],
    "Chapecó": [
        {
            "nome": "HEMOSC - Chapecó",
            "endereço": "R. São Leopoldo, 391 D - Esplanada, Chapecó - SC, 89812-565",
            "latitude": null,
            "longitude": null,
            "contato": "(49) 3700-6400"
        }
    ]
},
"São Paulo": {
    "São Paulo": [
        {
            "nome": "Banco de Sangue do Hospital Albert Einstein",
            "endereco": "Av. Albert Einstein, 627 - Morumbi, São Paulo - SP, 05652-900",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 2151-1233"
        },
            {
                "nome": "Pró-Sangue - Hemocentro de São Paulo - Posto Dante Pazzanese",
                "endereco": "Av. Dr. Dante Pazzanese, 500 - Vila Mariana, São Paulo - SP, 04012-909",
                "latitude": null,
                "longitude": null,
                "contato": "0800-55-0300 | (11) 4573-7800"
            },

        {
            "nome": "Banco de Sangue Paulista - São Paulo",
            "endereco": "R. Dr. Alceu de Campos Rodrigues, 46 - Vila Nova Conceição, São Paulo - SP, 04544-000",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 3048-8969 | (11) 3048-8950"
        },
        {
            "nome": "Hospital Beneficência Portuguesa de São Paulo",
            "endereco": "R. Maestro Cardim, 1041 - Bela Vista, São Paulo - SP, 01323-130",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 3505-1000"
          },
          {
            "nome": "Hospital do Servidor Publico Municipal",
            "endereco": "R. Castro Alves, 60 - Aclimação, São Paulo - SP, 01532-000",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 3277-5303"
          },
          {
            "nome": "Hospital Municipal Doutor Carmino Caricchio de Tatuapé",
            "endereco": "Av. Celso Garcia, 4815 - Tatuapé, São Paulo - SP, 03085-030",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 2942-8094 / (11) 3394-7081 / (11) 3394-6980"
          },
          {
            "nome": "Hospital Municipal Ermelino Matarazzo",
            "endereco": "Alameda Rodrigo de Brum, 1989 - Ermelino Matarazzo, São Paulo - SP, 03807-230",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 2545-4652 / (11) 3394-8030"
          },
          {
            "nome": "Hospital Samaritano Higienópolis",
            "endereco": "R. Conselheiro Brotero, 1486 - Higienópolis, São Paulo - SP, 01232-010",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 3821-5852/ 3821-5853"
          },
          {
            "nome": "Hospital Santa Marcelina",
            "endereco": "R. Harry Dannenberg, 473 - Vila Carmosina, São Paulo - SP, 08270-010",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 2523-0546"
          },
          {
            "nome": "Hospital Sírio-Libanês - Bela Vista",
            "endereco": "Rua Dona Adma Jafet, 91 - Bela Vista, São Paulo - SP, 01308-050",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 3394-5260 e (11) 3394-0200"
          },
          {
            "nome": "Iamspe - (HSPE) Banco de Sangue do Hospital do Servidor Público Estadual",
            "endereco": "Rua Pedro de Toledo, 1800 - Vila Clementino, São Paulo - SP, 04039-000",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 5583-7001"
          },
          {
            "nome": "Instituto HOC",
            "endereco": "R. João Julião, 331 - Bela Vista, São Paulo - SP, 01323-020",
            "latitude": null,
            "longitude": null,
            "contato": "0800 772 1227 / (11) 3286-7372"
          },
        {
            "nome": "Banco de Sangue de São Paulo – Jd Paulista",
            "endereco": "Rua Tomás Carvalhal, 711 - Paraíso, São Paulo - SP, 04006-002",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 3373-2050"
        },
        {
            "nome": "Hospital A.C. Camargo",
            "endereco": "R. Castro Alves, 131 - Aclimação - São Paulo - SP, 13424-367",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 2189-5000 – Selecione a opção 5 do menu telefônico (agendamento de doação de sangue)"
          },
        {
            "nome": "CTA São Paulo",
            "endereco": "Av. Brigadeiro Luís Antônio, 2533 - Jardim Paulista, São Paulo - SP, 01401-000",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 3372-6611"
        },
        {
            "nome": "COLSAN - Campo Limpo",
            "endereco": "Estr. de Itapecerica, 1661 - Vila Maracana - São Paulo - SP, 05835-005",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 5812-1379"
        },
        {
            "nome": "Hemocentro da Santa Casa de São Paulo",
            "endereco": "R. Marquês de Itu, 579 - Vila Buarque, São Paulo - SP, 01223-001",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 2176-7155"
        },
        {
            "nome": "Hemocentro São Lucas - Vila Olímpia - São Paulo",
            "endereco": "Av. Santo Amaro, 2468 - Vila Olímpia, São Paulo - SP, 04556-100",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 3660-5972"
        },
        {
            "nome": "Banco de Sangue Paulista - São Paulo",
            "endereco": "R. Iguatinga, 382/386 - Santo Amaro, São Paulo - SP, 04744-040",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 5521-4013"
        },
        {
            "nome": "Serviço de Hemoterapia Hospital 9 de Julho",
            "endereco": "Rua Peixoto Gomide, 625 - Jardim Paulista, São Paulo - SP, 01409-001",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 3285-2922 | (11) 3147-9797"
          },
        {
            "nome": "Hemocentro HSP Unifesp - São Paulo",
            "endereco": "R. Dr. Diogo de Faria, 824 - Vila Clementino, São Paulo - SP, 04037-002",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 5576-4240"
        },
        {
            "nome": "Pró-Sangue - São Paulo (Unidade Clínicas)",
            "endereco": "Av. Dr. Enéas Carvalho de Aguiar, 155 - Cerqueira César, São Paulo - SP, 05403-000",
            "latitude": null,
            "longitude": null,
            "contato": "0800-55-0300 | (11) 4573-7800"
        }
    ],
    "Campinas": [
        {
            "nome": "Hemocentro da UNICAMP - Campinas",
            "endereco": "Universidade Estadual de Campinas - R. Carlos Chagas, 480 - Cidade Universitária, Campinas - SP, 13083-878",
            "latitude": null,
            "longitude": null,
            "contato": "0800-722-8432"
        },
        {
            "nome": "Centro de Hematologia e Hemoterapia - Campinas",
            "endereco": "Av. Júlio de Mesquita, 571 - Cambuí, Campinas - SP, 13010-140",
            "latitude": null,
            "longitude": null,
            "contato": "(19) 2514-1555"
        },
        {
                "nome": "Hospital Municipal Dr. Mário Gatti",
                "endereco": "Av. Pref. Faria Lima, 340 - Parque Italia, Campinas - SP, 13036-902",
                "latitude": null,
                "longitude": null,
                "contato": "(19) 3272-5501 | (19) 3772-5758 | (19) 3772-5700"
            }
        
    ],
    "São Bernardo do Campo": [
        {
            "nome": "COLSAN - São Bernardo do Campo",
            "endereco": "R. Pedro Jacobucci, 440 - Jardim das Americas, São Bernardo do Campo - SP, 09725-750",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 4332-3900"
        },
        {
            "nome": "Hemocentro São Lucas",
            "endereco": "R. Mediterrâneo, 470 - Jardim do Mar, São Bernardo do Campo - SP, 09750-420",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 3660-5968 / (11) 3660-6000"
        }
    ],
    "Santos": [
        {
            "nome": "Banco de Sangue da Santa Casa - Santos",
            "endereco": "Av. Dr. Cláudio Luiz da Costa, 50 - Jabaquara - Santos - SP, 11075-101",
            "latitude": null,
            "longitude": null,
            "contato": "(13) 3202-0600 | Ramal 1414"
        },
        {
            "nome": "Banco de Sangue do Hospital Ana Costa - Santos",
            "endereco": "Rua Pedro Américo, 60 - Campo Grande, Santos - SP, 11075-400",
            "latitude": null,
            "longitude": null,
            "contato": "(13) 3226-9252 | (13) 3228-9000"
        },
        {
            "nome": "COLSAN - Santos",
            "endereco": "R. Oswaldo Cruz, 197 - Boqueirão - Santos - SP, 11045-101",
            "latitude": null,
            "longitude": null,
            "contato": "(13) 3223-2860"
        },
        {
            "nome": "Casa de Saúde - Santos",
            "endereco": "Rua Dr. Armando Salles de Oliveira, 138 - Boqueirão, Santos - SP, 11050-070",
            "latitude": null,
            "longitude": null,
            "contato": "(13) 3202-7900"
        }
    ],
    "Ribeirão Preto": [
        {
            "nome": "GSH Banco de Sangue de Ribeirão Preto",
            "endereco": "R. Quintino Bocaiuva, 975 - Vila Seixas, Ribeirão Preto - SP, 14015-160",
            "latitude": null,
            "longitude": null,
            "contato": "(16) 3610-1515"
        },
        {
            "nome": "Banco de Sangue - Ribeirão Preto",
            "endereco": "R. Quintino Bocaiuva, nº 470 - Centro, Ribeirão Preto - SP, 14015-160",
            "latitude": null,
            "longitude": null,
            "contato": "(16) 3610-8929 | (16) 3610-5822"
        },
        {
            "nome": "Hemac - Ribeirão Preto",
            "endereco": "R. Altíno Arantes, 656 - Jardim Sumare, Ribeirão Preto - SP, 14025-120",
            "latitude": null,
            "longitude": null,
            "contato": "(16) 99267-6541 / (16) 3610-1211 / (16) 2138-3298 / (16) 2138-3004"
        }
    ],
    "Ourinhos": [
        {
            "nome": "Banco de Sangue - Ourinhos",
            "endereco": "Rua Joaquim de Azevedo, 604 - Vila Moraes, Ourinhos - SP, 19900-280",
            "latitude": null,
            "longitude": null,
            "contato": "(14) 3302-2245"
        }
    ],
    "Rio Claro": [
        {
            "nome": "Banco de sangue da Santa Casa de Misericórdia - Rio Claro",
            "endereco": "R. Dois, 297 - Centro, Rio Claro - SP, 13500-330",
            "latitude": null,
            "longitude": null,
            "contato": "(19) 3535-7022 | (19) 3535-7000"
        }
    ],
    "Araçatuba": [
        {
            "nome": "Banco de Sangue de Araçatuba",
            "endereco": "R. Gaspar de Lemos, 02 - Alvorada, Araçatuba - SP, 16013-800",
            "latitude": null,
            "longitude": null,
            "contato": "(18) 3607-3935"
        },
        {
            "nome": "Núcleo de Hemoterapia de Araçatuba",
            "endereco": "Avenida Rua Arthur Ferreira da Costa, 330 - Aviacao, Araçatuba - SP, 16055-500",
            "latitude": null,
            "longitude": null,
            "contato": "(18) 2102-9400"
        }
    ],
    "Diadema": [
        {
            "nome": "Banco de Sangue do Hospital Estadual - Diadema",
            "endereco": "R. José Bonifácio, 1641 - Serraria, Diadema - SP, 09960-120",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 3583-1475"
        }
    ],
    "Santo André": [
        {
            "nome": "Hemocentro São Lucas - Santo André",
            "endereco": "Av. dos Andradas, 444 - Vila Santa Teresa, Santo André - SP, 09030-350",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 3660-5994"
        },
        {
            "nome": "Banco de Sangue Hospital Mário Covas - Santo André",
            "endereco": "R. Dr. Henrique Calderazzo, 321 - Paraíso - Santo André - SP, 09190-615",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 2829-5162 | (11) 4436-0506"
        }
    ],
    "São Caetano do Sul": [
        {
            "nome": "COLSAN - São Caetano do Sul",
            "endereco": "R. Peri, 361 - Santa Paula, São Caetano do Sul - SP, 09540-290",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 4227-1083"
        }
    ],
    "Sorocaba": [
        {
            "nome": "COLSAN - Sorocaba",
            "endereco": "Avenida Comendador Pereira Inácio, 564 - Jardim Vergueiro, Sorocaba - SP, 18030-005",
            "latitude": null,
            "longitude": null,
            "contato": "(15) 3224-2930 | (15) 3332-9461"
        }
    ],
    "Bragança Paulista": [
        {
          "nome": "Hemonúcleo Regional USF - Hospital Universitário São Francisco de Assis - Bragança Paulista",
          "endereco": "Av. São Francisco de Assis, 260 - Cidade Universitária, Bragança Paulista - SP, 12916-542",
          "latitude": null,
          "longitude": null,
          "contato": "(11) 2490-1240"
        }
    ],
    "Jundiaí": [
        {
            "nome": "COLSAN – Jundiaí",
            "endereco": "R. XV de Novembro, 1848 - Vila Mun, Jundiaí - SP, 13201-305",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 4521-4025"
        },
        {
            "nome": "Bioclínica Análises Clínicas - Jundiaí",
            "endereco": "R. Anchieta, 66 - Vila Boaventura, Jundiaí - SP, 17490-050",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 4586-3600"
        }
    ],
    "Marília": [
        {
            "nome": "FAMEMA – Marília",
            "endereco": "R. Lourival Freire, 240 - Fragata, Marília - SP, 17519-050",
            "latitude": null,
            "longitude": null,
            "contato": "(14) 3434-2541"
        }
    ],
    "São José do Rio Preto": [
        {
            "nome": "Hemocentro - São José do Rio Preto",
            "endereco": "Av. Jamil Feres Kfouri, 80 - Jardim Panorama, São José do Rio Preto - SP, 15091-240",
            "latitude": null,
            "longitude": null,
            "contato": "(17) 3201-5151"
        }
    ],
    "Guarulhos": [
        {
            "nome": "Hemocentro Guarulhos Hospital Stella Maris",
            "endereco": "R. Maria Cândida Pereira, 568 - Vila Itapegica, Guarulhos - SP, 07041-020",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 2423-8551 | (11) 2423-8500"
        },
        {
            "nome": "Hemocentro São Lucas - Guarulhos",
            "endereco": "R. Santo Antônio, 95 - Centro, Guarulhos - SP, 07110-110",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 3660-6040"
        }
    ],
    "Liberdade": [
        {
            "nome": "Hemocentro São Lucas - Liberdade",
            "endereco": "Rua Barão de Iguape, 212 - Liberdade, São Paulo - SP, 01507-000",
            "latitude": null,
            "longitude": null,
            "contato": "(11) 3660-6044"
        }
    ],
    "Barretos": [
        {
            "nome": "Hemonúcleo - Barretos",
            "endereco": "R. Antenor Duarte Viléla, 1331 - Dr. Paulo Prata, Barretos - SP, 14784-400",
            "latitude": null,
            "longitude": null,
            "contato": "(17) 3321-6600"
        }
    ],
    "Jaú":[
        {
            "nome": "Hospital Amaral Carvalho",
            "endereco": "R. Doná Silvéria, 150 - Chácara Braz Miraglia, Jaú - SP, 17210-070",
            "latitude": null,
            "longitude": null,
            "contato": "(14) 3602-1355/ 3602-1356 / (14) 3602-1200"       
        }
    ],
    "Catanduva": [
        {
            "nome": "Hemonúcleo - Catanduva",
            "endereco": "R. Treze de Maio, 974 - Centro, Catanduva - SP, 15800-010",
            "latitude": null,
            "longitude": null,
            "contato": "(17) 3522-7722"
        }
    ],
    "Piracicaba": [
        {
            "nome": "Hemonúcleo de Piracicaba",
            "endereco": "Antigo prédio do ‘Saúde Inteligente’, dentro do complexo da Santa Casa de - R. Silva Jardim, 1700 - Alto, Piracicaba - SP, 13419-140",
            "latitude": null,
            "longitude": null,
            "contato": "(19) 3422-2019"
        }
    ],
    "Bauru": [
        {
            "nome": "Hemonúcleo do Hospital de Base - Bauru",
            "endereco": "R. Monsenhor Claro, 8-88 - Centro, Bauru - SP, 17010-260",
            "latitude": null,
            "longitude": null,
            "contato": "(14) 3231-4771"
        },
        {
            "nome": "Hemonúcleo de Bauru",
            "endereco": "Rua Marcos Augusto Genovez Serra, 251 - Vila Regina, Bauru - SP, 17012-647",
            "latitude": null,
            "longitude": null,
            "contato": "(14) 3234-4412"
        }
    ],
        "Sumaré": [
            {
                "nome": "Hospital Estadual - Sumaré",
                "endereco": "Av. da Amizade, 2400 - Jardim Bela Vista, Sumaré - SP, 13175-490",
                "latitude": null,
                "longitude": null,
                "contato": "(19) 3883-8909 | (19) 3883-8900"
            }
        ],
        "Americana": [
            {
                "nome": "Hospital Municipal de Americana",
                "endereco": "Av. da Saúde, 415 - Jardim Nossa Sra. de Fatima, Americana - SP, 13478-640",
                "latitude": null,
                "longitude": null,
                "contato": "(19) 3468-1739 | (19) 3471-6750"
            }
        ],
        "Araraquara": [
            {
                "nome": "Hemonúcleo Regional de Araraquara",
                "endereco": "Av. da Saudade, 58 - Centro, Araraquara - SP, 14801-360",
                "latitude": null,
                "longitude": null,
                "contato": "(16) 3301-6102"
            }
        ],
        "Taubaté": [
            {
                "nome": "Núcleo de Hemoterapia - Taubaté",
                "endereco": "Av. Inglaterra, 190 - Jardim das Nações, Taubaté - SP, 12030-450",
                "latitude": null,
                "longitude": null,
                "contato": "(12) 3624-1273"
            }
        ],
        "Fernandópolis": [
            {
                "nome": "Núcleo de Hemoterapia de Fernandópolis",
                "endereco": "R. Simão dos Santos Gomes, 266 - Jardim Santista, Fernandópolis - SP, 15600-000",
                "latitude": null,
                "longitude": null,
                "contato": "(17) 3442-5544"
            }
        ],
        "Adamantina": [
            {
              "nome": "UCT Adamantina",
              "endereco": "R. Joaquim Luís Vian, 209 - Vila Cicma, Adamantina - SP, 17800-000",
              "latitude": null,
              "longitude": null,
              "contato": "(18) 3521-2500 - Ramal 86"
            }
          ],
          "Dracena": [
            {
              "nome": "UCT Dracena - Santa Casa de Misericórdia e Maternidade de Dracena",
              "endereco": "R. Virgílio Pagnozi, 822 - Centro, Dracena - SP, 17900-000",
              "latitude": null,
              "longitude": null,
              "contato": "(18) 3822-1716 - Ramal 2262 Fax (18) 5822-3500"
            }
          ],
          "Lins": [
            {
              "nome": "UCT Lins",
              "endereco": "Rua Pedro de Toledo, 486 - Jardim Guanabara, Lins - SP, 16403-265",
              "latitude": null,
              "longitude": null,
              "contato": "(14) 3533-2500 Ramais 230 ou 284 Fax: (14) 3532-5087"
            }
          ],
          "Tupã": [
            {
              "nome": "UCT Tupã - Santa Casa da Misericórdia",
              "endereco": "R. Manoel Ferreira Damião, 444 - Vila Santa Terezinha, Tupã - SP, 17625-005",
              "latitude": null,
              "longitude": null,
              "contato": "(14) 3496-1022 - Ramal 232 Fax: (14) 3496-1177"
            }
        ],
        "Franca": [
            {
                "nome": "Núcleo de Hemoterapia de Franca",
                "endereco": "Av. Dr. Hélio Palermo, 4181 - Recanto do Itambé, Franca - SP, 14409-045",
                "latitude": null,
                "longitude": null,
                "contato": "(16) 3402-5000"
            }
        ],
        "Presidente Prudente": [
            {
                "nome": "Núcleo de Hemoterapia de Presidente Prudente",
                "endereco": "R. Wenceslau Braz, 5 - Vila Euclides, Pres. Prudente - SP, 19014-030",
                "latitude": null,
                "longitude": null,
                "contato": "(18) 3223-3511 | (18) 3223-4490"
            },
            {
                "nome": "Instituto Rh Hematologia e Hemoterapia - Presidente Prudente",
                "endereco": "Av. Cel. José Soares Marcondes, 2063 - Uep1-S.1, Pres. Prudente - SP, 19010-089",
                "latitude": null,
                "longitude": null,
                "contato": "(18) 3226-1555"
              }
        ],
        "Barueri": [
            {
                "nome": "Pró-Sangue - Barueri",
                "endereco": "Rua Ângela Mirella, 354 - Jardim Barueri, Barueri - SP, 06411-330",
                "latitude": null,
                "longitude": null,
                "contato": "0800 55 0300 | (11) 4573-7800"
            }
        ],
        "Osasco": [
            {
                "nome": "Pró-Sangue - Osasco",
                "endereco": "R. Ari Barroso, 355 - Pres. Altino, Osasco - SP, 06216-240",
                "latitude": null,
                "longitude": null,
                "contato": "0800-55-0300 | (11) 4573-7800"
            }
        ],
        "São Carlos": [
            {
                "nome": "Santa Casa - São Carlos",
                "endereco": "R. Paulino Botelho de Abreu Sampaio, 535 - Jardim Pureza, São Carlos - SP, 13561-060",
                "latitude": null,
                "longitude": null,
                "contato": "(16) 3509-1100"
            }
        ],
        "São José dos Campos": [
            {
                "nome": "Serviço de Hematologia e Hemoterapia de São José dos Campos",
                "endereco": "R. Antônio Saes, 425 - Centro, São José dos Campos - SP, 12210-040",
                "latitude": null,
                "longitude": null,
                "contato": "(12) 3519-3766"
            }
        ],
        "Batatais": [
            {
                "nome": "Unidade de Hemoterapia - Batatais",
                "endereco": "R. Dr. Manoel Furtado, 235 - Centro, Batatais - SP, 14300-000",
                "latitude": null,
                "longitude": null,
                "contato": "(16) 3761-4004"
            }
        ],
        "Bebedouro": [
            {
                "nome": "Unidade de Hemoterapia - Bebedouro",
                "endereco": "Av. Raul Furquim, 2010 - Jardim Julia, Bebedouro - SP, 14706-045",
                "latitude": null,
                "longitude": null,
                "contato": "(17) 3342-8817"
            }
        ],
        "Olímpia": [
            {
                "nome": "Unidade de Hemoterapia de Olímpia",
                "endereco": "R. Síria, 190 - Centro, Olímpia - SP, 15400-000",
                "latitude": null,
                "longitude": null,
                "contato": "(17) 3281-9080"
            }
        ],
        "Itapeva": [
            {
                "nome": "Banco de Sangue de Itapeva",
                "endereco": "R. Mario Prandini, 935 - Centro, Itapeva - SP, 18405-020",
                "latitude": null,
                "longitude": null,
                "contato": "(15) 3522-0934"
            }
        ],
        "Cubatão": [
            {
              "nome": "Hospital de Cubatão",
              "endereco": "Av. Henry Borden, s/n - Vila Santa Rosa, Cubatão - SP, 11515-000",
              "latitude": null,
              "longitude": null,
              "contato": "(13) 3388 4887"
            }
          ],
          "Taboão da Serra": [
            {
              "nome": "Hospital Geral de Pirajussara",
              "endereco": "Av. Ibirama, 1214 - Jardim Sao Judas Tadeu, Taboão da Serra - SP, 06785-300",
              "latitude": null,
              "longitude": null,
              "contato": "(11) 3583-9400"
            }
          ],
        "Sertãozinho": [
            {
                "nome": "Banco de Sangue de Sertãozinho",
                "endereco": "R. Epitácio Pessoa, 1401 - Centro, Sertãozinho - SP, 14160-180",
                "latitude": null,
                "longitude": null,
                "contato": "(16) 3942-3404"
            }
        ],
        "São José do Rio Preto": [
            {
              "nome": "Hospital Beneficência Portuguesa de São José do Rio Preto",
              "endereco": "Rua Luíz Vaz de Camões, 3150 - Vila Redentora, São José do Rio Preto - SP, 15015-750",
              "latitude": null,
              "longitude": null,
              "contato": "(17) 3211-5454"
            }
          ],
        "Guarujá": [
            {
                "nome": "Banco de Sangue HSA - Guarujá",
                "endereco": "R. Quinto Bertoldi, 40 - Vila Maia, Guarujá - SP, 11410-010",
                "latitude": null,
                "longitude": null,
                "contato": "(13) 3389-1515"
            }
        ],
        "São João da Boa Vista": [
            {
                "nome": "Bioclínica Banco de Sangue - São João da Boa Vista",
                "endereco": "Av. João Osório, 701 - Centro, São João da Boa Vista - SP, 13870-251",
                "latitude": null,
                "longitude": null,
                "contato": "(19) 3633-7036"
            }
        ],
        "Botucatu": [
            {
                "nome": "Hemocentro De Botucatu",
                "endereco": "Campus de, Av. Rubião Jr, Botucatu - SP, 18600-400",
                "latitude": null,
                "longitude": null,
                "contato": "(14) 3811-6234 (ramal 240) e (14) 3811-6041"
            }
        ],
        "Votuporanga": [
            {
                "nome": "Hemocentro de Votuporanga",
                "endereco": "R. Antônio Galera Lopes, 2652 - Pozzobon, Votuporanga - SP, 15503-024",
                "latitude": null,
                "longitude": null,
                "contato": "(17) 3423-2986"
            }
        ],
        "Votuporanga": [
            {
              "nome": "Unidade de Coleta de Votuporanga",
              "endereco": "Av. da Saudade, 2603 - Cidade Nova, Votuporanga - SP, 15501-405",
              "latitude": null,
              "longitude": null,
              "contato": "(17) 3423-2986"
            }
        ],
        "Suzano": [
            {
                "nome": "Hemocentro Suzano",
                "endereco": "Av. Antônio Marques Figueira - Vila Figueira, Suzano - SP, 08676-000",
                "latitude": null,
                "longitude": null,
                "contato": "(11) 4752-9999 / (11) 94442-7993"
            }
        ],
        "Assis": [
            {
                "nome": "Unidade de Coleta e Transfusão do Hospital Regional Famema",
                "endereco": "Praça Dr. Symphronio Alves dos Santos, s/n - Centro, Assis - SP, 19800-000",
                "latitude": null,
                "longitude": null,
                "contato": "(18) 3302-6000"
            }
        ],
        "Pirangi": [
            {
              "nome": "Laboratório Hemopacli",
              "endereco": "Av. da Saudade, 1299, Pirangi - SP, 15820-000",
              "latitude": null,
              "longitude": null,
              "contato": "(17) 3386-1770"
            }
          ],
          "Mogi das Cruzes": [
            {
              "nome": "Santa Casa de Mogi das Cruzes",
              "endereco": "R. Barão de Jaceguai, 1148 - Centro, Mogi das Cruzes - SP, 08780-906",
              "latitude": null,
              "longitude": null,
              "contato": "(11) 4799-2892 e (11) 4728-4700"
            }
          ],
        },
          "Sergipe": {
            "Aracaju": [
                {
                    "nome": "HEMOSE - Aracaju",
                    "endereco": "R. Quinze, s/n - Capucho, Aracaju - SE, 49095-000",
                    "latitude": null,
                    "longitude": null,
                    "contato": "79 3225-8000"
                }
            ],
            "Nossa Senhora do Socorro": [],
            "Lagarto": [],
            "Itabaiana": [],
            "São Cristóvão": [],
            "Estância": [],
            "Tobias Barreto": [],
            "Itabaianinha": [],
            "Simão Dias": [],
            "Nossa Senhora da Glória": [],
            "Capela": [],
            "Propriá": [],
            "Poço Redondo": [],
            "Umbaúba": [],
            "Nossa Senhora das Dores": [],
            "Boquim": [],
            "Canindé de São Francisco": [],
            "Riachão do Dantas": [],
            "Laranjeiras": [],
            "Pacatuba": [],
            "Porto da Folha": [],
            "Carmópolis": [],
            "Tomar do Geru": [],
            "Maruim": [],
            "Monte Alegre de Sergipe": [],
            "Japaratuba": [],
            "Aquidabã": [],
            "Campo do Brito": []
},
"Tocantins": {
    "Augustinópolis": [
        {
            "nome": "Unidade de Coleta e Transfusão - Augustinópolis",
            "endereco": "R. Antônio De Sousa Gomes, 200 - Centro, Augustinópolis - TO, 77960-000",
            "latitude": null,
            "longitude": null,
            "contato": "(63) 3456-1343"
        }
    ],
    "Araguaína": [
        {
            "nome": "Hemocentro Regional - Araguaína",
            "endereco": "R. Treze de Maio, 1336 - Setor Central, Araguaína - TO, 77803-130",
            "latitude": null,
            "longitude": null,
            "contato": "(63) 3411-2915 | (63) 3411-2916 | (63) 3411-2917"
        }
    ],
    "Palmas": [
        {
            "nome": "HEMOTO (Unidade HGP) - Palmas",
            "endereco": "201 Sul, NS01, Conjunto 02, LT 01 - Palmas – TO",
            "latitude": null,
            "longitude": null,
            "contato": "(63) 3218-7340"
        }
    ],
    "Porto Nacional": [
        {
            "nome": "Unidade de Coleta e Transfusão - Porto Nacional",
            "endereco": "Avenida Luis Leite Ribeiro S/N, Centro -CEP: 77500-000 - Porto Nacional – TO",
            "latitude": null,
            "longitude": null,
            "contato": "(63) 3363-8321"
        }
    ],
    "Gurupi": [
        {
            "nome": "Núcleo de Hemoterapia - Gurupi",
            "endereco": "R. Quatorze de Novembro, 01 - St. Central, Gurupi - TO, 77402-140",
            "latitude": null,
            "longitude": null,
            "contato": "(63) 3312-2237"
        }
    ],
    "Paraíso do Tocantins": [],
    "Tocantinópolis": [],
    "Araguatins": [],
    "Colinas do Tocantins": [],
    "Guaraí": [],
    "Formoso do Araguaia": [],
    "Miracema do Tocantins": [],
    "Dianópolis": [],
    "Augustinópolis": [],
    "Taguatinga": [],
    "Wanderlândia": [],
    "Araguanã": [],
    "Xambioá": [],
    "São Miguel do Tocantins": [],
    "Aurora do Tocantins": [],
    "Babaçulândia": [],
    "Bandeirantes do Tocantins": [],
    "Barra do Ouro": [],
    "Barrolândia": [],
    "Bernardo Sayão": [],
    "Brasilândia do Tocantins": [],
    "Brejinho de Nazaré": [],
    "Buriti do Tocantins": [],
    "Cachoeirinha": [],
    "Campos Lindos": [],
    "Cariri do Tocantins": [],
    "Carmolândia": [],
    "Carrasco Bonito": [],
    "Caseara": [],
    "Centenário": [],
    "Chapada da Natividade": [],
    "Chapada de Areia": [],
    "Colméia": [],
    "Combinado": [],
    "Conceição do Tocantins": [],
    "Couto Magalhães": [],
    "Cristalândia": [],
    "Crixás do Tocantins": [],
    "Darcinópolis": [],
    "Dois Irmãos do Tocantins": [],
    "Esperantina": [],
    "Fátima": [],
    "Filadélfia": [],
    "Figueirópolis": [],
    "Goianorte": [],
    "Goiatins": []
}
}
                       
    // Adicione outros estados e seus respectivos municípios e hemocentros aqui
;

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
