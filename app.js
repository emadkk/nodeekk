const os =require('os');

console.log(__dirname)
console.log(__filename)
const uu =os.userInfo()
console.log(uu);

const currentOS ={
    name : os.type(),
    release : os.release(),
    Memory : os.totalmem(),
    freeMeo : os.freemem()
}
console.log(currentOS);

console.log(` The system Uptime is ${os.uptime()} Seconds`)
setInterval(() =>{
    console.log('Hello World')
},2000)
