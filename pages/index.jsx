import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    static getInitialProps({ store }) { }

    render() {
        return (
            <div>
                <h1 className="text-center">Hello in BabySitters marketplace</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    babySitters: state.babySitters
});

const mapDispatchToProps = {
    // actions
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

