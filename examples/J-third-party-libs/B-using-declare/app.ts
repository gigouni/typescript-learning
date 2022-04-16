// Without any other settings or workaround, this code will work but still lead to errors
// Need support from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/lodash
// Thru the @types/lodash module (https://www.npmjs.com/package/@types/lodash)
// Check "devDependencies" in the package.json
import _ from "lodash";

// LAST RESORT solution, should not be a casual use case!
declare var GLOBAL : any;

console.log(_.shuffle([1, 2, 3]));

// Without the declare statement, this will lead TypeScript to an error even if we know that will works
console.log(GLOBAL);
