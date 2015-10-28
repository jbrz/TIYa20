export default function newTemplate(data) {
  return `
    <div class="newDiv">
      <form class="newContact">
        <input id="newName">${data.Name.put()}</input>
        <input id="newEmail">${data.email.put()}</input>
        <input id="newNumber">>${data.Number.put()}</input>
        <input id="newLocation">>${data.loc.put()}</input>
        <button class="saveContact">Save</button>
      </form>
    </div>
  `;
};