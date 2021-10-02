var valueFirstDish = 0;
var valueSecondDish, valueThirdDish, valueFourthDish, valueFifthdish = 0;


$(document).ready(function(){
    $('#plusFirstDish').click(function(){
        valueFirstDish++;
        alert($("#counterFirstDish").text(valueFirstDish)) ;
    });

    $('#minusFirstDish').click(function(){
        valueFirstDish--;
        alert("El valor es "+valueFirstDish);
    });


});
