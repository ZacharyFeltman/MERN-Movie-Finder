import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//!!Check if react redux install worked!!
import {Provider} from "react-redux";
import store from './redux/store';

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"   //should this be 600?

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //edited out react.strictmode tags as well. kept App
    //<React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    //</React.StrictMode>
);


