export class Ball{
    constructor(x,y,radius,speed){
        this.x = x;
        this.y = y;
        this.vx = ((Math.random()*2)-1)*speed;
        this.vy = ((Math.random()*2)-1)*speed;
        this.radius = radius;
    }

    draw(ctx){
        this.x += this.vx;
        this.y += this.vy;

        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius, 0, 2*Math.PI);
        ctx.fill();
    }

    erase(ctx){
        ctx.clearRect(this.x - this.radius -1 , this.y - this.radius - 1 , 
            2*(this.radius) +2 ,2*(this.radius) +2 )
    }

    boundWindow(canvasWidth, canvasHeight){
        const minX = this.radius;
        const maxX = canvasWidth - this.radius;
        const minY = this.radius;
        const maxY = canvasHeight - this.radius;

        if( this.x<minX || this.x > maxX ){
            this.vx *= -1;
        } else if ( this.y < minY || this.y> maxY ){
            this.vy *= -1;
        }
    }
}