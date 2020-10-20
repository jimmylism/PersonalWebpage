import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/Style.css';
import Header from './components/Header.js';
import Introduction from './components/Introduction.js';
import About from './components/About.js';
import Impact from './components/Impact.js'
import Experience from './components/Experience.js';
import Footer from './components/Footer.js';

const App = () => {
    return(
    <div>
        <Header></Header>
        <div className="body">
            <Introduction/>
            <About/>
            <Impact/>
            <Experience/>
            <Footer/>
        </div>
    </div>
    )
};

ReactDOM.render(
    <App />, document.getElementById('root'));
