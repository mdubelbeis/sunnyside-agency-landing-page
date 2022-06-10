import { useState } from 'react';

import mobileMilk from '/assets/mobile/image-gallery-milkbottles.jpg';
import mobileOrange from '/assets/mobile/image-gallery-orange.jpg';
import mobileCone from '/assets/mobile/image-gallery-cone.jpg';
import mobileCubes from '/assets/mobile/image-gallery-sugar-cubes.jpg';

// Still going to have to figure out best way to use srcSet for responsiveness
import desktopMilk from '/assets/desktop/image-gallery-milkbottles.jpg';
import desktopCone from '/assets/desktop/image-gallery-cone.jpg';
import desktopOrange from '/assets/desktop/image-gallery-orange.jpg';
import desktopCubes from '/assets/desktop/image-gallery-sugarcubes.jpg';

const Images = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const milk = windowWidth < 768 ? mobileMilk : desktopMilk;
  const orange = windowWidth < 768 ? mobileOrange : desktopOrange;
  const cone = windowWidth < 768 ? mobileCone : desktopCone;
  const cubes = windowWidth < 768 ? mobileCubes : desktopCubes;
  return (
    <div className="grid grid-cols-2 mt-6 md:grid-cols-4">
      <div>
        <img src={milk} alt="milk bottles" />{' '}
      </div>
      <div>
        <img src={orange} alt="orange on plate" />{' '}
      </div>
      <div>
        <img src={cone} alt="ice cream cone" />{' '}
      </div>
      <div>
        <img src={cubes} alt="sugar cubes" />
      </div>
    </div>
  );
};

export default Images;
