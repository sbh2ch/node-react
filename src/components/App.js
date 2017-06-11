/**
 * Created by kiost on 2017-06-11.
 */
import React from 'react';
import Contact from './Contact';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    };

    render() {
        return (
            <Contact/>
        );
    }
}

export default App;