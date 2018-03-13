import * as assert from 'assert';

import { Fibonacci } from './Fibonacci';

describe('Fibonacci', () => {
    it('#calculate returns the correct result for 0', async () => {
        const fib = new Fibonacci(0);
        const result = await fib.calculate();
        assert.equal(result, 0);
    });

    it('#calculate returns the correct result for 1', async () => {
        const fib = new Fibonacci(1);
        const result = await fib.calculate();
        assert.equal(result, 1);
    });

    it('#calculate returns the correct result for 2', async () => {
        const fib = new Fibonacci(2);
        const result = await fib.calculate();
        assert.equal(result, 1);
    });

    it('#calculate returns the correct result for 3', async () => {
        const fib = new Fibonacci(3);
        const result = await fib.calculate();
        assert.equal(result, 2);
    });

    it('#calculate returns the correct result for 4', async () => {
        const fib = new Fibonacci(4);
        const result = await fib.calculate();
        assert.equal(result, 3);
    });

    it('#calculate returns the correct result for 5', async () => {
        const fib = new Fibonacci(5);
        const result = await fib.calculate();
        assert.equal(result, 5);
    });
});