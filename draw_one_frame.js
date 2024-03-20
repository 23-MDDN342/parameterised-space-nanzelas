let img;

let rectangleWidth = 150; // 长方形宽度
let rectangleHeight = 20; // 长方形高度
let gap = 100; // 间隔
let numRectangles = 5; // 长方形数量

let totalWidth = (rectangleWidth + gap) * numRectangles - gap; // 计算总宽度
let startX; // 长方形的起始x坐标
let startY; // 长方形的起始y坐标

let speed = 2; // 移动速度
let xPositions = []; // 保存长方形的x坐标

let customImgs = [];

let statX =70


function preload() {
    img = loadImage("./star.png");

    // 初始化长方形的x坐标
    startX = (960 - totalWidth) / 2;
    startY = 150;



    for (let i = 0; i < numRectangles; i++) {
        xPositions.push(map(i, 0, numRectangles - 1, startX, startX + totalWidth - rectangleWidth));
    }

    for (let i = 0; i <5 ; i++) {
        customImgs.push(new CustomImage(statX, 50, 50, 50, true, false)); // 静止图片
        statX+=200;
    }
    statX=70;
    for (let i = 0; i <5 ; i++) {
        customImgs.push(new CustomImage(statX, 480, 50, 50, true, false)); // 静止图片
        statX+=200;
    }

    statX=70;
    for (let i = 0; i <5 ; i++) {
        customImgs.push(new CustomImage(statX, 260, 50, 50, false, true)); // 静止图片
        statX+=200;
    }


}

let cur_frac;

function draw_one_frame(cur_frac) {

    cur_frac = cur_frac;
    cur_frac = map(cur_frac,0,1,1,5);
    scale(float(canvasWidth) / 960.0);

    imageMode(CENTER);


    // 计算每个矩形的高度
    var rectHeight = 540 / 5;

    // 绘制四个矩形
    for (var i = 0; i < 5; i++) {
        // 根据奇偶行设置颜色
        if (i % 2 === 0) {
            fill(31, 31, 181); // 偶数行为红色
        } else {
            fill(33, 64, 221); // 奇数行为绿色
        }
        rect(0, i * rectHeight, 960, rectHeight);
    }
    push();


    for (let i = 0; i < customImgs.length; i++) {
        customImgs[i].update();
        customImgs[i].display();
    }


    noStroke(); // 不绘制边框
    fill(204, 204, 204);
    // 绘制五个长方形
    // 绘制五个长方形
    for (let i = 0; i < numRectangles; i++) {
        let x = xPositions[i]; // 获取当前长方形的x坐标
        let y = startY; // 设置当前长方形的y坐标


        if((x+rectangleWidth<rectangleWidth)){
            if(rectangleWidth+x>0){
                rect(0,y,rectangleWidth+x,rectangleHeight)
            }

        }else{
            if((x+rectangleWidth-960>0)) {

                rect(x, y, rectangleWidth-(rectangleWidth+x-960) , rectangleHeight)

            }else{
                rect(x, y, rectangleWidth , rectangleHeight)
            }
        }

        // 更新长方形的x坐标，使其向右移动
        x += speed;
        // 如果长方形移出了屏幕，将其移到屏幕左侧
        if (x > 960) {
            x = startX - rectangleWidth; // 将长方形移到屏幕左侧
        }
        xPositions[i] = x; // 更新长方形的位置
    }


    translate(0, 220);
    // 绘制五个长方形
    for (let i = 0; i < numRectangles; i++) {
        let x = xPositions[i]; // 获取当前长方形的x坐标
        let y = startY; // 设置当前长方形的y坐标


        if((x+rectangleWidth<rectangleWidth)){
            if(rectangleWidth+x>0){
                rect(0,y,rectangleWidth+x,rectangleHeight)
            }

        }else{
            if((x+rectangleWidth-960>0)) {

                    rect(x, y, rectangleWidth-(rectangleWidth+x-960) , rectangleHeight)

            }else{
                rect(x, y, rectangleWidth , rectangleHeight)
            }
        }

        // 更新长方形的x坐标，使其向右移动
        x += speed;
        // 如果长方形移出了屏幕，将其移到屏幕左侧
        if (x > 960) {
            x = startX - rectangleWidth; // 将长方形移到屏幕左侧
        }
        xPositions[i] = x; // 更新长方形的位置
    }


    pop();

}


class CustomImage {
    constructor(x, y, width, height, isRotate, isScale) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = 0;
        this.scale = 1;
        this.rotateSpeed = 1;
        this.zoomSpeed = 0.1;
        this.isRotate = isRotate;
        this.isScale = isScale;
    }

    display() {
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        scale(this.scale);
        imageMode(CENTER);
        image(this.img, 0, 0, this.width, this.height);
        pop();
    }

    update() {
        if (this.isRotate) {
            if(cur_frac!=undefined){
                this.angle += cur_frac;
            }else{
                this.angle += this.rotateSpeed;
            }

        }
        if (this.isScale) {
            if(cur_frac!=undefined){
                this.scale += this.zoomSpeed*cur_frac;
            }else{
                this.scale += this.zoomSpeed;
            }


            // 控制放大缩小来回切换
            if (this.scale > 1.2 || this.scale < 0.8) {
                this.zoomSpeed *= -1;
            }
        }


    }
}

