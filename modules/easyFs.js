const fs = require("fs");
const easyFs = (path, input, option) => new Promise((res, rej) => {
  switch(option) {
    case('w'):
      fs.writeFile(path, input, err =>
        err ? rej(err) : res('Done'))
      break;
    case('r'):
      fs.readFile(path, (err, data) =>
        err ? rej(err) : res(data))
      break;
    case('a'):
      fs.appendFile(path, input, err =>
        err ? rej(new Error(err)) : null)
      break;
    default: 
      console.log('?');
      break;
  }
})

module.exports = easyFs;
