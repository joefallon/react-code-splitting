require('./App.css');

import * as React from 'react';
import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';

export class App extends React.Component {

    public constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <Switch>
                <Route exact path='/'        render={(props) => this.renderIndex(props)}/>
                <Route exact path='/route-1' render={(props) => this.renderRoute1(props)}/>
                <Route exact path='/route-2' render={(props) => this.renderRoute2(props)}/>
                <Route exact path='/route-3' render={(props) => this.renderRoute3(props)}/>
                <Route path='*'              render={(props) => this.renderNotFound(props)} />
            </Switch>
        );
    }

    private renderIndex = (props: any): JSX.Element => {
        const LazyRoute = lazy(() => {
            return import(/* webpackChunkName: "index-route" */'./routes/index/IndexRoute');
        });

        return (
            <Suspense fallback={null}>
                <LazyRoute {...props} />
            </Suspense>
        );
    };

    private renderRoute1 = (props: any): JSX.Element => {
        const LazyRoute = lazy(() => {
            return import(/* webpackChunkName: "route-1" */'./routes/route-1/Route1');
        });

        return (
            <Suspense fallback={null}>
                <LazyRoute {...props} />
            </Suspense>
        );
    };

    private renderRoute2 = (props: any): JSX.Element => {
        const LazyRoute = lazy(() => {
            return import(/* webpackChunkName: "route-2" */'./routes/route-2/Route2');
        });

        return (
            <Suspense fallback={null}>
                <LazyRoute {...props} />
            </Suspense>
        );
    };

    private renderRoute3 = (props: any): JSX.Element => {
        const LazyRoute = lazy(() => {
            return import(/* webpackChunkName: "route-3" */'./routes/route-3/Route3');
        });

        return (
            <Suspense fallback={null}>
                <LazyRoute {...props} />
            </Suspense>
        );
    };

    private renderNotFound = (props: any): JSX.Element => {
        return (
            <div>
                <h3>404 page not found</h3>
                <p>We are sorry but the page you are looking for does not exist.</p>
            </div>
        );
    };
}