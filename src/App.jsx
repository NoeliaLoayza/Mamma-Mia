import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
// import Home from './components/Home/Home';
// import RegisterPage from './pages/RegisterPage/RegisterPage';
// import LoginPage from './pages/LoginPage/LoginPage';

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Cart />
      <Footer />
    </div>
  );
};

export default App;