// ===========================================================================
// Example with caveat: we cannot insure that obj has a property <key>
// ===========================================================================
function extractAndConvert(obj: object, key: string) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({}, "name"));

// ===========================================================================
// Better
// ===========================================================================
function extractAndConvert2<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert2({ name: "Max" }, "name");

// Wrong, the age property is not a key of the { name: "Max" } object
// extractAndConvert2({ name: "Max" }, "age");
