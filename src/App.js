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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXJCLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQy9CLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBTzdDLE9BQU8sUUFBUSxNQUFNLGdCQUFnQixDQUFDO0FBR3RDO0lBQXlCLCtCQUFlO0lBRXBDLGFBQW1CLEtBQVU7UUFBN0IsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FDZjtRQWNPLGlCQUFXLEdBQUcsVUFBQyxLQUFzQjtZQUN6QyxJQUFNLGtCQUFrQixHQUFHLFFBQVEsQ0FBQztnQkFDaEMsTUFBTSxFQUFFLGNBQU0sT0FBQSxNQUFNLENBQUMscUNBQXFDLENBQUEsMkJBQTJCLENBQUMsRUFBeEUsQ0FBd0U7Z0JBQ3RGLE9BQU8sRUFBRSxjQUFRLE9BQU8sOENBQXFCLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxLQUFLLEVBQUUsR0FBRztnQkFDVixPQUFPLEVBQUUsS0FBSzthQUNqQixDQUFDLENBQUM7WUFFSCxPQUFPLENBQUMsb0JBQUMsa0JBQWtCLHVCQUFLLEtBQUssRUFBSSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDO1FBRU0sa0JBQVksR0FBRyxVQUFDLEtBQWtCO1lBQ3RDLElBQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQztnQkFDNUIsTUFBTSxFQUFFLGNBQU0sT0FBQSxNQUFNLENBQUMsaUNBQWlDLENBQUEseUJBQXlCLENBQUMsRUFBbEUsQ0FBa0U7Z0JBQ2hGLE9BQU8sRUFBRSxjQUFRLE9BQU8sOENBQXFCLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxLQUFLLEVBQUUsR0FBRztnQkFDVixPQUFPLEVBQUUsS0FBSzthQUNqQixDQUFDLENBQUM7WUFFSCxPQUFPLENBQUMsb0JBQUMsY0FBYyx1QkFBSyxLQUFLLEVBQUks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