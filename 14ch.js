// example uncut: SMG_galaxy04_multi.ast cut: SMG_galaxy04_multi.ast#C3,4.txtp
const glob = require('glob');
const fs = require('fs');
console.log('running script');

glob("*/*", function (er, files) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
  files.map((name, ind) => {
    if (name.indexOf('Edit.bwav') > -1) {
      console.log(name);
      fs.writeFileSync(`${name}#C1,2.txtp`, "")
      fs.writeFileSync(`${name}#C3,4.txtp`, "")
      fs.writeFileSync(`${name}#C5,6.txtp`, "")
      fs.writeFileSync(`${name}#C7,8.txtp`, "")
      fs.writeFileSync(`${name}#C9,10.txtp`, "")
      fs.writeFileSync(`${name}#C11,12.txtp`, "")
      fs.writeFileSync(`${name}#C13,14.txtp`, "")
    }
  })
})
