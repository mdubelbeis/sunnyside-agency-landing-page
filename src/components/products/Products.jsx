import mobileEgg from '../../images/mobile/image-transform.jpg';
import mobileCup from '../../images/mobile/image-stand-out.jpg';
import mobileCherries from '../../images/mobile/image-graphic-design.jpg';
import mobileOrange from '../../images/mobile/image-gallery-orange.jpg';

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
  return (
    <div>
      {/* First Section */}
      <div>
        <ProductItem
          image={mobileEgg}
          title={productItems[0].title}
          description={productItems[0].description}
          color="border-yellow/25"
        />
        <ProductItem
          image={mobileCup}
          title={productItems[1].title}
          description={productItems[1].description}
          color="border-soft-red/25"
        />
      </div>

      {/* Second Section */}
      <div>
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
