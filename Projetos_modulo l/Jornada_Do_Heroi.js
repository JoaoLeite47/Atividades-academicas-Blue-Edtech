let prompt = require('prompt-sync')();
//comando para prompt!
console.log(
    '\nOlá criminoso! bem vindo ao RioCity! aqui é onde o crime manda! e chegou a hora de escrever a sua história!\n',
);
console.log(
    '\nMas...para isso você deve provar que é um bom homem de negócios!! Hehehe, preparado?...Vamos lá!\n',
);
//perguntas iniciais!!
//looping inicial do questionário em number!
while (true) {
    let pergunta0 = +prompt(
        '\nUm policial aparece fazendo ronda, você negocia com ele para que lhe deixe em paz?(sim(1) ou não(0)?)',
    );
    let pergunta1 = +prompt(
        '\nVocê percebe que um parceiro seu está roubando parte dos seus lucros..e você o faz pagar caro!(sim(1) ou não(0)?)',
    );
    let pergunta2 = +prompt(
        '\nVocê acaba de receber uma proposta para constrabandear drogas mais pesadas por 25% dos lucros! você aceita ou renegocia?(sim(1) ou não(0)?)',
    );
    let pergunta3 = +prompt(
        '\nVocê acaba descobrindo a traição do seu conjuge com seu rival!! e você não aceita perdão! (sim(1) ou não(0)?)',
    );
    let pergunta4 = +prompt(
        '\nPor fim! Você fica cara a cara com o maior traficante da RioCity!..você faz ele conhecer o criador?(sim(1) ou não(0)?)',
    );
    let perguntas = [pergunta0, pergunta1, pergunta2, pergunta3, pergunta4];
    //array para exclusão de "não respostas"
    let calculo = pergunta0 + pergunta1 + pergunta2 + pergunta3 + pergunta4;
    //calculo para resultado do questionário
    if (perguntas === NaN) {
        console.log(
            '\nApenas respostas como (1) ou (0)! Recomece sua história!',
        );
        continue;
    } else if (
        (pergunta0 || pergunta1 || pergunta2 || pergunta3 || pergunta4) !== 1 ||
        0
    ) {
        console.log(
            '\nApenas respostas como (1) ou (0)! Recomece sua história!',
        );
        continue;
    } else {
        if (calculo === 5) {
            console.log('Você..é..INEVITÁVEL! Vitória total!');
        } else if (calculo === 4) {
            console.log('Você chegou perto da conquista total!! parabéns!!');
        } else if (calculo === 3) {
            console.log(
                'Você conquistou muitos objetivos!! mas ainda há muito a aprender!!',
            );
        } else if (calculo === 2 || calculo === 1) {
            console.log(
                ' Até no crime existem pessoas que não foram feitas pra isso!! mais sorte na próxima!',
            );
        } else {
            console.log(' Você perdeu miseravelmente! Que vergonha!');
        }
        break;
    }
}
