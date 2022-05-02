import { useState} from "react"
import './style.css';
import Header from './Header';
import Navbar from './Navbar';
import AllCards from './AllCards';
import Footer from './Footer';


function App() {
  const [count,setCount] = useState(0);
  return (
    <div>
    <Navbar totalCount={count}/>
    <Header/>
    <AllCards count={count} setCount={setCount}/>
    <Footer/>
</div>
  );
}

export default App;
