$("input[id*='counter']").each(function(i){
    this.value = 0;
    $("div[id*='fourthDish']").hide();
    $("div[id*='fifthDish']").hide();
})


$(document).ready(function(){
    $("img[id*='plus']").click(function(i){
        let currentButton = this;
        $("input[id*='counter']").each(function(i){
            if (this.parentNode.parentNode === currentButton.parentNode.parentNode){
                this.value++;
                console.log("got");
            }
        })
    })

    $("img[id*='minus']").click(function(i){
        let currentButton = this;
        $("input[id*='counter']").each(function(i){
            if (this.parentNode.parentNode === currentButton.parentNode.parentNode){
                if (this.value >= 1){
                    this.value--;
                }
            }
        })
    })

    $("a[id*='previousDishesPage']").click(function(i){
        $("div[id*='fourthDish']").hide();
        $("div[id*='firstDish']").show();
        $("div[id*='fifthDish']").hide();
        $("div[id*='secondDish']").show();
        $("div[id*='thirdDish']").show();
    })


    $("a[id*='nextDishesPage']").click(function(i){
        $("div[id*='firstDish']").hide();
        $("div[id*='fourthDish']").show();
        $("div[id*='secondDish']").hide();
        $("div[id*='fifthDish']").show();
        $("div[id*='thirdDish']").hide();
    })

    
});



