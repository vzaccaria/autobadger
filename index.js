#!/usr/bin/env node
/*eslint quotes: [0, "double"] */

"use strict";

var _require = require("docopt");

var docopt = _require.docopt;

var _ = require("lodash");
var fs = require("fs");
var $b = require("bluebird");
var $s = require("shelljs");

$s = $b.promisifyAll($s);

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

var url = "https://img.shields.io/badge/";

var makefileNotExisting = "" + url + "build-unknown-yellow.svg";
var testFails = "" + url + "build-fails-red.svg";
var testOk = "" + url + "build-ok-brightgreen.svg";

var mdLink = function (l) {
    return "![status](" + l + ")";
};

var doc = fs.readFileSync(__dirname + "/docs/usage.md", "utf8");

var main = function () {
    "use strict";
    // var {
    //   help
    // } = (getOptions(doc))

    if (!$s.test("-f", "makefile")) {
        console.log(mdLink(makefileNotExisting));
    } else {
        $s.execAsync("make test", { silent: true }).then(function () {
            console.log(mdLink(testOk));
        }).caught(function () {
            console.log(mdLink(testFails));
        });
    }
};

main();
