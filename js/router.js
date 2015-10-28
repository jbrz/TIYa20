import Backbone from 'backbone';
import $ from 'jQuery';

import contactsCollection from './contactsCollection';
import contactsModel from './contactsModel';
import {listTemplate, contactTemplate} from './views';


let Router = Backbone.Router.extend({

  routes: {
    ''                    :  'contactsList',
    'contacts/:objectId'  :  'viewContact',

  },

  initialize: function(appElement) {
    this.$el = appElement;

    this.contacts = new contactsCollection();

    let router = this;

    this.$el.on('click', '.contact', function(event){
      let $li = $(event.currentTarget);
      var contactId = $li.data('contact-id');
      router.navigate(`contactView/${contactId}`);
      router.showContact(contactId);
    });

    this.$el.on('click', '.contactsList', function(event){
      let $li = $(event.currentTarget);
      router.navigate('');
      router.contactsList();
    })
  },

  contactsList: function() {
    this.contacts.fetch().then(function(){
      this.$el.html(listTemplate(this.contacts.toJSON()) );
    }.bind(this));
  },

  showContact: function(contactId) {
    
    let contact = this.contacts.get(contactId);
    if (contact) {
      this.$el.html(contactTemplate(contact.toJSON()) );
    } else {
      let router = this;
      contact = this.contacts.add({objectId: contactId});
      contact.fetch().then(function() {
        router.$el.html(contactTemplate(contact.toJSON()) );
      });
    }
  },

  start: function() {
    Backbone.history.start();
  }

});

export default Router;