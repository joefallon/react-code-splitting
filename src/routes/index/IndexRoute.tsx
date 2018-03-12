import * as React from 'react';
import { Link } from 'react-router-dom';

import { IndexRouteProps } from './IndexRouteProps';
import { IndexRouteState } from './IndexRouteState';

export default class IndexRoute extends React.Component<IndexRouteProps, IndexRouteState> {

    public constructor(props: IndexRouteProps) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <div>
                <div>IndexRoute.tsx</div>
                <div><Link to='/route-1'>Route 1</Link></div>
                <div><Link to='/route-2'>Route 2</Link></div>
                <div><Link to='/route-3'>Route 3</Link></div>
            </div>
        );
    }
}