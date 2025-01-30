import cardImg1 from '../assets/progbiz-img/img-3.png';
import cardImg2 from '../assets/progbiz-img/img-4.png';
import cardImg3 from '../assets/progbiz-img/img-5.png';
import cardImg4 from '../assets/progbiz-img/img-6.png';
import { SlArrowRightCircle } from 'react-icons/sl';

const About = () => {
  return (
    <div className='p-2 md:p-4'>
      <div className='grid md:grid-cols-3 gap-2 mb-3  md:mb-7 shadow-md md:py-9'>
        <div className='p-4 md:p-6 col-span-1  min-w-fit'>
          <h1 className='text-[50px] capitalize sansFont'>cool <br /> technologies</h1>
        </div>
        <div className='p-4 relative col-span-2  md:flex items-center min-w-fit justify-items-start  md:ml-[5rem] lg-ml-0'>
          <p className='sansFont text-[18px] mb-2'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, nobis sequi! Quos recusandae illo, quo 
            similique ducimus nam quam! Aliquid pariatur nemo voluptate quibusdam Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, minus commodi. Voluptate aut nemo dolorem sequi rem alias? Animi iure 
          </p>
          <button className='flex items-center gap-2 md:absolute right-4 bottom-0 cursor-pointer hover:border rounded-full px-3 py-2 hover:bg-gray-300 transition ease-in duration-300'>
            <SlArrowRightCircle /> know more
          </button>
        </div>
      </div>

      {/* Image container */}
      <div className='flex overflow-x-auto md:overflow-x-hidden justify-center gap-2 scrollbar-hide'>
        <img src={cardImg1} alt='' className='object-contain'/>
        <img src={cardImg2} alt='' className='object-contain'/>
        <img src={cardImg3} alt='' className='object-contain'/>
        <img src={cardImg4} alt='' className='object-contain'/>
      </div>
    </div>
  );
};

export default About;
