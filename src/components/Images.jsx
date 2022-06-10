import mobileMilkBottles from '../../assets/mobile/image-gallery-milkbottles.jpg';
import mobileCone from '../../assets/mobile/image-gallery-cone.jpg';
import mobileOrange from '../../assets/mobile/image-gallery-orange.jpg';
import mobileSugarCubes from '../../assets/mobile/image-gallery-sugar-cubes.jpg';

// Still going to have to figure out best way to use srcSet for responsiveness
import desktopMilkBottles from '../../assets/desktop/image-gallery-milkbottles.jpg';
import desktopCone from '../../assets/desktop/image-gallery-cone.jpg';
import desktopOrange from '../../assets/desktop/image-gallery-orange.jpg';
import desktopSugarCubes from '../../assets/desktop/image-gallery-sugarcubes.jpg';

const Images = () => {
  return (
    <div className="grid grid-cols-2 mt-6 md:grid-cols-4">
      <div>
        <img src={mobileMilkBottles} alt="milk bottles" />{' '}
      </div>
      <div>
        <img src={mobileOrange} alt="orange on plate" />{' '}
      </div>
      <div>
        <img src={mobileCone} alt="ice cream cone" />{' '}
      </div>
      <div>
        <img src={mobileSugarCubes} alt="sugar cubes" />
      </div>
    </div>
  );
};

export default Images;
