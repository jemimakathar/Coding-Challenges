function Anagram(a, b) {
    var n = a.toString();
    var m = b.toString();
    var x = n.split("").sort().join();
    var y = m.split("").sort().join();
    if (x == y) {
        return "anagram";
    }
    else {
        return "not an Anagram";
    }
}
console.log(Anagram(12345, 23413));
