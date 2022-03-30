onEvent("totalButton", "click", function( ) {
  setText("outputLabel", totalCost());
});

onEvent("taxButton", "click", function(){
  setText("outputLabel", totalWithTax(totalCost()));
});

var money = [1.99, 5.99, 10.99, 20.99, 50.99, 100.99];

function totalCost(){
  var total = 0;
  
  for(var i=0; i<6; i++){
    if(getChecked("check" + i)){
      total = total + money[i]; 
      console.log(total);
    }
  }
  return total;
}
function totalWithTax(amount){
  var total = amount + amount * 0.07;
  return total;
}
