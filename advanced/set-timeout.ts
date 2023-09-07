function first() {
    console.log("First")
}

function second() {
    setTimeout(() => console.log("Second"), 0)
}

function third() {
    console.log("Third")
}

first()
second()
third()