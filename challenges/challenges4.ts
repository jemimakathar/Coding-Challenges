// Function to swap two numbers
function swap(x: number, y: number) {
    x = x + y;
    y = x - y;
    x = x - y;
    console.log(`Swapped values: x = ${x}, y = ${y}`);
}

// Call the swap function
swap(2, 4);

// Use CommonJS syntax to import readline
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt user for input
rl.question('Please enter something: ', (input: string) => {
    console.log(`You entered: ${input}`); // Use backticks for string interpolation
    rl.close();
});
