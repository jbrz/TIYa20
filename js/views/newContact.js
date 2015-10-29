import $ from 'jquery';
import contactsModel from '../contactsModel';

export default function newTemplate(data) {
  return `
    <div class="newDiv">
      <h2 class="title">New Contact</h2>
      <form class="newContact">
        <input type="text" id="newName" placeholder="Name"></input>
        <input type="text" id="newEmail" placeholder="E-mail Address"></input>
        <input type="text" id="newNumber" placeholder="Phone Number"></input>
        <input type="text" id="newLocation" placeholder="Location"></input>
        <button class="back" id="save">Save</button>
      </form>
    </div>
  `;
};