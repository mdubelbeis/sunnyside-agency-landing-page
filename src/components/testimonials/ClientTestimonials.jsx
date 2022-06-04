import clientEmily from '../../images/image-emily.jpg';
import clientThomas from '../../images/image-thomas.jpg';
import clientJennie from '../../images/image-jennie.jpg';

import Client from './Client';

const testimonial = [
  {
    text: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',

    name: 'Emily R.',
    role: 'Marketing Director',
  },
  {
    text: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",

    name: 'Thomas S.',
    role: 'Chief Operating Officer',
  },
  {
    text: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommend!',

    name: 'Jennie F.',
    role: 'Business Owner',
  },
];

const ClientTestimonials = () => {
  return (
    <section className="flex flex-col space-y-8 mt-10 text-center">
      <h2 className="font-fraunces text-grayish-blue tracking-widest text-base">
        CLIENT TESTIMONIALS
      </h2>
      <div className="space-y-12 p-8">
        <Client testimonial={testimonial[0]} img={clientEmily} />
        <Client testimonial={testimonial[1]} img={clientThomas} />
        <Client testimonial={testimonial[2]} img={clientJennie} />
      </div>
    </section>
  );
};

export default ClientTestimonials;
