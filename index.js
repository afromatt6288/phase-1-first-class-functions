function callback() {
    return function anything() {
        return "anything"
    }
}

function receivesAFunction(callback){
    return callback()
    }

function returnsANamedFunction(){
    return receivesAFunction(callback)
}

function returnsAnAnonymousFunction() {
    return function() {
        
    }
}