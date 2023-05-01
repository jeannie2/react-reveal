import React from "react";
import { Fade} from "react-awesome-reveal";

export default function Lyrics() {
// lower damping loads faster
// still works without cascade and damping
return (
<>
<Fade cascade damping={0.1}>
  <p>Start spreading the news</p>
  <p>I'm leaving today</p>
  <p>I want to be a part of it</p>
  <p>New York, New York</p>
  <p>These vagabond shoes</p>
  <p>They are longing to stray</p>

  <p>Right through the very heart of it</p>
  <p>New York, New York</p>
  <p>I want to wake up in a city</p>
  <p>That never sleeps</p>
  <p>And find I'm king of the hill</p>
  <p>Top of the heap</p>

  <p>These small town blues</p>
  <p>They are melting away</p>
  <p>I'll make a brand new start of it</p>
  <p>In old New York</p>
  <p>If I can make it there</p>
  <p>I'll make it anywhere</p>

  <p>It's up to you</p>
  <p>New York, New York</p>
  <p>New York, New York</p>
  <p>I want to wake up in a city</p>
  <p>That doesn't sleep</p>
  <p>And find that I'm number one</p>

  <p>Top of the list</p>
  <p>Head of the heap</p>
  <p>King of the hill</p>
  <p>These little town blues</p>
  <p>They've all melted away</p>
  <p>I'm gonna make a brand new start of it</p>

  <p>In old New York</p>
  <p>And If I can make it there</p>
  <p>I'll make it practically anywhere</p>
  <p>It's up to you</p>
  <p>New York, New York</p>
  <p>New York</p>
</Fade>

</>
)
}
