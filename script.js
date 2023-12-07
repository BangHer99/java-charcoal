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
        SecureToken : "e2c552b9-9d18-49c4-9671-9400e07c3de8", //add your token here
        To : document.getElementById("gmail").value, 
        From : "tuyulbanting58@gmail.com",
        Subject : "This is the subject",
        Body : "Name : " + document.getElementById("fname").value
              +"<br/> Email : " + document.getElementById("gmail").value //"im Interested with your product"
              +"<br/> Message : " + document.getElementById("msg").value
    }).then(
      message => alert("Success Sent Messages")
    );
});

