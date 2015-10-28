function contactTemplate(data) { 
  return `
    <h2 class="contactsList title"> Contacts </h2>
    <ul>
      <li> <i class="fa fa-odnoklassniki-square"> </i> <span>Name:</span> ${ data.Name }</li>
      <li> <i class="fa fa-phone-square"></i> <span>Phone: </span>${ data.Number }</li>
      <li> <i class="fa fa-paper-plane"></i> <span>Email:</span> ${ data.email }</li>
      <li> <i class="fa fa-location-arrow"></i> <span>Location:</span> ${ data.loc }</li>
    </ul>
  `;
};

export default contactTemplate;