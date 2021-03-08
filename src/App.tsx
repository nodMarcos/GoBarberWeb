import React from 'react';
import GlobalStyles from './styles/global';

import {BrowserRouter as Router} from 'react-router-dom';

import Routes from './routes/index';
import AppProvider from './hooks/index';

const App: React.FC = () => (
    <Router>
        <AppProvider>        
            <Routes/>
        </AppProvider>

        <GlobalStyles />
    </Router>
);

export default App;
