const repeatAsterisk = (length: number): string => {
    let result :string[]=[];
    for (let i = 0; i < length; i++) {
        result.push("*")
    }
    return result.join("");
};

var palindrome: (a: string) => string;
palindrome= function(n1: string): string {
    const words = n1.split(" ");
    const result = words.map(word => {
        const rev = word.split("").reverse().join(""); 
        return rev === word && word.length > 1 ? repeatAsterisk(word.length) : word; 
    });   
    return result.join(" ");
};

console.log(palindrome("bob has a radar plane")); 
