import Header from './header/Header';
import Products from './products/Products';
import ClientTestimonials from './testimonials/ClientTestimonials';
import Images from './Images';
import Footer from './footer/Footer';

const App = () => {
  return (
    <div className="max-w-[1440px] w-full mx-auto">
      <Header />
      <main>
        <Products />
        <ClientTestimonials />
        <Images />
      </main>
      <Footer />
    </div>
  );
};

export default App;
