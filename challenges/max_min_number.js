function minmaxNumber(a) {
    var x = a.sort(function (a, b) { return a - b; });
    return [x[0], x[a.length - 1]];
}
console.log(minmaxNumber([65, 43, 108, 6]));
