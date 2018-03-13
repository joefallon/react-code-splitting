import * as React from 'react';
import { Link } from 'react-router-dom';

import { Route1Props } from './Route1Props';
import { Route1State } from './Route1State';

// import FibonacciWorker from 'worker-loader!../../domain/Fibonacci.worker';
import FibonacciWorker from 'worker-loader!../../domain/Fibonacci.worker';


export default class Route1 extends React.Component<Route1Props, Route1State> {

    worker: FibonacciWorker;

    public constructor(props: Route1Props) {
        super(props);
        this.state = {
            fib: 0
        };

        this.worker = new FibonacciWorker();
        this.worker.onmessage = (message: MessageEvent) => {
            console.log('message received from worker...');
            console.log(message);
        };
        //
        // const msg = {
        //     'num': 10
        // };
        //
        // console.log('sending msg to worker...');
        // console.log(msg);
        // worker.postMessage(JSON.stringify(msg));
    }

    public render() {

        const msg = {
            'num': 10
        };

        console.log('sending msg to worker...');
        console.log(msg);
        this.worker.postMessage(JSON.stringify(msg));


        return (
            <div>
                <div>Route1.tsx </div>
                <div><Link to='/'>IndexRoute.tsx</Link></div>
            </div>
        );
    }
}