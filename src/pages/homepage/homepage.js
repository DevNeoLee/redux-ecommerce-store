
import React, { Component } from 'react';
import homepageStyles from './homepage.module.scss';
import Directory from '../../components/directory/directory';
import Slider from '../../components/slider/slider';

import { withRouter } from "react-router-dom";

class Homepage extends Component {
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0);
		}
    }
    render() {
          return (
        <div className={homepageStyles.homepage}>
            <Slider />
            <Directory />

        </div>
    );
    } 
}

export default withRouter(Homepage);
