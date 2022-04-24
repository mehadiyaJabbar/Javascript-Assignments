
function greetings() {
  var checkBox = document.getElementById("firstLine");
  if (checkBox.checked == true){
     var greeting = "Welcome! to the page";
     alert(greeting);
  } else {
     alert("Error Execution");
  }
}

   function warning() {
        var checkBox = document.getElementById("secondLine");
        
        if (checkBox.checked == true){
        var greeting = "Error! Enter a valid password";
        alert(greeting);
        } else {
        alert("Error Execution");
        }
        }

function welcome() {
  var checkBox = document.getElementById("thirdLine");
 
  if (checkBox.checked == true){
     var welcome = "Welcome to JS land  \n Happy coding!";
     alert(welcome);
  } else {
     alert("Error Execution");
  }
}

function display() {
  var checkBox = document.getElementById("fourthLine");
 
  if (checkBox.checked == true){
   alert("Welcome to JS Land");
   alert("Happy Coding!");
  } else {
     alert("Error Execution");
  }
}

function myfunc() {
  var checkBox = document.getElementById("fifthLine");
 
  if (checkBox.checked == true){
   console.log("hello! I can run JS through my web browser console");
   alert("check browser console");
  } else {
     alert("Error Execution");
  }
}


function placement() {
  var checkBox = document.getElementById("seventhLine");
 
  if (checkBox.checked == true){
   alert("Hello!  read source code to check <script></script> placement");
  } else {
     alert("Error Execution");
  }
}