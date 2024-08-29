// 6. Filtrado de elementos en un arreglo
// Torres Reyes Jaime Camil
function filtrarMayoresQue(arreglo, valor) {
    return arreglo.filter(numero => numero > valor);
}

const numerosParaFiltrar = [2, 15, 10, 9, 3];
const valorFiltro = 4;
console.log(`Números mayores que ${valorFiltro}:`, filtrarMayoresQue(numerosParaFiltrar, valorFiltro));
