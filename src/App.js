
import './App.css';
import Header from './Component/Header'
import Slidebar from './Component/Sidebar';
import Footer from './Component/Footer';
import Content1 from './Component/Content/Content1';
import Content2 from './Component/Content/Content2';


//Import plugins

// import './plugins/aos.min.css'

// 
function App() {
  return (
   
 <div>
    <Header/>
    <Slidebar/>
    <Content1/>
    <Content2/>

    <Footer/>

 </div>
  );
}

export default App;
