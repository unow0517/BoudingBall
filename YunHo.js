export class YunHo{
  constructor(ctx,size,color){
    this.ctx = ctx;
    this.size= size;
    this.color=color;
  }

  drawY(x,y){
    
    this.ctx.fillStyle=this.color;
    this.ctx.moveTo(x,y);
    this.ctx.lineWidth=3;
    this.ctx.lineTo(x+this.size,y+this.size);
    this.ctx.lineTo(x+this.size,y+(3*(this.size)));
    this.ctx.lineTo(x+ (1.5*(this.size)), y+(3*(this.size)));
    this.ctx.lineTo(x+ (1.5*(this.size)), y+this.size);
    this.ctx.lineTo(x+ (2.5*(this.size)),y);
    this.ctx.lineTo(x+ (2.25*this.size), y - (this.size*0.25));
    this.ctx.lineTo(x+ (this.size*1.25), y + (this.size*0.75));
    this.ctx.lineTo(x + (this.size*0.25), y - (this.size*0.25));
    this.ctx.lineTo(x , y );
    this.ctx.stroke();
    this.ctx.fill();
  }

  drawU(x,y){

    this.ctx.moveTo(x,y);
    this.ctx.lineWidth=3;
    this.ctx.lineTo(x, y+(2*this.size));
    this.ctx.lineTo(x + this.size, y+(3*this.size));
    this.ctx.lineTo(x + (1.5*(this.size)), y+(3*(this.size)));
    this.ctx.lineTo(x + (2.5*(this.size)), y+(2*this.size));
    this.ctx.lineTo(x + (2.5*(this.size)),y);
    this.ctx.lineTo(x + (2*this.size), y);
    this.ctx.lineTo(x + (2*this.size), y + (2*this.size))
    this.ctx.lineTo(x + (1.5*this.size), y + (2.5*this.size));
    this.ctx.lineTo(x + this.size, y+(2.5*this.size));
    this.ctx.lineTo(x + (0.5*this.size), y + (2*this.size));
    this.ctx.lineTo(x + (0.5*this.size), y );
    this.ctx.lineTo(x , y );
    this.ctx.stroke();
    this.ctx.fill();
  }
  
  drawN(x,y){

    this.ctx.moveTo(x,y);
    this.ctx.lineWidth=3;
    this.ctx.lineTo(x, y+(3*this.size));
    this.ctx.lineTo(x + (0.5*this.size), y+(3*this.size));
    this.ctx.lineTo(x + (0.5*this.size) , y + (1*this.size));
    this.ctx.lineTo(x + (1.5*this.size) , y + (3*this.size));
    this.ctx.lineTo(x + (2*this.size) , y + (3*this.size));
    this.ctx.lineTo(x + (2*this.size) , y);
    this.ctx.lineTo(x + (1.5*this.size) , y);
    this.ctx.lineTo(x + (1.5*this.size) , y +(2*this.size));
    this.ctx.lineTo(x + (0.5*this.size) , y);
    this.ctx.lineTo(x , y );
    this.ctx.stroke();
    this.ctx.fill();
  }

    
  drawH(x,y){

    this.ctx.moveTo(x,y);
    this.ctx.lineWidth=3;
    this.ctx.lineTo(x, y +(3*this.size));
    this.ctx.lineTo(x + (0.5*this.size), y +(3*this.size));
    this.ctx.lineTo(x + (0.5*this.size), y +(1.75*this.size));
    this.ctx.lineTo(x + (1.5*this.size), y +(1.75*this.size));
    this.ctx.lineTo(x + (1.5*this.size), y +(3*this.size));
    this.ctx.lineTo(x + (2*this.size), y +(3*this.size));
    this.ctx.lineTo(x + (2*this.size), y);
    this.ctx.lineTo(x + (1.5*this.size), y);
    this.ctx.lineTo(x + (1.5*this.size), y+(1.25*this.size));
    this.ctx.lineTo(x + (0.5*this.size), y+(1.25*this.size));
    this.ctx.lineTo(x + (0.5*this.size), y);
    this.ctx.lineTo(x , y );
    this.ctx.stroke();
    this.ctx.fill();
  }

  drawO(x,y){

    this.ctx.moveTo(x, y + (this.size));
    this.ctx.lineTo(x, y+(2*this.size));
    this.ctx.lineTo(x + (0.75*this.size), y+(3*this.size));
    this.ctx.lineTo(x + (2*this.size), y+(3*this.size));
    this.ctx.lineTo(x + (2.75*this.size), y+(2*this.size));
    this.ctx.lineTo(x + (2.75*this.size), y+(this.size));
    this.ctx.lineTo(x + (2*this.size), y);
    this.ctx.lineTo(x + (0.75*this.size), y);
    this.ctx.lineTo(x , y +(this.size));
    this.ctx.lineWidth=3;
    this.ctx.stroke();
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.moveTo(x+ (0.5*this.size) , y + (this.size));
    this.ctx.lineTo(x+ (0.5*this.size) , y + (2*this.size));
    this.ctx.lineTo(x+ (1*this.size) , y + (2.6*this.size));
    this.ctx.lineTo(x+ (1.7*this.size) , y + (2.6*this.size));
    this.ctx.lineTo(x+ (2.25*this.size) , y + (2*this.size));
    this.ctx.lineTo(x+ (2.25*this.size) , y + (this.size));
    this.ctx.lineTo(x+ (1.7*this.size) , y + (0.4*this.size));
    this.ctx.lineTo(x+ (1*this.size) , y + (0.4*this.size));
    this.ctx.lineTo(x+ (0.5*this.size) , y + (this.size));
    this.ctx.lineWidth=3;
    this.ctx.stroke();
    this.ctx.fillStyle='grey';
    this.ctx.fill();
    
    
  }
}
