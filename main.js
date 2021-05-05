let immagine
let posMouse
let pg
let spessore

function preload() {


	/*immagine = loadImage("https://picsum.photos/600/400/")*/
	immagine = loadImage("immagini/rodcenko.jpg")
}

function setup(){



	var canvas = createCanvas(immagine.width, immagine.height);

	canvas.width  = immagine.width;
	canvas.height = immagine.height;
	canvas.parent('canvas');

	pixelDensity(1);
	pg = createGraphics(immagine.width, immagine.height)

	let lunghezza = Math.floor(random(10, 50))
	let chiave = []
	let = chiaveDec = []

	for(let i=0; i<lunghezza; i++){
		let segno = random(1) < 0.5 ? -1 : 1;
		let dim = segno == -1 ? immagine.height : immagine.width
		let s = Math.floor(random(10, dim/4))
		let a =  Math.floor(random(0, dim/2-s))
		let b = Math.floor(random(dim/2, dim-s))
		chiave.push(s*segno, a, b)
	}

	console.log(chiave)

	pg.resizeCanvas(immagine.width, immagine.height);
	pg.background(255)
	pg.image(immagine, 0, 0)

	document.getElementById("codifica").addEventListener("click", function(){
		for(let i = 0; i < chiave.length; i+=3){
			swap(pg, chiave[i], chiave[i+1],  chiave[i+2])
		}
		
		document.getElementById("testo").innerHTML = chiave;
	});
	
	
	
	document.getElementById("decodifica").addEventListener("click", function(){
		
		//let chiaveDec = document.getElementById("testo").innerHTML;
		//console.log(chiaveDec)

		for(let i=chiave.length-3; i>=0; i-=3){
			swap(pg, chiave[i], chiave[i+1],  chiave[i+2])
		}

		
	});
	
	
}

function draw(){
	image(pg, 0, 0)
	
}

function swapX(pg, larghezza, x1, x2) {
	let regione1 = pg.get(x1, 0, larghezza, pg.height)
	let regione2 = pg.get(x2, 0, larghezza, pg.height)
	pg.image(regione1, x2, 0)
	pg.image(regione2, x1, 0)
}

function swapY(pg, altezza, y1, y2) {
	let regione1 = pg.get(0, y1, pg.width, altezza)
	let regione2 = pg.get(0, y2, pg.width, altezza)
	pg.image(regione1, 0, y2)
	pg.image(regione2, 0, y1)
}

function swap(pg, spessore, a, b) {
	if(spessore < 0){
		swapY(pg, Math.abs(spessore), a, b)
	} else {
		swapX(pg, spessore, a, b)
	}
}

function salvaImm(){
	salvaFile();
}

function salvaFile(){
	let fileName = "out_" + new Date().getTime()
	saveCanvas(pg, fileName, 'png')
}
