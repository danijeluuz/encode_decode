let immagine
let posMouse
let pg
let spessore

function preload() {
	immagine = loadImage("https://picsum.photos/900/600/")


	/*immagine = loadImage("immagini/out_1619555697894.png")*/
}


function setup(){
/*	createCanvas(immagine.width, immagine.height)
	pixelDensity(1)
	pg = createGraphics(immagine.width, immagine.height)
	pg.background(255)
	pg.image(immagine, 0, 0)
*/



//CODIFICA
/*
spessore = 100;

var chiave = [	spessore, 362, 662,
				spessore, 549, 954,
				spessore, 836, 399,
				spessore, 150, 633,
				spessore, 88, 855,
				spessore, 520, 51,
				spessore, 342, 968,
				spessore, 552, 199,
				spessore, 755, 471,
				spessore, 212, 35,


				-spessore, 63, 451,
				-spessore, 24, 173,
				-spessore, 33, 568,
				-spessore, 256, 68,
				-spessore, 305, 533,
				-spessore, 359, 238,
				-spessore, 308, 495,
				-spessore, 22, 218,
				-spessore, 149, 5,
				-spessore, 209, 373,
];

}
//CODIFICA

swap(pg, chiave[0], chiave[1],  chiave[2])
swap(pg, chiave[3], chiave[4],  chiave[5])
swap(pg, chiave[6], chiave[7],  chiave[8])
swap(pg, chiave[9], chiave[10],  chiave[11])
swap(pg, chiave[12], chiave[13],  chiave[14])
swap(pg, chiave[15], chiave[16],  chiave[17])
swap(pg, chiave[18], chiave[19],  chiave[20])
swap(pg, chiave[21], chiave[22],  chiave[23])
swap(pg, chiave[24], chiave[25],  chiave[26])
swap(pg, chiave[27], chiave[28],  chiave[29])

swap(pg, chiave[30], chiave[31],  chiave[32])
swap(pg, chiave[33], chiave[34],  chiave[35])
swap(pg, chiave[36], chiave[37],  chiave[38])
swap(pg, chiave[39], chiave[40],  chiave[41])
swap(pg, chiave[42], chiave[43],  chiave[44])
swap(pg, chiave[45], chiave[46],  chiave[47])
swap(pg, chiave[48], chiave[49],  chiave[50])
swap(pg, chiave[51], chiave[52],  chiave[53])
swap(pg, chiave[54], chiave[55],  chiave[56])
swap(pg, chiave[57], chiave[58],  chiave[59])
*/


//DECODIFICA
/*
swap(pg, chiave[27], chiave[28],  chiave[29])
swap(pg, chiave[24], chiave[25],  chiave[26])
swap(pg, chiave[21], chiave[22],  chiave[23])
swap(pg, chiave[18], chiave[19],  chiave[20])
swap(pg, chiave[15], chiave[16],  chiave[17])
swap(pg, chiave[12], chiave[13],  chiave[14])
swap(pg, chiave[9], chiave[10],  chiave[11])
swap(pg, chiave[6], chiave[7],  chiave[8])
swap(pg, chiave[3], chiave[4],  chiave[5])
swap(pg, chiave[0], chiave[1],  chiave[2])

swap(pg, chiave[57], chiave[58],  chiave[59])
swap(pg, chiave[54], chiave[55],  chiave[56])
swap(pg, chiave[51], chiave[52],  chiave[53])
swap(pg, chiave[48], chiave[49],  chiave[50])
swap(pg, chiave[45], chiave[46],  chiave[47])
swap(pg, chiave[42], chiave[43],  chiave[44])
swap(pg, chiave[39], chiave[40],  chiave[41])
swap(pg, chiave[36], chiave[37],  chiave[38])
swap(pg, chiave[33], chiave[34],  chiave[35])
swap(pg, chiave[30], chiave[31],  chiave[32])
*/
/*
swap(pg, 30, 65,  202)
swap(pg, 30, 234, 119)
swap(pg, 30, 72,  380)
swap(pg, 30, 15,  280)
swap(pg, 30, 170,  93)
swap(pg, 30, 235,  25)


swap(pg, -30, 235,  25)
swap(pg, -30, 65,  202)
swap(pg, -30, 234, 119)
swap(pg, -30, 72,  380)
swap(pg, -30, 15,  280)
swap(pg, -30, 170, 93)
*/





//DECODIFICA
/*
swap(pg, 30, 235,  25)
swap(pg, 30, 170,  93)
swap(pg, 30, 15,  280)
swap(pg, 30, 72,  380)
swap(pg, 30, 234, 119)
swap(pg, 30, 65,  202)

swap(pg, -30, 170, 93)
swap(pg, -30, 15,  280)
swap(pg, -30, 72,  380)
swap(pg, -30, 234, 119)
swap(pg, -30, 65,  202)
swap(pg, -30, 235,  25)

}
*/
}

function keyPressed(){
	if (key == 's') {
		let fileName = "out_" + new Date().getTime()
		saveCanvas(pg, fileName, 'png')
	}


 }


 

function draw(){
	background(255)

	

	createCanvas(immagine.width, immagine.height)
	pixelDensity(1)
	pg = createGraphics(immagine.width, immagine.height)
	pg.background(255)
	pg.image(immagine, 0, 0)


	spessore = 100;

	var chiave = [	spessore, 362, 662,
					spessore, 549, 954,
					spessore, 836, 399,
					spessore, 150, 633,
					spessore, 88, 855,
					spessore, 520, 51,
					spessore, 342, 968,
					spessore, 552, 199,
					spessore, 755, 471,
					spessore, 212, 35,


					-spessore, 63, 451,
					-spessore, 24, 173,
					-spessore, 33, 568,
					-spessore, 256, 68,
					-spessore, 305, 533,
					-spessore, 359, 238,
					-spessore, 308, 495,
					-spessore, 22, 218,
					-spessore, 149, 5,
					-spessore, 209, 373,
	];

	if (key == 'c') {
		swap(pg, chiave[0], chiave[1],  chiave[2])
		swap(pg, chiave[3], chiave[4],  chiave[5])
		swap(pg, chiave[6], chiave[7],  chiave[8])
		swap(pg, chiave[9], chiave[10],  chiave[11])
		swap(pg, chiave[12], chiave[13],  chiave[14])
		swap(pg, chiave[15], chiave[16],  chiave[17])
		swap(pg, chiave[18], chiave[19],  chiave[20])
		swap(pg, chiave[21], chiave[22],  chiave[23])
		swap(pg, chiave[24], chiave[25],  chiave[26])
		swap(pg, chiave[27], chiave[28],  chiave[29])
		
		swap(pg, chiave[30], chiave[31],  chiave[32])
		swap(pg, chiave[33], chiave[34],  chiave[35])
		swap(pg, chiave[36], chiave[37],  chiave[38])
		swap(pg, chiave[39], chiave[40],  chiave[41])
		swap(pg, chiave[42], chiave[43],  chiave[44])
		swap(pg, chiave[45], chiave[46],  chiave[47])
		swap(pg, chiave[48], chiave[49],  chiave[50])
		swap(pg, chiave[51], chiave[52],  chiave[53])
		swap(pg, chiave[54], chiave[55],  chiave[56])
		swap(pg, chiave[57], chiave[58],  chiave[59])

	}

	if (key == 'd') {

		swap(pg, chiave[0], chiave[1],  chiave[2])
		swap(pg, chiave[3], chiave[4],  chiave[5])
		swap(pg, chiave[6], chiave[7],  chiave[8])
		swap(pg, chiave[9], chiave[10],  chiave[11])
		swap(pg, chiave[12], chiave[13],  chiave[14])
		swap(pg, chiave[15], chiave[16],  chiave[17])
		swap(pg, chiave[18], chiave[19],  chiave[20])
		swap(pg, chiave[21], chiave[22],  chiave[23])
		swap(pg, chiave[24], chiave[25],  chiave[26])
		swap(pg, chiave[27], chiave[28],  chiave[29])
		
		swap(pg, chiave[30], chiave[31],  chiave[32])
		swap(pg, chiave[33], chiave[34],  chiave[35])
		swap(pg, chiave[36], chiave[37],  chiave[38])
		swap(pg, chiave[39], chiave[40],  chiave[41])
		swap(pg, chiave[42], chiave[43],  chiave[44])
		swap(pg, chiave[45], chiave[46],  chiave[47])
		swap(pg, chiave[48], chiave[49],  chiave[50])
		swap(pg, chiave[51], chiave[52],  chiave[53])
		swap(pg, chiave[54], chiave[55],  chiave[56])
		swap(pg, chiave[57], chiave[58],  chiave[59])

		swap(pg, chiave[27], chiave[28],  chiave[29])
		swap(pg, chiave[24], chiave[25],  chiave[26])
		swap(pg, chiave[21], chiave[22],  chiave[23])
		swap(pg, chiave[18], chiave[19],  chiave[20])
		swap(pg, chiave[15], chiave[16],  chiave[17])
		swap(pg, chiave[12], chiave[13],  chiave[14])
		swap(pg, chiave[9], chiave[10],  chiave[11])
		swap(pg, chiave[6], chiave[7],  chiave[8])
		swap(pg, chiave[3], chiave[4],  chiave[5])
		swap(pg, chiave[0], chiave[1],  chiave[2])

		swap(pg, chiave[57], chiave[58],  chiave[59])
		swap(pg, chiave[54], chiave[55],  chiave[56])
		swap(pg, chiave[51], chiave[52],  chiave[53])
		swap(pg, chiave[48], chiave[49],  chiave[50])
		swap(pg, chiave[45], chiave[46],  chiave[47])
		swap(pg, chiave[42], chiave[43],  chiave[44])
		swap(pg, chiave[39], chiave[40],  chiave[41])
		swap(pg, chiave[36], chiave[37],  chiave[38])
		swap(pg, chiave[33], chiave[34],  chiave[35])
		swap(pg, chiave[30], chiave[31],  chiave[32])
	}

	if (key == 'k') {


		swap(pg, chiave[27], chiave[28],  chiave[29])
		swap(pg, chiave[24], chiave[25],  chiave[26])
		swap(pg, chiave[21], chiave[22],  chiave[23])
		swap(pg, chiave[18], chiave[19],  chiave[20])
		swap(pg, chiave[15], chiave[16],  chiave[17])
		swap(pg, chiave[12], chiave[13],  chiave[14])
		swap(pg, chiave[9], chiave[10],  chiave[11])
		swap(pg, chiave[6], chiave[7],  chiave[8])
		swap(pg, chiave[3], chiave[4],  chiave[5])
		swap(pg, chiave[0], chiave[1],  chiave[2])

		swap(pg, chiave[57], chiave[58],  chiave[59])
		swap(pg, chiave[54], chiave[55],  chiave[56])
		swap(pg, chiave[51], chiave[52],  chiave[53])
		swap(pg, chiave[48], chiave[49],  chiave[50])
		swap(pg, chiave[45], chiave[46],  chiave[47])
		swap(pg, chiave[42], chiave[43],  chiave[44])
		swap(pg, chiave[39], chiave[40],  chiave[41])
		swap(pg, chiave[36], chiave[37],  chiave[38])
		swap(pg, chiave[33], chiave[34],  chiave[35])
		swap(pg, chiave[30], chiave[31],  chiave[32])
	}

		
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