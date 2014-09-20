/*
 * INVENKTION.SoundManager
 * author: Marco Uberti 
 * date:   April, 2013
 * 
 * 		Manager che gestisce l'audio e i suoni
 * 
 */
(function($, exports){

	var audioON = true;
	
	//Il nostro oggetto da esporre
	var mod = {
		 playSound : function(className) {
			 if(INVENKTION.SoundManager.isAudioOn()) {//scelta utente audio on off
				 var sound = document.querySelector("audio."+className);
				 if (sound) {
				     try {
				         sound.play();
				     } catch (err) {
                         console.log("eccezione durante invocazione play sound");
				     }
				 }
			 }
		 },
		 playBackgroundMusic : function() {
			 if(INVENKTION.SoundManager.isAudioOn()) {//scelta utente audio on off
				 var backgroundSound = document.querySelector("audio.background");
				 if (backgroundSound) {
				     var cont = 0;
				     while (cont < 4) {//fix bug primo avvio che non parte audio
				         try {
				             backgroundSound.play();
                         } catch (err) {
                             console.log("eccezione durante invocazione play sound background");
                             cont++;
                             sleep(1000);
                             continue;
                         }
				         break;
				     }
				 }
			 }
		 },
		 stopBackgroundMusic : function() {
			 var backgroundSound = document.querySelector("audio.background");
			 if (backgroundSound) {
                 try {
                     backgroundSound.pause();
                 } catch (err) {
                     console.log("eccezione durante invocazione pause sound");
                 }
			 }
		 },
		 setAudio: function(onoff) {
			 audioON = onoff;
		 },
		 isAudioOn: function() {
			 return audioON;
		 }
	};

	//Espongo nel global object
	exports.INVENKTION.SoundManager = mod;
})(jQuery, window);
	