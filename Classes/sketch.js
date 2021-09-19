let sam,sam1,sam2,sam3,sam4,sam5,sam6,sam7,sam8;
let bg;
let box1,box2,box3,box4;
let b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26,
    b27,b28,b29,b30,b31,b32,b33,b34,b35,b36,b37,b38,b39,b40,b41,b42,b43,b44,b45,b46,b47,b48,b49,b50;
let h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,h11,h12,h13,h14,h15,h16,h17,h18,h19,h20;
let t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,t21,t22,t23,t24,t25,t26,
    t27,t28,t29,t30,t31,t32,t33,t34,t35,t36,t37,t38,t39,t40,t41,t42,t43,t44,t45,t46,t47,t48,t49,t50,
    t51,t52,t53,t54,t55,t56,t57,t58,t59,t60,t61,t62,t63,t64,t65,t66,t67,t68,t69,t70,t71,t72,t73,t74,
    t75,t76,t77,t78,t79,t80,t81,t82,t83,t84,t85,t86,t87,t88,t89,t90,t91,t92,t93,t94,t95,t96,t97,t98,
    t99,t100,t101,t102,t103,t104,t105,t106,t107,t108,t109,t110,t111,t112,t113,t114,t115,t116,t117,
    t118,t119,t120,t121,t122,t123,t124,t125,t126,t127,t128,t129,t130,t131,t132,t133,t134,t135,t136,
    t137,t138,t139,t140,t141,t142,t143,t144,t145;
let array = [];
let bgSound;
let faceImg;
let face;
let health;
let healthImg;
let clock;
let clockImg;
let inventory;
let inventoryImg;
let clockFont;
let gameState = 1;
let logo;
let logoImg;
let bg1;
let bg2;
let play,playImg;
let array1 = [];
let array2 = [];

function preload(){
  bg = loadImage("assets/Map.png");
  sam1 = loadAnimation("assets/77318.png");
  sam2 = loadAnimation("assets/77319.png","assets/77320.png","assets/77321.png");
  sam3 = loadAnimation("assets/77326.png");
  sam4 = loadAnimation("assets/77327.png","assets/77328.png","assets/77329.png");
  sam5 = loadAnimation("assets/77322.png");
  sam6 = loadAnimation("assets/77323.png","assets/77324.png","assets/77325.png");
  sam7 = loadAnimation("assets/77330.png");
  sam8 = loadAnimation("assets/77331.png","assets/77332.png","assets/77333.png");
  bgSound = loadSound("sounds/01 - Stardew Valley Overture.mp3");
  faceImg = loadImage("assets/77317.png");
  healthImg = loadImage("assets/77315.png");
  clockImg = loadImage("assets/77316.png");
  inventoryImg = loadImage("assets/77314.png");
  clockFont = loadFont("digital-7.ttf");
  logoImg = loadImage("assets/Logo (1).png");
  bg1 = loadImage("assets/bg1.jpg");
  playImg = loadImage("assets/play.png");
}

function setup(){
  createCanvas(1340,675);

  bg2 = createSprite(650,285,50,50);
  bg2.addImage(bg1);
  bg2.scale = 1.9;

  logo = createSprite(650,240,50,50);
  logo.addImage(logoImg);
  logo.scale = 0.9;

  play = createSprite(650,550,50,50);
  play.addImage(playImg);
  play.scale = 0.5;
  //play.debug = true;
  play.setCollider("rectangle",0,0,380,110);

  a = createSprite(2175,-650,100,100);
  a.addImage(bg);
  a.scale = 4;

  sam = createSprite(664,350,100,100);
  sam.addAnimation("samStand",sam1);
  sam.addAnimation("samStand2",sam2);
  sam.addAnimation("samStand3",sam3);
  sam.addAnimation("samStand4",sam4);
  sam.addAnimation("samStand5",sam5);
  sam.addAnimation("samStand6",sam6);
  sam.addAnimation("samStand7",sam7);
  sam.addAnimation("samStand8",sam8);
  sam.scale = 2.8;

  box1 = createSprite(15,340,30,630);
  box1.visible = false;
  box2 = createSprite(670,15,1350,30);
  box2.visible = false;
  box3 = createSprite(1325,340,30,630);
  box3.visible = false;
  box4 = createSprite(670,655,1350,35);
  box4.visible = false;

  face = createSprite(65,75,110,110);
  face.addImage(faceImg);
  face.scale = 1.5;

  health = createSprite(1250,650,50,50);
  health.addImage(healthImg);
  health.scale = 0.6;

  clock = createSprite(1250,100,50,50);
  clock.addImage(clockImg);
  clock.scale = 0.8;

  inventory = createSprite(670,600,50,50);
  inventory.addImage(inventoryImg);
  inventory.scale = 1.2;

  b1 = createSprite(920,580,130,700);
  b2 = createSprite(664,850,650,180);
  b3 = createSprite(410,1030,150,550);
  b4 = createSprite(140,1285,550,270);
  b5 = createSprite(1050,1075,180,450);
  b6 = createSprite(1280,1385,450,280);
  b7 = createSprite(1080,1600,500,300);
  b8 = createSprite(1560,1730,500,200);
  b9 = createSprite(1900,1625,200,500);
  b10 = createSprite(1890,1450,500,155);
  b11 = createSprite(1679,1310,70,130);
  b12 = createSprite(2150,1230,280,300);
  b13 = createSprite(2150,875,280,155);
  b14 = createSprite(2745,1330,950,300);
  b15 = createSprite(3075,1280,280,850);
  b16 = createSprite(3350,1600,300,200);
  b17 = createSprite(3700,1680,500,100);
  b18 = createSprite(4015,1600,300,200);
  b19 = createSprite(4180,1300,60,1500);
  b20 = createSprite(4900,1270,1500,200);
  b21 = createSprite(5370,1080,700,200);
  b22 = createSprite(5465,985,400,200);
  b23 = createSprite(5710,425,500,930);
  b24 = createSprite(5730,-200,300,500);
  b25 = createSprite(5425,-1045,1000,1330);
  b26 = createSprite(5520,-2300,500,1500);
  b27 = createSprite(4700,-3140,1200,500);
  b28 = createSprite(3795,-2800,700,1000);
  b29 = createSprite(2445,-3340,2200,600);
  b30 = createSprite(1135,-3010,600,500);
  b31 = createSprite(1340,-2530,200,460);
  b32 = createSprite(970,-2465,265,320);
  b33 = createSprite(-115,-2410,2100,200);
  b34 = createSprite(-1370,-1720,500,1500);
  b35 = createSprite(-1000,-680,970,900);
  b36 = createSprite(-1500,450,500,1500);
  b37 = createSprite(-800,1300,1050,300);
  b38 = createSprite(-590,1500,200,500);
  b39 = createSprite(200,1500,200,500);
  b40 = createSprite(-190,1750,600,300);
  b41 = createSprite(-875,-2800,500,800);
  b42 = createSprite(-10,-3230,1800,300);
  b43 = createSprite(2900,-1680,1850,1000);
  b44 = createSprite(550,-1350,250,250);
  b45 = createSprite(1470,290,350,500);
  b46 = createSprite(1830,1000,240,200);

  h1 = createSprite(630,170,350,350);
  h2 = createSprite(-170,150,843,300);
  h3 = createSprite(-440,100,200,300);
  h4 = createSprite(-940,890,460,180);
  h5 = createSprite(-775,750,150,100);
  h6 = createSprite(-290,-750,350,330);
  h7 = createSprite(-200,-2200,600,400);
  h8 = createSprite(-870,-2250,350,500);
  h9 = createSprite(-270,-2990,670,490);
  h10 = createSprite(1360,890,420,300);
  h11 = createSprite(1790,150,350,310);
  h12 = createSprite(3400,650,350,1250);
  h13 = createSprite(3960,500,360,900);
  h14 = createSprite(3975,1200,390,220);
  h15 = createSprite(2480,-2980,2300,800);
  h16 = createSprite(4100,-1970,500,410);
  h17 = createSprite(4420,-2640,430,500);

  t1 = createSprite(1190,300,340,520);
  t2 = createSprite(1620,790,1105,300);
  t3 = createSprite(1220,1140,130,200);
  t4 = createSprite(1399,1200,220,60);
  t5 = createSprite(1755,1230,60,100);
  t6 = createSprite(1970,1230,60,100);
  t7 = createSprite(2325,1120,70,100);
  t8 = createSprite(2900,1120,70,100);
  t9 = createSprite(2402,795,62,50);
  t10 = createSprite(3080,810,300,60);
  t11 = createSprite(3040,695,160,70);
  t12 = createSprite(2970,535,510,130);
  t13 = createSprite(2250,505,930,70);
  t14 = createSprite(2180,150,500,230);
  t15 = createSprite(2630,200,460,270);
  t16 = createSprite(3165,265,160,400);
  t17 = createSprite(3050,200,100,300);
  t18 = createSprite(2930,90,150,50);
  t19 = createSprite(2435,-100,90,72);
  t20 = createSprite(1400,-140,100,100);
  t21 = createSprite(2705,-340,150,110);
  t22 = createSprite(2575,-670,190,250);
  t23 = createSprite(1970,-650,350,520);
  t24 = createSprite(1450,-650,350,520);
  t25 = createSprite(1710,-810,180,100);
  t26 = createSprite(2960,-740,140,110);
  t27 = createSprite(3060,-880,150,100);
  t28 = createSprite(3460,-745,200,100);
  t29 = createSprite(3250,-550,540,200);
  t30 = createSprite(3085,-390,100,205);
  t31 = createSprite(3440,-390,105,220);
  t32 = createSprite(3250,-755,230,250);
  t33 = createSprite(4060,-650,550,535);
  t34 = createSprite(3930,-350,120,90);
  t35 = createSprite(4210,-350,120,90);
  t36 = createSprite(4730,-850,210,200);
  t37 = createSprite(4730,-680,90,180);
  t38 = createSprite(4850,-550,160,170);
  t39 = createSprite(4868,-400,90,220);
  t40 = createSprite(4705,-3,130,100);
  t41 = createSprite(4840,210,150,100);
  t42 = createSprite(3985,-50,150,100);
  t43 = createSprite(4300,360,150,100);
  t44 = createSprite(4800,465,130,100);
  t45 = createSprite(4700,290,100,100);
  t46 = createSprite(4255,40,100,100);
  t47 = createSprite(4480,-1250,140,100);
  t48 = createSprite(3990,-1250,140,100);
  t49 = createSprite(4870,-1200,40,80);
  t50 = createSprite(4870,-1350,180,220);
  t51 = createSprite(4870,-1550,40,80);
  t52 = createSprite(4870,-1700,180,220);
  t53 = createSprite(5050,-1850,150,220);
  t54 = createSprite(5050,-2180,450,360);
  t55 = createSprite(4430,-2000,260,350);
  t56 = createSprite(4350,-1625,300,250);
  t57 = createSprite(4015,-1625,170,220);
  t58 = createSprite(3850,-1625,15,480);
  t59 = createSprite(4585,-1770,20,730);
  t60 = createSprite(4450,-1405,300,50);
  t61 = createSprite(4000,-1405,300,50);
  t62 = createSprite(4800,-2725,1500,200);
  t63 = createSprite(5100,-2500,310,500);
  t64 = createSprite(4370,-2270,400,50);
  t65 = createSprite(4180,-2400,20,300);
  t66 = createSprite(3150,-2400,510,160);
  t67 = createSprite(1700,-2400,510,160);
  t68 = createSprite(1000,-2600,50,50);
  t69 = createSprite(1620,-2530,50,110);
  t70 = createSprite(3270,-2530,50,110);
  t71 = createSprite(2750,-2335,350,50);
  t72 = createSprite(2130,-2335,380,50);
  t73 = createSprite(-200,-2560,820,100);
  t74 = createSprite(355,-2580,125,105);
  t75 = createSprite(555,-2580,125,105);
  t76 = createSprite(-530,-2690,125,170);
  t77 = createSprite(730,-2180,360,350);
  t78 = createSprite(315,-2180,130,350);
  t79 = createSprite(420,-2250,500,300);
  t80 = createSprite(200,-2245,300,50);
  t81 = createSprite(-580,-1975,130,100);
  t82 = createSprite(-1020,-1900,100,120);
  t83 = createSprite(-1020,-1730,200,100);
  t84 = createSprite(-500,-1590,2600,170);
  t85 = createSprite(-430,-1720,300,120);
  t86 = createSprite(-8,-1730,100,100);
  t87 = createSprite(390,-1730,100,100);
  t88 = createSprite(840,-1710,130,150);
  t89 = createSprite(760,-1400,140,220);
  t90 = createSprite(635,-1080,175,280);
  t91 = createSprite(200,-1090,220,200);
  t92 = createSprite(300,-1310,110,400);
  t93 = createSprite(-450,-1250,210,660);
  t94 = createSprite(-260,-1230,150,300);
  t95 = createSprite(-203,-1435,165,80);
  t96 = createSprite(160,-1450,140,160);
  t97 = createSprite(110,-795,520,150);
  t98 = createSprite(-75,-700,80,50);
  t99 = createSprite(105,-700,80,50);
  t100 = createSprite(280,-700,80,50);
  t101 = createSprite(500,-745,200,125);
  t102 = createSprite(730,-740,250,200);
  t103 = createSprite(795,-340,65,70);
  t104 = createSprite(142,-347,1010,125);
  t105 = createSprite(-440,-570,60,60);
  t106 = createSprite(300,115,100,80);
  t107 = createSprite(-735,200,150,110);
  t108 = createSprite(-1100,635,135,110);
  t109 = createSprite(210,980,130,110);
  t110 = createSprite(200,790,130,110);
  t111 = createSprite(-1090,-130,240,180);
  t112 = createSprite(730,515,50,140);
  t113 = createSprite(800,430,25,460);
  t114 = createSprite(-850,320,25,470);
  t115 = createSprite(-720,100,250,50);
  t116 = createSprite(-680,550,350,50);
  t117 = createSprite(-510,590,25,125);
  t118 = createSprite(150,630,1300,50);
  t119 = createSprite(-60,-190,1820,50);
  t120 = createSprite(-730,1110,900,50);
  t121 = createSprite(100,1100,450,50);
  t122 = createSprite(305,880,25,390);
  t123 = createSprite(-1190,550,25,1200);
  t124 = createSprite(-490,-500,25,600);
  t125 = createSprite(840,-300,25,250);
  t126 = createSprite(840,-600,25,100);
  t127 = createSprite(-1090,-2000,25,800);
  t128 = createSprite(900,-1980,25,150);
  t129 = createSprite(1030,-2045,175,275);
  t130 = createSprite(1490,-2090,180,275);
  t131 = createSprite(1900,-1600,220,900);
  t132 = createSprite(1460,-1510,620,550);
  t133 = createSprite(1300,-1210,135,130);
  t134 = createSprite(1620,-1210,135,130);
  t135 = createSprite(2330,-650,25,400);
  t136 = createSprite(2560,-460,460,50);
  t137 = createSprite(2560,-830,460,50);
  t138 = createSprite(2790,-790,25,120);
  t139 = createSprite(2790,-530,25,160);
  t140 = createSprite(3610,140,80,110);
  t141 = createSprite(10,1500,220,250);
  t142 = createSprite(-435,1500,220,250);
  t143 = createSprite(-150,1580,100,100);


  
  array = [b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,
           b25,b26,b27,b28,b29,b30,b31,b32,b33,b34,b35,b36,b37,b38,b39,b40,b41,b42,b43,b44,b45,b46,
           h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,h11,h12,h13,h14,h15,h16,h17,t1,t2,t3,t4,t5,t6,t7,t8,t9,
           t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,t21,t22,t23,t24,t25,t26,t27,t28,t29,t30,t31
           ,t32,t33,t34,t35,t36,t37,t38,t39,t40,t41,t42,t43,t44,t45,t46,t47,t48,t49,t50,t51,t52,t53
           ,t54,t55,t56,t57,t58,t59,t60,t61,t62,t63,t64,t65,t66,t67,t68,t69,t70,t71,t72,t73,t74,t75,
           t76,t77,t78,t79,t80,t81,t82,t83,t84,t85,t86,t87,t88,t89,t90,t91,t92,t93,t94,t95,t96,t97,
           t98,t99,t100,t101,t102,t103,t104,t105,t106,t107,t108,t109,t110,t111,t112,t113,t114,t115,
           t116,t117,t118,t119,t120,t121,t122,t123,t124,t125,t126,t127,t128,t129,t130,t131,t132,t133
           ,t134,t135,t136,t137,t138,t139,t140,t141,t142,t143];
           
  array1 = [a,sam,face,health,inventory,clock];
  array2 = [bg2,logo,play];
    
    bgSound.loop();
    
  }

  function draw(){
  background("white");
  
  drawSprites();

  clocks();

  if(gameState === 1){
    if(mousePressedOver(play)){
      console.log("clicked");
      gameState = 2;
    }

    for(var j = 0;j<array1.length;j++){
        array1[j].visible = false;
    }

    for(var i = 0;i<array.length;i++){
      array[i].visible = false;
    }
  }
  else if(gameState === 2){

  for(var j = 0;j<array1.length;j++){
    array1[j].visible = true;
  }
  
  for(var i = 0;i<array.length;i++){
    array[i].visible = false;
    sam.collide(array[i]);
  }

  if(keyDown("down") || keyDown("s")){
    changeAnimation(sam,"samStand2",sam2);
    changePosition(0,20,sam);
  }

  if(keyWentUp("down") || keyWentUp("s")){
    changeAnimation(sam,"samStand",sam1);
    sam.velocityY = 0;
  }

  if(keyDown("up") || keyDown("w")){
    changeAnimation(sam,"samStand4",sam4);
    changePosition(0,-20,sam);
  }

  if(keyWentUp("up") || keyWentUp("w")){
    changeAnimation(sam,"samStand3",sam3);
    sam.velocityY = 0;
  }

  if(keyDown("right") || keyDown("d")){
    changeAnimation(sam,"samStand6",sam6);
    changePosition(20,0,sam);
  }

  if(keyWentUp("right") || keyWentUp("d")){
    changeAnimation(sam,"samStand5",sam5);
    sam.velocityX = 0;
  }

  if(keyDown("left") || keyDown("a")){
    changeAnimation(sam,"samStand8",sam8);
    changePosition(-20,0,sam);
  }

  if(keyWentUp("left") || keyWentUp("a")){
    changeAnimation(sam,"samStand7",sam7);
    sam.velocityX = 0;
  }

  if(sam.isTouching(box1)){
    sam.collide(box1);
    if(keyDown("left") || keyDown("a")){
      sam.changeAnimation("samStand8",sam8);
      a.x = a.x+20;

      for(var i = 0;i<array.length;i++){
        array[i].x = array[i].x + 20;
      }
    }
  }

  if(sam.isTouching(box2)){
    sam.collide(box2);
    if(keyDown("up") || keyDown("w")){
      sam.changeAnimation("samStand4",sam4);
      a.y = a.y+20;

      for(var i = 0;i<array.length;i++){
        array[i].y = array[i].y + 20;
      }
    }
  }

  if(sam.isTouching(box3)){
    sam.collide(box3);
    if(keyDown("right") || keyDown("d")){
      sam.changeAnimation("samStand6",sam6);
      a.x = a.x-20;

      for(var i = 0;i<array.length;i++){
        array[i].x = array[i].x - 20;
      }
    }
  }

  if(sam.isTouching(box4)){
    sam.collide(box4);
    if(keyDown("down") || keyDown("s")){
      sam.changeAnimation("samStand2",sam2);
      a.y = a.y-20;

      for(var i = 0;i<array.length;i++){
        array[i].y = array[i].y - 20;
      }
    }
  }
 }
}

function changePosition(x,y,body){
   body.x = body.x + x;
   body.y = body.y + y;
}

function changeAnimation(body,tag,name){
  body.changeAnimation(tag,name);
}

function clocks(){
  fill("black");
  textFont(clockFont);
  textSize(20);
  let Hour = hour();
  let min = minute();
  let secs = second()
  let noon = Hour >= 12? " PM" : " AM"
  let d = day(); 
  let m = month();
  let y = year();
  if(min < 10)
    min = "0"+min
  Hour%=12
  text(Hour+":"+min+":"+secs+noon, 1238, 95); 
  text(d + '/' + m + '/' + y, 1238, 40);
}

