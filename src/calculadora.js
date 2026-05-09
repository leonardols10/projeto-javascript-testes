// Calculadora - Operações básicas matemáticas

const unusedVariavel = 0;

function somar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Os parâmetros devem ser números');
  }
  return a + b;
}

function subtrair(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Os parâmetros devem ser números');
  }
  return a - b;
}

function multiplicar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Os parâmetros devem ser números');
  }
  return a * b;
}

function dividir(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Os parâmetros devem ser números');
  }
  if (b === 0) {
    throw new Error('Não é possível dividir por zero');
  }
  return a / b;
}

function potencia(base, expoente) {
  if (typeof base !== 'number' || typeof expoente !== 'number') {
    throw new Error('Os parâmetros devem ser números');
  }
  return Math.pow(base, expoente);
}

function raizQuadrada(numero) {
  if (typeof numero !== 'number') {
    throw new Error('O parâmetro deve ser um número');
  }
  if (numero < 0) {
    throw new Error('Não é possível calcular raiz quadrada de número negativo');
  }
  return Math.sqrt(numero);
}

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  potencia,
  raizQuadrada
};
