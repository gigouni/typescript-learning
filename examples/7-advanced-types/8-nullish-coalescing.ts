const userInput = null;

// If userInput is null, undefined or empty string, DEFAULT will be resulting but it might not be the expecting behavior
// const storedData = userInput || 'DEFAULT'

// The nullish coalescing will check only for null or undefined
const storedData = userInput ?? "DEFAULT";
