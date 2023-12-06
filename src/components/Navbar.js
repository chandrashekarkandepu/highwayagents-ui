import React ,{useState} from 'react'
import {Link } from 'react-router-dom'
const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
      };
  return (
    <div>
        <header class="bg-primaryColor dark:bg-darkColor fixed top-0 left-0 w-full z-50" id="header">
      <nav class="container relative h-14 flex justify-between items-center">
        <div>
          <a href="#" class="text-2xl uppercase  font-oswald">
            Highway<span class="text-secondaryColor">Agents</span>
          </a>
        </div>
      <div class="hidden absolute top-0 left-0 w-full py-14 bg-primaryColor dark:bg-darkColor border-b border-secondaryColor md:block md:static md:py-0 md:border-none md:w-auto md:ml-auto" 
      id="nav-Menu" >
          <ul class="flex flex-col text-center gap-5 md:flex-row">
            <li>
              <a href="#home" class="nav__link text-secondaryColor hover:text-secondaryColor ease-in duration-200">Home</a>
            </li>
            <li>
              <a href="#about" class="nav__link hover:text-secondaryColor ease-in duration-200">About Us</a>
            </li>
            <li>
              <Link to="/login/Contractor" class="nav__link hover:text-secondaryColor ease-in duration-200">Contractors</Link>
            </li>
            <li>
              <a href="/login/Agency" class="nav__link hover:text-secondaryColor ease-in duration-200">Agencies</a>
            </li>
            <li>
              <a href="#workers" class="nav__link hover:text-secondaryColor ease-in duration-200">Workers</a>
            </li>
            <li>
              <a href="#contact" class="nav__link hover:text-secondaryColor ease-in duration-200">Contact</a>
            </li>
          </ul>

          <div class="absolute top-[0.7rem] right-4 text-2xl cursor-pointer md:hidden" id="nav-close">
            <i class="ri-close-line"></i>
          </div>
        </div>

        <div class="flex items-center gap-5">
          <i class="ri-moon-line cursor-pointer ml-4 text-xl" id="theme-toggle"></i>

          <div class="md:hidden" id='highwayagents' onClick={toggleMenu}>
            <i class="ri-menu-2-line cursor-pointer text-xl"></i>
          </div>
        </div>
      </nav>
        </header>
    </div>
  )
}

export default Navbar