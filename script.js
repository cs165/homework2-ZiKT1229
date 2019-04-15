// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.
const choiceGrids = document.getElementsByClassName("choice-grid");
const record = {
  one: false,
  two: false,
  three: false
};
const choiceGridsClone = [];

Array.from(choiceGrids).forEach((choiceGrid, index) => {
  choiceGridsClone[index] = choiceGrid.cloneNode(true);
  choiceGrid.addEventListener("click", function clickEvent(event) {
    let finished = Object.values(record).every(bool => bool);
    if (event.target === choiceGrid || finished) return;
    
    if (finished) {
      render();
    }

    const allChoice = choiceGrid.getElementsByClassName("choice");

    Array.from(allChoice).forEach((choice) => {
      choice.classList.toggle("selected", false);
      choice.classList.toggle("unchosen", true);
      choice.childNodes[3].src = "images/unchecked.png";
    });

    const currentChoice = event.target.parentNode !== choiceGrid ? event.target.parentNode : event.target;

    currentChoice.classList.toggle("selected");
    currentChoice.classList.toggle("unchosen");
    currentChoice.childNodes[3].src = "images/checked.png";
    record[currentChoice.dataset.questionId] = true;

    finished = Object.values(record).every(bool => bool);
    if (finished) render();
  });
});

function render() {
  console.log("test");
}