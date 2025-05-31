import GHLink from './GHLink';
import './Section3.css';

let Section3 = () => {
  return (
    <div class="section3" id="Links">
      <div style={{ "margin-top": '200px' }}></div>
      <h1 class="section-heading">Links</h1>

      <div class="links">
        <GHLink repo="BraneReality/BraneEngine" />
        <GHLink repo="BraneReality/BraneScript" />
        <GHLink repo="BraneReality/TreeSitterBraneScript" />
      </div>
    </div>
  )
}

export default Section3;