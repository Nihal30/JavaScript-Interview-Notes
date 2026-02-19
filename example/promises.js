
const p = new Promises((resolve , reject)=>{
    setTimeout(()=>{
        resolve('Promise Resolved')
    },1000)
})

async function handlePromise(){
    const val = await p
    console.log('hi')
    console.log(val)
}
handlePromise() 

// Output
// hi
// Promise Resolved