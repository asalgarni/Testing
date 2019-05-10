// testing
/* testing random codes
 *  just testing
  */

 
  console.log(scope);
  var scope="global";
  console.log(scope);


  function f() {
    console.log(scope);
    //var scope = "local";
    console.log(scope);
  }


  f();

  console.log(sq);

  var sq = function(x) {return x*x;}


  console.log(sq);

