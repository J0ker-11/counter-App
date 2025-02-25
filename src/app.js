

function countDown() {
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
}
countDown()


function number() {
    console.log(42);
}
number()

// FUNCTION TO SUM ITEMS
let lap1 = 34
let lap2 = 33
let lap3 = 36

function totalLap() {
    const total = lap1 + lap2 + lap3
    console.log(total);
}
totalLap()

// FUNCTION TO INCREASE ITEMS
let lapsCompleted = 0

function laps() {
    lapsCompleted = lapsCompleted + 1
}
laps()
laps()
laps()
console.log(lapsCompleted);



// BUILDING A PASSANGER COUNTER APP

let increase = document.querySelector('#count-el')
let decrease = document.querySelector('#count-el')
let resets = document.querySelector('#count-el')
let saves = document.querySelector('#save')

let count = 0

function increment() {
    count = count + 1
    increase.textContent = count
}

function decrement() {
    count = count - 1
    decrease.textContent = count
}

function reset() {
    count = 0
    resets.textContent = count
}


function save() {
    console.log(count);
    saves.textContent = count
}


