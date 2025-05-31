import { onMount } from 'solid-js';
import './MouseCircle.css';
import { lerp } from '../Utils/lerp';

let MouseCircle = () => {
  let circle: HTMLDivElement;

  onMount(() => {
    let circleSize = 0;
    let circleSizeSmoothed = 0;
    
    window.RAF_CALLBACKS.push(() => {
      // Render / Update for each button

      circleSizeSmoothed = lerp(circleSizeSmoothed, circleSize, 0.25);

      circle!.style.width = circleSizeSmoothed + 'px';
      circle!.style.height = circleSizeSmoothed + 'px';

      circle!.style.top = window.MOUSE.y + 'px';
      circle!.style.left = window.MOUSE.x + 'px';
    });

    let firstChangeCircleSize = () => {
      circleSize = 50
      window.removeEventListener('mousemove', firstChangeCircleSize);
    };

    window.addEventListener('mousemove', firstChangeCircleSize);

    window.addEventListener('mousedown', () => circleSize = 15);
    window.addEventListener('mouseup', () => circleSize = 50);
  })

  return (
    <>
      <div class="mouse-circle" ref={circle!}></div>
    </>
  )
}

export default MouseCircle