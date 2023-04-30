import React from "react";
import { Fade, JackInTheBox, Roll, Slide, Zoom } from "react-awesome-reveal"; //, Rotate


export default function Banner() {

// lower damping loads faster
// still works without cascade and damping
return (
<>
<Fade cascade damping={0.5}>
<div className="rotate-box">
  <img src="/assets/nyc-1.jpg" alt=""></img>
</div>
<div className="rotate-box">
  <img src="/assets/nyc-2.jpg" alt=""></img>
</div>
<div className="rotate-box">
  <img src="/assets/nyc-3.jpg" alt=""></img>
</div>
<div className="rotate-box">
  <img src="/assets/nyc-4.jpg" alt=""></img>
</div>
</Fade>

<Fade cascade damping={0.1}>

  <p>Start spreading the news</p>
   <p>I'm leaving today</p>
    <p>I want to be a part of it</p>
     <p>New York, New York</p>
      <p>These vagabond shoes</p>
      <div>They are longing to stray</div>


        <p>Right through the very heart of it</p>
   <p>New York, New York</p>
    <p>I want to wake up in a city</p>
     <p>That never sleeps</p>
      <p>And find I'm king of the hill</p>
      <div>Top of the heap</div>


        <p>These small town blues</p>
   <p>They are melting away</p>
    <p>I'll make a brand new start of it</p>
     <p>In old New York</p>
      <p>If I can make it there</p>
      <div>I'll make it anywhere</div>


        <p>It's up to you</p>
   <p>New York, New York</p>
    <p>New York, New York</p>
     <p>I want to wake up in a city</p>
      <p>That doesn't sleep</p>
      <div>And find that I'm number one</div>


      <p>Top of the list</p>
   <p>Head of the heap</p>
    <p>King of the hill</p>
     <p>These little town blues</p>
      <p>They've all melted away</p>
      <div>I'm gonna make a brand new start of it</div>


        <p>In old New York</p>
   <p>And
If I can make it there</p>
    <p>I'll make it practically anywhere</p>
     <p>It's up to you</p>
      <p>New York, New York</p>
      <div>New York</div>

</Fade>
</>
)
}
