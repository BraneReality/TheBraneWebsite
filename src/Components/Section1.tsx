import { onMount } from 'solid-js';
import './Section1.css';
import anime from 'animejs';

let Section1 = () => {
  let scrollIndicator: HTMLDivElement;

  onMount(() => {
    let scrollIndicatorAnim = anime({
      targets: scrollIndicator!,
      opacity: 0,
      easing: 'easeInOutQuad',
      autoplay: false,
      duration: 500
    });
    
    window.LENIS.on('scroll', () => {
      scrollIndicatorAnim.seek(window.LENIS.scroll);
    });
  })

  return (
    <div class="section1" id="Home">
      <div class="section1-intro">
        <div class="section1-logo"></div>
        <div>
          <h1>BraneEngine</h1>
          <p>The framework for building self-hosted<br />multiplayer VR platforms.</p>
        </div>

        <svg height="140" width="500" xmlns="http://www.w3.org/2000/svg" 
          style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', "z-index": '-1' }}
        >
          <path d="M40 10 L10 110 L30 130 L400 130" style="fill: none; stroke: #fff; stroke-width: 5;" />
          <path d="M20 50 L35 2 L250 2" style="fill: none; stroke: #fff; stroke-width: 2;" />

          <path d="M460 130 L490 30 L470 10 L100 10" style="fill: none; stroke: #fff; stroke-width: 5;" />

          <path d="M41.5 12.5 L12.5 110 L30 127.5 L458 127.5 L487.5 30 L470 12.5 Z" style="fill: #000;" />
        </svg> 
      </div>

      <div class="scroll-indicator" ref={scrollIndicator!} onClick={() => {
         window.LENIS.scrollTo('#About');
      }}>
        V<br />
        V<br />
        V<br />
      </div>
    </div>
  )
}

export default Section1;