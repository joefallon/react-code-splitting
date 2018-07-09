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
require('./IndexRoute.css');
import * as React from 'react';
import { Link } from 'react-router-dom';
var IndexRoute = /** @class */ (function (_super) {
    __extends(IndexRoute, _super);
    function IndexRoute(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    IndexRoute.prototype.render = function () {
        return (React.createElement("div", { className: 'IndexRoute' },
            React.createElement("div", { className: 'IndexRoute_title' }, "IndexRoute.tsx"),
            React.createElement("div", null,
                React.createElement(Link, { to: '/route-1' }, "Route 1")),
            React.createElement("div", null,
                React.createElement(Link, { to: '/route-2' }, "Route 2")),
            React.createElement("div", null,
                React.createElement(Link, { to: '/route-3' }, "Route 3"))));
    };
    return IndexRoute;
}(React.Component));
export default IndexRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXhSb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkluZGV4Um91dGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUU1QixPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFLeEM7SUFBd0MsOEJBQWlEO0lBRXJGLG9CQUFtQixLQUFzQjtRQUF6QyxZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQUVmO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7O0lBQ3BCLENBQUM7SUFFTSwyQkFBTSxHQUFiO1FBQ0ksT0FBTyxDQUNILDZCQUFLLFNBQVMsRUFBQyxZQUFZO1lBQ3ZCLDZCQUFLLFNBQVMsRUFBRSxrQkFBa0IscUJBQXNCO1lBQ3hEO2dCQUFLLG9CQUFDLElBQUksSUFBQyxFQUFFLEVBQUMsVUFBVSxjQUFlLENBQU07WUFDN0M7Z0JBQUssb0JBQUMsSUFBSSxJQUFDLEVBQUUsRUFBQyxVQUFVLGNBQWUsQ0FBTTtZQUM3QztnQkFBSyxvQkFBQyxJQUFJLElBQUMsRUFBRSxFQUFDLFVBQVUsY0FBZSxDQUFNLENBQzNDLENBQ1QsQ0FBQztJQUNOLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUFqQkQsQ0FBd0MsS0FBSyxDQUFDLFNBQVMsR0FpQnREIn0=