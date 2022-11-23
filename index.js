function receivesAFunction(callback = () =>{}){
    return callback()
}
function returnsANamedFunction(){
    return function Named(){}
}
function returnsAnAnonymousFunction(){
    return () =>{}
}