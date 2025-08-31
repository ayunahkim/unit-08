//unit_08 element 2 - creative coding

let base, eyes, dress, jacket, shorts, sneakers, maryjanes;
let dressNFC, jacketNFC, shortsNFC, sneakersNFC, maryjanesNFC;
let haircol, eyecol;
let hairmenu, eyemenu, clothingmenu
let baseD,baseP,baseC,baseY;
let eyesD, eyesP, eyesC, eyesY;

let font,font2;

let bgm;

let loadinggif,globe,globe2,logo;

let myBlue = "#0054FF";
let p = 0;
let c = 0;

let button1,button2,button3,button4;

let outputIMG;

//let devtools = true;

function preload(){
  loadinggif = loadImage("/resized/gif1.gif");
  globe = loadImage("/resized/globe4.gif");
  globe2 = loadImage("/resized/globe5.gif");
  logo = loadImage("/resized/lablogo_resized.png");

  baseD = loadImage("/resized/baseD.png");
  baseP = loadImage("/resized/baseP.png");
  baseC = loadImage("/resized/baseC.png");
  baseY = loadImage("/resized/baseY.png");
  
  eyesD = loadImage("/resized/eyesD.png");
  eyesP = loadImage("/resized/eyesP.png");
  eyesC = loadImage("/resized/eyesC.png");
  eyesY = loadImage("/resized/eyesY.png");

  dress = loadImage("/resized/dress.png");
  jacket = loadImage("/resized/jacket.png");
  sneakers = loadImage("/resized/sneakers.png");
  shorts = loadImage("/resized/shorts.png");
  maryjanes = loadImage("/resized/maryjanes.png");

  font = loadFont("RobotoMono.ttf");
  font2 = loadFont("EndfieldByButan.ttf");

  bgm = loadSound("sanctuary06.mp3");
}

function setup() {
  let mycanvas = createCanvas(1920, 964);
  //console.log(windowWidth,windowHeight);
  mycanvas.parent("container");

  hairmenu = false;
  eyemenu = false;
  clothingmenu = false;
  //shoemenu = false;

  textFont(font);
  textSize(20);
  
  button1 = createButton('<i class="fa-solid fa-rotate-left"></i>');
  button1.parent('container');
  console.log(windowWidth,windowHeight);

  button2 = createButton('<i class="fa-solid fa-check"></i>');
  button2.parent('container');

  button3 = createButton('save');
  button3.parent('container');

  button4 = createButton('restart');
  button4.parent('container');

  button1.position(-100,-100);
  button2.position(-100,-100);
  button3.position(-100,-100);
  button4.position(-100,-100);

  button1.style("font-size","16px");
  button2.style("font-size","16px");
  button3.style("font-size","16px");
  button4.style("font-size","16px");
  
  haircol = "default";
  eyecol = "default";

  dressNFC = false;
  jacketNFC = false;
  shortsNFC = false;
  sneakersNFC = false;
  maryjanesNFC = false;
  
  base = baseD;

  bgm.play();
  bgm.loop();

}

function draw() {
  background("#ECF3F5");
  
  //devtool();

  pages();
  //console.log(mouseX,mouseY);
  
}

function pages(){
  if(p==0){
    push();
    imageMode(CENTER);
    image(loadinggif,width/2,height/2);
    pop();
    push();
    tint(255,60);
    image(globe,width-968,height-675);
    pop();
    if(mouseIsPressed){
      p+=1;
    }

    textFont(font2);
    fill("#89BDFF");
    
    if(c>0){
      text("accessing files for UNIT_08",40,60);
    }
    if(c>60){
      text("setting up parameters",40,90);
    }
    if(c>100){
      text("loading clothing and settings",40,140);
    }
    if(c>120){
      text("will people think about gender again?",40,170);
    }
    if(c>130){
      text("who am i kidding, of course they will",40,210);
    }
    if(c>160){
      text("they will never let me live peacefully",40,240);
    }
    if(c>170){
      text("adding listening events",40,270);
    }
    if(c>180){
      text("will the scientists come again?",40,310);
    }
    if(c>190){
      text("i wonder what outfit they'll make me wear again...",40,340);
    }
    if(c>200){
      text("whatever i guess...",40,370);
    }
    if(c>260){
      text("i'm just a toy",40,410);
    }
    if(c>320){
      text("08/14/2025",40,440);
    }
    if(c>380){
      text("end of serial communications...",40,540);
    }

    if(c>450){
      p++;
    }
    //console.log(c);
    c++;
  }
  if(p==1){
    push();
    tint(255,20);
    image(globe,width-968,height-675);
    image(globe2,0,0);
    pop();
    c=0;
    chara();
    
    if(hairmenu || eyemenu){
      colorMenu();
    }
    else if(clothingmenu){
      clothingMenu();
    }
    else{
      image(logo,900,180);
    textFont(font);
    textSize(24);
    push();
    fill(myBlue);
    text("access granted... welcome",1190,620);
    textFont(font2);
    text("ADMIN",1560,620);
    textSize(18);
    textFont(font);
    text("CUSTOMIZATION OPTIONS: hair, eyes, clothing",1190,670);
    text("WARNING: clothing requires item scan",1190,700);
    pop();
    textFont(font2);
    }
    //console.log(mouseX,mouseY);
    idBoxes();

    //reset button
    if(haircol != "default"||eyecol != "default"||
    jacketNFC || dressNFC || shortsNFC ||
    sneakersNFC || maryjanesNFC
    ){
    button1.position(1728,39);
    button2.position(1768,39);

    if(mouseX>button1.x && mouseX<button1.x+button1.width &&
      mouseY>button1.y && mouseY<button1.y+button1.height
    ){
      if(mouseIsPressed){
        resetProgram();
      }
    }
    if(mouseX>button2.x && mouseX<button2.x+button2.width &&
      mouseY>button2.y && mouseY<button2.y+button2.height
    ){
      if(mouseIsPressed){
        finish();
      }
    }
  }
  } else if(p == 2){
    chara();
    outputIMG = get(170,92,495,750);
    p+=1;
  } else if(p == 3){
    push();
    tint(255,20);
    imageMode(CORNER);
    image(globe,width-968,height-675);
    image(globe2,0,0);
    pop();
    imageMode(CENTER);
    image(outputIMG,width/2,height/2);
    // console.log(p)
    button1.hide();
    button2.hide();

    button3.position(1040,60);
    button4.position(1100,60);
  }
}

function mouseClicked(){
  if(p==3){
    if(mouseX>button3.x && mouseX<button3.x+button3.width &&
      mouseY>button3.y && mouseY<button3.y+button3.height
    ){
      save(outputIMG,"unit_08.png");
    }
    if(mouseX>button4.x && mouseX<button4.x+button4.width &&
      mouseY>button4.y && mouseY<button4.y+button4.height
    ){
      window.location.reload();
    }
  }
}

function colorMenu(){
  let window1 = new Windows(896,104,800,286);
    window1.show();

    if(hairmenu){
      fill(myBlue);
      line(448,143,896,143);
      text("Hair Color:",944,156);
      fill("white");
    } else if(eyemenu){
      fill(myBlue);
      line(528,198.9,896,198.9);
      text("Eye Color:",944,156);
      fill("white");
    }

    let colorC = new Swatch(976,190,160,"#1BFFFF");
    colorC.show();

    let colorY = new Swatch(1216,190,160,"#FFE554");
    colorY.show();

    let colorP = new Swatch(1456,190,160,"#FF50AF");
    colorP.show();
}

function clothingMenu(){
  let window2 = new Windows(896,104,800,715);
  window2.show();
  fill(myBlue);

  text("Place clothing items onto the scanner:",920,156);
  fill("white");
  line(548.8,338,896,338);
  line(592,799.5,896,799.5);

  if(!dressNFC||!jacketNFC||!shortsNFC||!sneakersNFC||!maryjanesNFC){
    tint(220, 30);
  } else {
    noTint();
  }

  image(dress,950,260);
  image(jacket,1320,260);
  image(shorts,1420,480);
  image(sneakers,1382.4,690.3);
  image(maryjanes,1020,650);

  if(dressNFC){
    noTint();
    image(dress,950,260);
  }
  if(jacketNFC){
    noTint();
    image(jacket,1320,260);
  }
  if(shortsNFC){
    noTint();
    image(shorts,1420,480);
  }
  if(sneakersNFC){
    noTint();
    image(sneakers,1382.4,690.3);
  }
  if(maryjanesNFC){
    noTint();
    image(maryjanes,1020,650);
  }
  
  
  noTint();
}

function mousePressed(){
  if(hairmenu){
    if(mouseY>190 && mouseY<350){
    //base color change
    if(mouseX>976 && mouseX<1136){
      haircol = "cyan";
    } else if(mouseX>1216 && mouseX<1376){
      haircol = "yellow";
    } else if(mouseX>1456 && mouseX<1616){
      haircol = "pink";
    }
  } 
  }
  if(eyemenu){
    if(mouseY>190 && mouseY<350){
    //eye color change
    if(mouseX>976 && mouseX<1136){
      eyecol = "cyan";
    } else if(mouseX>1216 && mouseX<1376){
      eyecol = "yellow";
    } else if(mouseX>1456 && mouseX<1616){
      eyecol = "pink";
    }
  }
  }

  if(clothingmenu){
    if(mouseX>950&&mouseX<1262&&mouseY>260&&mouseY<559){
      if(dressNFC){
        dressNFC = false;
      } else{
        dressNFC = true;
        jacketNFC = false;
      }
    }
    if(mouseX>1320&&mouseX<1635&&mouseY>260&&mouseY<468){
      if(jacketNFC){
        jacketNFC = false;
      } else{
        jacketNFC = true;
        dressNFC = false;
      }
    }
    if(mouseX>1420&&mouseX<1540&&mouseY>480&&mouseY<568){
      if(shortsNFC){
        shortsNFC = false;
      } else{
        shortsNFC = true;
      }
    }
    if(mouseX>1382.4&&mouseX<1564.4&&mouseY>690.3&&mouseY<775.3){
      if(sneakersNFC){
        sneakersNFC = false;
      } else{
        sneakersNFC = true;
        maryjanesNFC = false;
      }
    }
    if(mouseX>1020&&mouseX<1201&&mouseY>650&&mouseY<772){
      if(maryjanesNFC){
        maryjanesNFC = false;
      } else{
        maryjanesNFC = true;
      sneakersNFC = false;
      }
    }
  }

  //idboxes
  //hair
  if(mouseX>320&&mouseX<374&&mouseY>96&&mouseY<186){
    hairmenu = true;
    eyemenu = false;
    clothingmenu = false;
  } 
  //eye
  else if(mouseX>420 && mouseX<460 && mouseY>178 && mouseY<218){
    hairmenu = false;
    eyemenu = true;
    clothingmenu = false;
  }
  //clothing
  else if(mouseX>355 && mouseX<475 && mouseY>260 && mouseY<460){
    hairmenu = false;
    eyemenu = false;
    clothingmenu = true;
  } 
  //shoes
  else if(mouseX>415 && mouseX<515 && mouseY>740 && mouseY< 820){
    hairmenu = false;
    eyemenu = false;
    clothingmenu = true;
  }
}


//display character
function chara(){
  if(haircol == "default"){
    base = baseD;
  } else if(haircol == "pink"){
    base = baseP;
    //console.log(base);
  } else if(haircol == "cyan"){
    base = baseC;
  } else if(haircol == "yellow"){
    base = baseY;
  }
  image(base,192,104);

  if(eyecol=="default"){
    eyes = eyesD; 
  } else if(eyecol=="pink"){
    eyes = eyesP;
  } else if(eyecol=="cyan"){
    eyes = eyesC;
  } else if(eyecol=="yellow"){
    eyes = eyesY;
  }
  image(eyes,371.5,184.6);

  
  if(maryjanesNFC){
    image(maryjanes,325,700);
  }
  if(shortsNFC){
    image(shorts,357,410);
  }
  if(jacketNFC){
    image(jacket,258,245);
  }
  if(sneakersNFC){
    image(sneakers,324,735);
  }
  if(dressNFC){
    image(dress,260,251);
  }
}

function idBoxes(){
  //boxes
  push();
  noFill();
  stroke("#FF00C7");
  strokeWeight(2);

  //hair
  rect(320,96,54,90);

  //eye
  square(420,178,40);

  //clothes
  rect(355,260,120,200);

  //shoes
  rect(415,740,100,80);
  pop();
}

function resetProgram(){
  hairmenu = false;
  eyemenu = false;
  clothingmenu = false;

  haircol = "default";
  eyecol = "default";

  dressNFC = false;
  jacketNFC = false;
  shortsNFC = false;
  sneakersNFC = false;
  maryjanesNFC = false;

  base = baseD;
  console.log("reset!");
}

function finish(){
  p+=1;
}

// function testDress(){
//   image(dress,168,195);

//   if(jacketNFC){
//     jacketNFC = false;
//   }
// }
// function testjacket(){
//   image(jacket,174,190);
  
//   if(dressNFC){
//     dressNFC = false;
//   }
// }

class Windows{
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  show(){
    stroke(myBlue);
    rect(this.x,this.y,this.w,this.h);
  }
}

class Swatch{
  constructor(x,y,size,col){
    this.x = x;
    this.y = y;
    this.size = size;
    this.col = col;
  }

  show(){
    push();
    stroke(myBlue);
    fill(this.col);
    square(this.x,this.y,this.size);
    pop();
  }
}