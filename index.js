function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    return function multiply(){
        return 6*9
    }
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log("area")
    }
}
