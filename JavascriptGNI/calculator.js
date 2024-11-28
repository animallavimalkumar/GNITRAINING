// Simple Calculator using Switch Case
let a=10;
let b=20;
var ch='+';
switch(ch){
    case '+':
        console.log("Sum:",a+b);
        break;
        case '-':
            console.log("Sub:",a-b);
            break;
            case '*':
                console.log("Multiplication:",a*b);
                break;
                case '/':
                    console.log("Divsion:",a/b);
                    break
                    case '%':
                        console.log("Remainder:",a%b);
                        break;
default:
    console.log("Invalid operator");

}
