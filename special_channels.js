// example uncut: SMG_galaxy04_multi.ast cut: SMG_galaxy04_multi.ast#C3,4.txtp
const glob = require('glob');
const fs = require('fs');
glob("*/*.bfstm", function (er, files) {
    // files is an array of filenames.
    // If the `nonull` option is set, and nothing
    // was found, then files is ["**/*.js"]
    // er is an error object or null.
    files.map((name, ind) => {
        console.log("I'm Alive!")
        const a = Buffer.from(fs.readFileSync(name)).readUInt8(0x62);
        for (i = 1; i < a; i = i + 2) {

            console.log(`creating ${name}#C${i},${i + 1}.txtp...`, "")
            fs.writeFileSync(`${name}#C${i},${i + 1}.txtp`, "")
        }
    })
})
