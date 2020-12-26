import {Image_} from './Image.js';
import { Ball } from './Ball.js';
import { Text } from './text.js';
import { YunHo } from './YunHo.js';

class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas)
        window.addEventListener('resize', this.resize1.bind(this), false)
        this.resize1();

        this.yunho = new YunHo(this.ctx,200,'black');

        this.yunho.drawY(100,100);
        this.yunho.drawU(600,100);
        this.yunho.drawN(1200,100);
        this.yunho.drawH(100,800);
        this.yunho.drawO(600,800);

        this.ballRadius = 20;
        this.ballX = this.ballRadius + (Math.random()*(this.stageWidth - 2*this.ballRadius));
        console.log(this.ballX)
        this.ballY =  this.ballRadius + (Math.random()*(this.stageHeight - 2*this.ballRadius));
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
        window.requestAnimationFrame(this.animate.bind(this));

        this.ball.boundWindow(this.canvas.width, this.canvas.height);
        
        this.ball.erase(this.ctx);
        this.ball.draw(this.ctx);

        }
    }




window.onload = () => {
    new App();
}
