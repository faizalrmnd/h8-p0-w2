//1.

var rows1 = 0 ;
var limit = 5 ;
while (rows1 < limit) {
  console.log('*') ;
  rows1 ++ ;
}

//2.

var rows2 = 0 ;
var limit = 5 ;
while (rows2 < limit) {
  var limitin = 0 ;
  var star = '';
  while (limitin < limit ){
    star += '*';
    limitin ++ ;
  }
  console.log(star) ;
  rows2 ++ ;
}


//3.

var rows3 = 0 ;
var limit = 5 ;
while (rows3 < limit) {
  var limitin = 0 ;
  var star = '';
  while (limitin <= rows3 ){
    star += '*';
    limitin ++ ;
  }
  console.log(star) ;
  rows3 ++ ;
}
