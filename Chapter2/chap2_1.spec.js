const { creatingArraysFromStrings, sumNumbers, aggregateArrays, copy } = require('./chap2_1');

describe("Testes simples das funções", () => {

    test("creatingArraysFromStrings deve retornar todas as palavras da frase", () => {
        const sentence = "the quick brown fox jumped over the lazy dog";

        const words = creatingArraysFromStrings(sentence);
        expect(words.length).toBe(9);
        expect(words[0]).toBe("the");
        expect(words[8]).toBe("dog");
    });

    test("sumNumbers deve retornar a soma correta do array", () => {
        const numbers = [1, 2, 3, 5, 8, 13, 21];

        expect(sumNumbers(numbers)).toBe(53);
    });

    test("aggregateArrays deve manter a referência entre arrays", () => {
        const { nums, samenums } = aggregateArrays(10);
        expect(nums).toBe(samenums)
        expect(nums[0]).toBe(400);
        expect(samenums[0]).toBe(400);
    });

    test("copy deve copiar corretamente o conteúdo de um array para outro", () => {
        const arr1 = [1, 2, 3];
        const arr2 = [];
        copy(arr1, arr2);

        expect(arr2).toEqual(arr1);
        expect(arr2).not.toBe(arr1);
    });

});
