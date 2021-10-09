$("input[id*='counter']").each(function(i){
    this.value = 0;
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
});


