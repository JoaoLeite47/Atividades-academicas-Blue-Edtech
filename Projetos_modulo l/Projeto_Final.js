const prompt = require('prompt-sync')(); // Importa o prompt-sync
const variaveis_iniciais = {
    saude: 3,
    saude_function: function () {
        return this.saude--;
    },
    poder: 0,
    poder_function: function () {
        return this.poder++;
    },
    fadiga: 0,
    fadiga_function: function () {
        return this.fadiga++;
    },
    maestria: 0,
    maestria_function: function () {
        return this.maestria++;
    },
};
const function_random = () => {
    const player_pc = [];
    const random = Math.floor(Math.random() * 3);
    player_pc.push(random);
    return player_pc;
};
console.log('Olá viajante! seja bem vindo ao D.E.V.I.L! ');
const outlander = prompt('Digite seu nome viajante! ');
console.log(
    `\nOlá ${outlander}! você está prestes a ser inserido no incrível mundo de D.E.V.I.L!`,
);
console.log(
    '\nSuas decisões terão impacto sobre sua vida, ganho de poder e habilidades especiais, jogue com cuidado!',
);
console.log(`Nível de saúde: ${variaveis_iniciais.saude}`);
console.log(`Nível de poder: ${variaveis_iniciais.poder}`);
console.log(`Nível de fadiga: ${variaveis_iniciais.fadiga}`);
do {
    // lopping da manhâ
    looping_nivel1: do {
        console.log('Primeiro estágio(MANHÂ)!');
        console.log(
            `${outlander} não possui tenta habilidade em combate! Então terá que se esforçar bastante!`,
        );
        console.log(
            `Uma maldição foi lançada em ${outlander}!Durante um dia inteiro, você terá que lutar pela sua vida!`,
        );
        console.log(
            'Caso você morra em combate, terá que repetir o estágio da maldição!',
        );
        console.log(
            `Nas primeiras horas do seu dia! Você será forçado a passar por experiencias terríveis!`,
        );
        console.log(
            '\nAo entrar no primeiro nível do Inferno você avista seu primeiro baú de tesouros!',
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
            'A sua frente, você vê uma criatura! Ela não é um monstro!',
        );
        const decisao2 = prompt(
            'Deseja lutar com ela?(sim ou nao) ',
        ).toLowerCase();
        if (decisao2 === 'sim') {
            console.log('A criatura se revela um monstro!');
            variaveis_iniciais.fadiga_function();
            console.log(`Seu fadiga agora é ${variaveis_iniciais.fadiga}`);
            const random_0 = function_random();
            if (random_0 == 0) {
                console.log('Você morreu! Terá que repetir o ciclo!');
                variaveis_iniciais.maestria = 0;
                break looping_nivel1;
            } else if (random_0 == 1) {
                console.log('Você acertou um golpe de sorte!');
                variaveis_iniciais.fadiga_function();
                console.log(`Seu fadiga agora é ${variaveis_iniciais.fadiga}`);
            } else if (random_0 == 2) {
                console.log('Você acertou um golpe crítico!');
                variaveis_iniciais.poder_function();
                console.log(`Seu poder agora é ${variaveis_iniciais.poder}`);
            }
        } else if (decisao2 === 'nao') {
            console.log('Você não lutou com a criatura!');
            console.log('Ela foi embora!');
        }
        console.log(
            `\nUm ambiente tão putrido quanto esse não poderia fazer bem a ${outlander}!`,
        );
        console.log(
            `Ao adentrar mais fundo o primeiro nível,${outlander} encontra quem virá a ser seu primeiro inimigo!`,
        );
        console.log(`Uma criatura bizarra e nojenta cheia de ódio e sangue!`);
        const combate1 = prompt(
            `Você ataca primeiro?(sim ou nao) `,
        ).toLowerCase();
        const random_1 = function_random();
        if (combate1 == 'sim') {
            if (random_1 == 0) {
                console.log('Sorte de principiante...');
                variaveis_iniciais.maestria_function();
                break looping_nivel1;
            } else if (random_1 == 1) {
                console.log('Você o derrotou! sem perder vida!');
                variaveis_iniciais.maestria_function();
                break looping_nivel1;
            } else if (random_1 == 2) {
                console.log('Você foi atingido! Mas consegue derrota-lo!');
                variaveis_iniciais.saude_function();
                variaveis_iniciais.maestria_function();
                console.log(`Sua saúde agora é: ${variaveis_iniciais.saude}`);
                break looping_nivel1;
            }
        } else if (combate1 == 'nao') {
            if (random_1 == 0) {
                console.log(
                    'Você se defendeu! E o derrotou com apénas 1 golpe!',
                );
                variaveis_iniciais.poder_function();
                variaveis_iniciais.maestria_function();
                console.log(`Seu poder agora é ${variaveis_iniciais.poder}`);
                break looping_nivel1;
            } else if (random_1 == 1) {
                console.log('Você foi atingido! Mas consegue derrota-lo!');
                variaveis_iniciais.saude_function();
                variaveis_iniciais.maestria_function();
                console.log(`Sua saúde agora é: ${variaveis_iniciais.saude}`);
                break looping_nivel1;
            } else if (random_1 == 2) {
                console.log(
                    'Você recebeu um golpe crítico! Você morreu, terá que repetir o ciclo!',
                );
                variaveis_iniciais.maestria = 0;
                break looping_nivel1;
            }

            if (
                decisao1 !== 'sim' &&
                decisao1 !== 'nao' &&
                decisao2 !== 'sim' &&
                decisao2 !== 'nao'
            ) {
                console.log('\nApenas respostas de (sim ou nao) por favor!');
                continue looping_nivel1;
            }
            if (combate1 !== 'sim' && combate1 !== 'nao') {
                console.log('\nApenas respostas de (sim ou nao) por favor!');
                continue looping_nivel1;
            }
        }
    } while (variaveis_iniciais.saude == 0);
    // lopping da tarde
    looping_nivel2: while (variaveis_iniciais.maestria == 1) {
        console.log('\nVocê passou de estágio na maldição!');
        console.log(
            `${outlander} conseguiu passar sua manhã inteira nesse lugar grotesco...`,
        );
        console.log('Mas seu pesadelo ainda está longe de acabar!');
        console.log('Segundo estágio(TARDE)!');
        console.log(
            `${outlander} já está no segundo estágio da sua maldição no inferno!`,
        );
        console.log(
            'Sua experiência cresce cada vez mais e agora novos desafios surgirão!',
        );
        console.log(`\nA tarde de ${outlander} está apenas começando...`);
        const decisao3 = prompt(
            `${outlander} precisará salvar um cachorrinho triste, você salvará?(sim ou nao) `,
        ).toLowerCase();
        if (decisao3 == 'sim') {
            console.log(
                'Cachorros não vão pro inferno! você salvou um súcubos!',
            );
            variaveis_iniciais.saude_function();
            console.log(`Sua saúde agora é: ${variaveis_iniciais.saude}`);
        } else if (decisao3 == 'nao') {
            console.log(
                `Muito bém ${outlander}! No inferno não tem cachorrinhos! Aquilo era um Súcubos!`,
            );
            variaveis_iniciais.poder_function();
            console.log(`Seu poder agora é ${variaveis_iniciais.poder}`);
        }
        console.log(
            `A criatura foge as pressas para se esconder em um lugar mais escuro! E no processo deixa cair um bolsa no chão!`,
        );
        const decisao4 = prompt(
            `Você irá pegar o bolsa?(sim ou nao) `,
        ).toLowerCase();
        if (decisao4 == 'sim') {
            console.log(
                `${outlander} encontra na bolsa um poderoso arco e flecha!`,
            );
            variaveis_iniciais.poder_function();
            console.log(`Seu poder agora é ${variaveis_iniciais.poder}`);
        } else if (decisao4 == 'nao') {
            console.log(`${outlander} não encostou em nada!`);
        }
        console.log(
            `Horas mais tarde, ${outlander} já consegue sentir o cheiro do enxofre e prodridão desse mundo piorar...`,
        );
        console.log(`${outlander} acaba de encontrar o Súcubos!`);
        console.log(
            `Um demónio que não tem uma aparencia feia e tosca...e sim maquiavélica!`,
        );
        const combate2 = prompt(
            `${outlander} decide por atacar o demônio!(sim ou nao) `,
        ).toLowerCase();
        const random_2 = function_random();
        if (combate2 == 'sim') {
            if (random_2 == 0) {
                console.log('Você deu um ataque crítico!');
                variaveis_iniciais.maestria_function();
                break looping_nivel2;
            } else if (random_2 == 1) {
                console.log(
                    'Você tomou um golpe...mas sua missão está cumprida!',
                );
                variaveis_iniciais.maestria_function();
                variaveis_iniciais.saude_function();
                console.log(`Sua saúde agora é ${variaveis_iniciais.saude}`);
                break looping_nivel2;
            } else if (random_2 == 2) {
                console.log(
                    'O Súcubus é um inimígo poderoso! Você morreu, terá que repetir o ciclo!',
                );
                variaveis_iniciais.maestria = 0;
                break looping_nivel2;
            }
        } else if (combate2 == 'nao') {
            console.log(
                'O Súcubus acabou gostando de você...que sorte! ou não!',
            );
            console.log('Ele decide por te deixar passar!');
            variaveis_iniciais.maestria_function();
            break looping_nivel2;
        }
        if (
            decisao3 !== 'sim' &&
            decisao3 !== 'nao' &&
            decisao4 !== 'sim' &&
            decisao4 !== 'nao'
        ) {
            console.log('\nApenas respostas de (sim ou nao) por favor!');
            continue looping_nivel2;
        }
        if (combate2 !== 'sim' && combate2 !== 'nao') {
            console.log('\nApenas respostas de (sim ou nao) por favor!');
            continue looping_nivel2;
        }
    }
    // lopping da noite
    looping_nivel3: while (variaveis_iniciais.maestria == 2) {
        console.log('\nVocê passou para o último estágio da maldição!');
        console.log(
            `${outlander} conseguiu passar uma tarde inteira nesse lugar inescrupuloso!`,
        );
        console.log('Mas seu pesadelo ainda está longe de acabar!');
        console.log('Terceiro estágio(NOITE)!');
        console.log(
            `${outlander} penetra profundamente o mais desesperador dos níveis infernais!`,
        );
        console.log(
            'Aqui jáz os mais malíguinos seres do planeta Terra... os HUMANOS!',
        );
        console.log(`A noite de ${outlander} será bem ruim!`);
        console.log(
            `${outlander} avança para as profundesas do inferno! Onde encontra velhos conhecidos!`,
        );
        console.log(
            '\nAs primeiras horas do seu tormento não parecem ser tão ruins!',
        );
        const decisao5 = prompt(
            `Velhos amigos e familiáres vem ao seu encontro! ${outlander} falará com eles?(sim ou nao) `,
        ).toLowerCase();
        if (decisao5 == 'sim') {
            console.log(
                `Uma miragem! ${outlander} foi enganado! O que ele está fazendo?`,
            );
            variaveis_iniciais.fadiga_function();
            console.log(`Sua fadiga agora é ${variaveis_iniciais.fadiga}`);
        } else if (decisao5 == 'nao') {
            console.log(
                `Ao invés de falar com os amigos, ${outlander} segue em frente!`,
            );
        }
        console.log(`O cansado em ${outlander} é muito forte!`);
        console.log(`Talvez seja melhor descansar um pouco!`);
        const decisao6 = prompt(
            `Você irá descansar? (sim ou nao?)`,
        ).toLowerCase();
        if (decisao6 === 'sim') {
            const decisao7 = +prompt(`Por quanto tempo?(1,2,3 horas?) `);
            if (decisao7 !== 1 && decisao7 !== 2 && decisao7 !== 3) {
                console.log('\nVocê passou dos limítes!');
                variaveis_iniciais.saude_function();
                console.log(`Sua saúde agora é ${variaveis_iniciais.saude}`);
            }
            for (let sleeping = 0; decisao7 > sleeping; sleeping++) {
                console.log(`${outlander} está descansando...`);
                variaveis_iniciais.fadiga--;
                console.log(`Sua fadiga agora é ${variaveis_iniciais.fadiga}`);
            }
        } else if (decisao6 === 'nao') {
            console.log(`${outlander} não descansou!`);
        }
        if (variaveis_iniciais.fadiga > 2) {
            console.log(`${outlander} está cansado demais!`);
            console.log(`${outlander} não consegue mais segurar a cabeça!`);
            variaveis_iniciais.saude_function();
            console.log(`Sua saúde agora é ${variaveis_iniciais.saude}`);
        }
        if (variaveis_iniciais.saude <= 0) {
            console.log(`${outlander} morreu! Terá que repetir o ciclo! `);
            variaveis_iniciais.saude == 0;
            variaveis_iniciais.maestria = 0;
            break looping_nivel3;
        }
        console.log(`${outlander} segue em frente!`);
        console.log(`Mais a frente você encontra o seu destino!`);
        console.log(
            `${outlander} percebe que seu tempo está perto do fim! Caso ele não quebre a maldição, terá que reviver todo seu sofrimento novamente!`,
        );
        console.log(
            `\nUma criatura tão horrenda e amedrontadora quanto o próprio Diabo surge em sua frente!`,
        );
        console.log(`O responsável pela maldição`);
        const combate3 = prompt(
            `Sua última batalha se inicia! ${outlander} atacará primeiro?(sim ou nao) `,
        ).toLowerCase();
        const random_3 = function_random();
        if (combate3 == 'sim') {
            if (random_3 == 0) {
                console.log(
                    `${outlander} é corajoso o suficiente para atacar primeiro! GOLPE CRÍTICO!`,
                );
                variaveis_iniciais.maestria_function();
                if (variaveis_iniciais.poder > 2) {
                    console.log(`GOLPE CRÍTICO!`);
                }
                break looping_nivel3;
            } else if (random_3 == 1) {
                console.log(
                    `Com seu poder acumulado, você desconta todo seu ódio sobre o Diabo!`,
                );
                variaveis_iniciais.maestria_function();
                if (variaveis_iniciais.poder > 2) {
                    console.log(`Golpe Destruídor!!`);
                }
                break looping_nivel3;
            } else if (random_3 == 2) {
                console.log(
                    ' Por um deslize no seu ataque, você foi atingido! Você morreu! terá que repetir o ciclo!',
                );
                variaveis_iniciais.maestria = 0;
                break looping_nivel3;
            }
        } else if (combate3 == 'nao') {
            if (random_3 == 0) {
                if (variaveis_iniciais.poder > 2) {
                    console.log(
                        `${outlander} consegue contra atacar com seu poder acumulado!`,
                    );
                    variaveis_iniciais.maestria_function();
                    break looping_nivel3;
                }
            } else if (random_3 == 1) {
                console.log(
                    `Por algum milágre...${outlander} consegue se defender dos ataques do Diabo...e o pega desprevenido!`,
                );
                variaveis_iniciais.maestria_function();
                break looping_nivel3;
            } else if (random_3 == 2) {
                console.log(
                    `${outlander} não tem poder suficiente para esta batalha! Você foi destruído! repita o ciclo!`,
                );
                variaveis_iniciais.maestria = 0;
                break looping_nivel3;
            }
        }
    }
    // final
    if (variaveis_iniciais.maestria == 0) {
        console.log(`Você perdeu!`);
        console.log(`A maldição continuará a atormentar ${outlander}!`);
    } else if (variaveis_iniciais.maestria == 1) {
        console.log(`Você perdeu!`);
        console.log(`Chegou perto do final... Mas falhou!`);
        console.log(`A maldição continuará a atormentar ${outlander}!`);
    } else if (variaveis_iniciais.maestria == 2) {
        console.log(`Você falhou miseravelmente perto do fim! Que vergonha!`);
        console.log(`A maldição continuará a atormentar ${outlander}!`);
    }
} while (variaveis_iniciais.maestria < 3);
// Vitória
console.log('VITÓRIA!!!!');
console.log(
    `${outlander}, ao final da noite, consegue destruir a sua maldição! Conseguindo fugir do inferno!`,
);
console.log(`Suas 24 horas de terror acabaram finalmente!`);
console.log(`Powered by João Leite 47`);
