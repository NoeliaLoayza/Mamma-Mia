import Navbar from './components/Navbar/Navbar';
// import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
// import Home from './components/Home/Home';
// import RegisterPage from './pages/RegisterPage/RegisterPage';
// import LoginPage from './pages/LoginPage/LoginPage';
import Pizza from './components/Pizza/Pizza';

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <Cart /> */}
      <Pizza />
      <Footer />
    </div>
  );
};

export default App;