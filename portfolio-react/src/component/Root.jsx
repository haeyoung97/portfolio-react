import React from 'react';
import {Route} from 'react-router-dom';


// Components
import Header from '../component/template/Header';
import Footer from '../component/template/Footer';

// Containers
import Main from './page/Main';


class RootView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultPath: '/'
        };
    }

    render() {
        const {location} = this.props;
        return (
            <div className={"container"}>
                {location.pathname !== '/login' && <Header {...this.props} logout={this.logout} />}
                <div className={"content"}>
                    <Route path={'/'} exact={true} strict={false} {...this.props} >
                        <Main />
                    </Route>
                    <Route path={'/login'} component={Main} exact={true} strict={false} {...this.props} />
                </div>

                {location.pathname !== '/login' && <Footer {...this.props} />}
            </div>
        );
    }
}

export default RootView;
