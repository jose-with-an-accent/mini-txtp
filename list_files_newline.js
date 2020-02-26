const glob = require('glob');
const fs = require('fs');
console.log('running script');

glob("*/*.txtp", function (er, files) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
  files.map((val, ind) => {
    fs.appendFileSync('val.txtp', `${val} \r\n`);
  })
})
