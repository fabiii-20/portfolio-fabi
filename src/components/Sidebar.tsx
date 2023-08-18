import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GiTie } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'
import { useTheme } from "next-themes";

const Sidebar = () => {
   const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
   return (
      <>
         <img
            src='https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg'
            alt='image'
            className='w-32 h-32 mx-auto border rounded-full '
         />
         <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
            <span className='text-green '>Fabi</span> KP
         </h3>
         <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-black-500'>
            Frontend Developer
         </p>
         {/* Resume */}
         <a
            href='./assets/Fabi_Resume_Aug.pdf'
            download='Fabi_Resume_Aug.pdf'
            className='flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-black-500'>
            <GiTie className='w-6 h-6' />
            <span>Download Resume</span>
         </a>

         {/* Socials */}
         {/* <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full '>
            <a href='https://www.youtube.com/channel/UClW8d1f5m0QAE_Ig024EP6A'>
               <AiFillYoutube className='w-8 h-8 cursor-pointer' />
            </a>
            <a href='https://www.linkedin.com/in/sumit-dey-4a04431a9/'>
               <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
            </a>
            <a href='https://www.instagram.com/_sumax__/'>
               <AiFillGithub className='w-8 h-8 cursor-pointer' />{' '}
            </a>
         </div> */}

         {/* Contacts */}
         <div
            className='py-4 my-5 bg-gray-200 dark:bg-black-500'
            style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
            <div className='flex items-center justify-center'>
               <GoLocation className='mr-2' /> <span>Kerala,India </span>
            </div>
            <p className='my-2 '> fabishereef@gmail.com </p>
            <p className='my-2'> 8078364002 </p>
         </div>

         {/* Email Button */}

         <button
            className='w-8/12 px-5 py-2 text-white rounded-full cursor-pointer bg-gradient-to-r from-green-500 to-blue-500 hover:scale-105 focus:outline-none'
            onClick={() => window.open('mailto:fabishereef@gmail.com')}>
            Email me
         </button>
         <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white rounded-full cursor-pointer bg-gradient-to-r from-green-500 to-blue-500 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Change theme
      </button>
      {theme}
      </>
   )
}

export default Sidebar