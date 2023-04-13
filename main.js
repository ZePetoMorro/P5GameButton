
var r,g,b
botaoW=48
botaoH=50.5
bvec=[]
function setup() {
  createCanvas(400, 400);
  r=random(255); g=random(255); b=random(255)
  
}

function draw() {
  
  background(240);
  textSize(16)
  
  text("Variações de Botões",20,50)
  //exemplos de Botões
  gameBTN(20,60)
  //gameBTN(x,y)
  gameBTN(20,115,30+botaoW,botaoH)
  //gameBTN(x,y,w,h)
  gameBTN(30+botaoW,60,botaoW,botaoH,"rgb("+round(r)+" , "+round(g)+" , "+round(b)+")")
  //gameBTN(x,y,w,h,color)
  gameBTN(135,60,100,botaoH,"rgb(200,20,20)","Sair")
  //gameBTN(x,y,w,h,color,text)
  gameBTN(245,60,130,botaoH,"rgb(142,130,250)","Configurações")
  //gameBTN(x,y,w,h,color,text)
  gameBTN(60+botaoW,115,110,botaoH,"#CA7B1B","Opções",60+botaoW,127)
  //gameBTN(x,y,w,h,color,text,textX,textY)
  gameBTN(180+botaoW,115,100,botaoH,"rgb(20,200,100)","Lorem Ipsum Ipsum Ipsum",180+botaoW,125,12)
  //gameBTN(x,y,w,h,color,text,textX,textY,textSize)
  text("Variações de Icon",20,190)
  
  for(x=20;x<326;x+=61){
    for(y=200;y<374;y+=58){
      if(bvec.length<20)bvec.push({x,y})
    }
  }
  for(i=0;i<15;i++){
    gameBTN(bvec[i].x,bvec[i].y,iconId[i+1])
  }
  /*
  //exemplos de Icons
  gameBTN(bvec[0].x,bvec[0].y,"GEAR")
  //gearIcon(bvec[0].x,bvec[0].y)
  gameBTN(bvec[1].x,bvec[1].y,"X")
  //xicon(bvec[1].x,bvec[1].y)
  //resetIcon(bvec[2].x,bvec[2].y)
  gameBTN(bvec[2].x,bvec[2].y,"RESET")
  //perfilIcon(bvec[5].x,bvec[5].y)
  gameBTN(bvec[5].x,bvec[5].y,"PRFL")
  
  //menuIcon(bvec[4].x,bvec[4].y)
  gameBTN(bvec[4].x,bvec[4].y,"MENU")
  //pauseIcon(bvec[7].x,bvec[7].y)
  gameBTN(bvec[7].x,bvec[7].y,"PAUSE")
  //fullscreenIcon(bvec[10].x,bvec[10].y)
  gameBTN(bvec[10].x,bvec[10].y,"FS")
  //startIcon(bvec[13].x,bvec[13].y)
  gameBTN(bvec[13].x,bvec[13].y,"START")
  
  //celularIcon(bvec[14].x,bvec[14].y)
  gameBTN(bvec[14].x,bvec[14].y,"PHONE")
  //muteIcon(bvec[11].x,bvec[11].y)
  gameBTN(bvec[11].x,bvec[11].y,"MUTE")
  //soundIcon(bvec[8].x,bvec[8].y)
  gameBTN(bvec[8].x,bvec[8].y,"SOUND")
  
  gameBTN(bvec[3].x,bvec[3].y,"LFT")
  gameBTN(bvec[6].x,bvec[6].y,"DWN")
  gameBTN(bvec[9].x,bvec[9].y,"UP")
  gameBTN(bvec[12].x,bvec[12].y,"RGT")
  */
  
}
