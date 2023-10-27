//Exe.3
function sum(x) {
    return function(y) {
        return x + y;
    };
}

let f = sum(5);
console.log( f(3), f(8), f(36) );