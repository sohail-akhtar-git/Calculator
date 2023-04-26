function sum(){
    var a = parseInt(document.querySelector('#n1').value);
    var b = parseInt(document.querySelector('#n2').value);
    var result=a+b;
    document.querySelector('#result').innerHTML='Result = '+ result;
}

function diff(){
    var a = parseInt(document.querySelector('#n1').value);
    var b = parseInt(document.querySelector('#n2').value);
    var result=a-b;
    document.querySelector('#result').innerHTML= 'Result = '+result;
}

function pro(){
    var a = parseInt(document.querySelector('#n1').value);
    var b = parseInt(document.querySelector('#n2').value);
    var result=a*b;
    document.querySelector('#result').innerHTML= 'Result = '+result;
}
function divi(){
    var a = parseInt(document.querySelector('#n1').value);
    var b = parseInt(document.querySelector('#n2').value);
    var result=a/b;
    document.querySelector('#result').innerHTML='Result = ' +result;
}
function reset()
{
    document.querySelector('#n1').innerHTML=parseInt(0);
    document.querySelector('#n1').innerHTML=parseInt(0);
}