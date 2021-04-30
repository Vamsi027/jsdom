console.log('person1: Show ticket')
console.log('person2: Show ticket')


const preMovie=async()=>{

    const promiseWifeBringingTicks=new Promise((reslove,reject)=>{
    setTimeout(()=>{reslove('ticket');},3000)
    });
let ticket=await promiseWifeBringingTicks;
console.log('husband:we should go')
console.log('wife:no i am hungry')
const getPopcorn=new Promise((reslove,reject)=>reslove(`popcorn`))
let popcorn=await getPopcorn;
console.log(`husband:i bought ${popcorn}`)
console.log('husband:we should go')
console.log('wife:no i need butter on popcorn')
const addButter=new Promise((reslove,reject)=>reslove(`butter`))
let butter=await addButter;
console.log(`husband: i added ${butter}`)
console.log('husband:we should go')
console.log('wife:no i need cold drink')
const bringcolddrink=new Promise((reslove,reject)=>reslove(`cold drink`))
let colddrink=await bringcolddrink;
console.log(`husband: i bought ${colddrink}`)
console.log('husband:we should go')
console.log('wife:lets go')

return ticket;
}
preMovie().then((m)=>console.log(m));

console.log('person4: Show ticket')
console.log('person5: Show ticket')