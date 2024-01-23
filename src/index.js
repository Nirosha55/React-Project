// import React from 'react';
// import ReactDOM from 'react-dom';
// // import PI,{ doublePi,triplePi } from './math';
// import * as pi from './math.js';



// ReactDOM.render(
// <div>
//   <ul>
//   {/* <li>{PI}</li>
//     <li>{doublePi()}</li>
//     <li>{triplePi()}</li> */}
//     <li>{pi.default}</li>
//     <li>{pi.doublePi()}</li>
//     <li>{pi.triplePi()}</li>
//   </ul>
// </div>,document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom';
// import  {addition,subs,multi,divs} from './math'
import * as math from './math';
ReactDOM.render(
<div>
  <ul>
{/* <li>{addition(2,3)}</li>
<li>{subs(6,3)}</li>
<li>{multi(9,8)}</li>
<li>{divs(9,3)}</li> */}
<li>{math.addition(2,3)}</li>
<li>{math.subs(6,3)}</li>
<li>{math.multi(9,8)}</li>
<li>{math.divs(9,3)}</li>
  </ul>
</div>,document.getElementById('root')
);


