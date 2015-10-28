import $ from 'jQuery';
import _ from 'underscore';
import moment from 'moment';
import Backbone from 'backbone';
import Router from './Router';
import './ajaxSetup';
import contactsCollection from './contactsCollection';
import contactsModel from './contactsModel'


var appElement = $('.app');

var router = new Router(appElement);
router.start();

console.log('Hello, World');
