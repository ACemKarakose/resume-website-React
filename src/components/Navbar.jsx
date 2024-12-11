import Logo from '../assets/cemLogo.png'
import {FaLinkedin , FaGithub, FaInstagram} from "react-icons/fa";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={Logo} alt='logo' width={150} height={150}/>
      </div>
      <div className='m-2 flex items-center justify-center gap-3 text-3xl'>
          <FaGithub onClick={()=> window.open("https://github.com/ACemKarakose")}/>
          <FaLinkedin onClick={()=> window.open("https://www.linkedin.com/in/cemkarakose/")}/>
          <FaInstagram onClick={()=> window.open("https://www.instagram.com/dacknf/")}/>
      </div>
  </nav>;
};

export default Navbar;
