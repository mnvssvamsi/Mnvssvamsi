var a= 10;
var b=50;

function fn(){

	sum= a+b;
	//console.log(sum);      // we can print sum in the function itself without using return  
	return sum;        // we can return sum and (refer next comment) 
}
     console.log(fn())  // we can print the returned value(sum)  here in console . to print sum outside function 
 //fn()

 var newvar =  fn;
 newvar()             // literal

 function mul(a,b){

   multi= a*b;
   console.log(multi)
 }
  mul(3,5)
  mul(3,5,6)

  function tot(){        // using arguments and for in loop
  var total=0; 
  for(i in arguments){
  total += arguments[i];
  }
return total
}
console.log (tot(2,5,8,7))

function tot(){        // using arguments and for of loop
  var total=0; 
  for(i of arguments){
  total += i;
  }
console.log(total)
}
tot(1,2,8)


function tot(){        
    var total=0; 
  for(i of arguments){
  total = total+i;
  // console.log(tot) 
}
return total
}
console.log(tot) // returns function itself

// (function(a,b){
//    sub =a-b;
// 	console.log(sub)
// })(10,5)

 var snacksmon = 50; // scope
function vamsi(){
   var mymon =100;
     mymon+= snacksmon;
     console.log(mymon)
}
vamsi();

function vamsinew(){
	var mon= mymon; // "mon" will print if mymon is decalred as var in above ex, else mon will show error
	console.log(mon)
}
vamsinew()

(function(a,b){
   sub =a-b;
	console.log(sub)
})(10,5)