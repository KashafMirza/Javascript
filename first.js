//varoables and values

//var _1my__Name='kashaf is a good gorl';
//console.log(_1my__Name);

//typeof operator to identify the type of data
//console.log(typeof(_1my__Name));

//boolean datatype
// var myName=true;
// console.log(myName);
// console.log(typeof(myName));

// isNaN stands for is not a number to use when u check data is in number form or not
// var myNum=1234567;
// var myName='kashaf';
// console.log(isNaN(myName));
// console.log(isNaN(myNum));

//5+20 is an expression but in this exp 5&20 is operands and + is operator

// function definition + calling+parameters +arguments
// function sum(a,b){
//     var total=a+b;
//     console.log(total);
// }
// sum(10,40);

//function expression: create a func and put it to the variable
// function sum(a,b){
//     var total=a+b;
//     console.log(total);
// }
// var funcExp=sum(10,40);

//return keyword
// function sum(a,b){
//     return a+b;
// }
// var funcExp=sum(10,40);
// console.log(funcExp);

// function sum(a,b){
//     return a+b;
// }
// sum(10,40);
// console.log(sum(10,40));

//anonymous function:funct without a name is called anonymous function
// var funcExp=function(a,b){
//     return a+b;
// }
// console.log(funcExp(5,15));

// var funcExp=function(a,b){
//     return a+b;
// }
// var sum=funcExp(20,30);
// console.log(sum);

// var funcExp=function(a,b){
//     return a*b;
// }
// var sum=funcExp(20,30);
// var sum1=funcExp(100,400);
// console.log(sum);
// console.log(sum1);

//template literals

// for(let num=1;num<11;num++){
//     let tableOf=12;
//     console.log( ` ${tableOf} * ${num} = ${tableOf * num}` );
// }

//default parameters: here b=5 is a default parametere

// function mul(a,b=5){
//     return a*b;
// }
// console.log(mul(4));

// fat arrow function
//normal way of writing func
//in normal func u can do anything

// function sum(){
//     let a=5,b=10;
//     let sum=a+b;
//     return `the sum of two numbers is ${sum}`;
// }
//  console.log(sum());

// function sum(){
//     let a=5,b=10;
//     return `the sum of two numbers is ${a+b}`;
// }
//  console.log(sum());

//one line code due to template literals
// function sum(){
//     return `the sum of two numbers is ${(a=10)+(b=20)}`;
// }
//  console.log(sum());

//how to convert it into fat arrow func
//in arrow func firstly define func and then call 

// const sum=()=>{
//     let a=5,b=10;
//     let sum=a+b;
//     return `the sum of two numbers is ${sum}`;
// }
// console.log(sum());

//one line code due to fat arrow func
// const sum=()=> `the product of two numbers is ${(a=10)*(b=10)}`;
// console.log(sum());

//arrays in JS :we use this brackets[] instead of this brackets{} in JS
// var marks=[10,20,30,40,50,60,70];
// console.log(marks[2]);

// //for in loop with array:to display all element's index of array
// var marks=[10,20,30,40,50,60,70];
// for(let elements in marks){
//     console.log(elements);
// }

// //for of loop with array:to display all elements of array
// var marks=[10,20,30,40,50,60,70];
// for(let elements of marks){
//     console.log(elements);
// }

//for each loop with anonymous func:calls a func for each element in an array
// var marks=[10,20,30,40,50,60,70];
// marks.forEach(function(element,index,array){
//     console.log(element + " indexes = " + index + " elements = " + array );
// });

//for each loop with fat arrow func
// var marks=[10,20,30,40,50,60,70];
// marks.forEach((element,index,array) => {
//     console.log(element);
// });

//searching and filter in an atrray: array.prototype.indexOf():search first to last:forward:if no match it returns -1
//element ky bad agr index dain dyn to wo us elemnt ky index sy agy search kry ga
// var marks=[10,20,30,40,50,60,70];
// console.log(marks.indexOf(20));

//searching and filter in an array: array.prototype.lastIndexOf():search last to first:backward:if no match it returns -1
//element ky bad agr index dain dyn to wo us elemnt ky index sy back search kry ga
// var marks=[10,20,30,40,50,60,20];
// console.log(marks.lastIndexOf(20));

//Array.prototype.includes():it forward search that your element is present in your array or not and return ans in boolean
//element ky bad agr index dain dyn to wo us elemnt ky index sy agy search kry ga
// var marks=[10,20,30,40,50,60,30,20];
// console.log(marks.includes(30,7));

//array.prototype.find():it returns undefined if condition is falsed:if true it returns only one that element that is on first number of an array  
// const prices=[100,200,300,400,500,600,3000,20000];
// const findEle=prices.find((currVal)=>{
//    return currVal < 400;
// });
// console.log(findEle);

//another way to write it
// const prices=[100,200,300,400,500,600,3000,20000];
// const findEle=prices.find((currVal)=> currVal < 400);
// console.log(findEle);

//another way
// const prices=[100,200,300,400,500,600,3000,20000];
// console.log(prices.find((currVal)=>currVal < 400));

//array.prototype.findIndex():it simply returns the index of find element & it returns -1 if condition is false
// const prices=[100,200,300,400,500,600,3000,20000];
// console.log(prices.findIndex((currVal)=>currVal < 400));

//array.prototype.filter():it returns an empty array if it is false:if true it returns all elements that is small from 400
// const prices=[100,200,300,400,500,600,3000,20000];
// const newPriceTag= prices.filter((elem,index)=>{
// return elem<400;
// });
// console.log(newPriceTag);

//another way
// const prices=[100,200,300,400,500,600,3000,20000];
// console.log(prices.filter((elem,index)=> elem<400));

//array.prototype,sort():it sort elements only in string data
// const months=['March','Jan','Feb','Dec','Nov','Oct'];
// console.log(months.sort());

// array:CURD perform:create/update/reverse/delete
//array.prototype.push():it adds more elements at last of an array and returns new length of an array
// const animals=['cow','goat','dog','pig','chicken','fish'];
// const count=animals.push('cat','sheep','elephant','fox');
// console.log(animals);
// console.log(count);

//array.prototype.unshift():it adds more elements at first of an array and returns new length of an array
// const animals=['cow','goat','dog','pig','chicken','fish'];
//  const count=animals.unshift('cat','sheep','elephant','fox');
//  console.log(animals);
//  console.log(count);

//array.prototype.pop():removes the last element of the array and returns it.also chages the length of array
//const animals=['cow','goat','dog','pig','chicken','fish'];
// console.log(animals);    //diplay origional array
// console.log(animals.pop());        //removes last element and returns it
// console.log(animals);        //after using pop() the length of array change

//array.prototype.shift():it removes first element of array and returns that element and also changes the length of array
// const animals=['cow','goat','dog','pig','chicken','fish'];
// console.log(animals);
// console.log(animals.shift());
// console.log(animals);

//array.prototype.splice()

//add DEC at the end of an array
//what is the return value of splice()
//update march to March(update)?
//delete june from an array

//sol:1
//const months=['Jan','march','April','June','July'];
//const newMonths=months.splice(months.length,0,'Dec');  //months.splice(5,0,'Dec);
//console.log(months);

//sol:2
// const months=['Jan','march','April','June','July'];
// const newMonths=months.splice(months.length,0,'Dec');
// console.log(newMonths);  //it returns an empty array and mostly it used for delete element coz it returns deleted element

//sol:3  :it delete that element that we want to delete and on that position we add another elemnt.
//const months=['Jan','march','April','June','July'];
//const newMonths=months.splice(1,1,'March');  //if we put 2 in second position it delete 2 elements from 1 postion
//console.log(months);

//its a small program that we search any element of an array and then update it 
//another way to delete:if we have 100 elements in an array then when we find the index that we want to be change..thats why we use this logical method
//const months=['Jan','march','April','June','July'];
//const indexOfMonths=months.indexOf('march');   //us index py jay ga jaha march para
//then we add a condition to search the march index
//if(indexOfMonths!= -1){   //agr indexOf -1 nae ay ga then ye condition true ho gi
   // const updateMonth=months.splice(indexOfMonths,1,'March');
    //console.log(months);
//}
// else
// console.log('No such found data');

//sol:4
// const months=['Jan','march','April','June','July'];
// const indexOfMonths=months.indexOf('June');
// if(indexOfMonths != -1){
//   const delMonth=months.splice(indexOfMonths,1);   // 1 is for delete only that element that we want
//   console.log(months);
//   console.log(indexOfMonths);  //display index of delete month
//   console.log(delMonth);  //returns delete month coz its rule of splice method 
// }
// else
// console.log('No such data found');

//to delete all elements after April :just writhe infinity coz us element ky bad jitny b elements huy wo sb dell ho jayn gyn
// const months=['Jan','march','April','June','July'];
// const indexOfMonths=months.indexOf('April');
// if(indexOfMonths != -1){
//   const delMonth=months.splice(indexOfMonths,Infinity);   // infinity is for delete all elements after april
//   console.log(months);
//   console.log(indexOfMonths);  //display index of delete month
//   console.log(delMonth);  //returns delete month coz its rule of splice method 
// }
// else
// console.log('No such data found');

//array.prototype.map():it is same as filter method but it returns boolean ans
// const array1=[1,4,9,16,25];
// let newArr=array1.map((currEle,index,arr)=>{
//     return currEle>9;   //jo elements 9 sy greater hn gyn wo true ho jyn gyn
// });
// console.log(array1);
// console.log(newArr);

//now to display all elements and indexes and actual arr rather than booolean result 
// const array1=[1,4,9,16,25];
// let newArr=array1.map((curEle,index,arr)=>{
//     return `Index of ${index} and the value is ${curEle} belong to ${arr}`;
// });
// console.log(newArr);










