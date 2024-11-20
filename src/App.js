
import './App.css';
import Header from './Component/Header'
import Slidebar from './Component/Sidebar';
import Content from './Component/Content';
import Footer from './Component/Footer';



//Import plugins
import './plugins/swiper-bundle.min.css'
import './plugins/animate.min.css'
import './plugins/nice-select.css'
import './plugins/venobox.min.css'
import './plugins/jquery.lineProgressbar.css'
import './plugins/aos.min.css'

// 
function App() {
  return (
   
 <div>
    <Header/>
    <Slidebar/>
    <Content/>
    <Footer/>

 </div>
  );
}

export default App;
