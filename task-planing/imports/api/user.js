import {Mongo} from 'meteor/mongo';
//create MongoDb

//Mini Mongo Collection

export const Users = new Mongo.Collection('users');
export const Lol = new Mongo.Collection('lol');

