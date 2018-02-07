//import './../imports/utils';

/*import {User} from './../imports/utils';
import add from './../imports/plus';

console.log('Log from /server/main.js');
console.log(User()); 
console.log(add(1,2));*/

import {Meteor} from 'meteor/meteor';
import {Users} from './../imports/api/user';
import {Lol} from './../imports/api/user';

Meteor.startup(function (){
    Users.insert({
        name: 'Sirawich',
        score: 1
    });
    Users.insert({
        name: 'Voung',
        score: 55
    });
    Users.insert({
        name: 'Miew',
        score: -1
    });
    Lol.insert({
        Company: 'ss',
    });
    console.log(Users.find().fetch());
   
});


