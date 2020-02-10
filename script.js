//! Function constructor
// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// }

// var Person = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function(){
//     console.log (2019 - this.yearOfBirth);
// }

// Person.prototype.lastName = 'Smith';

// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(mark.lastName);
// console.log(jane.lastName);

//! Object.create 
// var personProto = {
//     calculateAge: function(){
//         console.log(2019 - this.yearOfBirth);
//     }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto, {
//     name: { value: 'Jane' },
//     yearOfBirth: { value: 1969 },
//     job: { value: 'designer' }
// });

//! Primitives vs objects

//? Primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a,b);

// //? Objects
// var obj1 = {
//     name: 'John',
//     age: 26
// }
// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age, obj2.age);

// //? Functions
// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// };

// function change(a, b){
//     a = 30;
//     b.city = 'San Fransisco';
// }

// change(age, obj);

// console.log(age, obj.city);

//! Passing functions as arguments

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn){
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++){
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2019 - el;
// }

// function isFullAge(el){
//     return el >= 18;
// }

// function maxHeartRate(el){
//     if (el >= 18 && el <= 81){
//         return Math.round(206.9 - (.67 * el));
//     } else {
//         return -1;
//     }
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var maxHeartRates = arrayCalc(ages, maxHeartRate);
// console.log(ages);
// console.log(fullAges);
// console.log(maxHeartRates);

//! Functions returning Functions

// function interviewQuestion(job) {
//     if (job === 'designer'){
//         return function (name){
//             console.log(name + ', can you please explan what UX design is?');
//         }
//     } else if (job === 'teacher'){
//         return function(name){
//             console.log('What subject do you teach, ' + name + '?');
//         }
//     } else {
//         return function(name){
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('John');
// teacherQuestion('Mark');
// designerQuestion('Jane');
// teacherQuestion('Jane');
// designerQuestion('Mark');

// interviewQuestion('teacher')('Mike');

//! IIFE 

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

// (function (){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();


// (function (goodLuck){
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);

//! Closures

// function retirement(retirementAge){
//     var a = ' years left until retirement.';
//     return function(yearOfBirth){
//         var age = 2019 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementUS(1990);
// retirementIceland(1990);
// retirementGermany(1990);

// // retirement(66)(1990);

// function interviewQuestion(job) {
//     return function(name){
//         if (job === 'designer'){            
//             console.log(name + ', can you please explan what UX design is?');
//         } else if (job === 'teacher'){
//             console.log('What subject do you teach, ' + name + '?');
//         } else {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// interviewQuestion('teacher')('John');

//! Bind, call, and apply

// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style, timeOfDay){
//         if (style === 'formal'){
//             console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//         } else if (style === 'friendly'){
//             console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//         }
//     }
// }

// var emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'Designer'
// }

// john.presentation('formal', 'morning');

// john.presentation.call(emily, 'friendly', 'afternoon');

//// john.presentation.apply(emily, ['friendly', 'afternoon']);

// var johnFriendly = john.presentation.bind(john, 'friendly');

// johnFriendly('morning');
// johnFriendly('night');

// var emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('afternoon');

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn){
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++){
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2019 - el;
// }

// function isFullAge(limit, el){
//     return el >= limit;
// }

// var ages = arrayCalc(years, calculateAge);
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(ages);
// console.log(fullJapan);

//! Coding Challenge 7

(function(){
    var Question = function(q, a, c){
        this.q = q;
        this.a = [] = a;
        this.c = c;
    }

    Question.prototype.quiz = function(){
        console.log('Q: ' + this.q);
        for (var i = 0; i <= this.a.length - 1; i++){
            console.log(i + ': ' + this.a[i]);
        }
        var answer = prompt('Please select the correct answer by typing the number of the answer in the box below or type \'exit\' to exit.');
        if (answer == this.c){
            console.log('Correct!');
            return true;
        } else if (answer == 'exit'){
            return 0;
        } else {
            console.log('Incorrect');
            return false;
        }
    }

    var question1 = new Question('What is your favorite color?', ['green', 'yellow'], 0);
    console.log(question1);

    var question2 = new Question('What is the air-speed velocity of an unladen swallow?', ['30kph', '40kph', 'What do you mean? An African or European swallow?'], 2);
    console.log(question2);

    var questions = [question1, question2];

    var score = 0;
    while (1 == 1){
        var randQ = Math.floor(Math.random() * questions.length);
        console.log('randQ: ' + randQ);
        var answer = questions[randQ].quiz();
        if (answer === true){
            score++;
        } else if (answer === 0){
            break;
        }
        console.log('Your current score is: ' + score);
    }
})();