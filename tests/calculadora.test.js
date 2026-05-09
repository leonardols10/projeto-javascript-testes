const calc = require('../src/calculadora');

describe('Testes da Calculadora', () => {
  
  describe('Função Somar', () => {
    it('deve somar dois números positivos', () => {
      expect(calc.somar(5, 3)).toBe(8);
    });

    it('deve somar números negativos', () => {
      expect(calc.somar(-5, -3)).toBe(-8);
    });

    it('deve somar número positivo com negativo', () => {
      expect(calc.somar(10, -5)).toBe(5);
    });

    it('deve retornar 0 ao somar 0 com 0', () => {
      expect(calc.somar(0, 0)).toBe(0);
    });

    it('deve lançar erro se um parâmetro não for número', () => {
      expect(() => calc.somar('5', 3)).toThrow();
    });
  });

  describe('Função Subtrair', () => {
    it('deve subtrair dois números', () => {
      expect(calc.subtrair(10, 5)).toBe(5);
    });

    it('deve subtrair números negativos', () => {
      expect(calc.subtrair(-5, -3)).toBe(-2);
    });

    it('deve lançar erro se um parâmetro não for número', () => {
      expect(() => calc.subtrair('10', 5)).toThrow();
    });
  });

  describe('Função Multiplicar', () => {
    it('deve multiplicar dois números', () => {
      expect(calc.multiplicar(5, 4)).toBe(20);
    });

    it('deve multiplicar por zero resultando em zero', () => {
      expect(calc.multiplicar(5, 0)).toBe(0);
    });

    it('deve multiplicar números negativos', () => {
      expect(calc.multiplicar(-5, -4)).toBe(20);
    });

    it('deve lançar erro se um parâmetro não for número', () => {
      expect(() => calc.multiplicar('5', 4)).toThrow();
    });
  });

  describe('Função Dividir', () => {
    it('deve dividir dois números', () => {
      expect(calc.dividir(20, 4)).toBe(5);
    });

    it('deve retornar decimal ao dividir', () => {
      expect(calc.dividir(10, 3)).toBeCloseTo(3.333, 2);
    });

    it('deve lançar erro ao dividir por zero', () => {
      expect(() => calc.dividir(10, 0)).toThrow('Não é possível dividir por zero');
    });

    it('deve lançar erro se um parâmetro não for número', () => {
      expect(() => calc.dividir('20', 4)).toThrow();
    });
  });

  describe('Função Potência', () => {
    it('deve calcular potência corretamente', () => {
      expect(calc.potencia(2, 3)).toBe(8);
    });

    it('deve calcular potência com expoente 0', () => {
      expect(calc.potencia(5, 0)).toBe(1);
    });

    it('deve calcular potência negativa', () => {
      expect(calc.potencia(2, -2)).toBeCloseTo(0.25, 2);
    });

    it('deve lançar erro se um parâmetro não for número', () => {
      expect(() => calc.potencia('2', 3)).toThrow();
    });
  });

  describe('Função Raiz Quadrada', () => {
    it('deve calcular raiz quadrada corretamente', () => {
      expect(calc.raizQuadrada(16)).toBe(4);
    });

    it('deve calcular raiz quadrada de número decimal', () => {
      expect(calc.raizQuadrada(2)).toBeCloseTo(1.414, 2);
    });

    it('deve retornar 0 para raiz quadrada de 0', () => {
      expect(calc.raizQuadrada(0)).toBe(0);
    });

    it('deve lançar erro para número negativo', () => {
      expect(() => calc.raizQuadrada(-4)).toThrow('Não é possível calcular raiz quadrada de número negativo');
    });

    it('deve lançar erro se o parâmetro não for número', () => {
      expect(() => calc.raizQuadrada('16')).toThrow();
    });
  });

});
