s = "HolA MUndo!"
function getVowles(c) {
    return c.match(/[aeiou]/gi)
}
function getConsonants(c) {
    return c.match(/(?![aeiou])[a-z]/gi)
}
function vowelsAndConsonants(s) {
    var arr = getVowles(s).concat(getConsonants(s));
    console.log(s);
    console.log(arr);
    for (var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

vowelsAndConsonants(this.s);