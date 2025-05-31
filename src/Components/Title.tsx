import './Title.css'

let Title = () => {
  return (
    <>
      <div class="title-fade-out"></div>
      <div class="title">
        <div class="title-big-text">Brane Engine</div>
        <div class="title-small-text">BraneEngine • <span id="page-name">Home</span></div>

        <svg height="210" width="860" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', right: '-10px', top: '-10px', "z-index": '-1' }}>
          <path d="M50 10 L50 110 L100 160 L850 160" style="fill: none; stroke: #fff; stroke-width: 5;" />
          <path d="M40 60 L40 115 L95 170 L250 170" style="fill: none; stroke: #fff; stroke-width: 2;" />
          <path d="M52.5 0 L52.5 110 L100 157.5 L860 157.5 L860 0 Z" style="fill: #000;" />
        </svg>
      </div>
    </>
  )
}

export default Title;