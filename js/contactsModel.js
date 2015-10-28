import Backbone from 'backbone';

let contactsModel = Backbone.Model.extend({

  urlRoot: 'https://api.parse.com/1/classes/Contacts',

  idAttribute: 'objectId'

});

export default contactsModel;