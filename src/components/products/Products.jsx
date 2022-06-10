import { useEffect, useState } from 'react';

import mobileEgg from '../../images/mobile/image-transform.jpg';
import mobileCup from '../../images/mobile/image-stand-out.jpg';
import desktopEgg from '../../images/desktop/image-transform.jpg';
import desktopCup from '../../images/desktop/image-stand-out.jpg';

import ProductItem from './ProductItem';
import ProductDesign from './ProductDesign';

const productItems = [
  {
    title: 'Transform your brand',
    description:
      'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you',
  },
  {
    title: 'Stand out to the right audience',
    description:
      'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you',
  },
];

const productDesign = [
  {
    title: 'Graphic Design',
    description:
      "Great design makes you memorable. We deliver artwork that undescores your brand message and captures potential clients' attention",
  },
  {
    title: 'Photography',
    description:
      'Increase your credibility by getting the most stunning, high-quality photos that improve your busines image.',
  },
];

const Products = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  return (
    <div>
      {/* First Section */}
      <div className="md:flex md:flex-col md:w-full">
        <ProductItem
          flexDir="md:flex-row-reverse"
          image={windowWidth < 768 ? mobileEgg : desktopEgg}
          title={productItems[0].title}
          description={productItems[0].description}
          color="border-yellow/25"
          hoverColor="hover:border-yellow/50"
        />
        <ProductItem
          image={windowWidth < 768 ? mobileCup : desktopCup}
          title={productItems[1].title}
          description={productItems[1].description}
          color="border-soft-red/25"
          hoverColor="hover:border-soft-red/50"
        />
      </div>

      {/* Second Section */}
      <div className="md:flex">
        <ProductDesign
          title={productDesign[0].title}
          description={productDesign[0].description}
          bgImage="bg-mobile-product-image__graphic-design"
        />
        <ProductDesign
          title={productDesign[1].title}
          description={productDesign[1].description}
          bgImage="bg-mobile-product-image__photography"
        />
      </div>
    </div>
  );
};

export default Products;
