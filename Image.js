export class Image_{
    constructor(source){
        this.source= source;
    }

    draw(ctx,x,y,width,height){
        const image = new Image();
        image.src =this.source;
        
        ctx.beginPath();
        ctx.fillStyle='green'
        ctx.globalCompositeOperation = 'destination-over';
        ctx.drawImage(image, x,y,width,height )
        ctx.fill();

    }
}