//Question 2
function question_2() {
  function headerFun(x) {
    document.write(`<h${x}> This is Header number ${x}</h${x}>`);
  }

  for (let i = 1; i <= 6; i++) {
    headerFun(i);
  }
}

question_2();

//Question 4

function question_4() {
  var studentsInfo = [
    ["ali", "ali@gmail.com", "01020222", "php", "ali.jpg"],
    ["mona", "mona@gmail.com", "0105555", "html", "mona.jpg"],
    ["ahmed", "ahmed@gmail.com", "010666", "laravel", "ahmed.jpg"],
  ];
  function printInfo() {
    let rows = "";
    studentsInfo.forEach(function (element) {
      rows += `
        <tr>
            <td> ${element[0]} </td>
            <td> ${element[1]} </td>
            <td> ${element[2]} </td>
            <td> ${element[3]} </td>
            <td> ${element[4]} </td>        
        </tr>
        `;
    });
    return rows;
  }

  document.write(`
    <table  border="4" >
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Language</th>
        <th>Photo</th>
    </tr>
    ${printInfo()}

    </table>

    `);
}

// question_4();

//Question 5

function question_5() {
  const jsTips = [
    "Use === instead of == to avoid unexpected type coercion.",
    "Always declare variables with let or const, never var.",
    "const prevents reassignment, but objects and arrays can still be modified.",
    "Use array.map() when you want to transform data, not for side effects.",
    "forEach() does not return a value; map() and filter() do.",
    "Arrow functions do not have their own this keyword.",
    "Use template literals (`) instead of string concatenation.",
    "Prefer async/await over then() for cleaner asynchronous code.",
    "Use Array.includes() instead of indexOf() for readability.",
    "JavaScript arrays and objects are passed by reference, not by value.",
  ];

  function randomNumber() {
    return Math.floor(Math.random() * jsTips.length);
  }

  function showTip() {
    let btn = document.createElement("button");
    btn.textContent = "Click Me !";
    document.body.appendChild(btn);

    let tip = document.createElement("p");
    document.body.appendChild(tip);

    btn.addEventListener("click", function () {
      tip.textContent = jsTips[randomNumber()];
    });
  }

  showTip();
}

// question_5();

//Question 7

function question_7() {
  let arrayOfChar = ["a", "b", "b", "j", "p", "b"];
  let charToRemove = "b";
  function removeCharFromArray(arr, c) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === c) {
        arr[i] = " ";
      }
    }

    let newArr = [];
    for (let j = 0, a = 0; j < arr.length; j++) {
      if (arr[j] !== " ") {
        newArr[a] = arr[j];
        a++;
      } else {
        continue;
      }
    }
    return newArr;
  }

  function print() {
    document.write(
      `The new Array after Remove
     ${charToRemove} is  => 
        "${removeCharFromArray(arrayOfChar, charToRemove).join('" | "')}"  `,
    );
  }

  print();
}

// question_7();

//Question 8

function question_8() {
  let myArray = [1, 2, 6, 5, 6, 8, 6, 9, 6];
  function calculateFreq(arr, num) {
    let freqNum = 0;

    for (let i = 0; i < arr.length; i++) {
      if (num === arr[i]) {
        freqNum++;
      }
    }

    return freqNum;
  }

  function printFreq(num) {
    let freq = calculateFreq(myArray, num);
    document.write(
      `The Number ${num} is repeated ${freq} Times in this Array. `,
    );
  }

  printFreq(6);
}

// question_8();
