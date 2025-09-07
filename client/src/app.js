const guestForm = document.getElementById("guest-form");

guestForm.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    //prevent data from going to the url
    event.preventDefault();
    //create template object using my form input
    const formData = new FormData(guestForm);
    //fill the input data in the template object
    const formValues = Object.fromEntries(formData);

    fetch("http://localhost:8080/add-guest", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body:JSON.stringify({formValues}),
    });
}



async function getGuestMessage(){
    const response = await fetch("http://localhost:8080/guest");

    const guestMessage = await response.json();
    console.log(guestMessage)
    
    const attendanceMessages = document.getElementById("attendance-messages");

    

    for(let i = 0; i < guestMessage.length; i++){
        
        //create an HTML element 5 elements
        const name = document.createElement("p");
        const contact = document.createElement("p");
        const address = document.createElement("p");
        const relationship = document.createElement("p");
        const message = document.createElement("p");
                
        //update the text content of the 5 elements
        name.textContent = guestMessage[i].name;
        contact.textContent = guestMessage[i].contact;
        address.textContent = guestMessage[i].address;
        relationship.textContent = guestMessage[i].relationship;
        message.textContent = guestMessage[i].message;
        
        


        //append the 5 elements on the dom 
        attendanceMessages.appendChild(name);
        attendanceMessages.appendChild(contact);
        attendanceMessages.appendChild(address);
        attendanceMessages.appendChild(relationship);
        attendanceMessages.appendChild(message);






    }

    
}
getGuestMessage()
