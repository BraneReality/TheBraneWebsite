import './Section2.css';

let Section2 = () => {
  return (
    <div class="section2" id="About">
      <div style={{ "margin-top": '300px' }}></div>
      <h1 class="section-heading">About</h1>

      <div class="cards">
        <div class="big-card">
          <h1>Sample Text</h1>
          <p>
            Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text
          </p>

          <svg height="400" width="350" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: '0', top: '0', "z-index": '-1' }}>
            <path d="M10 10 L10 390 L300 390 L340 350 L340 10 Z" style="fill: #000; stroke: #fff; stroke-width: 2;" />
          </svg> 
        </div>

        <div>
          <div class="mini-card">
            <h1>Sample Text</h1>
            <p>
              Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text
            </p>

            <svg height="200" width="350" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: '0', top: '0', "z-index": '-1' }}>
              <path d="M10 10 L10 190 L300 190 L340 150 L340 10 Z" style="fill: #000; stroke: #fff; stroke-width: 2;" />
            </svg> 
          </div>

          <div class="mini-card">
            <h1>Sample Text</h1>
            <p>
              Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text
            </p>

            <svg height="200" width="350" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: '0', top: '0', "z-index": '-1' }}>
              <path d="M10 10 L10 190 L300 190 L340 150 L340 10 Z" style="fill: #000; stroke: #fff; stroke-width: 2;" />
            </svg> 
          </div>
        </div>

        <div>
          <div class="mini-card">
            <h1>Sample Text</h1>
            <p>
              Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text
            </p>

            <svg height="200" width="350" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: '0', top: '0', "z-index": '-1' }}>
              <path d="M10 10 L10 190 L300 190 L340 150 L340 10 Z" style="fill: #000; stroke: #fff; stroke-width: 2;" />
            </svg> 
          </div>

          <div class="mini-card">
            <h1>Sample Text</h1>
            <p>
              Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text
            </p>

            <svg height="200" width="350" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: '0', top: '0', "z-index": '-1' }}>
              <path d="M10 10 L10 190 L300 190 L340 150 L340 10 Z" style="fill: #000; stroke: #fff; stroke-width: 2;" />
            </svg> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2;