// example uncut: SMG_galaxy04_multi.ast cut: SMG_galaxy04_multi.ast#C3,4.txtp
const glob = require('glob');
const fs = require('fs');
console.log('running script');

glob("*", function (er, files) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
  files.map((name, ind) => {
    console.log(name)
    if (name.indexOf('multi') > -1) {
      fs.writeFileSync(`${name}#C1,2.txtp`, "")
      fs.writeFileSync(`${name}#C3,4.txtp`, "")
    }
  })
})
