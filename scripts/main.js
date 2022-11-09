const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Kevyn.jfif") {
    myImage.setAttribute("src", "images/KevynIA.jfif");
  } else {
    myImage.setAttribute("src", "images/Kevyn.jfif");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome, ${myName}!`;
    }
  }
  

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome, ${storedName}!`;
  }
  
  myButton.onclick = () => {
    setUserName();
  };
  
  