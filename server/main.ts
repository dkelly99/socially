import {Meteor} from 'meteor/meteor';
import {loadParties} from './load-parties.ts';

Meteor.startup(loadParties);