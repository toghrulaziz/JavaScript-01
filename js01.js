// In order to request data from the user, use prompt(), and print the result using alert().

// 1. Ask the user for their name and print "Hello, their name!" in response.

// var name = prompt("Insert your name:")
// alert("Hello, " + name + '!')


// 2. Ask the user for the year of their birth, calculate how old they are and display the result. Specify the current year as a constant in the code.

// const currentYear = new Date().getFullYear()
// var birthYear = prompt("Insert year of your birth:")
// var age = currentYear - parseInt(birthYear)
// alert("Your age is: " + age)



// 3. Ask the user for the length of the square side and output the perimeter of that square.

// var length = prompt("Insert length of the square:")
// var perimeter = 4 * length
// alert("The perimeter of the square is " + perimeter)


// 4. Ask the user for the circle radius and output the area of such circle.

// var radius = prompt("Insert radius of the circle:")
// var area = Math.PI * Math.pow(parseFloat(radius), 2);
// alert("The area of the circle is: " + area);



// Task branch operator


// 1. Ask the user for their age and determine who they are: a child (0–12), a teenager (12–18), an adult (18–60), or a retiree (60–...).

// var age = prompt("Insert your age:")

// if(age >= 0 && age <= 12){
//     alert("You are a child!")
// }
// else if(age >= 13 && age <= 18){
//     alert("You are a teenager!")
// }
// else if(age >= 19 && age <= 60){
//     alert("You are an adult!")
// }
// else if(age >= 61){
//     alert("You are a retiree!")
// }
// else{
//     alert("Invalid input!")
// }




// 2. Ask the user for a number from 0 to 9 and output a special character located on this key (1–!, 2–@, 3–#, and so on).


// var number = prompt("Insert a number between 0 and 9:")
// var specialCharacters = ["!", "@","#","%","^","&","*","("]

// if(number >= 0 && number <= 9){
//     var specialCharacter = specialCharacters[number]
//     alert("The special character is: " + specialCharacter)
// }
// else{
//     alert("Invalid input!")
// }



// 3. Ask the user 3 questions, each question has 3 answers. For each correct answer, 2 points are awarded. After the questions are over, output the number of scored points.

// var score = 0

// var question1 = prompt("Question 1: What is the capital of Azerbaijan?\nA) Ankara\nB) Paris\nC) Baku").toUpperCase()
// if(question1 === "C"){
//     score += 2 
// }

// var question2 = prompt("Question 2: What is the capital of Spain?\nA) Madrid\nB) Baku\nC) Moscow").toUpperCase();
// if (question2 === "A") {
//     score += 2
// }

// var question2 = prompt("Question 2: What is the capital of France?\nA) Paris\nB) Oslo\nC) Copenhagen").toUpperCase();
// if (question2 === "A") {
//     score += 2
// }


// alert("Your score id: " + score)




// 4. Ask the user for a year and check whether it is a leap year or not. A leap year is either a multiple of 400 or 4, and not a multiple of 100

// var year = prompt("Please enter a year:");
// if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
//     alert(year + " is a leap year.");
// } else {
//     alert(year + " is not a leap year.");
// }





// Loop tasks



// 1. Calculate the sum of all numbers in a range specified by the user


// var start = parseInt(prompt("Insert the start of the range:"))
// var end = parseInt(prompt("Insert the end of the range:"))
// var sum = 0

// for(var i = start; i <= end; i++){
//     sum += i
// }

// alert("The sum of numbers in the range [" + start + ", " + end + "] is: " + sum)




// 2. Determine the number of digits in the entered number

// var number = prompt("Insert a number:")

// var numDigits = number.length

// alert("The number of digits in " + number + " is: " + numDigits)




// 3. The game "Guess the number." Ask the user to think of a number from 0 to 100 and guess it in the following way: each iteration, divide the range of numbers by half, write the result in N and ask the user "Is this your number > N, <N or == N?". Depending on what the user indicates, reduce the range. The initial range from 
// 0 to 100 is divided by half and you get 50. If the user indicates that their number is > 50, then change the range from 51 to 100. And so on until the user chooses == N


// alert("Think of a number between 0 and 100. I will try to guess it.")

// var min = 0
// var max = 100
// var guess

// do {
//     guess = Math.floor((min + max) / 2)
//     var response = prompt("Is your number > " + guess + ", < " + guess + ", or == " + guess + "? (Use >, <, or ==)")

//     if (response === ">") {
//         min = guess + 1
//     } else if (response === "<") {
//         max = guess - 1
//     }
// } while (response !== "==")

// alert("Yay! I guessed your number: " + guess)



// task functions



// 1. Write a function that calculates the factorial of the number passed to it.

// var num = prompt("Insert a number:")

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1
//     }
//     return n * factorial(n - 1)
// }

// alert(factorial(num))



// 2. Write a function that takes three separate digits and turns them into one number. For example: the digits 1, 4, 9 will become the number 149.

// var d1 = prompt("insert first digit:")
// var d2 = prompt("insert second digit:")
// var d3 = prompt("insert third digit:")


// function combineDigits(digit1, digit2, digit3) {
//     return parseInt(digit1.toString() + digit2.toString() + digit3.toString());
// }

// alert(combineDigits(d1,d2,d3))




// 3. Write a function that takes the length and width of a rectangle and calculates its area. If 1 parameter is passed to the function, then it calculates the square area.

// var length = prompt("Insert length of the rectangle:")
// var width = prompt("Insert width of the rectangle:")

// function calculateRectangleArea(length, width) {
//     if (typeof width === 'undefined') {
//         return Math.pow(length, 2)
//     } else {
//         return length * width
//     }
// }

// alert("Area of rectangle: " + calculateRectangleArea(length, width))
// alert("Area of square: " + calculateRectangleArea(length))