import {Mongo} from 'meteor/mongo';
//create MongoDb
export const Users = new Mongo.Collection('users');