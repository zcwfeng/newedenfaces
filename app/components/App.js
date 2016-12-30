import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

import {RouteHandler} from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <RouteHandler />
                <Footer />
            </div>
        );
    }
}

export default App;