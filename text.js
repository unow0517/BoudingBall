export class Text{
  constructor(content){
    this.content = content
  }

  draw(ctx, x, y, color, size){
    ctx.fillStyle = color;
    ctx.font = `${size} Arial`;
    ctx.fillText(this.content, x, y);
  }
}