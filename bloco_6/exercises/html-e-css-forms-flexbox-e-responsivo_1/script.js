const selectState = document.querySelector("#selectState");
const inputs = document.querySelectorAll("input");
function createState(state){
  let option = document.createElement("option");
  option.innerHTML = state;
  option.className = "state";
  selectState.appendChild(option);
}
function createBrazilStates(){
  const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];
  for(let state of states){
    createState(state);
  }
}
function stopDefAction(event){
  event.preventDefault();
}
function stopAllInputs(){
  for(input of inputs){
    input.addEventListener('click', stopDefAction);
  }
}
function appendInputs(curriculum){
  for(let input of inputs){
    let paragraph = document.createElement("h1");
    paragraph.innerText = input.value;
    curriculum.appendChild(paragraph);
  }
}
function createCurriculum(){
  let curriculum = document.createElement("div");
  appendInputs(curriculum);
  document.body.appendChild(curriculum);
}
function setCreateCurriculum(){
  let button = document.querySelector("#submitCurriculum");
  button.addEventListener("click", function (event) {
    stopAllInputs();
    createCurriculum();
  })
}
setCreateCurriculum();
createBrazilStates();