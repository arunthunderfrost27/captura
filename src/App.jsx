import styles from "./style";
import { CTA, Footer, Navbar, Hero } from "./components";
import Obj from "./components/Obj";
import Features from "./components/Features";

const App = () => (
  <div className="relative bg-primary w-full overflow-hidden">
      <div className={`${styles.boxWidth}`}>
        <Navbar />
    </div>

    <div className={`bg-white z-0`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-white ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Obj/>
        <div className="bg-white">
        <Features/>
        </div>
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
