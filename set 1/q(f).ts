function invoker(requiredOperation: any){
    if (requiredOperation == 1)
        console.log(hello());
    else if (requiredOperation == 2)
        console.log(howareyou());
    else if (requiredOperation == 3)
        console.log(imokay());
}

function hello(){
    return "hello"
}

function howareyou(){
    return 'how are you ?'
}

function imokay(){
    return "i'm okay 🥲"
}

invoker(1);