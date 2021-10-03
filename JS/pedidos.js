$("input[id*='counter']").each(function(i){
    this.value = 0;
})

$(document).ready(function(){
    $('#plusFirstDish').click(function(){
        document.getElementById("counterFirstDish").value++;
    });

    $('#minusFirstDish').click(function(){
        if(document.getElementById("counterFirstDish").value >= 1){
            document.getElementById("counterFirstDish").value--;
        }    
    });
});

$(document).ready(function(){
    $("img[id*='plus']").click(function(i){
        console.log($(this).siblings()("input").attr('id'));
    })
});
