import * as tslib_1 from "tslib";
var Fibonacci = /** @class */ (function () {
    function Fibonacci(num) {
        this._num = num;
    }
    Fibonacci.prototype.calculate = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlib25hY2NpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmlib25hY2NpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUdJLG1CQUFtQixHQUFXO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFFTSw2QkFBUyxHQUFoQjtRQUFBLGlCQWtCQztRQWpCRyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQU8sT0FBTyxFQUFFLE1BQU07OztnQkFDckMsSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtvQkFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQUU7Z0JBRWxDLFlBQVksQ0FBQztvQkFDVCxJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQztvQkFDeEIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO29CQUViLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUNoQyxJQUFJLEdBQUcsY0FBYyxHQUFHLGVBQWUsQ0FBQzt3QkFDeEMsY0FBYyxHQUFHLGVBQWUsQ0FBQzt3QkFDakMsZUFBZSxHQUFHLElBQUksQ0FBQztxQkFDMUI7b0JBRUQsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixDQUFDLENBQUMsQ0FBQzs7O2FBQ04sQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQyJ9