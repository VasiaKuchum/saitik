import './App.css';
import logo from '../src/image/Logo (1).svg'
import search from '../src/image/Search Icon.svg'
import cart from '../src/image/Cart Icon.svg'
import Banner from '../src/image/Banner.svg'

function App() {
  return (
    <>
      <div>
        <div className='header'>
          <img src={logo} alt="Bad connect"></img>
          <p> Organick </p>
          <ul className='tab'>
            <li><a href="#"> Home </a></li>
            <li><a href="#"> About </a></li>
            <li><a href="#"> Home </a></li>
            <li><a href="#"> Pages </a></li>
            <li><a href="#"> Shop </a></li>
            <li><a href="#"> Projects </a></li>
            <li><a href="#"> News </a></li>
          </ul>
          <div className='block_input'>
            <input type="text" className='op'/>
            <img src={search} alt="Bad connect"></img>
          </div>
          <div className='cart'>
            <img src={cart} alt="Bad connect"></img>
            <p> cart{0}</p>
          </div>
        </div>

        <div>
          <img src={Banner} alt="Bad connect"></img>
        </div>
      </div>



    </>
  );
}

export default App;
