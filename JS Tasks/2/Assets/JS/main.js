function createInput(type = "text", placeholder = "", name = "") {
  const input = document.createElement("input");

  input.type = type;
  input.placeholder = placeholder;
  input.name = name;

  return input;
}

function createInputWithButton(placeholder = "") {
  const div = document.createElement("div");
  div.className = "Input-Button";

  const input = createInput("", placeholder, "");
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "Okay";

  div.appendChild(input);
  div.appendChild(button);

  return { div, input, button };
}

/*
1- Take array size and check  
2- Take array elements and check
*/

const arraySize = createInputWithButton("Enter Your Array Size ");
document.body.appendChild(arraySize.div);
let size = 0;
let array = [];
let currentIndex = 0;

arraySize.button.addEventListener("click", function () {
  if (!(isNaN(arraySize.input.value) === true || arraySize.input.value == "")) {
    size = Number(arraySize.input.value);
    arraySize.div.style.display = "none";

    // Create the first element input
    showNextInput();
  } else {
    alert("Enter a Valid Number");
    arraySize.input.value = "";
    arraySize.input.focus();
  }
});

function showNextInput() {
  if (currentIndex < size) {
    const elementInput = createInputWithButton(
      `Enter element number ${currentIndex + 1}`,
    );
    document.body.appendChild(elementInput.div);
    elementInput.input.focus();

    elementInput.button.addEventListener("click", function () {
      if (
        !(
          isNaN(elementInput.input.value) === true ||
          elementInput.input.value == ""
        )
      ) {
        array.push(Number(elementInput.input.value));
        elementInput.div.style.display = "none";
        currentIndex++;
        if (currentIndex < size) {
          showNextInput();
        } else {
          showList();
        }
      } else {
        alert("Enter a Valid Number");
        elementInput.input.value = "";
        elementInput.input.focus();
      }
    });
  }
}

const choiceList = [
  "a : Display array (same order) ",
  "b : Display array (ascending order) ",
  "c : Display array (descending order) ",
  "d : Display reversed array ",
  "e : Display even numbers only ",
  "f : Display numbers divisible by a given number ",
  "g : Display new array with 30% discount ",
  "h : Display string of array numbers concatenated with *** ",
  "i : Refresh/Restart the page ",
];

function showList() {
  const ul = document.createElement("ul");
  choiceList.forEach((element, index) => {
    const li = document.createElement("li");
    li.textContent = `${element}`;
    ul.appendChild(li);
  });
  document.body.appendChild(ul);

  let choice = createInputWithButton("Enter Your choice ");
  document.body.appendChild(choice.div);

  choice.button.addEventListener("click", function () {
    const choiceValue = choice.input.value.toLowerCase().trim();
    doAsUserChoose(choiceValue);
  });
}

function doAsUserChoose(choiceValue) {
  switch (choiceValue) {
    case "a":
      choiceA();
      break;
    case "b":
      choiceB();
      break;
    case "c":
      choiceC();
      break;
    case "d":
      choiceD();
      break;
    case "e":
      choiceE();
      break;
    case "f":
      choiceF();
      break;
    case "g":
      choiceG();
      break;
    case "h":
      choiceH();
      break;
    case "i":
      location.reload();
      break;
    default:
      alert("Invalid choice! Please enter a letter from a to i");
      break;
  }
}

function choiceA() {
  const resultDiv = document.createElement("div");
  resultDiv.innerHTML = `<h3> Array In Same Order :</h3>
    <p>[${array.join(", ")}]</p>
    `;
  document.body.appendChild(resultDiv);
}
function choiceB() {
  const resultDiv = document.createElement("div");
  const sortedArray = [...array].sort((a, b) => a - b);
  resultDiv.innerHTML = `<h3> Array In Ascending Order :</h3>
    <p>[${sortedArray.join(", ")}]</p>
    `;
  document.body.appendChild(resultDiv);
}
function choiceC() {
  const resultDiv = document.createElement("div");
  const sortedArray = [...array].sort((a, b) => b - a);
  resultDiv.innerHTML = `<h3> Array In Descending Order :</h3>
    <p>[${sortedArray.join(", ")}]</p>
    `;
  document.body.appendChild(resultDiv);
}
function choiceD() {
  const resultDiv = document.createElement("div");
  resultDiv.innerHTML = `<h3>  Reversed Array  :</h3>
    <p>[${array.reverse().join(", ")}]</p>
    `;
  document.body.appendChild(resultDiv);
}
function choiceE() {
  const evenNumbers = array.filter((num) => num % 2 === 0);
  if (evenNumbers.length === 0) {
    alert("No even Numbers exist");
  } else {
    const resultDiv = document.createElement("div");
    resultDiv.innerHTML = `<h3>Even numbers only:</h3><p>[${evenNumbers.join(", ")}]</p>`;
    document.body.appendChild(resultDiv);
  }
}

function choiceF() {
  const divisorInput = createInputWithButton("Enter the divisor Number");
  document.body.appendChild(divisorInput.div);

  divisorInput.button.addEventListener("click", () => {
    const divisor = Number(divisorInput.input.value);
    if (!isNaN(divisor) && divisor !== 0) {
      const divisibleNumbers = array.filter((num) => num % divisor === 0);
      divisorInput.div.style.display = "none";

      const resultDiv = document.createElement("div");
      resultDiv.innerHTML = `<h3>Numbers divisible by ${divisor}:</h3><p>[${divisibleNumbers.join(", ")}]</p>`;
      document.body.appendChild(resultDiv);
    } else {
      alert("Enter a valid non-zero number");
      divisorInput.input.value = "";
      divisorInput.input.focus();
    }
  });
}

function choiceG() {
  const discountedArray = array.map((num) => num * 0.7);
  const resultDiv = document.createElement("div");
  resultDiv.innerHTML = `<h3>Array with 30% discount:</h3><p>[${discountedArray.join(", ")}]</p>`;
  document.body.appendChild(resultDiv);
}
function choiceH() {
  const concatenatedString = array.join("***");
  const resultDiv = document.createElement("div");
  resultDiv.innerHTML = `<h3>Concatenated with ***:</h3><p>${concatenatedString}</p>`;
  document.body.appendChild(resultDiv);
}
