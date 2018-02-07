//import './../imports/utils';

//import def,{User,name} from './../imports/utils';

/*console.log('log from client/main.js');
console.log(User());
console.log(name);
console.log(def);*/

import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Uname} from './../imports/api/user';
import {Tracker} from 'meteor/tracker';


//REnder Data method 1 (Better Timeout) จับทุกๆ query ของข้อมูล
//เพราะว่าถ้า console.log ธรรมดาข้อมูลที่ถูกส่งขอไปทาง database มันใช้เวลาเยอะกว่าคำสั่งนี้ มีวิธีสองวิธีคือให้ settimeout ตั้งไว้รอ 1 วิแล้วค่อยทำคสั่ง
Tracker.autorun(function() {
    console.log('Clients Side', Uname.find().fetch());
});
//Render data method 2
/*setTimeout(function() {
    console.log('Clients Side', Users.find().fetch());

},1000);
*/
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


    const Rendetplayer = function (Uname){
        return Uname.map(function (user){
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


const handleSubmit = function (e){
    let Unames = e.target.Username.value;

    e.preventDefault();

    if(Unames){
        e.target.Username.value =''; //ถ้าไม่เคลียครั้งต่อไปมันจะจำที่พิมก่อนหน้าไว้ 
        Uname.insert({
            name: Unames,
            score: 0
        });
    
    }
};

Meteor.startup(function (){
    Tracker.autorun(function() {

       let uname = Uname.find().fetch();
       let welcome = "WELCOME";
       let name ="Sirawich";
       let show = (  <div>
       <h1>{welcome}</h1>
       
       <p>Hello From show variable My name is {name}</p>
       {Rendetplayer(uname)}

       <form onSubmit={handleSubmit}>
        <input type="text" name="Username" placeholder="Enter Here"/> 
        <button>Click</button>
        </form>
       <p>fooo</p>
       </div>
    );
       ReactDOM.render(show,document.getElementById("app"));
    });

 

});