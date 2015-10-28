import Backbone from 'backbone';
import contactsModel from './contactsModel';

let contactsCollection = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/Contacts',

  model: contactsModel,

  parse: function(data) {
    return data.results;
  }

})

export default contactsCollection;