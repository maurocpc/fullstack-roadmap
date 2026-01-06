// This is a variable. We use 'const' for values that don't change.
// We tell TypeScript this is a 'string' (text).
var teacherName = "Gemini";
// This is a function. It takes a name and returns a greeting.
function greet(name) {
    return "Hello, ".concat(name, "! Welcome to your first TypeScript lesson.");
}
console.log(greet(teacherName));
