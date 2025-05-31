import './Section2.css';

let Section2 = () => {
  return (
    <div class="section2" id="About">
      <div style={{ "margin-top": '300px' }}></div>
      <h1 class="section-heading">About</h1>

      <div class="cards">
        <div>
          <div class="mini-card">
            <h1>What is the Brane Project?</h1>
            <p>
              The brane project is a set of open source tools that when used together enables the creation of interconnected immersive worlds.
            </p>

            <svg height="250" width="350" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: '0', top: '0', "z-index": '-1' }}>
              <path d="M10 10 L10 240 L300 240 L340 200 L340 10 Z" style="fill: #000; stroke: #fff; stroke-width: 2;" />
            </svg> 
          </div>
          
          <div class="mini-card">
            <h1>Is the Brane a platform?</h1>
            <p>
              Yes and no, in the same way that the web is a platform, the Brane is also a platform.
            </p>

            <svg height="250" width="350" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: '0', top: '0', "z-index": '-1' }}>
              <path d="M10 10 L10 240 L300 240 L340 200 L340 10 Z" style="fill: #000; stroke: #fff; stroke-width: 2;" />
            </svg> 
          </div>
        </div>

        <div class="big-card">
          <h1>Does the Brane have anything to do with BCI stuff?</h1>
          <p>
            No. Brane isn't a misspelling of Brain, it's short for Membrane. Specifically the string theory concept of a "brane" which is what universes are made of. Our logo does lean into the similarities between the words though :)
          </p>

          <svg height="500" width="350" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: '0', top: '0', "z-index": '-1' }}>
            <path d="M10 10 L10 490 L300 490 L340 450 L340 10 Z" style="fill: #000; stroke: #fff; stroke-width: 2;" />
          </svg> 
        </div>

        <div>
          <div class="mini-card">
            <h1>When will Brane Engine / The Brane be ready?</h1>
            <p>
              Currently we have a very small team so progress is slow. We can't promise any timelines but expect it to take a couple years to be ready for production use.
            </p>

            <svg height="250" width="350" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: '0', top: '0', "z-index": '-1' }}>
              <path d="M10 10 L10 240 L300 240 L340 200 L340 10 Z" style="fill: #000; stroke: #fff; stroke-width: 2;" />
            </svg> 
          </div>

          <div class="mini-card">
            <h1>How is the Brane different from other platforms?</h1>
            <p>
              The brane differs in that we're building our engine and scripting runtime from scratch to make it the best performing engine for VR, and allow us to do a lot of novel things like heavy asset streaming.
            </p>

            <svg height="250" width="350" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: '0', top: '0', "z-index": '-1' }}>
              <path d="M10 10 L10 240 L300 240 L340 200 L340 10 Z" style="fill: #000; stroke: #fff; stroke-width: 2;" />
            </svg> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2;