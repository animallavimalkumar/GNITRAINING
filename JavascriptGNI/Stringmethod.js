var item="ice cream";
console.log(item.startsWith("ice"));
console.log(item.endsWith("t"));
console.log(item.includes("ice"));
console.log(item.repeat(5));
let college=new String("GNI INSTITUTIONS");
console.log(`Hi iam Now studying in the ${college}`);
class hello{
 happy() {
    console.log("Happy Learning")  
    }    
    }
    let emp=new hello();
    emp.happy();//default class
    class happy{//default constructor
        happy(){
            console.log("Hello World!");
        }
    }
    let h=new happy();
    h.happy();
    class Employee{// Parameterized Constructor
        constructor(id,ename){
            this.id=id;
            this.ename=ename;
        }
        hello1(){
            console.log(this.id+"  "+this.ename);
        }
    }
    let emp1=new Employee(1001,"Ajay");
    emp1.hello1();
class emp2{// without using construtor
id=9;
ename="Vimal Kumar";
hello2(){
    console.log(this.id+" "+this.ename);
}
}
var emp3=new emp2();
emp3.hello2();
// for each loop

//arrow function
function display(){
    console.log("This is a display  function");
}
display();
const dispalyInfo=(a,b)=>{//Arrow funtion example
    console.log("Happy Learning ");
console.log("Sum of the two numbers:",a+b);
}
dispalyInfo(10,20);
// Arrow functions executes faster than the normal function
const dispalyInfos=(a,b=30)=>{//Arrow funtion example in default parameter
    console.log("Happy Learning ");
console.log("Sum of the two numbers:",a+b);
}
dispalyInfos(10);
// Rest operators
//Calculator using html,css,javascript
function add(x,y){// function with rest operators
    console.log("ADDITION IS: ",x+y);
}
add(10,20,30,40,50);
function rest(...args){
    let result=0;
    for(let arg of args){
        result=result+arg;
    }
    console.log("The Final Result is:"+result);
}
rest(10,20,30,40,50);
// Spread operators : spread operator is used to add multiple string or arrays
const arr=["hi","one","two","three"];
const newarr=[...arr,"four"];
console.log(newarr);
// Asynchronous:
console.log("This is a first line of code");
let sum=0;
const myfunc=()=>{
    for(let i=1;i<100000;i++){
    sum=sum+i;
}// settimeout method blocks the certain  time for executable statements
setTimeout(()=>{
console.log("Sum of the loop:",sum);// Sequential Execution or synchronous execution
},5000);
}
myfunc();
console.log("this is a second line of code");
// Callback funtion
function  greet(name,callback){
    console.log(name);
    callback();
}
function welcome(){
    console.log("Good Afternoon");
}
greet("Vimal Kumar",welcome);
//Async and await
 async function happys(){
  x=await 10+20;
    return x;
 }
 let result=happys();
 result.then((data)=>{// it works like if block
 console.log(data);
 });
 result.catch((error)=>{// It works like else block
    console.log(error);
 })
/* async function happys(){
    x=await 10+20;
     // return x;
   }
   let results=happys();
   result.then((data)=>{// it works like if block
   console.log(data);
   });
   result.catch((error)=>{// It works like else block
      console.log(error);
   })*/