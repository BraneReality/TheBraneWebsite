declare global{
  interface Window{
    LENIS: Lenis;

    RAF_CALLBACKS: (( time: number ) => void)[];
    MOUSE: { x: number, y: number };
  }
}

/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'

const root = document.getElementById('root')

import App from './App.tsx';
import Lenis from 'lenis';

window.LENIS = new Lenis({ });
window.RAF_CALLBACKS = [ window.LENIS.raf ];
window.MOUSE = { x: 0, y: 0 };

window.onmousemove = ( e ) => {
  window.MOUSE.x = e.clientX;
  window.MOUSE.y = e.clientY;
}

let raf = ( time: number ) => {
  window.RAF_CALLBACKS.forEach(cb => cb(time));
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

render(() => <App />, root!);
