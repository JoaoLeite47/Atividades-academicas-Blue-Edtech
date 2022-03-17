const prompt = require('prompt-sync')();
////////////////////////////////////////
do {
    const variaveis_iniciais = {
        //variaveis iniciais!
        // funções para o funcionamento dos status do player
        saude: 3, //perda de vida!
        saude_function: function () {
            this.saude--;
        },
        poder: 0, // ganho de poder!
        poder_function: function () {
            this.poder++;
        },
        super_poder: 0, //habilidade especial
        super_poder_funtion: function () {
            this.super_poder++;
        },
        player_random: Math.floor(Math.random() * 3),
    };
    var player_pc = [];
    player_pc.push(variaveis_iniciais.player_random);
    // Apresentação do game!
    console.log('Olá viajante! seja bem vindo ao D.E.V.I.L! ');
    const outlander = prompt('Digite seu nome viajante! ');
    console.log(
        `Olá ${outlander}! você está prestes a ser inserido no incrível mundo de D.E.V.I.L!`,
    );
    console.log(
        'Suas decisões terão impacto sobre sua vida, ganho de poder e habilidades especiais, jogue com cuidado!',
    );
    console.log(`Nivel de vida em: ${variaveis_iniciais.saude}`);
    console.log(`Nivel de poder em: ${variaveis_iniciais.poder} `);
    console.log(`Nivel de Super poder em: ${variaveis_iniciais.super_poder}`);
    //NIVEL 1
    lopping_nivel1: do {
        console.log('NIVEL 1!');
        console.log(
            `${outlander} não possui tenta habilidade em combate! Então terá que se esforçar bastante!`,
        );
        console.log(
            'Ao entrar no primeiro nível do Inferno você avista seu primeiro baú de tesouros!',
        );

        const decisao1 = prompt(
            'Deseja abrir o baú?(sim ou nao) ',
        ).toLowerCase();

        if (decisao1 === 'sim') {
            console.log('Você ganhou poder!');
            variaveis_iniciais.poder_function();
            console.log(`Seu poder agora é ${variaveis_iniciais.poder}`);
        } else if (decisao1 === 'nao') {
            console.log('Você não abriu o baú!');
        }

        console.log(
            `Ao adentrar mais fundo o primeiro nível,${outlander} encontra quem virá a ser seu primeiro inimigo!`,
        );
        const combate1 = prompt(
            `Você ataca primeiro?(sim ou nao) `,
        ).toLowerCase();

        if (combate1 == 'sim') {
            if (variaveis_iniciais.player_pc == 1) {
                console.log('Você o derrotou! sem perder vida!');
            } else if (variaveis_iniciais.player_pc == 2) {
                console.log('Você foi atingido! Mas consegue derrota-lo!');
                variaveis_iniciais.saude_function;
                console.log(`Sua saúde agora é: ${variaveis_iniciais.saude}`);
            }
        } else if (combate1 == 'nao') {
            if (player_pc == 1) {
                console.log(
                    'Você se defendeu! E o derrotou com apénas 1 golpe!',
                );
                variaveis_iniciais.poder_function();
                console.log(`Seu poder agora é ${variaveis_iniciais.poder}`);
            } else if (player_pc == 2) {
                console.log('Você foi atingido! Mas consegue derrota-lo!');
                variaveis_iniciais.saude_function();
                console.log(`Sua saúde agora é: ${variaveis_iniciais.saude}`);
            } else if (player_pc == 3) {
                console.log('Você recebeu um golpe crítico!');
                variaveis_iniciais.saude_function();
                variaveis_iniciais.saude_function();
                variaveis_iniciais.saude_function();
                console.log(`Sua saúde agora é ${variaveis_iniciais.saude}`);
            }
        }
        if (variaveis_iniciais.saude == 0) {
            console.log('Dead End!');
            continue lopping_nivel1;
        } else {
            console.log('Você passou de nível!');
            break lopping_nivel1;
        }
    } while (true);
    //NIVEL 2
    lopping_nivel2: do {
        console.log('NIVEL 2!');
        console.log(`${outlander} já está no segundo nível do inferno!`);
        console.log(
            'Sua experiência cresce cada vez mais e agora novos desafios surgirão!',
        );
        const decisao2 = prompt(
            `${outlander} precisará salvar um cachorrinho triste, você salvará?(sim ou nao) `,
        ).toLowerCase();
        if (decisao2 == 'sim') {
            console.log(
                'Cachorros não vão pro inferno! você salvou um súcubos!',
            );
            variaveis_iniciais.saude_function();
            console.log(`Sua saúde agora é: ${variaveis_iniciais.saude}`);
        } else if (decisao2 == 'nao') {
            console.log(
                `Muito bém ${outlander}! No inferno não tem cachorrinhos!`,
            );
            variaveis_iniciais.poder_function();
            console.log(`Seu poder agora é ${variaveis_iniciais.poder}`);
        }
        console.log(
            `${outlander} acaba de encontrar um Súcubos! o Demônio comandante do segundo nível do inferno!`,
        );
        const combate2 = prompt(
            `${outlander} decide por atacar o demônio!(sim ou nao) `,
        ).toLowerCase();
        if (combate2 == 'sim') {
            if (player_pc == 1) {
                console.log('Você deu um ataque crítico!');
                variaveis_iniciais.super_poder_funtion();
                console.log(
                    `Seu super poder agora é ${variaveis_iniciais.super_poder}`,
                );
            } else if (player_pc == 2) {
                console.log(
                    'Você tomou um golpe...mas sua missão está cumprida!',
                );
                variaveis_iniciais.saude_function();
                console.log(`Sua saúde agora é ${variaveis_iniciais.saude}`);
            } else if (player_pc == 3) {
                console.log('O Súcubus é um inimígo poderoso!');
                variaveis_iniciais.saude_function();
                variaveis_iniciais.saude_function();
                variaveis_iniciais.saude_function();
                console.log(`Sua saúde agora é ${variaveis_iniciais.saude}`);
            }
        } else if (combate2 == 'nao') {
            console.log(
                'O Súcubus acabou gostando de você...que sorte! ou não!',
            );
            console.log('Ele decide por te deixar passar!');
        }
        if (variaveis_iniciais.saude == 0) {
            console.log('Dead End!');
            continue lopping_nivel2;
        } else {
            console.log('Você passou de nível!');
            break lopping_nivel2;
        }
    } while (true);
    // //NIVEL 3
    looping_nivel3: do {
        console.log('NIVEL 3!');
        console.log(
            `${outlander} penetra profundamente o mais desesperador dos níveis infernais!`,
        );
        console.log(
            'Aqui jáz os mais malíguinos seres do planeta Terra... os HUMANOS!',
        );
        if (variaveis_iniciais.super_poder == '1') {
            const bonus = prompt(
                `${outlander} tem 1 ponto de Super poder! Deseja trocar por 1 ponto de Saúde?(sim ou nao)`,
            ).toLowerCase();
            if (bonus == 'sim') {
                variaveis_iniciais.saude++;
                console.log(`Sua saúde agora é  ${variaveis_iniciais.saude}`);
            }
        }
        console.log(
            `${outlander} avança para as profundesas do inferno! Onde encontra velhos conhecidos!`,
        );
        const decisao3 = prompt(
            `Velhos amigos e familiáres vem ao seu encontro! ${outlander} falará com eles?(sim ou nao) `,
        ).toLowerCase();
        if (decisao3 == 'sim') {
            console.log(
                `O Diabo é ardiloso... ele acaba de enganar ${outlander}!`,
            );
            variaveis_iniciais.saude_function();
            console.log(`Sua saúde agora é ${variaveis_iniciais.saude}`);
        } else if (decisao3 == 'nao') {
            console.log(
                `Aqueles que antes eram conhecidos...se revelam como o Diabo! ${outlander} fez uma boa escolha!`,
            );
            variaveis_iniciais.super_poder_funtion();
            console.log(
                `Seu super poder agora é ${variaveis_iniciais.super_poder}`,
            );
        }
        const combate3 = prompt(
            `Sua última batalha se inicia! ${outlander} atacará primeiro?(sim ou nao) `,
        ).toLowerCase();
        if (combate3 == 'sim') {
            console.log(
                `${outlander} é corajoso o suficiente para atacar primeiro!`,
            );
            if (variaveis_iniciais.super_poder == 2) {
                console.log(
                    `Com seu poder acumulado, você desconta todo seu ódio sobre o Diabo!`,
                );
            } else if (variaveis_iniciais.super_poder == 1) {
                console.log(
                    `Com algum poder que te resta, você destroi o Diabo...com alguma dificuldade!`,
                );
            } else if (variaveis_iniciais.super_poder == 0) {
                console.log(`${outlander} Não tem poder suficiente para isso!`);
                variaveis_iniciais.saude_function();
                console.log(`Sua saúde agora é ${variaveis_iniciais.saude}`);
            }
        } else if (combate3 == 'nao') {
            if (variaveis_iniciais.super_poder == 2) {
                console.log(
                    `Com seu poder acumulado, você desconta todo seu ódio sobre o Diabo!`,
                );
            } else if (variaveis_iniciais.poder > 0) {
                console.log(
                    `Por algum milágre...${outlander} consegue se defender dos ataques do Diabo...e o pega desprevenido!`,
                );
            } else if (
                variaveis_iniciais.super_poder < 1 ||
                variaveis_iniciais.poder < 1
            ) {
                console.log(
                    `${outlander} não tem poder suficiente para esta batalha!`,
                );
            }
        }
        if (variaveis_iniciais.saude == 0) {
            console.log('Dead End!');
            continue looping_nivel3;
        } else {
            console.log('VITÓRIA!!!!');
            break looping_nivel3;
        }
    } while (true);
    console.log(`PARABÉNS ${outlander}! Você chegou ao final!`);
    //restart
    var restart = prompt('Deseja recomeçar?(sim ou nao) ');
} while (restart == 'sim');
