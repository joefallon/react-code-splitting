var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
import { Fibonacci } from './Fibonacci';
var worker = self;
var fibonacci = null;
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
worker.addEventListener("message", function (ev) { return __awaiter(_this, void 0, void 0, function () {
    var msg, result;
    return __generator(this, function (_a) {
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
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlib25hY2NpLndvcmtlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZpYm9uYWNjaS53b3JrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkEyQkc7QUEzQkgsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV4QyxJQUFNLE1BQU0sR0FBVyxJQUFXLENBQUM7QUFDbkMsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDO0FBRWhDLG1EQUFtRDtBQUNuRCxtQ0FBbUM7QUFDbkMsRUFBRTtBQUNGLGlFQUFpRTtBQUNqRSw2Q0FBNkM7QUFDN0Msa0RBQWtEO0FBQ2xELEVBQUU7QUFDRix5Q0FBeUM7QUFDekMsRUFBRTtBQUNGLGtEQUFrRDtBQUNsRCxLQUFLO0FBRUwsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFPLEVBQWdCOzs7OztnQkFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFFdEIsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQyxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLHFCQUFNLFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBQTs7Z0JBQXBDLE1BQU0sR0FBRyxTQUEyQjtnQkFFMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUM7Z0JBRWxDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7O0tBQzlDLENBQUMsQ0FBQyJ9