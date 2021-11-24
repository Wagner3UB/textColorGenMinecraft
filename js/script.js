 
  const itemValue = (button) => {
    let textArea = document.querySelector(".texts textarea").value;
  console.log(textArea);
  let listButtons = document.querySelector(".options");
  let oneButton = listButtons.getElementsByTagName("button");
  for (i=0; i<oneButton.length; i++ ){
    oneButton[i].value;
  }
  let buttonValue = button.value;
  textArea += buttonValue;
  document.querySelector(".texts textarea").value = textArea;
  console.log(buttonValue);
  console.log(textArea);
};
const generate = () => {
  let textArea = document.querySelector(".texts textarea").value;
  console.log(textArea.indexOf("&0"));
while(document.querySelector(".preview p").innerText.indexOf("&0") >= 0){
    if(textArea.indexOf("&") >= 0){
    document.querySelector(".preview p").innerText = '<span class="';
    console.log("textarea " + textArea);
  }; 
  if (textArea.indexOf("&0") >= 0){
    document.querySelector(".preview p").innerText += "black " ;
  };
  if (textArea.indexOf("&0")+1 !== "&"){
    document.querySelector(".preview p").innerText += '">';
  }
}


};

addEventListener('keyup', generate);

