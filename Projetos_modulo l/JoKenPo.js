//comando para prompt!
const prompt = require('prompt-sync')();
//variaveis inclusas no jogo
do {
    let rodadas = 0;
    let win = 0;
    let fail = 0;
    let num = 0;
    let jogadas_player = [];
    let jogadas_pc = [];
    let jogadas = [0, 1, 2]; // 0 = pedra, 1 = papel, 2 = tesoura!
    let rounds = +prompt('Quantas rodadas? ');
    //base de funcionamento do jogo com looping de rodadas
    do {
        rodadas++;
        //funcionamento da IA
        let random_number = Math.floor(Math.random() * 3);
        let jogadas_config = +prompt('(0)pedra (1)papel ou (2)tesoura? ');
        jogadas_player.push(jogadas_config);
        let jogadas_config2 = jogadas[random_number];
        jogadas_pc.push(jogadas_config2);
        console.log(`o computador escolheu: ${jogadas_pc}`);
        //funcionamento da quebra de código!
        if (isNaN(jogadas_config)) {
            // Quebra de codigo em caso de NaN
            console.log('por favor!, apenas (1) ou (2) ou (3)');
            break;
        } else {
            console.log('\nVamos jogar!!');
        }
        //funcionamento do score!
        for (var final_player of jogadas_player) {
        }
        for (var final_pc of jogadas_pc) {
        }
        //funções para vitórias, derrotas e empates!
        function winn() {
            win++;
            console.log('uma vitória!');
        }
        function faill() {
            fail++;
            console.log('uma derrota...');
        }
        function numm() {
            num++;
            console.log('um empate!');
        }
        //condicionais de vitórias, derrotas e empates!
        if (final_player == 0) {
            if (final_pc == 0) {
                numm();
            } else if (final_pc == 1) {
                winn();
            } else if (final_pc == 2) {
                faill();
            }
        }
        if (final_player == 1) {
            if (final_pc == 0) {
                winn();
            } else if (final_pc == 1) {
                numm();
            } else if (final_pc == 2) {
                faill();
            }
        }
        if (final_player == 2) {
            if (final_pc == 0) {
                faill();
            } else if (final_pc == 1) {
                winn();
            } else if (final_pc == 2) {
                numm();
            }
        }
    } while (rodadas < rounds);
    console.log(
        `parabéns! Você obteve: ${win} vitórias, ${fail} derrotas e ${num} empates!`,
    );
    //lopping para rejogar!
    var continuar = prompt('deseja continuar?(sim ou nao)! ');
    if (continuar == 'sim') {
        continue;
    } else if (continuar == 'nao') {
        console.log("End Game!")
        break;
    }
} while (continuar == 'sim');