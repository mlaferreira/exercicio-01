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

 */

let numberOne = prompt('DIGITE O PRIMEIRO NÚMERO:');
let numberTwo = prompt('DIGITE O SEGUNDO NÚMERO');

let sum     = Number(numberOne) + Number(numberTwo);
let sub     = Number(numberOne) - Number(numberTwo);
let mult    = Number(numberOne) * Number(numberTwo);
let div     = (Number(numberOne) / Number(numberTwo)).toFixed(2);
let restDiv = Number(numberOne) % Number(numberTwo);


alert(`SOMA DOS DOIS ( ${numberOne} e ${numberTwo}) NÚMERO DIGITADOS É: ${sum}`)
alert(`SUBTRAÇÃO DOS DOIS ( ${numberOne} e ${numberTwo}) NÚMERO DIGITADOS É: ${sub}`)
alert(`MULTIPLICAÇÃO DOS DOIS ( ${numberOne} e ${numberTwo}) NÚMERO DIGITADOS É: ${mult}`)
alert(`DIVISÃO DOS DOIS ( ${numberOne} e ${numberTwo}) NÚMERO DIGITADOS É: ${div}`)
alert(`RESTO DA DIVISÃO DOS DOIS ( ${numberOne} e ${numberTwo}) NÚMERO DIGITADOS É: ${restDiv}`)

if (numberOne === numberTwo) {
    alert(`OS NÚMEROS SÃO IGUAIS!`);
} else {
    let parity = sum % 2 === 0 ? 'PAR' : 'ÍMPAR';
    alert(`Resultados:
    - OS DOIS NÚMEROS DIGITADOS : ${numberOne} E ${numberTwo}     
    - A SOMA DOS NÚMEROS É: ${parity}`);
}