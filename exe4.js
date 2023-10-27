//Exe.4
function func(a,b) {
    let i = setInterval(() =>{
        console.log(a++);
        if (a > b) clearInterval(i);
    }, 1000)
}

func(5, 20);