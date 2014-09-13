/*
 * INVENKTION.LevelManager
 * author: Marco Uberti 
 * date:   April, 2013
 * 
 * 		Manager che gestisce i livelli
 * 
 */
(function($, exports){
	
	//Metodi e variabili private
	var atelier = {
			codice:			"atelier",
      	    nome:			"atelier",
      	    sfondo:			"images/sfondi/sfondo1.png",
			livelli:	[
        	           	 {
        	           		 codice: 		"atm1",
        	           		 nome:	 		"APPLE",
        	           		 unlocked: true,
        	           		 immagine:		"images/mostri/mela.png",
        	           		 contorno:		"images/mostri/mela_tr.png",
        	           		 colori: [[218, 17, 17], [79, 143, 40], [129, 67, 12]]//ok
        	           	 },
        	           	 {
        	           		 codice: 		"atm2",
        	           		 nome:	 		"BANANA",
        	           		 unlocked: true,
        	           		 immagine:		"images/mostri/banane.png",
        	           		 contorno:		"images/mostri/banane_tr.png",
        	           		 colori: [[249, 176, 6], [120, 138, 18]]//ok
        	           	 },
        	           	 {
        	           	     codice: "atm3",
        	           	     nome: "COCONUT",
        	           	     unlocked: true,
        	           	     immagine: "images/mostri/cocco.png",
        	           	     contorno: "images/mostri/cocco_tr.png",
        	           	     colori: [[175, 110, 16], [110, 67, 6]]//ok
        	           	 },
        	           	 {
        	           	     codice: "atm4",
        	           	     nome: "GRAPES",
        	           	     unlocked: true,
        	           	     immagine: "images/mostri/uva.png",
        	           	     contorno: "images/mostri/uva_tr.png",
        	           	     colori: [[170, 14, 176], [147, 193, 7], [104, 75, 13]]//ok
        	           	 },
        	           	 {
        	           	     codice: "atm5",
        	           	     nome: "LEMON",
        	           	     unlocked: true,
        	           	     immagine: "images/mostri/lemon.png",
        	           	     contorno: "images/mostri/lemon_tr.png",
        	           	     colori: [[242, 217, 3], [248, 240, 176]]//ok
        	           	 }
        	           	 ]
	};
	var sezioni = [
	               //### SEZIONE 1
	               {
	            	   codice:			"w1",
	            	   index:			"0",
	            	   nome:			"mondo1",
	            	   sfondo:			"images/sfondi/sfondo1.png",
	            	   immagine:		"images/sezioni/sec1presentation.png",
	            	   storyboard:		"images/sezioni/sec1storyboard.png",
	            	   immagineBlocked: "images/sezioni/sec1locked.png",
	            	   livelli:	[
	            	           	 {
	            	           		 codice: 		"w1m1",
	            	           		 nome:	 		"Federico da Montefeltro",
	            	           		 immagine: "images/mostri/ritratto_federico.png",
	            	           		 contorno: "images/mostri/ritratto_federico_tr.png",
	            	           		 colori: [[180, 47, 65], [244, 201, 182], [183, 178, 175]]//ok
	            	           	 },
	            	           	 {
	            	           		 codice: 		"w1m2",
	            	           		 nome: "The Birth of Venus",
	            	           		 immagine: "images/mostri/nascitavenere.png",
	            	           		 contorno: "images/mostri/nascitavenere_tr.png",
	            	           		 colori: [[229, 174, 86], [255, 173, 133], [255, 228, 208], [216, 236, 244]]//ok
	            	           	 },
	            	           	{
	            	           		 codice: 		"w1m3",
	            	           		 nome: "Lady with an Ermine",
	            	           		 immagine: "images/mostri/ermellino.png",
	            	           		 contorno: "images/mostri/ermellino_tr.png",
	            	           		 colori: [[202, 123, 39], [252, 224, 227], [85, 127, 98], [176, 59, 70], [206, 206, 206]]//ok
	            	           	 },
	            	           	 {
	            	           		 codice: 		"w1m4",
	            	           		 nome:	 		"Mona Lisa",
	            	           		 immagine: "images/mostri/gioconda.png",
	            	           		 contorno: "images/mostri/gioconda_tr.png",
	            	           		 colori: [[140, 86, 62], [244, 205, 210], [229, 16, 66], [197, 194, 255]]//ok
	            	           	 },
	            	           	{
	            	           		 codice: 		"w1m5",
	            	           		 nome:	 		"Vitruvian man",
	            	           		 immagine: "images/mostri/vitruvian.png",
	            	           		 contorno: "images/mostri/vitruvian_tr.png",
	            	           		 colori: [[87, 73, 57], [251, 204, 154], [62, 140, 24]]//ok
	            	           	 },
	            	           	 {
	            	           		 codice: 		"w1m6",
	            	           		 nome: "The Card Players",
	            	           		 immagine: "images/mostri/giocatori_carte.png",
	            	           		 contorno: "images/mostri/giocatori_carte_tr.png",
	            	           		 colori: [[183, 133, 83], [201, 187, 90], [246, 92, 8], [254, 211, 173]]//ok
	            	           	 },
	            	           	 {
	            	           		 codice: 		"w1m8",
	            	           		 nome:	 		"Young man",
	            	           		 immagine: "images/mostri/youngman.png",
	            	           		 contorno: "images/mostri/youngman_tr.png",
	            	           		 colori: [[72, 72, 72], [214, 162, 107], [245, 199, 177]]//ok
	            	           	 },
	            	           	 {
	            	           		 codice: 		"w1m9",
	            	           		 nome: "Three Graces",
	            	           		 immagine: "images/mostri/tre_grazie.png",
	            	           		 contorno: "images/mostri/tre_grazie_tr.png",
	            	           		 colori: [[255, 225, 225], [248, 187, 3], [188, 107, 53]]//ok
	            	           	 },
	            	           	 {
	            	           		 codice: 		"w1m10",
	            	           		 nome: "Charles VII of France",
	            	           		 immagine: "images/mostri/carlo_7.png",
	            	           		 contorno: "images/mostri/carlo_7_tr.png",
	            	           		 colori: [[144, 62, 48], [226, 103, 83], [253, 210, 203]]//ok
	            	           	 }
                                 ,
	            	           	 {
	            	           	     codice: "w1m11",
	            	           	     nome: "Sunflowers",
	            	           	     immagine: "images/mostri/girasolivangogh.png",
	            	           	     contorno: "images/mostri/girasolivangogh_tr.png",
	            	           	     colori: [[255, 180, 0], [245, 208, 120], [123, 174, 43]]//ok
	            	           	 }
	            	           	 ]
	               },
	               //### SEZIONE 2
	               {
	            	   codice:			"w2",
	            	   index:			"1",
	            	   nome:			"mondo2",
	            	   sfondo:			"images/sfondi/sfondo2.png",
	            	   immagine:		"images/sezioni/sec2presentation.png",
	            	   storyboard:		"images/sezioni/sec2storyboard.png",
	            	   immagineBlocked: "images/sezioni/sec2locked.png",
	            	   livelli:	[
	            	           	 {
	            	           		 codice: 		"w2m1",
	            	           		 nome: "Napoleon crossing the Alps",
	            	           		 immagine: "images/mostri/napoleonealpi.png",
	            	           		 contorno: "images/mostri/napoleonealpi_tr.png",
	            	           		 colori: [[113, 149, 251], [235, 0, 0], [247, 223, 196], [137, 58, 23], [240, 234, 222]]//ok
	            	           	 },
	            	           	 {
	            	           		 codice: 		"w2m2",
	            	           		 nome: "Ficodindaio",
	            	           		 immagine: "images/mostri/ficodindaio.png",
	            	           		 contorno: "images/mostri/ficodindaio_tr.png",
	            	           		 colori: [[255, 139, 46], [255, 215, 167], [187, 119, 52], [223, 244, 249]]//ok
	            	           	 },
	            	           	{
	            	           		 codice: 		"w2m3",
	            	           		 nome: "The adolescent Bacchus",
	            	           		 immagine: "images/mostri/baccogiovane.png",
	            	           		 contorno: "images/mostri/baccogiovane_tr.png",
	            	           		 colori: [[251, 229, 185], [220, 241, 243], [172, 195, 126]]//ok
	            	           	 },
	            	           	 {
	            	           		 codice: 		"w2m4",
	            	           		 nome: "Medusa",
	            	           		 immagine: "images/mostri/medusa.png",
	            	           		 contorno: "images/mostri/medusa_tr.png",
	            	           		 colori: [[220, 3, 49], [243, 214, 186], [130, 181, 89]]//ok
	            	           	 },
	            	           	{
	            	           		 codice: 		"w2m5",
	            	           		 nome: "Venus of Urbino",
	            	           		 immagine: "images/mostri/venere_urbino.png",
	            	           		 contorno: "images/mostri/venere_urbino_tr.png",
	            	           		 colori: [[239, 203, 152], [221, 144, 160], [224, 244, 246], [230, 111, 14]]//ok
	            	           	 },
	            	           	 {
	            	           		 codice: 		"w2m6",
	            	           		 nome: "Duchess of Urbino",
	            	           		 immagine: "images/mostri/ritratto_duchessa_urbino.png",
	            	           		 contorno: "images/mostri/ritratto_duchessa_urbino_tr.png",
	            	           		 colori: [[248, 231, 208], [154, 151, 148], [208, 149, 66]]//ok
	            	           	 },
	            	           	 {
	            	           		 codice: 		"w2m8",
	            	           		 nome: "Boy bitten by a Lizard",
	            	           		 immagine: "images/mostri/morsoramarro.png",
	            	           		 contorno: "images/mostri/morsoramarro_tr.png",
	            	           		 colori: [[160, 29, 51], [192, 236, 247], [121, 168, 100], [255, 222, 184], [130, 88, 14]]//ok
	            	           	 },
	            	           	{
	            	           		 codice: 		"w2m9",
	            	           		 nome: "Madonna and Child with Saint John the Baptist",
	            	           		 immagine: "images/mostri/giardiniera.png",
	            	           		 contorno: "images/mostri/giardiniera_tr.png",
	            	           		 colori: [[255, 222, 207], [231, 174, 0], [58, 90, 170], [212, 10, 10]]//ok
	            	           	 },
	            	           	 {
	            	           		 codice: 		"w2m10",
	            	           		 nome: "Dream of Santa Elena",
	            	           		 immagine: "images/mostri/sogno_santelena.png",
	            	           		 contorno: "images/mostri/sogno_santelena_tr.png",
	            	           		 colori: [[236, 187, 17], [255, 99, 5], [240, 205, 177], [193, 147, 81]]//ok
	            	           	 }
	            	           	 ]
	               },
	               //### SEZIONE 3
	               {
	            	   codice:			"w3",
	            	   index:			"2",
	            	   nome:			"mondo3",
	            	   sfondo:			"images/sfondi/sfondo3.png",
	            	   immagine:		"images/sezioni/sec3presentation.png",
	            	   storyboard:		"images/sezioni/sec3storyboard.png",
	            	   immagineBlocked: "images/sezioni/sec3locked.png",
	            	   livelli:	[
	            	           	 {
	            	           		 codice: 		"w3m1",
	            	           		 nome: "Van Gogh portrait",
	            	           		 immagine: "images/mostri/ritratto_van_gogh.png",
	            	           		 contorno: "images/mostri/ritratto_van_gogh_tr.png",
	            	           		 colori: [[116, 150, 188], [250, 156, 23], [254, 236, 205]]
	            	           	 },
	            	           	{
	            	           		 codice: 		"w3m3",
	            	           		 nome: "Eleanor of Toledo",
	            	           		 immagine: "images/mostri/eleonora_toledo.png",
	            	           		 contorno: "images/mostri/eleonora_toledo_tr.png",
	            	           		 colori: [[214, 168, 78], [145, 170, 199], [251, 230, 212], [223, 6, 27], [113, 88, 39]]
	            	           	 },
	            	           	 {
	            	           		 codice: 		"w3m4",
	            	           		 nome: "John the Baptist",
	            	           		 immagine: "images/mostri/john_the_batist.png",
	            	           		 contorno: "images/mostri/john_the_batist_tr.png",
	            	           		 colori: [[183, 151, 113], [247, 207, 207], [188, 107, 53]]
	            	           	 },
	            	           	{
	            	           		 codice: 		"w3m5",
	            	           		 nome: "The supper at Emmaus",
	            	           		 immagine: "images/mostri/supperemmaus.png",
	            	           		 contorno: "images/mostri/supperemmaus_tr.png",
	            	           		 colori: [[144, 163, 55], [189, 16, 20], [146, 93, 36], [253, 225, 203]]
	            	           	 },
	            	           	 {
	            	           		 codice: 		"w3m6",
	            	           		 nome: "Rembrandt Portrait",
	            	           		 immagine: "images/mostri/autoritrattorembrandth.png",
	            	           		 contorno: "images/mostri/autoritrattorembrandth_tr.png",
	            	           		 colori: [[138, 111, 80], [208, 148, 77], [250, 237, 207], [130, 118, 144]]
	            	           	 },
	            	           	 {
	            	           	     codice: "w3m10",
	            	           	     nome: "Mary Magdalene",
	            	           	     immagine: "images/mostri/maria_maddalena.png",
	            	           	     contorno: "images/mostri/maria_maddalena_tr.png",
	            	           	     colori: [[209, 206, 197], [214, 0, 0], [249, 226, 213]]
	            	           	 },
	            	           	 {
	            	           	     codice: "w3m10",
	            	           	     nome: "Salome the Daughter of Herodias",
	            	           	     immagine: "images/mostri/figlia_herodias.png",
	            	           	     contorno: "images/mostri/figlia_herodias_tr.png",
	            	           	     colori: [[86, 119, 227], [223, 240, 201], [240, 205, 177], [156, 106, 57], [195, 59, 88]]
	            	           	 }
	            	           	 ]
	               },
	               //### SEZIONE 4
	               {
	            	   codice:			"w4",
	            	   index:			"3",
	            	   nome:			"mondo4",
	            	   sfondo:			"images/sfondi/sfondo4.png",
	            	   immagine:		"images/sezioni/sec4presentation.png",
	            	   storyboard:		"images/sezioni/sec4storyboard.png",
	            	   immagineBlocked: "images/sezioni/sec4locked.png",
	            	   livelli:	[
	            	           	 {
	            	           		 codice: 		"w4m1",
	            	           		 nome: "Girl with a Pearl Earring",
	            	           		 immagine: "images/mostri/ragazzaorecchinoperla.png",
	            	           		 contorno: "images/mostri/ragazzaorecchinoperla_tr.png",
	            	           		 colori: [[245, 176, 55], [248, 213, 185], [55, 133, 193], [245, 55, 91]]
	            	           	 },
	            	           	 {
	            	           		 codice: 		"w4m2",
	            	           		 nome: "Johann Friedrich",
	            	           		 immagine: "images/mostri/johannfriedrich.png",
	            	           		 contorno: "images/mostri/johannfriedrich_tr.png",
	            	           		 colori: [[157, 188, 32], [254, 221, 182], [187, 106, 62], [216, 217, 210]]
	            	           	 },
	            	           	{
	            	           		 codice: 		"w4m3",
	            	           		 nome: "Sistine Madonna angels",
	            	           		 immagine: "images/mostri/angeliraffaello.png",
	            	           		 contorno: "images/mostri/angeliraffaello_tr.png",
	            	           		 colori: [[254, 228, 195], [204, 100, 43], [210, 149, 77]]
	            	           	},
	            	           	{
	            	           		 codice: 		"w4m5",
	            	           		 nome: "The Starry Night",
	            	           		 immagine: "images/mostri/starrynight.png",
	            	           		 contorno: "images/mostri/starrynight_tr.png",
	            	           		 colori: [[58, 97, 184], [127, 157, 225], [241, 189, 31], [51, 111, 10]]
	            	           	 },
	            	           	 {
	            	           		 codice: 		"w4m6",
	            	           		 nome: "Sleeping Gipsy",
	            	           		 immagine: "images/mostri/sleeping_gipsy.png",
	            	           		 contorno: "images/mostri/sleeping_gipsy_tr.png",
	            	           		 colori: [[163, 105, 30], [212, 155, 81], [213, 241, 242]]
	            	           	 },
	            	           	{
	            	           		 codice: 		"w4m7",
	            	           		 nome: "Anna Borowska",
	            	           		 immagine: "images/mostri/annazborowska.png",
	            	           		 contorno: "images/mostri/annazborowska_tr.png",
	            	           		 colori: [[138, 6, 13], [29, 40, 72], [255, 219, 219], [59, 24, 12]]
	            	           	 },
	            	           	 {
	            	           		 codice: 		"w4m8",
	            	           		 nome: "Les Demoiselles d'Avignon",
	            	           		 immagine: "images/mostri/demoiselleavignon.png",
	            	           		 contorno: "images/mostri/demoiselleavignon_tr.png",
	            	           		 colori: [[250, 225, 199], [146, 90, 30]]
	            	           	 },
	            	           	{
	            	           		 codice: 		"w4m9",
	            	           		 nome: "Juan de Pareja",
	            	           		 immagine: "images/mostri/juanpareja.png",
	            	           		 contorno: "images/mostri/juanpareja_tr.png",
	            	           		 colori: [[139, 142, 109], [233, 233, 233], [227, 165, 115], [54, 53, 53]]
	            	           	 },
	            	           	 {
	            	           		 codice: 		"w4m10",
	            	           		 nome: "Souvenir de vojage",
	            	           		 immagine: "images/mostri/souvenirvojage.png",
	            	           		 contorno: "images/mostri/souvenirvojage_tr.png",
	            	           		 colori: [[140, 214, 91], [93, 162, 96], [100, 190, 216]]
	            	           	 },
	            	           	 {
	            	           	     codice: "w4m10",
	            	           	     nome: "Man in bowler hat",
	            	           	     immagine: "images/mostri/uomobombetta.png",
	            	           	     contorno: "images/mostri/uomobombetta_tr.png",
	            	           	     colori: [[91, 91, 91], [255, 61, 1], [253, 224, 184], [47, 221, 7]]
	            	           	 }
	            	           	 ]
	               },
	               //### SEZIONE 5
	               {
	            	   codice:			"w5",
	            	   index:			"4",
	            	   nome:			"mondo5",
	            	   sfondo:			"images/sfondi/sfondo5.png",
	            	   immagine:		"images/sezioni/sec5presentation.png",
	            	   storyboard:		"images/sezioni/sec5storyboard.png",
	            	   immagineBlocked: "images/sezioni/sec5locked.png",
	            	   livelli:	[
	            	           	 {
	            	           		 codice: 		"w5m1",
	            	           		 nome:	 		"The Scream",
	            	           		 immagine:		"images/mostri/urlo.png",
	            	           		 contorno:		"images/mostri/urlo_tr.png",
	            	           		 colori:  [[203, 192, 158],[104, 97, 97],[92, 131, 174],[251, 122, 71]]
	            	           	 },
	            	           	 {
	            	           		 codice: 		"w5m2",
	            	           		 nome:	 		"Man with a Roman Medal",
	            	           		 immagine:		"images/mostri/bernardobrembo.png",
	            	           		 contorno:		"images/mostri/bernardobrembo_tr.png",
	            	           		 colori:  [[92, 92, 92],[211, 186, 111],[255, 224, 199]]
	            	           	 },
	            	           	{
	            	           		 codice: 		"w5m3",
	            	           		 nome:	 		"The Death of Marat",
	            	           		 immagine:		"images/mostri/marat.png",
	            	           		 contorno:		"images/mostri/marat_tr.png",
	            	           		 colori:  [[129, 129, 129],[193, 152, 89],[248, 225, 189]]
	            	           	 },
	            	           	 {
	            	           		 codice: 		"w5m4",
	            	           		 nome:	 		"Mery Laurent",
	            	           		 immagine:		"images/mostri/mery_laurent.png",
	            	           		 contorno:		"images/mostri/mery_laurent_tr.png",
	            	           		 colori:  [[95, 96, 132],[255, 238, 245],[252, 155, 1],[129, 73, 39]]
	            	           	 },
	            	           	 {
	            	           		 codice: 		"w5m6",
	            	           		 nome:	 		"Frida",
	            	           		 immagine:		"images/mostri/frida.png",
	            	           		 contorno:		"images/mostri/frida_tr.png",
	            	           		 colori:  [[192, 28, 63],[254, 228, 197],[82, 82, 82]]
	            	           	 },
	            	           	{
	            	           		 codice: 		"w5m7",
	            	           		 nome:	 		"American Gothic",
	            	           		 immagine:		"images/mostri/america_gothic.png",
	            	           		 contorno:		"images/mostri/america_gothic_tr.png",
	            	           		 colori:  [[108, 108, 108],[157, 63, 72],[235, 245, 251],[255, 219, 201],[218, 174, 21]]
	            	           	 },
	            	           	 {
	            	           		 codice: 		"w5m8",
	            	           		 nome:	 		"Jean Antoine Watteau",
	            	           		 immagine:		"images/mostri/watteau.png",
	            	           		 contorno:		"images/mostri/watteau_tr.png",
	            	           		 colori:  [[190, 190, 190],[169, 117, 50],[255, 238, 224]]
	            	           	 },
	            	           	{
	            	           		 codice: 		"w5m9",
	            	           		 nome:	 		"The Kiss",
	            	           		 immagine:		"images/mostri/bacio_klimt.png",
	            	           		 contorno:		"images/mostri/bacio_klimt_tr.png",
	            	           		 colori:  [[0, 242, 11],[255, 222, 0],[252, 230, 230],[71, 71, 71],[238, 118, 0]]
	            	           	 },
	            	           	 {
	            	           		 codice: 		"w5m10",
	            	           		 nome:	 		"Monet Portrait",
	            	           		 immagine:		"images/mostri/ritratto_monet.png",
	            	           		 contorno:		"images/mostri/ritratto_monet_tr.png",
	            	           		 colori:  [[41, 63, 132],[255, 228, 192],[148, 85, 2]]
	            	           	 },
	            	           	 {
	            	           	     codice: 		"w5m10",
	            	           	     nome:	 		"Tsunami",
	            	           	     immagine:		"images/mostri/tsunami.png",
	            	           	     contorno:		"images/mostri/tsunami_tr.png",
	            	           	     colori:  [[112, 144, 235],[200, 165, 70]]
	            	           	 }
	            	           	 ]
	               },
	               //### SEZIONE BONUS
	               {
	            	   codice:			"wb",
	            	   index:			"5",
	            	   nome:			"mondob",
	            	   sfondo:			"images/sfondi/sfondobonus.png",
	            	   immagine:		"images/sezioni/bonuspresentation.png",
	            	   immagineBlocked: "images/sezioni/bonuspresentation.png",
	            	   livelli:	[
	            	           	 {
	            	           		 codice: 		"wbm1",
	            	           		 nome:	 		"The Raft of the Medusa",
	            	           		 immagine:		"images/mostri/zatteramedusa.png",
	            	           		 contorno:		"images/mostri/zatteramedusa_tr.png",
	            	           		 colori:  [[255, 215, 185],[221, 0, 5],[191, 108, 27],[170, 170, 170],[192, 229, 225]]
	            	           	 },
	            	           	 {
	            	           		 codice: 		"wbm2",
	            	           		 nome:	 		"Liberty Leading the People",
	            	           		 immagine:		"images/mostri/libertapopolo.png",
	            	           		 contorno:		"images/mostri/libertapopolo_tr.png",
	            	           		 colori:  [[255, 0, 6],[40, 112, 211],[231, 204, 123],[255, 214, 200],[164, 92, 66]]
	            	           	 },
	            	           	 {
	            	           		 codice: 		"wbm3",
	            	           		 nome:	 		"Oath of the Horatii",
	            	           		 immagine:		"images/mostri/curiazi.png",
	            	           		 contorno:		"images/mostri/curiazi_tr.png",
	            	           		 colori:  [[230, 4, 4],[234, 234, 234],[89, 88, 143],[251, 227, 214],[187, 187, 193]]
	            	           	 },
	            	           	 {
	            	           		 codice: 		"wbm4",
	            	           		 nome:	 		"The Fourth Estate",
	            	           		 immagine:		"images/mostri/quarto_stato.png",
	            	           		 contorno:		"images/mostri/quarto_stato_tr.png",
	            	           		 colori:  [[136, 85, 31],[207, 155, 100],[178, 67, 38],[242, 211, 178]]
	            	           	 },
	            	           	 {
	            	           		 codice: 		"wbm5",
	            	           		 nome:	 		"Persistence Memory",
	            	           		 immagine:		"images/mostri/persistence_memory.png",
	            	           		 contorno:		"images/mostri/persistence_memory_tr.png",
	            	           		 colori:  [[200, 190, 152],[239, 210, 19],[150, 188, 235]]
	            	           	 }
	            	           	 ]
	               }
	               ];

	//Il nostro oggetto da esporre
	var mod = {
		 getAtelier: function() {
			 return atelier;
		 },
		 getSezioni: function(){
				return sezioni;
		 },
		 //Numero di sezioni
		 getSectionCount : function() {
			 return sezioni.length;
		 },
		 //Numero dei livelli di una particolare sezione
		 getSectionLevelCount: function(section) {
			return section.livelli.length; 
		 },
		 //Restituisce la sezione dato il suo numero
		 getSection: function(index) {
			 if(index < this.getSectionCount()) {
				 return sezioni[index];
			 }else return undefined;
		 },
		 isSectionUnlocked: function(section) {
			 if(INVENKTION.debug) {
				 return true;
			 }
			 //la prima sezione e il bonus sono sempre sbloccate
			 if(section.codice=="w1" || section.codice=="wb") return true;
			 var unlocked = INVENKTION.StorageManager.getItem(section.codice+"_unlocked");
			 if(unlocked == "true") return true;
			 else return false;
		 },
		 //Restituisce il livello di una specifica sezione dato il suo numero
		 getSectionLevel: function(section,index) {
			 return section.livelli[index];
		 },
		 isLevelUnlocked: function(level) {
			 if(INVENKTION.debug) {
				 return true;
			 }
			 if(level.unlocked == true) return true;//solo caso livelli atelier
			 //Il primissimo livello è sempre sbloccato
			 if(level.codice=="w1m1") return true;
			 var unlocked = INVENKTION.StorageManager.getItem(level.codice+"_unlocked");
			 if(unlocked == "true") return true;
			 else return false;
		 },
		 unlockLevel: function(level) {
			 INVENKTION.StorageManager.setItem(level.codice+"_unlocked", "true");
		 },
		 unlockSection: function(sec) {
			 INVENKTION.StorageManager.setItem(sec.codice+"_unlocked", "true");
		 },
		 getNextLevel: function(lev) {
			 var section = this.getLevelSection(lev.codice);
			 var levelCount = this.getSectionLevelCount(section);
			 for(var i=0; i<levelCount; i++){
				 if(section.livelli[i].codice == lev.codice) {//livello corrente
					 if(i == levelCount-1) {//siamo alla fine della sezione, devo prendere la successiva
						 var nextSection = this.getSection(parseInt(section.index)+1);
						 if(nextSection == undefined) return undefined;
						 return nextSection.livelli[0];
					 }else {
						 return section.livelli[i+1];
					 }
				 }
			 }
			 return undefined;
		 },
		 //Verifica se ci sono livelli da sbloccare, sezioni da sbloccare o
		 //quadri bonus da sbloccare. Ritorna un oggetto con questa struttura che il
		 //chiamante può analizzare per effettuare le operazioni del caso:
		 //{
		 //		livello: {...} OR undefined 
		 //		sezione: {...} OR undefined (lo metto solo se è la prima volta che viene sbloccata)
		 //		bonus  : {...} OR undefined (lo metto solo se è la prima volta che viene sbloccata)
		 //}
		 unlockNextLevel: function(lev,sec) {
			 var resultObj = {};
			 //se bonus non sblocco nulla
			 if(sec.codice == "wb") return resultObj;
			 //Se il livello è l'ultimo della sezione controllo se c'è una sezione successiva
			 //nel caso positivo sblocco la sezione nuova e il suo primo livello
			 if(sec.livelli[sec.livelli.length-1].codice == lev.codice) {
				 console.log("Ultimo livello della sezione, devo sbloccare la sezione successiva...");
				 var numSection = this.getSectionCount();
				 for(var i=0; i<numSection; i++) {
					 var s = this.getSection(i);
					 if(s.codice == sec.codice) {
						 //ok è la sezione corrente
						 //prendo la successiva se esiste
						 var nextSection = this.getSection(i+1);
						 if(nextSection) {//se esiste sblocco anche il suo primo livello oltre a lei
							 if(!this.isSectionUnlocked(nextSection)) {
								 this.unlockSection(nextSection);
								 resultObj.sezione = nextSection;
							 }
							 //se è la sezione bonus non sblocco il primo livello
							 if(nextSection.codice !="wb"){
								 var firstLevel = this.getSectionLevel(nextSection, 0);
								 this.unlockLevel(firstLevel);
								 resultObj.livello = firstLevel;
							 }
						 }
					 }
				 }
			 }else {
				 //Se non è l'ultimo sblocco il livello successivo e basta
				 var numLevel = this.getSectionLevelCount(sec);
				 for(var i=0; i<numLevel; i++) {
					 var l = this.getSectionLevel(sec,i);
					 if(l.codice == lev.codice) {
						 //ok è il livello corrente
						 //prendo il successivo
						 var nextLevel = this.getSectionLevel(sec,i+1);
						 if(nextLevel) {//se esiste sblocco
							 this.unlockLevel(nextLevel);
							 resultObj.livello = nextLevel;
						 }
					 }
				 }
			 }
			 //Check 3 stelle su tutti i livelli per sbloccare il quadro bonus
			 var sectionStars = this.getSectionTotalStars(sec);
			 if(parseInt(sectionStars) == parseInt(this.getSectionLevelCount(sec))*3) {
				 var index = sec.index;
				 var bonusLevel = this.getBonusLevel(index);
				 if(!this.isLevelUnlocked(bonusLevel)) {
					this.unlockBonus(index);
				 	resultObj.bonus = bonusLevel;
				 }
			 }
			 return resultObj;
		 },
		 getLevelBestResult: function(level) {
			 var percentage = INVENKTION.StorageManager.getItem(level.codice+"_best");
			 if(!percentage) return "0";
			 else return percentage;
		 },
		 setLevelBestResult: function(level, percentage) {
			 //Aggiorno se e solo se il risultato è migliore di quello esistente
			 var currentBest = parseInt(this.getLevelBestResult(level));
			 if(currentBest < parseInt(percentage)) {
				 INVENKTION.StorageManager.setItem(level.codice+"_best", percentage);
			 }
		 },
		 getLevelStars: function(section, level) {
			 try {
				 var stars =  INVENKTION.StorageManager.getItem("star_"+section.codice+"_"+level.codice);
				 if(!stars) stars = "0";
				 return stars;
			 }catch(err) {
				 return 0;
			 }
		 },
		 setLevelStars: function(section, level, stars) {
			 //Aggiorno se e solo se il risultato è migliore di quello esistente
			 var currentStars = parseInt(this.getLevelStars(section, level));
			 if(currentStars < parseInt(stars)) {
				 INVENKTION.StorageManager.setItem("star_"+section.codice+"_"+level.codice,""+stars);
			 }
		 },
		 getSectionTotalStars: function(section) {
			 var total = 0;
			 var numLevels = this.getSectionLevelCount(section);
			 for(var i=0; i<numLevels; i++) {
				 var lev = this.getSectionLevel(section, i);
				 var levStars = this.getLevelStars(section, lev);
				 total += parseInt(levStars);
			 }
			 
			 return total;
		 },
		 getBonusLevel: function(index) {
			 var bonusSection = this.getSection(5);
			 var level = bonusSection.livelli[parseInt(index)];
			 return level;
		 },
		 unlockBonus: function(index) {
			 var bonusSection = this.getSection(5);
			 var level = bonusSection.livelli[parseInt(index)];
			 if(level) {
				 this.unlockLevel(level);
			 }
		 },
		 setLastSectionUsed: function(sectionIndex) {
			 INVENKTION.StorageManager.setItem("lastUsedSection",sectionIndex);
		 },
		 getLastSectionUsed: function() {
			 var lastSectionUsed = INVENKTION.StorageManager.getItem("lastUsedSection");
			 if(lastSectionUsed && parseInt(lastSectionUsed) > 0) {
				return lastSectionUsed;
			 }
			 return 0;
		 },
		 setLastSectionLevelUsed: function(sectionIndex,levelIndex) {
			 INVENKTION.StorageManager.setItem("lastUsedLevelSection_"+sectionIndex,levelIndex);
		 },
		 getLastAtelierLevelUsed: function() {
			 var lastSectionUsed = INVENKTION.StorageManager.getItem("lastAtelierLevelUsed");
			 if(lastSectionUsed && parseInt(lastSectionUsed) > 0) {
				return lastSectionUsed;
			 }
			 return 0;
		 },
		 setLastAtelierLevelUsed: function(levelIndex) {
			 INVENKTION.StorageManager.setItem("lastAtelierLevelUsed",levelIndex);
		 },
		 getLastSectionLevelUsed: function(sectionIndex) {
			 var lastSectionLevelUsed = INVENKTION.StorageManager.getItem("lastUsedLevelSection_"+sectionIndex);
			 if(lastSectionLevelUsed && parseInt(lastSectionLevelUsed) > 0) {
				return lastSectionLevelUsed;
			 }
			 return 0;
		 },
		 getLevelSection: function(levelCode) {
			 var numSection = this.getSectionCount();
			 for(var i=0; i<numSection; i++) {
				 var s = this.getSection(i);
				 var secLevelsCount = this.getSectionLevelCount(s);
				 for(var j=0; j<secLevelsCount; j++) {
					 var l = s.livelli[j];
					 if(l.codice == levelCode) {
						 return s;
					 }
				 }
			 }
		 }
	};

	//Espongo nel global object
	exports.INVENKTION.LevelManager = mod;
})(jQuery, window);
	
