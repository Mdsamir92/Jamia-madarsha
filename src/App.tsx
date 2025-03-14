import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Gallery';
import Videos from './components/Videos';
import Footer from './components/Footer';
import MainGate from './components/Main-gate';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <MainGate/>
        <Courses />
        <Videos />
        <AboutUs/>
      </main>
      <Footer />
    </div>
  );
}

export default App;