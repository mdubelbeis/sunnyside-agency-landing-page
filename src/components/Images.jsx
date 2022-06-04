import mobileMilkBottles from '../images/mobile/image-gallery-milkbottles.jpg';
import mobileCone from '../images/mobile/image-gallery-cone.jpg';
import mobileOrange from '../images/mobile/image-gallery-orange.jpg';
import mobileSugarCubes from '../images/mobile/image-gallery-sugar-cubes.jpg';

const Images = () => {
  return (
    <div className="grid grid-cols-2">
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
