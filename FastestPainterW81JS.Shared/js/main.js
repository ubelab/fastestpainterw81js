﻿//Initialize function
var init = function () {
    $('.ui-btn-back').live('tap', function(event) {
    	console.log("OK cliccato EXIT YES");
    	if(event.handled !== true) {
    		event.handled = true;
	        //var currentApp = tizen.application.getCurrentApplication();
    	    //urrentApp.exit();
            //TODO EXIT WINDOWS APP
    	}
    });
    
    //ANIMAZIONI CSS3 su tutti gli elementi con classe "animatedButton"
    //Solo per gli elementi che dopo il click non reindirizzano ad una altra pagina
    //Altrimenti bisogna mettere il reindirizzamento dopo il termine dell'animazione.
    $(".animatedButton").live("tap", function (event) {
        var btn = $(this);
        btn.addClass('animating');
	});
    $(".animatedButton").live('animationend', function (event) {
    	$(this).removeClass('animating');
	});
    $(".trickTrapImg").live('animationend', function (event) {
    	//$(this).parent().removeClass('animatedTrickTrap');
    	$(this).parent().remove();
	});
    //POPUP
    $(".MS_popUpContainer").live('animationend', function (event) {
    	$(this).removeClass('animatedPopUpCont');
	});
    $(".MS_popUpInn").live('animationend', function (event) {
    	$(this).removeClass('animatedPopUpInn');
	});
    $(".JS_popUpClose").live("tap", function (event) {
		if(event.handled !== true) {
			event.handled = true;
			INVENKTION.PageShowManager.popUpClose();
		}
	});
		
    //
	//Faccio partire la musica
    //INVENKTION.SoundManager.playBackgroundMusic();

    //Centro in verticale la maschera
    var TOP = window.innerHeight / 2 - (350 / 2);
    $(".mascheraImg img").css("position", "absolute");
    $(".mascheraImg img").css("top", TOP);

    console.log("init() called");
};
$(document).bind('pageinit', init);

//utility function sleep like
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}
