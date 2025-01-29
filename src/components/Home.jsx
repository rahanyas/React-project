import HomeImg from '../assets/progbiz-img/img-1.png'
import { GoArrowUpRight } from "react-icons/go";

const Home = () => {
  return (
    <div className='p-2'>

      <div className='p-4 mb-2 '>
        <div className='sansFont'>
         <h1 className='text-[50px] md:text-[64px] capitalize '>your trusted partner in <br /> cooling solution</h1>
         <p className='text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum velit, a rem quo corrupti ad cum nesciunt vel veniam <br /> esse molestias voluptas aliquam tempore culpa. Quasi quae magnam eaque odio?</p>
        </div>

        <div className='m-4  p-2'>
          <button className=' rounded-full px-5 md:px-7 py-2 mr-4 inline-flex items-center bg-blue-500'>lets talk <GoArrowUpRight /></button>
          <button className='rounded-full px-5 md:px-7 py-2 mr-4 inline-flex items-center'>explore our products <GoArrowUpRight /></button>
        </div>

      </div>

      <div className='rounded-md flex justify-center'>
         <img src={HomeImg} alt="" className='rounded-md w-[90%]'/>
      </div>

    </div>
  )
};

export default Home