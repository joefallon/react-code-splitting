var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { Link } from 'react-router-dom';
// import FibonacciWorker from 'worker-loader!../../domain/Fibonacci.worker';
import FibonacciWorker from 'worker-loader!../../domain/Fibonacci.worker';
var Route1 = /** @class */ (function (_super) {
    __extends(Route1, _super);
    function Route1(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            fib: 0
        };
        _this.worker = new FibonacciWorker();
        _this.worker.onmessage = function (message) {
            console.log('message received from worker...');
            console.log(message);
        };
        return _this;
        //
        // const msg = {
        //     'num': 10
        // };
        //
        // console.log('sending msg to worker...');
        // console.log(msg);
        // worker.postMessage(JSON.stringify(msg));
    }
    Route1.prototype.render = function () {
        var msg = {
            'num': 10
        };
        console.log('sending msg to worker...');
        console.log(msg);
        this.worker.postMessage(JSON.stringify(msg));
        return (React.createElement("div", null,
            React.createElement("div", null, "Route1.tsx "),
            React.createElement("div", null,
                React.createElement(Link, { to: '/' }, "IndexRoute.tsx"))));
    };
    return Route1;
}(React.Component));
export default Route1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm91dGUxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUm91dGUxLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBS3hDLDZFQUE2RTtBQUM3RSxPQUFPLGVBQWUsTUFBTSw2Q0FBNkMsQ0FBQztBQUcxRTtJQUFvQywwQkFBeUM7SUFJekUsZ0JBQW1CLEtBQWtCO1FBQXJDLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBa0JmO1FBakJHLEtBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxHQUFHLEVBQUUsQ0FBQztTQUNULENBQUM7UUFFRixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7UUFDcEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsVUFBQyxPQUFxQjtZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUM7O1FBQ0YsRUFBRTtRQUNGLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsS0FBSztRQUNMLEVBQUU7UUFDRiwyQ0FBMkM7UUFDM0Msb0JBQW9CO1FBQ3BCLDJDQUEyQztJQUMvQyxDQUFDO0lBRU0sdUJBQU0sR0FBYjtRQUVJLElBQU0sR0FBRyxHQUFHO1lBQ1IsS0FBSyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRzdDLE1BQU0sQ0FBQyxDQUNIO1lBQ0ksK0NBQXNCO1lBQ3RCO2dCQUFLLG9CQUFDLElBQUksSUFBQyxFQUFFLEVBQUMsR0FBRyxxQkFBc0IsQ0FBTSxDQUMzQyxDQUNULENBQUM7SUFDTixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQUEzQ0QsQ0FBb0MsS0FBSyxDQUFDLFNBQVMsR0EyQ2xEIn0=