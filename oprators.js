// let a = "5";
// let b = 5;
// console.log(a==b); 

// // &&
// // ||

// let age = 19 ;
// if(age >= 19){
//     console.log("OK, teenager");
// }else if{
//     console.log("you're young");
// }


// let day = "monday";
// let drive;
// switch (day){
//     case 'sunday':
//         drive = 'bike';
//         break;
//     case 'saturday':
//         drive = 'cycle';
//         break;
//         case 'monday':
//     drive = 'train';
//     break;
// }
// console.log(drive);

// for while do while

// incr++ +1 увеличиваетсчя на 1
// decr-- уменьшается на 1
// ++incr
// --dect


// for(let i = 0; i < 3; i++){
//     console.log(i);
// }

// let k = 0;
// while(k<100){
//     console.log(k);
//     k++;
// }

// let l = 0;
// do{
//     console.log(l);
//     l++;    
// }while(l<4);

// let car = {
//     model: 'toyota',
//     type: 'sedan', 
//     yera: 2020,
//     isStrated: false
// };
// console.log(car.type);

// let fruits = ['apple', 'banana',' cherry'];
// console.log(fruits[1]);

// function hello(name){
//     console.log('Hello ' + name + " !" );
// }

// hello("ivan");

// function add(a, b){
//     return a % b;
// }
// console.log(add(5,5));

// function even(num){
//     return num % 2 === 0;
// }

// console.log (even(5));


// function area(lenght, width){
//     return lenght * width;
// }
// console.log(area(4,6));

// foo();
// function foo(){
//     console.log('hello');
// }

// // const calc = function(){

// // }

// const calc = (a, b) => { 
//     return  a * b
// }

// function eduJS(lang , callback){
//     console.log(`"I learn" ${lang}`);
//     callback();
// }
// function done(){
//     console.log("Hello studetn");
// }

// eduJS('Javascript', done);


const usdCurr = 70;
const euCurr = 80;
const discount = 0.5;


function convert(monunt , curr){
   console.log (curr * monunt);
}
// convert(250,usdCurr );
// convert(200,euCurr );
function dis(discount, convert){
     return convert * discount;
}

console.log(dis(discount, usdCurr ));

const b = 10;

function variable(b){
    let b = 20;
}

console.log(b);
console.log(variable());

let newVar;