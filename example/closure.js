// COunter example
function Counter(){
    let count = 0
    return function(){
        count++
        console.log(count)
    }
}

const c = Counter()
c() // 1
c() // 2

// Definition
// Closure means a function remembers variables from its lexical scope even after outer execution finishes.

// Why used?
// Data hiding
// React hooks concept
// Event handlers