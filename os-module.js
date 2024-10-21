const os = require('os');

const user = os.userInfo();
console.log(user);
console.log(`System uptime ${os.uptime()} seconds`);

const currOS = {
    name:os.type(),
    release : os.release(),
    totalmem:os.totalmem(),
    freemem :os.freemem()
}
console.log(currOS);

