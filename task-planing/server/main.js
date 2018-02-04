//import './../imports/utils';

/*import {User} from './../imports/utils';
import add from './../imports/plus';

console.log('Log from /server/main.js');
console.log(User()); 
console.log(add(1,2));*/

import {Meteor} from 'meteor/meteor';
import {Users} from './../imports/api/user';

Meteor.startup(function (){
    Users.insert({
        name: 'Sirawich',
        score: 1
    });
    Users.insert({
        name: 'Voung',
        score: 55
    });
    console.log(Users.find().fetch());
   
});


