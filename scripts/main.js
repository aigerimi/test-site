var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/google.jpg') {
      myImage.setAttribute ('src','images/google2.png');
    } else {
      myImage.setAttribute ('src','images/google.jpg');
    }
}



 function multiply(num1, num2) {
 	var result = num1 + num2
 	return result
 }
 var result = multiply(4,8);
 console.log(result)
  
  var result2 = multiply(5,8)
  console.log(result2);

  function subtract(num1,num2) {
  	return num1 - num2;
  }
  var result = subtract(9,3)
  console.log(result, 'subtract');

  function divide(num1,num2) {
  	return num1 / num2;
  }
  var result = divide(18,2)
  console.log(result);

  document.querySelector('html').onclick = function() {
  	console.log('test');
  }
  console.log(document)


  var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}