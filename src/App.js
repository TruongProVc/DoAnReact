
import './App.css';
import Content from './Component/Content/Content';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Slidebar from './Component/Slidebar/Sidebar';
import Login from './Page/User/Login';
import ProductDetail from './Page/User/ProductDetail';


//Import plugins

// import './plugins/aos.min.css'

// 
function App() {
  return (
   
 <div>
    <Header/>
    {/* <Slidebar/>
    <Content/> */}
    <ProductDetail/>
    <Footer/>
 </div>
  );
}

export default App;
