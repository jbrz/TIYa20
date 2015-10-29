function contactTemplate(data) { 
  return `
    <h2 class="contactsList title"> Contacts </h2>
    <ul>
      <li> <i class="fa fa-odnoklassniki-square"> </i> <span>Name:</span> ${data.Name}</li>
      <li> <i class="fa fa-phone-square"></i> <span>Phone: </span>${data.phone}</li>
      <li> <i class="fa fa-paper-plane"></i> <span>Email:</span> <a href="mailto:${ data.email}">${data.email}</a></li>
      <li> <i class="fa fa-location-arrow"></i> <span>Location:</span> ${data.loc}</li>
    </ul>
  `;
};

export default contactTemplate;