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
    const players = [{
        _id: '1',
        name:'Sirawich',
        score: 100
    },
    {
        _id: '2',
        name: 'Manop',
        score: 20
    },
    {
        _id: '3',
        name: 'Konew',
        score: 50
        
    }];

    const Rendetplayer = function (playerDb){
        return playerDb.map(function (playerr){
            return <p key={playerr._id}>{playerr.name},{playerr.score}</p>
        });
        //return [<p key="3">3</p>,<p key="2">4</p>]
    };
    let welcome = "WELCOME";
    let name ="Sirawich";
    let show = (  <div>
    <h1>{welcome}</h1>
    <p>Hello From show variable My name is {name}</p>
    {Rendetplayer(players)}
    <p>fooo</p>
    </div>);
    ReactDOM.render(show,document.getElementById("app"));

});