// Q1
// let states = [
//     "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
//     "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
//     "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
//     "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
//     "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
//     "Uttar Pradesh", "Uttarakhand", "West Bengal"
// ];

// let filteredStates = states.filter(state => !/^[AEIOU]/i.test(state));

// console.log(filteredStates);

// Q2
// let str = 'I love my India';

// let reversedStr = str.split(' ').reverse().join(' ');

// console.log(reversedStr);

//Q3
let string = 'INDIA';
let array = string.split('');
array.splice(3, 0, 'O', 'N', 'E', 'S');

let output = array.join('');

console.log(output);

//Q4

// function countConsonantsAndVowels(str) {
//     str = str.toLowerCase();

//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     const consonants = 'bcdfghjklmnpqrstvwxyz';

//     let vowelCount = 0;
//     let consonantCount = 0;

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];

//         if (vowels.includes(char)) {
//             vowelCount++;
//         }

//         if (consonants.includes(char)) {
//             consonantCount++;
//         }
//     }


//     return {
//         vowels: vowelCount,
//         consonants: consonantCount
//     };
// }


// const str = "Hello World! This is a test string.";
// const counts = countConsonantsAndVowels(str);
// console.log("Vowel count:", counts.vowels);
// console.log("Consonant count:", counts.consonants);


//Q5

// function correctfn(sentence, wrong, correct) {
//     const regex = new RegExp(`\\b${wrong}\\b`, 'gi');

//     const correctedSentence = sentence.replace(regex, correct);

//     return correctedSentence;
// }

// const sentence1 = "The colr of the sky is blue.";
// const correctedSentence1 = correctfn(sentence1, "colr", "color");
// console.log("Original sentence 1:", sentence1);
// console.log("Corrected sentence 1:", correctedSentence1);

// const sentence2 = "I ate an apple and an orage for lunch.";
// const correctedSentence2 = correctfn(sentence2, "orage", "orange");
// console.log("Original sentence 2:", sentence2);
// console.log("Corrected sentence 2:", correctedSentence2);

//Q6


// const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
// const answer = inputArr.filter(number => number > 5);

// console.log("Numbers greater than 5:", answer);

//Q7

// const students = [
//     { name: "Ram", scores: [80, 70, 60] },
//     { name: "Mohan", scores: [80, 70, 90] },
//     { name: "Sai", scores: [60, 70, 80] },
//     { name: "Hemang", scores: [90, 90, 80, 80] },
// ];

// const output = students.map(student => {

//     const sum = student.scores.reduce((acc, score) => acc + score, 0);

//     const average = sum / student.scores.length;

//     return {
//         name: student.name,
//         average: average
//     };
// });

// console.log(output);

//Q8
// function repeatedSumOfDigits(num) {
//     while (num >= 10) {
//         num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
//     }
//     return num;
// }

// const num = 456;
// const result = repeatedSumOfDigits(num);
// console.log(`Single digit result is:`, result);

//Q9

// function countWords(paragraph) {
//     paragraph = paragraph.trim();
//     let words = paragraph.split(/\s+/);

//     return words.length;
// }

// let paragraph1 = "   The quick brown fox jumps over the lazy dog.   ";
// let wordCount1 = countWords(paragraph1);
// console.log("Word count:", wordCount1);

//Q10

// function reverseString(input) {
//     return input.split('').reverse().join('');
// }

// let inputString = "Hello";
// let reversedString = reverseString(inputString);
// console.log("Reversed string:", reversedString);

//Q11

// let students = [
//     {
//         student1: {
//             subject1: 44,
//             subject2: 56,
//             subject3: 87,
//             subject4: 97,
//             subject5: 37
//         }
//     },
//     {
//         student2: {
//             subject1: 44,
//             subject2: 56,
//             subject3: 87,
//             subject4: 97,
//             subject5: 37
//         }
//     },
//     {
//         student3: {
//             subject1: 44,
//             subject2: 56,
//             subject3: 87,
//             subject4: 97,
//             subject5: 37
//         }
//     }
// ];

// function calculateAverage(scores) {
//     let sum = 0;
//     let count = 0;

//     for (let subject in scores) {
//         if (scores.hasOwnProperty(subject)) {
//             sum += scores[subject];
//             count++;
//         }
//     }

//     return Math.round(sum / count);
// }
// let output = students.map(studentObj => {
//     let studentName = Object.keys(studentObj)[0];
//     let averageScore = calculateAverage(studentObj[studentName]);

//     return {
//         [studentName]: {
//             average: averageScore
//         }
//     };
// });

// console.log(output);