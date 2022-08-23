const chai = "chai";
const spies = "chai-spies";
chai.spies();

function receivesAFunction(callback){
    function callback(){
        const spy = chai.spy();
        callback();
    }
}
function returnsANamedFunction(){
    receivesAFunction();
}
function returnsAnAnonymousFunction(){
    return function(){
        
    }
}