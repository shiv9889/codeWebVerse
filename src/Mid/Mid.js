import React, { Component } from 'react';
import './Mid.css';
import Home from './Pages/Home';
import Learn from './Pages/Learn';
import Assets from './Pages/Assets';
import Guiders from './Pages/Guiders';
import Tools from './Pages/Tools';
import Articles from './Pages/Articles';
import Community from './Pages/Community';
import Search from './Pages/Search';

class Mid extends Component {
    render() {
        if (this.props.currentPage === 'Home') {
            return (
                <div className="">CodeWEBverse
                <Home />

                </div>
            );
        }
        else if (this.props.currentPage === 'Learn') {
            return (
                <div className="">learn
                <Learn />
                </div>
            );
        }
        else if (this.props.currentPage === 'Assets') {
            return (
                <div className="">Assets
                <Assets />
                </div>
            );
        }
        else if (this.props.currentPage === 'Guiders') {
            return (
                <div className="">Guiders
                <Guiders />
                </div>
            );
        }
        else if (this.props.currentPage === 'Tools') {
            return (
                <div className="">Tools
<Tools />
                </div>
            );
        }
        else if (this.props.currentPage === 'Articles') {
            return (
                <div className="">Articles
                <Articles />
                </div>
            );
        }
        else if (this.props.currentPage === 'Community') {
            return (
                <div className="">Community
                <Community />
                </div>
            );
        }
        else if (this.props.currentPage === 'Search') {
            return (
                <div className="">Search Result
                <Search />
                </div>
            );
        }
    }
}

export default Mid;