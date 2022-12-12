const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Kevyn.jfif") {
    myImage.setAttribute("src", "images/KevynIA.jfif");
  } else {
    myImage.setAttribute("src", "images/Kevyn.jfif");
  }
};

let padding = document.querySelector("nav").offsetHeight + "px";
document.body.style.paddingTop=padding;
  
  