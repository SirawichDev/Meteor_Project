//import './../imports/utils';

//import def,{User,name} from './../imports/utils';

/*console.log('log from client/main.js');
console.log(User());
console.log(name);
console.log(def);*/

import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

Meteor.startup(function (){
    let name ="Sirawich";
    let show = <div><p>Hello From show variable My name is {name}</p><p>fooo</p></div>
    ReactDOM.render(show,document.getElementById("app"));

});