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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
require('./App.css');
import * as React from 'react';
import { Route, Switch } from 'react-router';
import Loadable from 'react-loadable';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.renderIndex = function (props) {
            var LoadableIndexRoute = Loadable({
                loader: function () { return import(/* webpackChunkName: "index-route" */ './routes/index/IndexRoute'); },
                loading: function () { return React.createElement("div", null, "Loading..."); },
                delay: 300,
                timeout: 10000
            });
            return (React.createElement(LoadableIndexRoute, __assign({}, props)));
        };
        _this.renderRoute1 = function (props) {
            var LoadableRoute1 = Loadable({
                loader: function () { return import(/* webpackChunkName: "route-1" */ './routes/route-1/Route1'); },
                loading: function () { return React.createElement("div", null, "Loading..."); },
                delay: 300,
                timeout: 10000
            });
            return (React.createElement(LoadableRoute1, __assign({}, props)));
        };
        _this.renderRoute2 = function (props) {
            var LoadableRoute2 = Loadable({
                loader: function () { return import(/* webpackChunkName: "route-2" */ './routes/route-2/Route2'); },
                loading: function () { return React.createElement("div", null, "Loading..."); },
                delay: 300,
                timeout: 10000
            });
            return (React.createElement(LoadableRoute2, __assign({}, props)));
        };
        _this.renderRoute3 = function (props) {
            var LoadableRoute3 = Loadable({
                loader: function () { return import(/* webpackChunkName: "route-3" */ './routes/route-3/Route3'); },
                loading: function () { return React.createElement("div", null, "Loading..."); },
                delay: 300,
                timeout: 10000
            });
            return (React.createElement(LoadableRoute3, __assign({}, props)));
        };
        _this.renderNotFound = function (props) {
            return (React.createElement("div", null,
                React.createElement("h3", null, "404 page not found"),
                React.createElement("p", null, "We are sorry but the page you are looking for does not exist.")));
        };
        return _this;
    }
    App.prototype.render = function () {
        var _this = this;
        return (React.createElement(Switch, null,
            React.createElement(Route, { exact: true, path: '/', render: function (props) { return _this.renderIndex(props); } }),
            React.createElement(Route, { exact: true, path: '/route-1', render: function (props) { return _this.renderRoute1(props); } }),
            React.createElement(Route, { exact: true, path: '/route-2', render: function (props) { return _this.renderRoute2(props); } }),
            React.createElement(Route, { exact: true, path: '/route-3', render: function (props) { return _this.renderRoute3(props); } }),
            React.createElement(Route, { path: '*', render: function (props) { return _this.renderNotFound(props); } })));
    };
    return App;
}(React.Component));
export { App };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFckIsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFPN0MsT0FBTyxRQUFRLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEM7SUFBeUIsdUJBQWU7SUFFcEMsYUFBbUIsS0FBVTtRQUE3QixZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQUNmO1FBY08saUJBQVcsR0FBRyxVQUFDLEtBQXNCO1lBQ3pDLElBQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDO2dCQUNoQyxNQUFNLEVBQUUsY0FBTSxPQUFBLE1BQU0sQ0FBQyxxQ0FBcUMsQ0FBQSwyQkFBMkIsQ0FBQyxFQUF4RSxDQUF3RTtnQkFDdEYsT0FBTyxFQUFFLGNBQVEsTUFBTSxDQUFDLDhDQUFxQixDQUFDLENBQUMsQ0FBQztnQkFDaEQsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsT0FBTyxFQUFFLEtBQUs7YUFDakIsQ0FBQyxDQUFDO1lBRUgsTUFBTSxDQUFDLENBQUMsb0JBQUMsa0JBQWtCLGVBQUssS0FBSyxFQUFJLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUM7UUFFTSxrQkFBWSxHQUFHLFVBQUMsS0FBa0I7WUFDdEMsSUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDO2dCQUM1QixNQUFNLEVBQUUsY0FBTSxPQUFBLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQSx5QkFBeUIsQ0FBQyxFQUFsRSxDQUFrRTtnQkFDaEYsT0FBTyxFQUFFLGNBQVEsTUFBTSxDQUFDLDhDQUFxQixDQUFDLENBQUMsQ0FBQztnQkFDaEQsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsT0FBTyxFQUFFLEtBQUs7YUFDakIsQ0FBQyxDQUFDO1lBRUgsTUFBTSxD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