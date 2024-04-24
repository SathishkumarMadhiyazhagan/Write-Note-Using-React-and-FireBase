import './App.css';
import { Footer, Header, ScrollToTop } from './components';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <>
    <Header />
    <AllRoutes />
    <Footer />
    <ScrollToTop />
    </>
  );
}

export default App;
