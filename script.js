// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.
const scrollTop = document.getElementsByClassName("question-name")[0];
const choiceGrids = document.getElementsByClassName("choice-grid");
const result = document.getElementsByClassName("result")[0];
const resultH1 = document.getElementsByClassName("result-h1")[0];
const resultP = document.getElementsByClassName("result-p")[0];
const restart = document.getElementsByClassName("result-btn")[0];
const record = {
  one: false,
  two: false,
  three: false
};
const map = {
  one: "",
  two: "",
  three: ""
}

Array.from(choiceGrids).forEach((choiceGrid, index) => {
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
    map[currentChoice.dataset.questionId] = currentChoice.dataset.choiceId;

    finished = Object.values(record).every(bool => bool);
    if (finished) render();
  });
});

restart.addEventListener("click", () => {
  const allChoice = document.getElementsByClassName("choice");
  Array.from(allChoice).forEach((choice) => {
    choice.classList.toggle("selected", false);
    choice.classList.toggle("unchosen", false);
  });

  record.one = record.two = record.three = false;
  map.one = map.two = map.three = "";
  result.classList.add("hide");
  scrollTop.scrollIntoView({behavior: "smooth"});
});

function render() {
  if (map.two === map.three) {
    resultH1.textContent = `You got: ${RESULTS_MAP[map.two].title}`;
    resultP.textContent = RESULTS_MAP[map.two].contents;
  } else {
    resultH1.textContent = `You got: ${RESULTS_MAP[map.one].title}`;
    resultP.textContent = RESULTS_MAP[map.one].contents;
  }
  result.classList.remove("hide");
}