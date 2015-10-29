import Backbone from 'backbone';
import $ from 'jQuery';

import contactsCollection from './contactsCollection';
import contactsModel from './contactsModel';
import {newContact, listTemplate, contactTemplate} from './views';

let Router = Backbone.Router.extend({

  routes: {
    ''                    :  'contactsList', 
    'contacts/:objectId'  :  'showContact',
    'newContact'          :  'newContact', 


  },

  initialize: function(appElement) {
    this.$el = appElement;

    this.contacts = new contactsCollection();

    let router = this;

// Welcome to the Jungle
    this.$el.on('click','.contact',(event) => {
      let $li = $(event.currentTarget);
      var contactId = $li.data('contact-id');
      router.navigate(`contactView/${contactId}`);
      router.showContact(contactId);
    });

// Take me down to paradise city
    this.$el.on('click','.contactsList',(event) => {
      let $li = $(event.currentTarget);
      router.navigate('');
      router.contactsList();
    });

// 
    this.$el.on('click', '.back', (event) => {
      let $button = $(event.currentTarget);
      let route = $button.data('to');
      this.navigate(route, {trigger: true});
    });

// New Contact
    this.$el.on('click', '#newContact', (event) => {
      console.log('success!');
      this.navigate(`newContact`, {trigger: true});
    });
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

  newContact: function() {
    this.$el.html(newContact);

    $('#save').click(function() {
      var newContact = new contactsModel ({
        Name: $('#newName').val(),
        phone: $('#newNumber').val(),
        email: $('#newEmail').val(),
        loc: $('#newLocation').val()
      });
      newContact.save();
      router.contactsList();
    });
  },

  start: function() {
    Backbone.history.start();
  }

});

export default Router;