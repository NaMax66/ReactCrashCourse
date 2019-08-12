import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'; //this is from the static index.html
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root')); //вставляем App в div - обертку в статике
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
