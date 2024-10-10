// Write a function that takes an array of strings as argument. Group those strings by their first letter.
//  Return an object that contains properties with keys representing first letters.
//   The values should be arrays of strings containing only the corresponding strings.


//    For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
//    { a: ['Alf', 'Alice'], b: ['Ben']}


function grouping_Alphabet(strings: string[]): { [key: string]: string[] } {
    const grouped= {};

    for (const str of strings) {
        const firstLetter = str.charAt(0).toLowerCase();
        
        if (!grouped[firstLetter]) {
            grouped[firstLetter] = [];
        }
        
        grouped[firstLetter].push(str);
    }

    // Sort each group's array
    for (const key in grouped) {
        grouped[key].sort();//jemi,jemima
    }

    // Create a new object with sorted keys
    const sortedGrouped = {};
    const sortedKeys = Object.keys(grouped).sort();//Object.keys() is a built-in JavaScript method that takes an object as an argument and returns an array containing all the keys of that object.

    for (const s of sortedKeys) {
        sortedGrouped[s] = grouped[s];//value
    }

    return sortedGrouped;
}

console.log(grouping_Alphabet(["jemima", "jemi", "nithya", "nithu", "kaviya", "kavi"]));

