//// [tests/cases/compiler/es6ImportNameSpaceImportInEs5.ts] ////

//// [es6ImportNameSpaceImportInEs5_0.ts]

export var a = 10;  

//// [es6ImportNameSpaceImportInEs5_1.ts]
import * as nameSpaceBinding from "./es6ImportNameSpaceImportInEs5_0";
var x = nameSpaceBinding.a;
import * as nameSpaceBinding2 from "./es6ImportNameSpaceImportInEs5_0"; // elide this


//// [es6ImportNameSpaceImportInEs5_0.js]
exports.a = 10;
//// [es6ImportNameSpaceImportInEs5_1.js]
var nameSpaceBinding = require("./es6ImportNameSpaceImportInEs5_0");
var x = nameSpaceBinding.a;


//// [es6ImportNameSpaceImportInEs5_0.d.ts]
export declare var a: number;
//// [es6ImportNameSpaceImportInEs5_1.d.ts]
