let textArea = document.querySelector(".texts textarea").innerHTML;

const itemValue = (button) => {
  let listButtons = document.querySelector(".options");
  let oneButton = listButtons.getElementsByTagName("button");
  for (i=0; i<oneButton.length; i++ ){
    oneButton[i].value;
  }
  let buttonValue = button.value;
  textArea += buttonValue;
  document.querySelector(".texts textarea").innerHTML = textArea;
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
const letterKeyboard = (item) =>{
  item = item || window.event;
  let code = item.which || item.keyCode;
  console.log(code);
  console.log(String.fromCharCode(code));

  let valueKey = document.querySelector("textarea").value;
  if(code == 8){
    let tamanho = document.querySelector(".preview p").innerHTML.length;
    document.querySelector(".preview p").innerHTML = document.querySelector(".preview p").innerHTML.slice(0,--tamanho);
    
  } else {
    if(document.querySelector(".preview p").innerHTML == ''){
    document.querySelector(".preview p").innerHTML += valueKey;
    } else {
    document.querySelector(".preview p").innerHTML += String.fromCharCode(code);
    }
  }
}

