// First task

// Create a function that parses a string into an integer (like the js function parseInt, but without the base parameter)

// Example:
// myParseInt(“123”) + 2
// Should output 125, and not “1232”
// should be actual string parse, and not +string or anything like that



function myParseInt(str) {
    str = str.trim();

    let result = 0;

    for (let i = 0; i < str.length; i++) {
        const digit = str.charCodeAt(i) - 48;

        if (digit >= 0 && digit <= 9) {
            result = result * 10 + digit;
        } else {
            break;
        }
    }

    return result;
}
