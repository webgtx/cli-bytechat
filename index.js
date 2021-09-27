const readline = require("readline");
const esf = require("./modules/easyFs");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userData = {
  username: 'Jhon Doe',
  role: 'guest'
}

const signUp = (username) => new Promise((res, rej) => {
  if (username == false || username.length > 12) {
    rej(new Error('Incorrect input, try again'));
  }
  else {
    userData.username = username;
    res(`You set ${username} as your username`);
  }
})

rl.question('Write your username: ', input => {
  signUp(input)
    .catch(err => console.log(err))
    .then(dat => {
      console.log(dat, '\n');
      rl.on('line', (input) => {
        esf('chat_log.dat', `${userData.username}: ${input} \n`, 'a')
          .catch(err => console.log(err))
          .then(() =>
             esf('chat_log.dat', null, 'r'))
          .then(dat => console.log('Work'))
      })
    })
});



