// testing
/* testing random codes
 *  just testing
  */

console.log("بسم الله الرحمن الرحيم")


newFunction();

function newFunction() {
    var x = "123123123";
    var y = + + + +(+x);
    var jj = xx = ll = 123;
    console.log("this is y: " + y);
    console.log("\n jj:" + jj);
    console.log("\n xx:" + xx);
    console.log("\n ll:" + ll);
}


var obj1 = {
"hi": "123",
"bi": 123,
"ci": 123.123,
"ki": Infinity}
;

obj1.hi = "1234"
obj1.wi = "1234"


console.log(__dirname);
console.log(__filename);
//console.log(Process);
console.log(Buffer);
console.log(this);
console.log(obj1);

for (name in Buffer) { 
    
    if (Buffer.hasOwnProperty(name) ){
        console.log(name + ": " + Buffer[name]);
    }
}


/*
try {

    console.error(new Error("hello this is a wrong!!"));
}

catch (err) {

    console.log("we got it:\n" ); 
}
*/