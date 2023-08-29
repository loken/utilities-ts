// If for some reason @types/node is being imported into src,
// setTimeout() will resolve to NodeJS.Timeout,
// causing typechecking to error out on the following code.
//
// If that happens you've dragged nodejs into the src folder directly or indirectly,
// and should revert those changes.
//
// This code is here to prevent that from happening since we don't want nodejs in our browser code!
const timeoutId: number = setTimeout(() => {});
clearTimeout(timeoutId);

export {};
