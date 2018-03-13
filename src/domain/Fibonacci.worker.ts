import { Fibonacci } from './Fibonacci';

const worker: Worker = self as any;
let fibonacci: Fibonacci = null;

// worker.onmessage = async (ev: MessageEvent) => {
//     console.log('in worker...');
//
//     const msg = JSON.parse(ev.data); // should be in try catch
//     fibonacci = new Fibonacci(msg['num']);
//     const result = await fibonacci.calculate();
//
//     console.log('result = ' + result);
//
//     worker.postMessage(JSON.stringify(result));
// };

worker.addEventListener("message", async (ev: MessageEvent) => {
    console.log('in worker...');

    const msg = JSON.parse(ev.data); // should be in try catch
    fibonacci = new Fibonacci(msg['num']);
    const result = await fibonacci.calculate();

    console.log('result = ' + result);

    worker.postMessage(JSON.stringify(result));
});