// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

function convertToInitials(name: string): string {
    const words = name.split(' ');
    if (words.length !== 2) {
        throw new Error("Input must contain exactly two words.");
    }
    const initials = `${words[0][0].toUpperCase()}.${words[1][0].toUpperCase()}`;
    return initials;
}
console.log(convertToInitials("Sam Harris")); // Output: S.H
console.log(convertToInitials("patrick feeney")); // Output: P.F
