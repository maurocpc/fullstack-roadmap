// This is a variable. We use 'const' for values that don't change.
// We tell TypeScript this is a 'string' (text).
const teacherName: string = "Gemini";

// This is a function. It takes a name and returns a greeting.
function greet(name: string): string {
    return `Hello, ${name}! Welcome to your first TypeScript lesson.`;
}

console.log(greet(teacherName));