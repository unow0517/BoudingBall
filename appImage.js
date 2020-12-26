import {Image_} from './Image.js';
import { Ball } from './Ball.js';
import { Text } from './text.js';

class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas)
        window.addEventListener('resize', this.resize1.bind(this), false)
        this.resize1();
      
        this.image_= new Image_('./1.svg');

        this.imageX = 0;
        this.imageY = 500;
        this.imageWidth = this.canvas.width;
        this.imageHeight = 500;

        this.ballX = 300;
        this.ballY = 300;
        this.ballRadius = 20;
        this.ballSpeed = 30;
        this.ball = new Ball(this.ballX,this.ballY,this.ballRadius,this.ballSpeed);

        window.requestAnimationFrame(this.animate.bind(this))

        }

    resize1(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth*2;
        this.canvas.height = this.stageHeight * 2;
    }

    animate(){
        window.requestAnimationFrame(this.animate.bind(this))
  
        //Image!
        this.image_.draw(this.ctx,this.imageX,this.imageY,this.imageWidth,this.imageHeight); 
        this.ctx.globalCompositeOperation = 'source-over';
        const imageMaxX = this.imageX + this.imageWidth
        const imageMaxY = this.imageY + this.imageHeight

        if(this.ball.x > this.imageX && this.ball.x<= imageMaxX &&
            this.ball.y> this.imageY && this.ball.y <= imageMaxY){
            this.ball.draw(this.ctx)
            this.ball.boundWindow(this.canvas.width, this.canvas.height)
        } else {  
            this.ball.erase(this.ctx)
            this.ball.draw(this.ctx)
            
            this.ball.boundWindow(this.canvas.width, this.canvas.height)
        }
    }

}



window.onload = () => {
    new App();
}
