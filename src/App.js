import * as tslib_1 from "tslib";
require('./App.css');
import * as React from 'react';
import { Route, Switch } from 'react-router';
import Loadable from 'react-loadable';
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.renderIndex = function (props) {
            var LoadableIndexRoute = Loadable({
                loader: function () { return import(/* webpackChunkName: "index-route" */ './routes/index/IndexRoute'); },
                loading: function () { return React.createElement("div", null, "Loading..."); },
                delay: 300,
                timeout: 10000
            });
            return (React.createElement(LoadableIndexRoute, tslib_1.__assign({}, props)));
        };
        _this.renderRoute1 = function (props) {
            var LoadableRoute1 = Loadable({
                loader: function () { return import(/* webpackChunkName: "route-1" */ './routes/route-1/Route1'); },
                loading: function () { return React.createElement("div", null, "Loading..."); },
                delay: 300,
                timeout: 10000
            });
            return (React.createElement(LoadableRoute1, tslib_1.__assign({}, props)));
        };
        _this.renderRoute2 = function (props) {
            var LoadableRoute2 = Loadable({
                loader: function () { return import(/* webpackChunkName: "route-2" */ './routes/route-2/Route2'); },
                loading: function () { return React.createElement("div", null, "Loading..."); },
                delay: 300,
                timeout: 10000
            });
            return (React.createElement(LoadableRoute2, tslib_1.__assign({}, props)));
        };
        _this.renderRoute3 = function (props) {
            var LoadableRoute3 = Loadable({
                loader: function () { return import(/* webpackChunkName: "route-3" */ './routes/route-3/Route3'); },
                loading: function () { return React.createElement("div", null, "Loading..."); },
                delay: 300,
                timeout: 10000
            });
            return (React.createElement(LoadableRoute3, tslib_1.__assign({}, props)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXJCLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQy9CLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBTzdDLE9BQU8sUUFBUSxNQUFNLGdCQUFnQixDQUFDO0FBRXRDO0lBQXlCLCtCQUFlO0lBRXBDLGFBQW1CLEtBQVU7UUFBN0IsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FDZjtRQWNPLGlCQUFXLEdBQUcsVUFBQyxLQUFzQjtZQUN6QyxJQUFNLGtCQUFrQixHQUFHLFFBQVEsQ0FBQztnQkFDaEMsTUFBTSxFQUFFLGNBQU0sT0FBQSxNQUFNLENBQUMscUNBQXFDLENBQUEsMkJBQTJCLENBQUMsRUFBeEUsQ0FBd0U7Z0JBQ3RGLE9BQU8sRUFBRSxjQUFRLE1BQU0sQ0FBQyw4Q0FBcUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELEtBQUssRUFBRSxHQUFHO2dCQUNWLE9BQU8sRUFBRSxLQUFLO2FBQ2pCLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxDQUFDLG9CQUFDLGtCQUFrQix1QkFBSyxLQUFLLEVBQUksQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQztRQUVNLGtCQUFZLEdBQUcsVUFBQyxLQUFrQjtZQUN0QyxJQUFNLGNBQWMsR0FBRyxRQUFRLENBQUM7Z0JBQzVCLE1BQU0sRUFBRSxjQUFNLE9BQUEsTUFBTSxDQUFDLGlDQUFpQyxDQUFBLHlCQUF5QixDQUFDLEVBQWxFLENBQWtFO2dCQUNoRixPQUFPLEVBQUUsY0FBUSxNQUFNLENBQUMsOENBQXFCLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxLQUFLLEVBQUUsR0FBRztnQkFDVixPQUFPLEVBQUUsS0FBSzthQUNqQixDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsQ0FBQyxvQkFBQyxj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