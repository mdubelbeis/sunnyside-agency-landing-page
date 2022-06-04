import Header from './header/Header';
import Products from './products/Products';
import ClientTestimonials from './testimonials/ClientTestimonials';
import Images from './Images';
import Footer from './footer/Footer';
const App = () => {
  return (
    <div>
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
