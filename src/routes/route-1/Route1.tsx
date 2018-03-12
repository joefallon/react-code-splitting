import * as React from 'react';
import { Link } from 'react-router-dom';

import { Route1Props } from './Route1Props';
import { Route1State } from './Route1State';

export default class Route1 extends React.Component<Route1Props, Route1State> {

    public constructor(props: Route1Props) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <div>
                <div>Route1.tsx </div>
                <div><Link to='/'>IndexRoute.tsx</Link></div>
            </div>
        );
    }
}