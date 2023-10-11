var corFavorita = 'Azul';

switch  (corFavorita)  {
    case 'Azul':
      console.log('olhe para o céu.');
      break;
    case 'Amarelo':
        console.log('olhe para o sol.');
        break;
    case 'Verde':
        console.log('olhe para a floresta');
        break;
     default:
        console.log('feche os olohos.');   
}

var minhaidade = 28; 
var idadePrimo = 32;

if(minhaidade > idadePrimo) {
   console.log('É maior')
}  else if (minhaidade === idadePrimo) {
   console.log('É igual')
}  else {
  console.log('É menor')
}