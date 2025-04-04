function calculate(num1,num2,operation,callback){
    let result;

    switch(operation){
        case 'add':
            result=num1+num2;
            break;
        case 'subtract':
            result=num1-num2;
            break;
        case 'multiply':
            result=num1*num2;
            break;
        case 'divide':
            result=num1/num2;
            break;
        case 'modulus':
            result=num1%num2;
            break;
        default:
            result="Invalid operation";
    }
    callback(result);
}
function displayResult(result) {
    console.log("Result:", result);
}


calculate(10, 5, 'add', displayResult);       
calculate(10, 5, 'subtract', displayResult);  
calculate(10, 5, 'multiply', displayResult);  
calculate(10, 0, 'divide', displayResult);    
calculate(10, 5, 'modulus', displayResult);
calculate(10,5,'exponent',displayResult)
