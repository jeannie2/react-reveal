import React from "react";
import { Fade, JackInTheBox, Roll, Slide, Zoom } from "react-awesome-reveal"; //, Rotate


export default function Photos() {
// lower damping loads faster
// still works without cascade and damping
return (
<>
<Fade cascade damping={0.5}>
<div className="rotate-box">
  <img src="/assets/nyc-1.jpg" alt="nyc"></img>
</div>
<div className="rotate-box">
  <img src="/assets/nyc-2.jpg" alt="nyc"></img>
</div>
<div className="rotate-box">
  <img src="/assets/nyc-3.jpg" alt="nyc"></img>
</div>
<div className="rotate-box">
  <img src="/assets/nyc-4.jpg" alt="nyc"></img>
</div>
</Fade>
</>
)
}
