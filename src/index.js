import React from "react";
import ReactDOM from "react-dom";
import TodoItem from "./components/TodoItem";

import App from "./App";

//import * as serviceWorker from './serviceWorker';
console.log(new App("Todoshechka"));

//
function Obj(age, addToState) {
    this.age = age;
    this.state = [1, 2, 4, addToState];
}
Obj.prototype = new React.Component('This is proto props');

console.log(new Obj(25, 5));

class ClassObj extends React.Component{
    constructor(age, addToState){
        super(age, addToState);
        this.age = age;
        this.state = [1, 2, 4, addToState];
    }
    render() {
        return <h1>I'm the ClassObj, and this is cool!</h1>
    }
}

console.log(new ClassObj(55, 444));


ReactDOM.render(<App/>, document.getElementById("root")); //вставляем App в div - обертку в статике


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
