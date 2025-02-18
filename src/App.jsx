
import './App.css'
import fotopas01 from"../src/assets/image/fotopas01.png";
import hero3 from"../src/assets/image/hero3.png";
import hero4 from"../src/assets/image/hero4.png";
import hero9 from"../src/assets/image/hero9.png";
import hero6 from"../src/assets/image/hero6.png";
import foto3 from "../src/assets/image/foto3.png";
import email from"../src/assets/emailwhite.svg";

function App() {
  
 function handleClick(){
  const mobile = document.getElementById('navigasi');
  const navmenu = document.getElementById('mobileMenu');
  mobile.classList.toggle('tandax');
  navmenu.classList.toggle('hidden')
 }

  return (
    <>

    
    {/* section navbar */}
    <header className="bg-gray-500 fixed z-999 top-0 left-0 w-full ">
  <nav className="container mx-auto px-6 py-3">
    <div className="flex items-center justify-between">
      <div className="text-white font-bold text-xl">
        <a href="#">Ahmad Soleh Mihardi</a>
      </div>
      <div className="hidden md:block">
        <ul className="flex items-center space-x-8">
          <li><a href="#hero" className="text-white">Home</a></li>
          <li><a href="#project" className="text-white">Project</a></li>
          <li><a href="#whyMe" className="text-white">Services</a></li>
          <li><a href="#contact" className="text-white">Contact</a></li>
        </ul>
      </div>
      
        <button className="hamburger md:hidden" onClick={handleClick} id="navigasi" >
        </button>
      
    </div>
    <div className="hidden md:hidden " id='mobileMenu'>
      <ul className="mt-4 space-y-4">
        <li><a href="#hero" className="block px-4 py-2 text-white bg-gray-900 rounded">Home</a></li>
        <li><a href="#project" className="block px-4 py-2 text-white bg-gray-900 rounded">Project</a></li>
        <li><a href="#whyMe" className="block px-4 py-2 text-white bg-gray-900 rounded">Services</a></li>
        <li><a href="#contact" className="block px-4 py-2 text-white bg-gray-900 rounded">Contact</a></li>
      </ul>
    </div>
    
  </nav>
</header>
{/* section hero */}
<div className="bg-gradient-to-b from-green-100 to-green-50" id='hero'>
    

    <section className="py-10 sm:py-16 lg:pt-30">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div >
                    <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                        UI/UX Design
                        <div className="relative inline-flex">
                            <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80] md:absolute md:w-[67%]"></span>
                            <h1 className="relative text-3xl font-bold text-black sm:text-6xl lg:text-6xl">FrontEnd Development</h1>
                        </div>
                    </h1>

                    <p className="mt-8 text-base text-black sm:text-xl">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>

                    <div className="mt-10 flex items-center gap-3">
                        <a href="#" title="" className="px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 rounded-xl " role="button"> Email Me </a>

                        <a href="#" title="" className="inline-flex items-center text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80">
                            <svg className="w-10 h-10 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path fill="#F97316" stroke="#F97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Watch video
                        </a>
                    </div>
                </div>

                <div>
                    <div className='balok relative'>
                        <img src={fotopas01} className='pt-20 lg:pt-40 px-10  '   alt="" />
                                             
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
{/* show project */}
<section id='project'>
  <div className='pt-32 pb-20 w-full '>    
    <div className='w-[90%] mx-auto'>
    <h1 className='text-4xl mb-10 lg:font-bold lg:text-6xl text-gray-700'>Selected Project</h1>
    <div className='flex flex-col gap-20'>
      <div className='flex flex-col gap-8'> 
        <img src={hero3} alt="" className='rounded-xl' />
        <h3 className='md:text-lg text-xl font-semibold text-gray-500  flex gap-3 items-center'><span ><img src="../src/assets/file.svg" alt="" className='lg:w-5 w-7 fill-gray-100'/></span>View Study Case</h3>
        </div>
        <div className='flex flex-col gap-8'> 
        <img src={hero4} alt="" className='rounded-xl' />
        <h3 className='md:text-lg text-xl font-semibold text-gray-500  flex gap-3 items-center'><span ><img src="../src/assets/file.svg" alt="" className='lg:w-5 w-7 fill-gray-100'/></span>View Study Case</h3>
        </div>
        <div className='flex flex-col gap-8'> 
        <img src={hero9} alt="" className='rounded-xl' />
        <h3 className='md:text-lg text-xl font-semibold text-gray-500  flex gap-3 items-center'><span ><img src="../src/assets/file.svg" alt="" className='lg:w-5 w-7 fill-gray-100'/></span>View Study Case</h3>
        </div>
        <div className='flex flex-col gap-8'> 
        <img src={hero6} alt="" className='rounded-xl' />
        <h3 className='md:text-lg text-xl font-semibold text-gray-500  flex gap-3 items-center'><span ><img src="../src/assets/file.svg" alt="" className='lg:w-5 w-7 fill-gray-100'/></span>View Study Case</h3>
        </div>
        </div>
    </div>
  </div>
</section>
{/* why hire me */}
<section className='bg-gradient-to-b from-green-50 to-green-100' id='whyMe'>
<h1 className='text-4xl mb-10 lg:font-bold lg:text-5xl text-gray-700 text-center lg:mb-20 pt-20' >Why Hire Me</h1>
<div className='flex flex-wrap gap-10 md:gap-3 md:px-6'>
{/* component */}
<div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 md:w-[24%]">
  <div className="flex justify-center -mt-24 mb-10 ">
    <img className="w-[100%] object-cover rounded-full  border-indigo-500" src={fotopas01}/>
  </div>
  <div >
    <h2 className="text-gray-800 text-3xl font-semibold text-center lg:text-xl">Collaborativ</h2>
    <p className="mt-2 text-gray-600 text-center">I can work within a team, collaborate well with developers because Im frontend-end myself, and I love feedbacks.</p>
  </div>
  
</div>
<div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 md:w-[24%]">
  <div className="flex justify-center  -mt-28 mb-10">
    <img className="w-[80%]  object-cover rounded-full  border-indigo-500" src={foto3}/>
  </div>
  <div >
    <h2 className="text-gray-800 text-3xl font-semibold text-center lg:text-xl">Communicative</h2>
    <p className="mt-2 text-gray-600 text-center">I communicate what I struggle to make all crystal clear. I can communicate my ideas well, proven by my videos.</p>
  </div>
  
</div>
<div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 md:w-[24%]"> 
  <div className="flex justify-center  -mt-28 mb-10">
    <img className="w-[100%] object-cover rounded-full  border-indigo-500" src={fotopas01}/>
  </div>
  <div >
    <h2 className="text-gray-800 text-3xl font-semibold text-center lg:text-xl">Management Freak</h2>
    <p className="mt-2 text-gray-600">In Duosweb.com, I manage the whole process from acquiring clients, project timeline, until product delivery.</p>
  </div>
  
</div>
<div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 md:w-[24%]">
  <div className="flex justify-center  -mt-28 mb-10">
    <img className="w-[80%] object-cover rounded-full  border-indigo-500" src={foto3}/>
  </div>
  <div >
    <h2 className="text-gray-800 text-3xl font-semibold text-center lg:text-xl">Client’s Favourite</h2>
    <p className="mt-2 text-gray-600">I’ve been freelancing for 7 years, working directly with overseas clients and all I heard are positive reviews.</p>
  </div>
  
</div>
</div>
</section>
{/* interested me */}
<section id='contact'>
  <div className='w-full mt-32 mb-20'>
    <div className="w-[90%] mx-auto bg-[#4ADE80] rounded-lg">
      <div  className='md:flex md:justify-between md:items-center px-5 py-10'>
        <h1 className='text-4xl font-bold text-white'>Interested working with me?</h1>
        <div className='flex gap-5 mt-10'>
          <a href="#" className='py-3 px-3 border rounded-lg border-gray-500 text-white hover:text-gray-200'>See More Project</a>
          <a href="#" className='py-3 px-3 bg-yellow-500 rounded-lg border-gray-500 text-white hover:bg-gray-800 duration-300 flex gap-2 '> <img src={email} alt="" className='w-5 '/>Email Me</a>
        </div>
      </div>
    </div>
  </div>
</section>
{/* foother */}
<footer className="relative bg-blueGray-200 pt-8 pb-6 bg-gray-500">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl fonat-semibold text-blueGray-700">Lets keep in touch!</h4>
        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
          Find us on any of these platforms, we respond 1-2 business days.
        </h5>
        <div className="mt-6 lg:mb-0 mb-6">
          <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-twitter"></i></button><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-facebook-square"></i></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-dribbble"></i></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300"/>
    
  </div>
</footer> 
    </>
  )
}

export default App
