(function(win,doc){
    'use strict';
/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:
- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;
- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/
var $telaCalc = doc.querySelector('[data-js="telaCalc"]');

/* var $zero = doc.querySelector('[data-js="zero"]');
var $one = doc.querySelector('[data-js="one"]');
var $two = doc.querySelector('[data-js="two"]');
var $tree = doc.querySelector('[data-js="tree"]');
var $four = doc.querySelector('[data-js="four"]');
var $five = doc.querySelector('[data-js="five"]');
var $six = doc.querySelector('[data-js="six"]');
var $seven = doc.querySelector('[data-js="seven"]');
var $eight = doc.querySelector('[data-js="eight"]');
var $nine = doc.querySelector('[data-js="nine"]'); */

var $buttons = doc.querySelectorAll('[data-js="button-numbers"]');
var $buttonsOP = doc.querySelectorAll('[data-js="button-op"]');

/* var $multiplication = doc.querySelector('[data-js="multiplication"]');
var $sum  = doc.querySelector('[data-js="sum"]');
var $subtraction = doc.querySelector('[data-js="subtraction"]');
var $division = doc.querySelector('[data-js="division"]'); */

var $equal = doc.querySelector('[data-js="equal"]');
var $clean = doc.querySelector('[data-js="clean"]');

/* 
$zero.addEventListener ('click', setaTela, false);
$one.addEventListener('click', setaTela , false);
$two.addEventListener('click', setaTela , false);
$tree.addEventListener('click', setaTela , false);
$four.addEventListener('click', setaTela , false);
$five.addEventListener('click', setaTela , false);
$six.addEventListener('click', setaTela , false);
$seven.addEventListener('click', setaTela , false);
$eight.addEventListener('click', setaTela , false);
$nine.addEventListener('click', setaTela , false); */

Array.prototype.forEach.call($buttons, function(button){
    button.addEventListener('click', setaTela,false);
})

Array.prototype.forEach.call($buttonsOP, function(buttonsOP){
    buttonsOP.addEventListener('click', setaTelaOp, false);
});

//$buttons.addEventListener('click', setaTela, false);

/* $multiplication.addEventListener('click', setaTelaOp , false);
$division.addEventListener('click', setaTelaOp , false);
$sum.addEventListener('click', setaTelaOp , false);
$subtraction.addEventListener('click', setaTelaOp , false); */

$equal.addEventListener('click', setaTelaCalc , false);
$clean.addEventListener('click', cleanTela , false);

function setaTela () {
    $telaCalc.value += this.value;
}
function cleanTela(){
    $telaCalc.value = 0;
}

function setaTelaCalc(){
    $telaCalc.value = removeUltimoItemSeOperacao($telaCalc.value);
var valorInteiro = $telaCalc.value.match(/\d+[+*/-]?/g);
var result = valorInteiro.reduce(function (accumulated, actual){
        var firstValue = accumulated.slice(0,-1);
        var operator = accumulated.slice(-1);
        var lastValue = removeUltimoItemSeOperacao(actual);
        var lastOperator = ultimoElementoNoArray(actual) ? actual.split('').pop() : '';
        switch (operator){
           case '+':
                return (Number(firstValue) + Number(lastValue)) + lastOperator;     
           case '-':
                return (Number(firstValue) - Number(lastValue)) + lastOperator;     
           case '*':
                return (Number(firstValue) * Number(lastValue)) + lastOperator; 
           case '/':
                return (Number(firstValue) / Number(lastValue)) + lastOperator;     
        }
    });

    
    $telaCalc.value = result;
 console.log(result);
}

function setaTelaOp (){
    $telaCalc.value = removeUltimoItemSeOperacao($telaCalc.value);
    $telaCalc.value += this.value;
}

function ultimoElementoNoArray(number){
    var operation = ['+','-','*','/'];
    var ultimoElemento = number.slice(-1);
   return operation.some(function (operador){
       return ultimoElemento == operador;
   });
}

function removeUltimoItemSeOperacao(number){
    if(ultimoElementoNoArray(number))
        return number.slice(0,-1);
    return number;
}





})(window,document);