import React from 'react';
import BoxComponent from './box';

import fullImage from '../assets/image/full.jpg';
import bustImage from '../assets/image/bust.jpg';
import halfImage from '../assets/image/half.jpg';


function ContentRow() {
  return (
    <div className="flex flex-col lg:flex-row justify-around px-5 py-20 items-center gap-10 ">
      <BoxComponent title=" Full Body $25" content="Draw Full Body character of yours" image={fullImage}/>
      <BoxComponent title="Bust Up $15" content="Draw Bust up character of yours" image={bustImage}/>
      <BoxComponent title="Half Body $20" content="Draw Waist Up character of yours" image={halfImage} />
    </div>
  );
}
export default ContentRow;
