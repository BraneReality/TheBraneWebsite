import { onMount } from 'solid-js';
import './Nav.css'
import { lerp } from '../Utils/lerp';

let Nav = () => {
  let navButtons: HTMLDivElement[] = [];

  onMount(() => {
    let sections = [
      document.querySelector('.section1'),
      document.querySelector('.section2'),
      document.querySelector('.section3')
    ];

    navButtons.forEach((btn, i) => {
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

        console.log(i, (window.pageYOffset + sections[i]!.getBoundingClientRect().top));
        window.LENIS.scrollTo((window.pageYOffset + sections[i]!.getBoundingClientRect().top) - 200)
      }
    })

    let pageName = document.querySelector<HTMLDivElement>('#page-name')!;

    let sectionHeights = [
      0, // Home section starts
      (window.pageYOffset + sections[0]!.getBoundingClientRect().bottom) / 2, // About section starts
      (window.pageYOffset + sections[1]!.getBoundingClientRect().bottom) / 2 // Links section starts
    ];

    window.addEventListener('resize', () => {
      // Window changed size, so we should recompute the boundaries
      sectionHeights = [
        0, // Home section starts
        (window.pageYOffset + sections[0]!.getBoundingClientRect().bottom) / 2, // About section starts
        (window.pageYOffset + sections[1]!.getBoundingClientRect().bottom) / 2 // Links section starts
      ];
    })

    window.LENIS.on('scroll', () => {
      let btn = 0;

      for (let i = 0; i < sectionHeights.length; i++) {
        if(window.LENIS.scroll < sectionHeights[i])break;
        btn = i;
      }

      navButtons.forEach(btn => btn.classList.remove('nav-button-selected'));
      navButtons[btn].classList.add('nav-button-selected');

      pageName.innerText = navButtons[btn].innerText;
    });
  });

  return (
    <>
      <input type="checkbox" id="nav-opened" />

      <label for="nav-opened">
        <div class="nav-open-mobile-view">
          <i class="fa-solid fa-caret-right"></i>

          <svg height="60" width="60" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: '-10px', top: '-10px', "z-index": '-1' }}>
            <path d="M49 35 L49 50 L40 59 L25 59" style="fill: none; stroke: #fff; stroke-width: 2;" />
            <path d="M49 25 L49 10 L40 1 L25 1" style="fill: none; stroke: #fff; stroke-width: 2;" />
          </svg>
        </div>
      </label>

      <div class="nav">
        <div>
          <div class="nav-button nav-button-selected" ref={( el ) => navButtons.push(el)}>Home</div>
          <div class="nav-button" ref={( el ) => navButtons.push(el)}>About</div>
          <div class="nav-button" ref={( el ) => navButtons.push(el)}>Links</div>
          <label for="nav-opened"><div class="nav-button-close-mobile">Close Menu</div></label>
        </div>

        <svg height="310" width="310" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: '-10px', top: '-10px', "z-index": '-1' }}>
          <path d="M260 10 L260 210 L210 260 L10 260" style="fill: none; stroke: #fff; stroke-width: 5;" />
          <path d="M270 110 L270 215 L215 270 L110 270" style="fill: none; stroke: #fff; stroke-width: 2;" />
          <path d="M257.5 0 L257.5 210 L210 257.5 L0 257.5 L0 0" style="fill: #000;" />
        </svg>
      </div>
    </>
  )
}

export default Nav