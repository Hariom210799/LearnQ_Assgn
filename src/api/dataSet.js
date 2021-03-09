// const csv = require("csvtojson");
// const fs = require("fs");
const Papa = require("papaparse");
const csvFilePath = "../assets/learnqdata.csv";
// csv()
//   .fromFile(csvFilePath)
//   .then((jsonObj) => {
//     console.log("Our JSON converted Array :", jsonObj);
//   });

Papa.parse(csvFilePath, {
  complete: function (result) {
    // console.log(result);
  },
});

const dataSet = [
  {
    question: "An algebraic expression containing three terms is called a",
    option: ["monomial", "binomial", "trinomial", "all of these"],
    correct: 3,
    marks: 0,
    difficulty_level: "Easy",
  },
  {
    question:
      "Number of terms in the expression 3.x^2.y - 2.y^2.z - z^2.x + 5 is",
    option: [2, 3, 4, 5],
    correct: 3,
    marks: 0,
    difficulty_level: "Easy",
  },
  {
    question: "The terms of expression 4.x^2 - 3.x.y are:",
    option: [
      "4.x^2 and -3.x.y",
      "4.x^2 and 3.x.y",
      "4.x^2 and -x.y",
      "x^2 and x.y",
    ],
    correct: 1,
    marks: 0,
    difficulty_level: "Easy",
  },
  {
    question: "Factors of -5.x^2.y^2.z are",
    option: ["-5.x.y.z", "-5.x^2.y.z", "-5.x.x.y.y.z", "-5.x.y.z^2"],
    correct: 3,
    marks: 0,
    difficulty_level: "Medium",
  },
  {
    question: "Coefficient of x in -9.x.y^2.z is",
    option: ["9.y.z", "-9.y.z", "9.y^2.z", "-9.y^2.z"],
    correct: 4,
    marks: 0,
    difficulty_level: "Medium",
  },
  {
    question: "The subtraction of 5 times of y from x is",
    option: ["5x - y", "y - 5x", "x - 5y", "5y - x"],
    correct: 3,
    marks: 0,
    difficulty_level: "Easy",
  },
  {
    question:
      "The side length of the top of a square table is x. The expression for perimeter is:",
    option: ["4 + x", "2x", "4x", "8x"],
    correct: 3,
    marks: 0,
    difficulty_level: "Medium",
  },
  {
    question:
      "The expression for the number of diagonals that we can make from one vertex of a n sided polygon is:",
    option: ["2n + 1", "n - 2", "5n + 2", "n - 3"],
    correct: 4,
    marks: 0,
    difficulty_level: "Hard",
  },
  {
    question: "123.x^2.y - 138.x^2.y is a like term of",
    option: ["10.x.y", "-15.x.y", "-15.x.y^2", "10.x^2.y"],
    correct: 4,
    marks: 0,
    difficulty_level: "Hard",
  },
  {
    question: "The value of 3.x^2 - 5.x + 3 when x = 1 is",
    option: [1, 0, -1, 11],
    correct: 1,
    marks: 0,
    difficulty_level: "Easy",
  },
  {
    question: "(2^20 ÷ 2^15) × 2^3 =",
    option: ["2^15", "2^8", "2^5", "None of these"],
    correct: 2,
    marks: 0,
    difficulty_level: "Hard",
  },
  {
    question: "(5/6)^0 =",
    option: [1, "6/5", 0, "None of these"],
    correct: 1,
    marks: 0,
    difficulty_level: "Easy",
  },
  {
    question: "(2^2)^n = (2^3)^4, then n =",
    option: [4, 3, 12, 6],
    correct: 4,
    marks: 0,
    difficulty_level: "Medium",
  },
  {
    question: "(-7/5)^-1 =",
    option: ["5/7", "-5/7", "7/5", "None of these"],
    correct: 2,
    marks: 0,
    difficulty_level: "Medium",
  },
  {
    question: "81^5 ÷ (3^2)^5 =",
    option: ["3^10", "3^2", "3^5", "None of these"],
    correct: 1,
    marks: 0,
    difficulty_level: "Medium",
  },
  {
    question: "(8^2 × 8^4) - 2^18 =",
    option: ["2^2", "2^4", 0, "None of these"],
    correct: 3,
    marks: 0,
    difficulty_level: "Hard",
  },
  {
    question: "(3^7) ÷ (81 × 3^3) =",
    option: [3, "3^2", "3^0", "None of these"],
    correct: 3,
    marks: 0,
    difficulty_level: "Hard",
  },
  {
    question: "(1/4)^-3 - (1/3)^-3 =",
    option: [37, "1/37", -37, "-1/37"],
    correct: 1,
    marks: 0,
    difficulty_level: "Medium",
  },
  {
    question: "(10 × 5^(n+1)+ 25 × 5^n) ÷ (3 × 5^(n+2)+ 10 × 5^(n+1))",
    option: ["3/5", 1, 0, 5],
    correct: 1,
    marks: 0,
    difficulty_level: "Hard",
  },
  {
    question: "(-1)^50 × (-1)^51 × (1)^100 × (-1)^101 =",
    option: [-1, 1, 0, 2],
    correct: 2,
    marks: 0,
    difficulty_level: "Easy",
  },
  {
    question:
      "Find the mode for the data set, which shows the heights( in inches ) of 10 students in a class: 60, 65, 63, 62, 65, 70, 62, 68, 60, 65",
    option: [62, 65, 70, 60],
    correct: 2,
    marks: 0,
    difficulty_level: "Hard",
  },
];

export default dataSet;
