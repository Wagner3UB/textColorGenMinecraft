let textArea = document.querySelector(".texts textarea").innerHTML;

const itemValue = (button) => {
  let listButtons = document.querySelector(".options");
  let oneButton = listButtons.getElementsByTagName("button");
  for (i=0; i<oneButton.length; i++ ){
    oneButton[i].value;
  }
  let buttonValue = button.value;
  textArea += buttonValue;
  console.log(buttonValue);

  switch (buttonValue) {
    case "&0":
      document.querySelector(".preview p").innerHTML += '<span class="0"><span>'; 
      break;
    case "&1":
      document.querySelector(".preview p").innerHTML += '<span class="1"><span>'; 
      break;

  }
};
const letterKeyboard = () =>{

}

