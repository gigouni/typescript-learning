// Without any other settings or workaround, this code will work but still lead to errors
// Need support from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/lodash
// Thru the @types/lodash module (https://www.npmjs.com/package/@types/lodash)
// Check "devDependencies" in the package.json
import _ from "lodash";

console.log(_.shuffle([1, 2, 3]));
