//import './../imports/utils';

//import def,{User,name} from './../imports/utils';

/*console.log('log from client/main.js');
console.log(User());
console.log(name);
console.log(def);*/

import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Users} from './../imports/api/user';

setTimeout(function() {
    console.log('Clients Side', Users.find().fetch());

},1000);

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
    },
       
    {
        _id: '4',
        name: 'GG',
        score: 99
    
        
    }];


    const Rendetplayer = function (playerDb){
        return playerDb.map(function (user){
            return <p key={user._id}> id number : {user._id} name :{user.name},Score :{user.score}</p>
        });
        //return [<p key="3">3</p>,<p key="2">4</p>]
    };

    const render = function(play){
        let num = [{val:1},{val:2},{val:3}];
        return num.map(function (miew){

            return [<p key={miew.val}>{miew.val}</p>];
        })
      
    };


    let welcome = "WELCOME";
    let name ="Sirawich";
    let show = (  <div>
    <h1>{welcome}</h1>
    {render(players)}
    <p>Hello From show variable My name is {name}</p>
    {Rendetplayer(players)}
    <p>fooo</p>
    </div>);
    ReactDOM.render(show,document.getElementById("app"));

});