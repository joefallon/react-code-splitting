export class Fibonacci {
    private _num: number;

    public constructor(num: number) {
        this._num = num;
    }

    public calculate(): Promise<number> {
        return new Promise(async (resolve, reject) => {
            if(this._num == 0) { resolve(0); }

            setImmediate(() => {
                let previous_first = 0;
                let previous_second = 1;
                let next = 1;

                for(let i = 2; i <= this._num; i++) {
                    next = previous_first + previous_second;
                    previous_first = previous_second;
                    previous_second = next;
                }

                resolve(next);
            });
        });
    }
}