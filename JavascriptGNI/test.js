console.log("Welcome to Javascript");
a=34;
b=78;
console.log(a+b);
console.log("This Is My Second Program");
// NODE IN TERMINAL WE CAN USE IN THE TERMINAL
a=18;
if(a>18){
    console.log("You Are Eligible To Vote");    
}
else{
    console.log("You Are Not Eligible To Vote");
}
a=25;
if(a<20){
    console.log("Number is greater than 20");
}
else if(a==25){
    console.log("Number is matched");
}
else{
    console.log("Number is less than 20");
}
a=10;
b=20;
//const ch=prompt("Please enter your operation:");
ch='+';
switch(ch){
    case '+':
        console.log("Sum:",a+b);
        break;
        case '-':
            console.log("Sub:"+a-b);
            break;
            case '*':
                console.log("Multiplication:",a*b);
                break;
                case '/':
                    console.log("Division:",a/b);
                    break;
                    case '%':
                        console.log("Remainder:",a%b);
                        break;
                        default:
                            console.log("Invalid Operator");
}
let u=100 ,v=50;
if(u>v){
    console.log("u is greater");
}