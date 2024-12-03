// function calculator(add,sub,mul,div){
//     let a = 10;
//     let b = 20;
//     console.log(add(a,b));
//     console.log(sub(a,b));
//     console.log(mul(a,b));
//     console.log(div(a,b));

// }

// Dynamic
function calculator(a,b,sign,add,sub,mul,div){
    if(sign == '+'){
        console.log(add(a,b));   
    }
    if(sign == '-'){
        console.log(sub(a,b));
    }
    if(sign == '*'){
        console.log(mul(a,b));
    }
    if(sign == '/'){
        console.log(div(a,b));   
    }
}
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
// calculator(add,sub,mul,div);
calculator(10,20,'/',add,sub,mul,div);