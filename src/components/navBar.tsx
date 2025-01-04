import whiteLogo from "../img/logo-white.png";

const NavBar = () => {
  return (
    // nav bar
    <nav className="relative container mx-auto p-3">
      <div className="flex items-center justify-center">
        {/* <img className='max-h-12 max-w-12' src={whiteLogo} alt="Logo"/> */}

        <div className="hidden md:flex space-x-12 pr-8 text-darkBlue font-mono">
          <a href="#" className="hover:text-navyBlue">
            Skills
          </a>
          <a href="#" className="hover:text-navyBlue">
            Projects
          </a>
          <a href="#" className="hover:text-navyBlue">
            Experience
          </a>
          <a href="#" className="hover:text-navyBlue">
            Blog
          </a>
          <a href="#" className="hover:text-navyBlue">
            Contact
          </a>
        </div>

        <a href="https://drive.google.com/file/d/1EyWraWEyvxF71CMHlFfSgi2-a4pg8YUo/view?usp=drive_link" className="bg-darkBlue px-8 py-1 my-2 text-white rounded hover:brightness-200 transition duration-200 ease-in-out">
          Get CV
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
