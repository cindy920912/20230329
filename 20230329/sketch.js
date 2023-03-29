function setup() {
	createCanvas(windowWidth,windowHeight)
	background(255)
 //老師給的基礎設定
	ctx = canvas.getContext('2d');
	ctx.lineWidth =5;
	ctx.lineCap = 'round'
	//-----
}

function draw() {
	createCanvas(windowWidth-mouseX,windowHeight-mouseY)
  gradientLine(ctx,350,220,330,180, 'black', 'blue')
	gradientLine(ctx,80,400,180,300, 'brown', 'orange')
	for(var i=0;i <6;i++){//設定6以內的次數之圖形
	line(350-(i*1),220-(i*1),330-(i*1),180-(i*1))//0line(x1,x2,y1,y2)
	line(330-(i*2),180-(i*2),220-(i*2),230-(i*2))//1
	line(220-(i*2),230-(i*2),150-(i*2),130-(i*2))//2
	line(150-(i*2),130-(i*2),100-(i*2),130-(i*2))//3
	line(100-(i*2),130-(i*2),90-(i*2),240-(i*2))//4
	line(90-(i*2),240-(i*2),180-(i*2),300-(i*2))//5
	line(180-(i*2),300-(i*2),80-(i*2),400-(i*2))//6
	line(80-(i*2),400-(i*2),100-(i*2),425-(i*2))//7
	line(100-(i*2),425-(i*2),280-(i*2),380-(i*2))//8
	line(280-(i*2),380-(i*2),270-(i*2),130-(i*2))//9
	line(270-(i*2),130-(i*2),200-(i*2),150-(i*2))//10
	line(200-(i*2),150-(i*2),175-(i*2),165-(i*2))//11
	textSize(30)  //文字大小
  fill(0, 102, 153);  //設定顏色
  text("教科系",50,50)  //顯示文字
	noFill()
	}

	

	
}
function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  gradient.addColorStop(0, c1);
  gradient.addColorStop(1, c2);
  ctx.strokeStyle = gradient;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}