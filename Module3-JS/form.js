

// 1. On click of button get values from elements.

// Best Practices [Name of function should indicate action(verb)]

function handleSubmit(){
  // 1. Get FirstName element
  const txtbFname = document.getElementById("txtbFname");
  // 2. Get alue of element
  const fname = txtbFname.value;
  updateStorage(fname);
  console.log(fname);

  const txtbLname = document.getElementById("txtbLname");
  // 2. Get alue of element
  const lname = txtbLname.value;
  console.log(lname);

  const txtbEmail = document.getElementById("txtbEmail");
  // 2. Get alue of element
  const email = txtbEmail.value;

  const indexOfAt = email.indexOf("@");
  const valid = email.lenght>(indexOfAt+4);
  if(indexOfAt<1 || !valid || !email.endsWith(".com")){
    alert("enter valid email");
  }
  console.log(email);

  const txtbPassword = document.getElementById("txtbPassword");
  // 2. Get alue of element
  const password = txtbPassword.value;
  console.log(password);

  const inputDOB = document.getElementById("inputDOB");
  // 2. Get alue of element
  const dob = inputDOB.value;
  console.log(dob);

  // Get elements by name
  const genderButtons = document.getElementsByName("gender");
  const isMale = genderButtons[0].checked;
  const isFemale = genderButtons[1].checked;
  console.log(isMale);
  console.log(isFemale);
  
  const lblResult = document.getElementById("lblResult");
  const result = `Name = ${fname} ${lname}, 
  Email: ${email}, Gender = ${isMale== true ? 'Male' : 'Female'}`;
  console.log(result);
  lblResult.style.display="inline";
  lblResult.innerText = result;
  lblResult.style.backgroundColor='yellow';
}

function handleNameInput(){
  const fnameResult = document.getElementById("fnameResult");
  const nameinput = document.getElementById("txtbFname");
  fnameResult.innerText = nameinput.value;
}


function updateStorage(firstname){
   localStorage.setItem("fname", firstname);
   sessionStorage.setItem("fname", firstname);
}


function updateForm(){
  const txtbFname = document.getElementById("txtbFname");
  txtbFname.value = localStorage.getItem("fname");
}