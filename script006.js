function areaQuadrado(lado) {
    console.log('Função ativa');
    return lado;
}
areaQuadrado();

function pi() {
    return 3.14;
}
var total = 5 * pi();  
console.log(total);
console.log(pi());

function imc(peso,altura) {
    var imc = peso / (altura * altura);
    return imc;
}
console.log(imc(80, 1.8))

function corFavorita(cor) {
    if(cor === 'azul') {
     return 'eu gosto do céu';
    } else if (cor === 'verde') {
        return 'eu gosto de mato';
    }
    else {
        return 'eu não gosto de cores';
    }
}
addEventListener('click', function() { console.log('oi') });