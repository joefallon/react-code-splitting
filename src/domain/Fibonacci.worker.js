var _this = this;
import * as tslib_1 from "tslib";
import { Fibonacci } from './Fibonacci';
var worker = self;
var fibonacci = null;
worker.onmessage = function (ev) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var msg, result;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('in worker...');
                msg = JSON.parse(ev.data);
                fibonacci = new Fibonacci(msg['num']);
                return [4 /*yield*/, fibonacci.calculate()];
            case 1:
                result = _a.sent();
                console.log('result = ' + result);
                worker.postMessage(JSON.stringify(result));
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlib25hY2NpLndvcmtlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZpYm9uYWNjaS53b3JrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBZ0JBOztBQWhCQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXhDLElBQU0sTUFBTSxHQUFXLElBQVcsQ0FBQztBQUNuQyxJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUM7QUFFaEMsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFPLEVBQWdCOzs7OztnQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFFdEIsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQyxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLHFCQUFNLFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBQTs7Z0JBQXBDLE1BQU0sR0FBRyxTQUEyQjtnQkFFMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUM7Z0JBRWxDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7O0tBQzlDLENBQUMifQ==