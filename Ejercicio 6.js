// 6. Filtrado de elementos en un arreglo
// Torres Reyes Jaime Camil
function filtrarMayoresQue(arreglo, valor) {
    return arreglo.filter(numero => numero > valor);
}

const numerosParaFiltrar = [5, 2, 9, 1, 7];
const valorFiltro = 4;
console.log(`Números mayores que ${valorFiltro}:`, filtrarMayoresQue(numerosParaFiltrar, valorFiltro));
