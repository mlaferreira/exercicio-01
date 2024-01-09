/**Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
 * 
 */let numberOne = prompt('DIGITE O PRIMEIRO NÚMERO:');
let numberTwo = prompt('DIGITE O SEGUNDO NÚMERO');

let sum     = Number(numberOne) + Number(numberTwo);
let sub     = Number(numberOne) - Number(numberTwo);
let mult    = Number(numberOne) * Number(numberTwo);
let div     = (Number(numberOne) / Number(numberTwo)).toFixed(2);
let restDiv = Number(numberOne) % Number(numberTwo);

if (numberOne === numberTwo) {
    alert(`Os números são iguais!`);
} else {
    let parity = sum % 2 === 0 ? 'par' : 'ímpar';

    alert(`Resultados:
    - Números Digitados : ${numberOne} e ${numberTwo}
    - Soma: ${sum}
    - Subtração: ${sub}
    - Multiplicação: ${mult}
    - Divisão: ${div}
    - Resto da divisão: ${restDiv}
    - A soma dos dois números é ${parity}`);
}


