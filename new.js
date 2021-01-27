let usercontainer = document.getElementById("new-user-detailes-container");
let userE1 = document.getElementById("add-users");
let popupE1 = document.getElementsByClassName("popup")

userE1.addEventListener("click",function(){
  popupE1[0].classList.add("active");
  });
  
function getUserListFromLocalStorage() {
  let stringifiedinputlist = localStorage.getItem("inputlist");
  let parsedinputlist = JSON.parse(stringifiedinputlist);
  if (parsedinputlist == null) {
    return [];
  } else {
    return parsedinputlist;
  }
}

let inputlist = getUserListFromLocalStorage();

let inputlistCount = inputlist.length;


function onAddInputs() {
  let nameinputelement = document.getElementById("name-input");
  let nameinputelementvalue = nameinputelement?.value;

  if(nameinputelementvalue === ""){
    alert("Enter Valid Text");
    return;
  }
  

  let mailinputelement = document.getElementById("email-input");
  let mailinputelementvalue = mailinputelement?.value;

  if(mailinputelementvalue === ""){
    alert("Enter Valid Text");
    return;
  }

  
  let mobileinputelement = document.getElementById("mobile-input");
  let mobileinputelementvalue = mobileinputelement?.value;

  if(mobileinputelementvalue === ""){
    alert("Enter Valid Text");
    return;
  }

  let aboutinputelement = document.getElementById("about-input");
  let aboutinputelementvalue = aboutinputelement?.value;
  
  if(aboutinputelementvalue === ""){
    alert("Enter Valid Text");
    return;
  }

  inputlistCount = inputlistCount + 1;

  let newinput = {
    name: nameinputelementvalue,
    mail: mailinputelementvalue,
    mobile: mobileinputelementvalue,
    about: aboutinputelementvalue,
    uniqueNo: inputlistCount
  };

  inputlist.push(newinput);

  createAndAppendInput(newinput);
  mailinputelement.value = "";
  nameinputelement.value = "";
  mobileinputelement.value = "";
  aboutinputelement.value = "";
};

let popE = document.getElementById("add-popup-btn");
  
  popE.onclick = function(){
    onAddInputs();
    popupE1[0].classList.remove("active");
  };

  function onDeleteInput(inputId) {
    let inputElement = document.getElementById(inputId);
    usercontainer.removeChild(inputElement);
  
  let deleteElimentIndex = inputlist.findIndex(function(eachinput) {
    let eachinputid = "input" + eachinput.uniqueNo;
    if (eachinputid === inputId) {
      return true;
    } else {
      return false;
    }
  
  });
  inputlist.splice(deleteElimentIndex, 1);
}

  function onInputStatus(checkboxId) {
    let checkboxElement = document.getElementById(checkboxId);
    
    checkboxElement.classList.toggle('checked');
  }

  function createAndAppendInput(input) {
  
    let inputId = 'input' + input.uniqueNo;
    let checkboxId = 'checkbox' + input.uniqueNo;
  
    let inputElement = document.createElement("li");
    inputElement.classList.add("bg-common","d-flex","flex-row");
    inputElement.id = inputId;
    usercontainer.appendChild(inputElement);
  
    let inputE1 = document.createElement("input");
    inputE1.type = "checkbox";
    inputE1.id = checkboxId;
  
    inputE1.onclick = function() {
      onInputStatus(checkboxId);
    };
    inputE1.classList.add("mt1");
    inputElement.appendChild(inputE1);
  
    let nameE = document.createElement("p");
    nameE.classList.add("col-3");
    nameE.textContent = input.name;
    inputElement.appendChild(nameE);
  
    let mailE = document.createElement("p");
    mailE.classList.add("col-3");
    mailE.textContent = input.mail;
    inputElement.appendChild(mailE);
  
    let mobileE = document.createElement("p");
    mobileE.classList.add("col-2");
    mobileE.textContent = input.mobile;
    inputElement.appendChild(mobileE);
  
    let aboutE = document.createElement("p");
    aboutE.classList.add("col-3");
    aboutE.textContent = input.about;
    inputElement.appendChild(aboutE);

    let deleteIconContainer = document.createElement("div");
    inputElement.appendChild(deleteIconContainer);
  
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far","fa-trash-alt","delete-icon","ml-auto");

    deleteIcon.onclick = function() {
      onDeleteInput(inputId);
    };

    inputElement.appendChild(deleteIcon);
  }

  for (let input of inputlist) {
    createAndAppendInput(input);
  }

