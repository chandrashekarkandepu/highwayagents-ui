import React,{useEffect} from 'react'
import homeImage from '../images/home.jpg';
import contractorImage from '../images/contractor.png'
import agencyImage from '../images/engineer.png'
import workerImage from '../images/workers.png'
import aboutImage from '../images/home1.jpg'



const Home = () => {

  
  useEffect(() => {
    const highwayagents = document.getElementById('highwayagents');
    const navMenu = document.getElementById('nav-Menu');
    const closeIcon=document.getElementById("nav-close");
    
    const navLinks = document.querySelectorAll(".nav__link");

Array.from(navLinks).forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.add('hidden');
  });
});

    const handleHighwayAgentsClick = () => {
      navMenu.classList.remove('hidden');
    };

    const handleCloseIconClick=()=>{
      navMenu.classList.add('hidden');
    }
   

    if (highwayagents) {
      highwayagents.addEventListener('click', handleHighwayAgentsClick);
    }
    if(closeIcon){
      closeIcon.addEventListener('click',handleCloseIconClick);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      if (highwayagents) {
        highwayagents.removeEventListener('click', handleHighwayAgentsClick);
      }
    };
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  
  

  
  return (
    <div>
      <section id="home">
      <div class="flex flex-col items-center">
        <div class="mx-auto">
        <img src={homeImage} class="h-100"   alt='home'/>
      </div>
      <div class="text-center"> 
        <h1 class="home__title">HIGHWAY AGENTS REDUCE COSTS TO CONTRACTORS</h1>
      </div>
      <div class="seperator mx-auto"></div>
      <p class="paragraph">Contractors can now reduce costs by hiring the local workers by their work location</p>
      <div class="text-base flex items-center justify-center gap-4 py-10">
        <div className='text-center' >
          <img src={contractorImage} class="w-14 h-14 overflow-hidden object-cover" alt=""></img>
          <br/>
          Contractors
        </div>
        <div className='text-center' >
          <img src={agencyImage} class="w-14 h-14 overflow-hidden object-cover" alt=""></img>
          <br/>
          Agencies
        </div>
        <div className='text-center' >
          <img src={workerImage} class="w-14 h-14 overflow-hidden object-cover" alt=""></img>
          <br/>
          Workers
        </div>        
      </div>
      <a href='#' class="btn btn-primary">Learn More</a>
      </div>
    </section>

    <section id="category">
    <div class="container flex flex-col gap-5 md:flex-row">
      

    
    <div class="bg-secondaryColor flex py-3 rounded-lg overflow-hidden md:flex-1">
    <div class="basis-1/3 relative"><img src={contractorImage} alt="contractor" class="w-20 h-20 overflow-hidden object-cover absolute -bottom-4 -left-4"/></div>
    <div>
      <div class="mb-2">
        <h4 class="card__title">Contractors</h4>
        <p class="text-xs">Contractors can register themselves and search for agencies and workers at the location</p>
      </div>
      <a href='#' class="text-black cursor-pointer">Register</a>
    </div>
    </div>
     
    <div class="bg-redColor flex py-3 rounded-lg overflow-hidden md:flex-1">
    <div class="basis-1/3 relative"><img src={agencyImage} alt="Agency" class="w-20 h-20 overflow-hidden object-cover absolute -bottom-4 -left-4"/></div>
    <div>
      <div class="mb-2">
        <h4 class="card__title">Agencies</h4>
        <p class="text-xs">Agencies can register themselves and search for workers and hire them</p>
      </div>
      <a href='#' class="text-secondaryColor cursor-pointer">Register</a>
    </div>
    </div>

     
    <div class="bg-greenColor flex py-3 rounded-lg overflow-hidden md:flex-1">
    <div class="basis-1/3 relative"><img src={workerImage} alt="Worker" class="w-20 h-20 overflow-hidden object-cover absolute -bottom-4 -left-4"/></div>
    <div>
      <div class="mb-2">
        <h4 class="card__title">Workers</h4>
        <p class="text-xs">Workers can register themselves based on the work type so that contractors and agencies can hire them</p>
      </div>
      <a href='#' class="text-secondaryColor cursor-pointer">Register</a>
    </div>
    </div>
    </div>
    </section>

    <section id="about">
    <div class="container flex flex-col gap-10 md:flex-row">
      <div class="flex-1 w-74 h-70
       overflow-hidden"><img src={aboutImage} alt="about image" class="rounded-lg w-full h-full object-cover"></img></div>
      <div class="flex-1">
        <h2 class="section__title">FIND BEST AGENCIES AND WORKERS ALL-IN-ONE PLACE FOR COST REDUCTION</h2>
        <div class="seperotor"></div>
        <p class="paragraph">We help the Contractors to find the best agencies and workers at lower cost and with best service</p>
        <ul class="grid grid-cols-2 py-5 space-y-1">
          <li class="text-xs text-paragraphColor">
            <i class="fa-solid fa-check text-secondaryColor"></i>
            Best Price</li>
          <li class="text-xs text-paragraphColor">
          <i class="fa-solid fa-check  text-secondaryColor"></i>
            Best Service</li>
          <li class="text-xs text-paragraphColor">  <i class="fa-solid fa-check  text-secondaryColor"></i>
            Reduce Costs</li>
          <li class="text-xs text-paragraphColor">  <i class="fa-solid fa-check  text-secondaryColor"></i>
            Hiring Made Easy
          </li>
         
        </ul>
        <a href='' class="btn btn-primary">About us</a>
      </div>
    </div>
    </section>
    <section id="contact" class="bg-secondaryColor py-16">
      <div class="container flex flex-col gap-5 md:items-center md:flex-row">
      <div class="space-y-4 md:flex-1">
        <h2 class="section__title text-blackColor"  >GET EXCLUSIVE UPDATE</h2>
        <p class="text-sm">Regarding the hiring for the workers in different agencies and from contractors</p>
      </div >
      <div class="flex flex-col gap-3 md:flex-row md:flex-1">
        <input type="email" placeholder="Email Address" class="p-2 text-blackColor rounded-lg outline-none md:w-full"></input>
        <a href="" class="flex items-center justify-center gap-2 btn bg-blackColor hover:opacity-75">
          <i class="fa-solid fa-paper-plane"></i>
          Subscribe</a>

      </div>
      </div>

    </section>
  <footer>
      <section class="footer">
        <div class="container">
          <ul class="grid grid-cols-1 items-start gap-5 pb-5 md:grid-cols-2 lg:grid-cols-4">
            <li>
              <div class="space-y-3">
                <a href="" class="text-4xl font-oswald uppercase">
                  Highway<span class="text-secondaryColor">Agents</span>
                </a>

                <p class="text-xs">
                Getting the right workers and at right time to save cost and time
                </p>
              </div>
            </li>

            <li>
              <div class="flex flex-col gap-3">
                <h3 class="text-lg uppercase font-oswald">SUPPORT</h3>
                <a href="" class="text-xs hover:text-secondaryColor">FAQ's</a>
                <a href="" class="text-xs hover:text-secondaryColor">Privacy Policy</a>
                <a href="" class="text-xs hover:text-secondaryColor">Terms & Conditions</a>
                <a href="" class="text-xs hover:text-secondaryColor">Contact</a>
              </div>
            </li>

            <li class="space-y-8">
              <div class="space-y-2">
                <h3 class="text-lg uppercase font-oswald">phone</h3>

                <p class="flex items-center gap-2 text-xs">
                  <i class="fa-solid fa-phone text-lg text-secondaryColor"></i>
                  +1 513 537 9426
                </p>
              </div>

              <div class="space-y-2">
                <h3 class="text-lg uppercase font-oswald">email</h3>

                <p class="flex items-center gap-2 text-xs">
                  <i class="fa-solid fa-envelope text-lg text-secondaryColor"></i>
                  highway.agents@gmail.com
                </p>
              </div>
            </li>

            <li class="space-y-8">
              <div class="space-y-2">
                <h3 class="text-lg uppercase font-oswald">address</h3>

                <p class="flex items-center gap-2 text-xs">
                  <i class="fa-solid fa-location-dot text-lg text-secondaryColor"></i>
                 Frisco,Tx
                </p>
              </div>

              <div class="space-y-2">
                <h3 class="text-lg uppercase font-oswald">follow us</h3>

                <div class="space-x-3">
                  <i class="fa-brands fa-facebook-f text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200"></i>
                  <i class="fa-brands fa-twitter text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200"></i>
                  <i class="fa-brands fa-square-instagram text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200"></i>
                </div>
              </div>
            </li>
          </ul>

          <div class="flex flex-col items-center border-t border-primaryColorLight dark:border-darkColorLight py-5 md:flex-row md:justify-between">
            <p class="paragraph">Highway Agents</p>
            <p class="paragraph">Copyright © 2023. All rights reserved.</p>
          </div>
        </div>
      </section>
    </footer>
    
    </div>
    
   
  )
}

export default Home