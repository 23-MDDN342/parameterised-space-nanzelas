function draw_one_frame(cur_frac) {
	//setup-----------------------
	//540/2=270
	//960/2=480
	angleMode(DEGREES);
	let halfX = width/2;
	let halfY = height/2;
	background(144, 224, 239);
	strokeWeight(60);
	//==============================================
	let shadow=map(cur_frac,0,1,halfX/2,halfX*1.4);
	let shadow1=map(cur_frac,0,1,halfX*1.4,halfX*2.5);
	let ShadEnd1=map(cur_frac,0,1,halfX*2.5,halfX*4);
	let ripple=map(cur_frac,0,1,0,halfX);
	let ripple2=map(cur_frac,0,1,halfX,width);
	let ripple3=map(cur_frac,0,1,width,width*1.75);
	let IW=map(cur_frac,0,1,halfY/500,halfY/80);
	let MW=map(cur_frac,0,1,halfY/80,halfY/30);
	let BW=map(cur_frac,0,1,halfY/30,halfY/10);

	//StrokeSize......................
	let strip1=map(cur_frac,0,1,halfY/500,halfY/20);
	let strip2=map(cur_frac,0,1,halfY/20,halfY/10);
	let strip3=map(cur_frac,0,1,halfY/10,halfY/5);

	//Colours.........................

	let depthM1 = map(cur_frac,0,1,255,100);
	let depthM2 = map(cur_frac,0,1,100,50);//make a new set fo things for the things w transparency for the top of the ripple idk its recorded.
	let depthM3 = map(cur_frac,0,1,50,0);

	let backShadow1=color(126, 207, 222,depthM1);//darkest
	let backShadow2=color(126,207,222,depthM2);
	let backShadow3=color(126,207,222,depthM3);
	let frontShadow1=color(135, 217, 232,depthM1);//lighter
	let frontShadow2=color(135, 217, 232,depthM2);//lighter
	let frontShadow3=color(135, 217, 232,depthM3);//lighter

	let highL3=color(158, 231, 247);
	let highL2=color(194,242,252);
	let highL1=color(222, 245, 250);//lightest
	let rainColor=color(186, 235, 245);


	//=============================================
//	RIPPLE__________________________________________________________________
	let smaller = height/ 10
	let smallerRipple = ripple-smaller;
		if(ripple-smaller < 0){
			smallerRipple = 0;
		}
		let medSrip = ripple2-smaller;
		if(ripple2-smaller<0){
			medSrip = 0;
		}
		let bigSrip = ripple3-smaller;
		if(bigSrip-smaller<0){
			bigSrip=0;
		}
		
		noFill();

//SHADOWS AND DEPTH.......................................

	strokeWeight(strip1*3);//inside
	stroke(frontShadow1);
	arc(halfX,halfY,shadow,shadow/2.2,190,360);

	strokeWeight(strip1*2);//insdie
	stroke(backShadow1);
	arc(halfX,halfY,shadow,shadow/2.2,200,350);
	
	strokeWeight(strip3*1.5);//middle
	stroke(frontShadow2);
	arc(halfX,halfY,shadow1,shadow1/2.2,190,360);

	strokeWeight(strip2*2);//middle
	stroke(backShadow2);
	arc(halfX,halfY,shadow1,shadow1/2.2,200,350);

	strokeWeight(strip3*3);//outer
	stroke(frontShadow3);
	arc(halfX,halfY,ShadEnd1,ShadEnd1/2.2,180,360);
	
	strokeWeight(strip3*2);//outer
	stroke(backShadow3);
	arc(halfX,halfY,ShadEnd1,ShadEnd1/2.2,190,350);
	

	//underneaf
	strokeWeight(strip1*2);
	stroke(frontShadow1);
	arc(halfX,halfY+halfY/15,smallerRipple,smallerRipple/2.2,30,170);
	strokeWeight(strip1*1.5);
	stroke(backShadow1);
	arc(halfX,halfY+halfY/15,smallerRipple,smallerRipple/2.2,40,160);

	strokeWeight(strip2*2);//middle
	stroke(frontShadow2);
	arc(halfX,halfY+halfY/15,medSrip,medSrip/2.2,30,170);
	strokeWeight(strip2*1.5);//middle
	stroke(backShadow2);
	arc(halfX,halfY+halfY/15,medSrip,medSrip/2.2,40,160);

	strokeWeight(strip3*2);//outer
	stroke(frontShadow3);
	arc(halfX,halfY+halfY/15,bigSrip,bigSrip/2.2,30,170);
	strokeWeight(strip3*1.5);//outer
	stroke(backShadow3);
	arc(halfX,halfY+halfY/15,bigSrip,bigSrip/2.2,40,160);

	
//HIGHLIGHTED.......................................
	//outside.............
	strokeWeight(strip3*2);
	stroke(highL3);
	ellipse(halfX,halfY,bigSrip,bigSrip/2.2);//backlight

	strokeWeight(strip3);
	stroke(highL2);
	arc(halfX,halfY,bigSrip,bigSrip/2.2,350,180);

	strokeWeight(strip3/2);//highlight
	stroke(highL1);
	arc(halfX,halfY,bigSrip,bigSrip/2.2,10,170);

	strokeWeight(BW);
	stroke(255);
	arc(halfX,halfY,bigSrip,bigSrip/2.2,40,160);//whitelight
	
	//middle...........
	strokeWeight(strip2*2);
	stroke(highL3);
	ellipse(halfX,halfY,medSrip,medSrip/2.2);//backlight

	strokeWeight(strip2);
	stroke(highL2);
	arc(halfX,halfY,medSrip,medSrip/2.2,350,180);

	strokeWeight(strip2/2);
	stroke(highL1);
	arc(halfX,halfY,medSrip,medSrip/2.2,10,170);//highlight

	strokeWeight(MW);
	stroke(255);
	arc(halfX,halfY,medSrip,medSrip/2.2,40,160);//whitelight
	// stroke(0,255,0);
	// arc(halfX,halfY,medSrip,medSrip/2.2,10,20);//whitelight


	//inside.........
	strokeWeight(strip1*2);
	stroke(highL3);
	ellipse(halfX,halfY,smallerRipple,smallerRipple/2.2);//backlight

	strokeWeight(strip1);
	stroke(highL2);
	arc(halfX,halfY,smallerRipple,smallerRipple/2.2,350,180);

	strokeWeight(strip1/2);
	stroke(highL1);
	arc(halfX,halfY,smallerRipple,smallerRipple/2.2,10,170);//highlight

	strokeWeight(IW);
	stroke(255);
	arc(halfX,halfY,smallerRipple,smallerRipple/2.2,40,160);//whitelight

//WATERDROP____________________________________________
	let tbvr =map(cur_frac,0,1,height-height*2,halfY*1.1);
	
	let rainSize=map(cur_frac,0,1,halfX/10,halfX/150);

	strokeWeight(4);
	stroke(rainColor);
	fill(222, 245, 250);
	ellipse(halfX,tbvr,rainSize,rainSize*2);

	fill(255)
	stroke(rainColor);

	strokeWeight(1);
	ellipse(halfX,tbvr,rainSize/1.5,(rainSize*2)/1.5);

	//=========================================================================
}