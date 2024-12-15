import { onMount } from "solid-js";

let scrollVelocity = 1;

class Particle{
  constructor( _canvas: HTMLCanvasElement ){}
  draw( _ctx: CanvasRenderingContext2D, _canvas: HTMLCanvasElement ){}
}

class Star extends Particle{
  x: number;
  y: number;
  radius: number;
  speed: number;
  colour: string;

  constructor( canvas: HTMLCanvasElement ){
    super(canvas);

    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 2;
    this.speed = Math.random() * 0.25;
    this.colour = 'rgb(255, 255, 255)';
  }
  draw( ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement ){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.colour;
    ctx.fill();
    ctx.closePath();

    this.y -= this.speed * scrollVelocity;

    if(this.y < 0){
      this.x = Math.random() * canvas.width;
      this.y = canvas.height;
    }

    if(this.y > canvas.height){
      this.x = Math.random() * canvas.width;
      this.y = 0;
    }
  }
}

let Background = () => {
  let canvas: HTMLCanvasElement;
  let stars: Particle[] = [];

  onMount(() => {
    let ctx: CanvasRenderingContext2D = canvas!.getContext('2d')!;

    canvas!.width = window.innerWidth;
    canvas!.height = window.innerHeight;
  
    let render = () => {
      scrollVelocity = window.LENIS.velocity + 1;
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
  
      for(let i = 0; i < stars.length; i++){
        stars[i].draw(ctx, canvas!);
      }
    }
  
    for (let index = 0; index < 100; index++)
      stars.push(new Star(canvas!));
  
    window.addEventListener('resize', () => {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    });
  
    window.RAF_CALLBACKS.push(render);
  });

  return (
    <>
      <canvas style={{
        position: 'fixed',
        top: '0',
        left: '0',
        "z-index": '-10'
      }} ref={canvas!}></canvas>
    </>
  )
}

export default Background;