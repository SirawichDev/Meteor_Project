//import './../imports/utils';

/*import {User} from './../imports/utils';
import add from './../imports/plus';

console.log('Log from /server/main.js');
console.log(User()); 
console.log(add(1,2));*/

import {Meteor} from 'meteor/meteor';
import {Uname} from './../imports/api/user';


Meteor.startup(function (){
    Uname.insert({
        name: 'Sirawich',
        score: 1
    });
    Uname.insert({
        name: 'Voung',
        score: 55
    });
    Uname.insert({
        name: 'Miew',
        score: -1
    });

    console.log(Uname.find().fetch());
   
});


