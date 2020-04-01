const createContacts = () => {
    const contactsDiv = document.createElement("div");
    contactsDiv.id = "contacts-container"
    const contactsHeader = document.createElement("h1");
    contactsHeader.id = "contacts-header"
    contactsHeader.textContent = "CONTACTS & RESERVATIONS"
    contactsDiv.appendChild(contactsHeader)

    const infoDiv = document.createElement("div");
    infoDiv.id = "info-container"
    const infoName = document.createElement("p");
    infoName.textContent = "TOKAIDO SUSHI RESTAURANT"
    const infoAddress = document.createElement("p");
    infoAddress.textContent = "Address: 27 Commerce Street - NY 10014"
    const infoPhone = document.createElement("p");
    infoPhone.textContent = "Phone: +1 252-9724-22185"
    const infoHours = document.createElement("p");
    infoHours.textContent = "Opening Hours: Tue-Sun 12:00 - 14:00; 18:00 - 23:00"
    const infoImg = document.createElement("div")
    infoImg.id = "info-img-container"
    infoDiv.appendChild(infoName);
    infoDiv.appendChild(infoAddress);
    infoDiv.appendChild(infoPhone);
    infoDiv.appendChild(infoHours);
    infoDiv.appendChild(infoImg)

    const formDiv = document.createElement("div");
    formDiv.id = "form-container"
    const form = document.createElement("form");
    form.id = "form"
    const nameLabel = document.createElement("label");
    nameLabel.innerHTML = "Name and Surname <input type='text' name ='name' required>"
    const emailLabel = document.createElement("label")
    emailLabel.innerHTML = "Email Address <input type='email' name ='email' required>"
    const phoneLabel = document.createElement("label");
    phoneLabel.innerHTML = "Telephone <input type='tel' name ='telephone' required>"
    const dateLabel = document.createElement("label");
    dateLabel.innerHTML = "Date <input type='date' name ='date'>"
    const peopleLabel = document.createElement("label");
    peopleLabel.innerHTML = "Nr. Persons <input type='number' min='1' name ='people'>"
    const hourLabel = document.createElement("label");
    hourLabel.textContent = "Time"
    const selectHour = document.createElement("select");
    hourLabel.appendChild(selectHour)
    const hours = ["12:00", "13:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    for (let i = 0; i < hours.length; i++) {
        let option = document.createElement("option");
        option.value = hours[i];
        option.text = hours[i];
        selectHour.appendChild(option)
    }
    const noteLabel = document.createElement("label")
    noteLabel.innerHTML = "Note <textarea id='comments' placeholder='Leave a comment here'</textarea>"
    const submitBtn = document.createElement("button")
    submitBtn.id = "submit-btn"
    submitBtn.textContent = "Submit"



    form.appendChild(nameLabel);
    form.appendChild(emailLabel);
    form.appendChild(phoneLabel);
    form.appendChild(dateLabel);
    form.appendChild(peopleLabel);
    form.appendChild(hourLabel);
    form.appendChild(noteLabel);
    form.appendChild(submitBtn)
    formDiv.appendChild(form)

    contactsDiv.appendChild(infoDiv);
    contactsDiv.appendChild(formDiv)

    return contactsDiv
}

export { createContacts }


{/* <form id="form">
<p id="form-title">CONTACT US</p>
<div id="separator"></div>
<label for="name">My name is:</label>
<input id="name" type="text" placeholder="Enter your name">
<label for="email">My email address is:</label>
<input id="email" type="email" placeholder="Enter your email address">
<label for="request">Comment or request:</label>
<textarea id="request" placeholder="Enter your comment or request"></textarea>
<button type="submit">SEND REQUEST</button>
</form> */}