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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var Fibonacci = /** @class */ (function () {
    function Fibonacci(num) {
        this._num = num;
    }
    Fibonacci.prototype.calculate = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this._num == 0) {
                    resolve(0);
                }
                setImmediate(function () {
                    var previous_first = 0;
                    var previous_second = 1;
                    var next = 1;
                    for (var i = 2; i <= _this._num; i++) {
                        next = previous_first + previous_second;
                        previous_first = previous_second;
                        previous_second = next;
                    }
                    resolve(next);
                });
                return [2 /*return*/];
            });
        }); });
    };
    return Fibonacci;
}());
export { Fibonacci };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlib25hY2NpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmlib25hY2NpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFHSSxtQkFBbUIsR0FBVztRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBRU0sNkJBQVMsR0FBaEI7UUFBQSxpQkFrQkM7UUFqQkcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFPLE9BQU8sRUFBRSxNQUFNOzs7Z0JBQ3JDLElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7b0JBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUFFO2dCQUVsQyxZQUFZLENBQUM7b0JBQ1QsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDO29CQUN2QixJQUFJLGVBQWUsR0FBRyxDQUFDLENBQUM7b0JBQ3hCLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztvQkFFYixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDaEMsSUFBSSxHQUFHLGNBQWMsR0FBRyxlQUFlLENBQUM7d0JBQ3hDLGNBQWMsR0FBRyxlQUFlLENBQUM7d0JBQ2pDLGVBQWUsR0FBRyxJQUFJLENBQUM7cUJBQzFCO29CQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDLENBQUM7OzthQUNOLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMsQUExQkQsSUEwQkMifQ==