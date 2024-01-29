window.onload = function() {
    let x = document.getElementById('myBtn');
    x.addEventListener('mouseover', myFunction('Moused over!'));
    x.addEventListener('click', mySecondFunction('Clicked!'));
    x.addEventListener('mouseout', myThirdFunction('Moused out!'));
}

// you can also do the changes itself when defining the action event
//{
// x.addEventListener('mouseover', () => myFunction('Moused over!'));
// x.addEventListener('click', () => mySecondFunction('Clicked!'));
// x.addEventListener('mouseout',() =>  myThirdFunction('Moused out!'));
// }


function myFunction(msg) {
    return () => document.getElementById('demo').textContent = msg;
}

function mySecondFunction(msg) {
    return () => document.getElementById('demo').textContent = msg;
}

function myThirdFunction(msg) {
    return () => document.getElementById('demo').textContent = msg;
}

// a closure is a function body that returns a function