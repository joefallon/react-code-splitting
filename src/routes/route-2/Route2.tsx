import * as React from 'react';
import { Link } from 'react-router-dom';

import { Route2Props } from './Route2Props';
import { Route2State } from './Route2State';

export default class Route2 extends React.Component<Route2Props, Route2State> {

    public constructor(props: Route2Props) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <div>
                <div>Route2.tsx</div>
                <div><Link to='/'>IndexRoute.tsx</Link></div>
            </div>
        );
    }
}