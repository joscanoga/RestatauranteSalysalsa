jQuery('document').ready(function($){
    var menuBtn=$(".ver_menu");
    var menu=$('.navegador ul');
    menuBtn.click(function(){ 
        if(menu.hasClass("mostrar")){
            menu.removeClass("mostrar");
        }else{
            menu.addClass("mostrar");
        }
        
    });
});