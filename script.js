const fname = document.getElementById('fname');
const lname = document.getElementById('gmail');
const msg = document.getElementById('msg');
const submit = document.getElementById('submit');


submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    // let ebody = `
    // <h1>First Name: </h1>${fname.value}
    // <br>
    // <h1>Last Name: </h1>${lname.value}
    // `;

    Email.send({
        SecureToken : "b205c030-8db6-41d6-97ee-5499036587d7", //add your token here
        To : document.getElementById("gmail").value, 
        From : "javacharcoal.bamni@gmail.com",
        Subject : "javacharcoal website visitors",
        Body : "Name : " + document.getElementById("fname").value
              +"<br/> Email : " + document.getElementById("gmail").value //"im Interested with your product"
              +"<br/> Message : " + document.getElementById("msg").value
    }).then(
      message => alert("Success Sent Messages")
    );
});

