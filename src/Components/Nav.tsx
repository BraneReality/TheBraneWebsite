import { onMount } from 'solid-js';
import './Nav.css'
import { lerp } from '../Utils/lerp';

let Nav = () => {
  let navButtons: HTMLDivElement[] = [];

  onMount(() => {
    navButtons.forEach(btn => {
      btn.setAttribute('data-text', btn.innerText);

      let buttonAmountSmoothed = 0;
      let buttonAmount = 0;

      window.RAF_CALLBACKS.push(() => {
        // Render / Update for each button

        buttonAmountSmoothed = lerp(buttonAmountSmoothed, buttonAmount, 0.1);
        if(buttonAmountSmoothed < 1 || buttonAmountSmoothed > 99)return;

        let outlineBrightness = (100 - buttonAmountSmoothed) * 2.55;

        btn.style.setProperty('--colour-animation-fill', buttonAmountSmoothed + '%'); // Update text fill
        btn.style.setProperty('--colour-text-outline', `rgb(${ outlineBrightness }, ${ outlineBrightness }, ${ outlineBrightness })`) // Update text outline
      });

      btn.onmouseenter = () => { buttonAmount = 100; }
      btn.onmouseleave = () => { buttonAmount = 0; }

      btn.onclick = () => {
        navButtons.forEach(btn => btn.classList.remove('nav-button-selected'));
        btn.classList.add('nav-button-selected');

        window.LENIS.scrollTo('#' + btn.innerText);
      }
    })

    let pageName = document.querySelector<HTMLDivElement>('#page-name')!;
    window.LENIS.on('scroll', () => {
      let btn = Math.round(window.LENIS.scroll / window.innerHeight);

      navButtons.forEach(btn => btn.classList.remove('nav-button-selected'));
      navButtons[btn].classList.add('nav-button-selected');

      pageName.innerText = navButtons[btn].innerText;
    });
  });

  return (
    <div class="nav">
      <div class="nav-button nav-button-selected" ref={( el ) => navButtons.push(el)}>Home</div>
      <div class="nav-button" ref={( el ) => navButtons.push(el)}>About</div>
      <div class="nav-button" ref={( el ) => navButtons.push(el)}>Links</div>

      <svg height="310" width="310" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: '-10px', top: '-10px', "z-index": '-1' }}>
        <path d="M260 10 L260 210 L210 260 L10 260" style="fill: none; stroke: #fff; stroke-width: 5;" />
        <path d="M270 110 L270 215 L215 270 L110 270" style="fill: none; stroke: #fff; stroke-width: 2;" />
        <path d="M257.5 0 L257.5 210 L210 257.5 L0 257.5 L0 0" style="fill: #000;" />
      </svg> 
    </div>
  )
}

export default Nav