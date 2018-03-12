import * as React from 'react';
import { Link } from 'react-router-dom';

import { Route3Props } from './Route3Props';
import { Route3State } from './Route3State';

export default class Route3 extends React.Component<Route3Props, Route3State> {

    public constructor(props: Route3Props) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <div>
                <div>Route3.tsx</div>
                <div><Link to='/'>IndexRoute.tsx</Link></div>
            </div>
        );
    }
}