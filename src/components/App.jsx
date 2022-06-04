import Header from './header/Header';
import Products from './products/Products';
import ClientTestimonials from './testimonials/ClientTestimonials';
import Images from './Images';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Products />
        <ClientTestimonials />
        <Images />
      </main>
    </div>
  );
};

export default App;
