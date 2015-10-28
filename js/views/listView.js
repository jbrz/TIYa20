function processContact(data) {
  return data.map(function(item) {
    return `
      <li class='contact' data-contact-id="${item.objectId}">
        <i class="fa fa-optin-monster"></i> ${item.Name}
      </li>
    `
  }).join('');
}

function listTemplate(data) {
  return `
    <h2 class="title"> Peeps </h2>
    <ul> ${processContact(data)} </ul>
  `;
}

export default listTemplate;