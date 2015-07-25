/*eslint quotes: [0, "double"] */

var {
    docopt
} = require('docopt')
var _ = require('lodash')
var fs = require('fs')
var $b = require('bluebird')
var $s = require('shelljs')

$s = $b.promisifyAll($s)

// var getOption = (a, b, def, o) => {
//   "use strict"
//   if (!_.isUndefined(o[a])) {
//     return o[a]
//   } else {
//     if (!_.isUndefined(o[b])) {
//       return o[b]
//     } else {
//       return def
//     }
//   }
// }



// var getOptions = doc => {
//   "use strict"
//   var o = docopt(doc)
//   var help = getOption('-h', '--help', false, o)
//   return {
//     help
//   }
// }

var url = "https://img.shields.io/badge/"

var makefileNotExisting = `${url}build-unknown-yellow.svg`
var testFails = `${url}build-fails-red.svg`
var testOk = `${url}build-ok-brightgreen.svg`

var mdLink = (l) => {
    return `![status](${l})`
}

var doc = fs.readFileSync(__dirname + "/docs/usage.md", 'utf8')

var main = () => {
    "use strict"
    // var {
    //   help
    // } = (getOptions(doc))

    if (!$s.test('-f', 'makefile')) {
        console.log(mdLink(makefileNotExisting))
    } else {
        $s.execAsync("make test", {silent: true}).then(() => {
            console.log(mdLink(testOk));
        }).caught(() => {
            console.log(mdLink(testFails))
        });
    }
}

main()
