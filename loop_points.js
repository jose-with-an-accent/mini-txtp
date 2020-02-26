// Ix y.txtp
var fs = require('fs');
var glob = require('glob');
var loopPoints = fs.readFileSync('paper_mario__color_splash_loop_points.txt').toString().split("\n");
glob("stream/*.aac", { nonull: false }, function (er, files) {
    // files is an array of filenames.
    // If the `nonull` option is set, and nothing
    // was found, then files is ["**/*.js"]
    // er is an error object or null.
    files.map((fileName) => { 
        loopPoints.map(loopPointName => {
            const lp = loopPointName.split('-');
            if (fileName == lp[0].trim()) {
                const points = lp[1].trim().split(' ');

                if ((points[0] != 0) && points[1] != 0) {
                    fs.writeFileSync(`${fileName}#I${points[0]} ${points[1]}.txtp`, "");
                }
            }
        })
    })
})
