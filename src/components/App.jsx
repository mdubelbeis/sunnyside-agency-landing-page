import Header from './header/Header';
import Products from './products/Products';
import ClientTestimonials from './testimonials/ClientTestimonials';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Products />
        <ClientTestimonials />
      </main>
    </div>
  );
};

export default App;
