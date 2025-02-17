import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Footer from './components/Footer';
import Product from './components/sections/Product';
import Gallery from './components/sections/Gallery';
import Testimonial from './components/sections/Testimonial';
import Newsletter from './components/sections/Newsletter';
function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <Product />
      <Gallery />
      <Testimonial />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
