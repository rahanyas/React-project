import img1 from '../assets/progbiz-img/img-18.png';
import img2 from '../assets/progbiz-img/img-19.png';
import img3 from '../assets/progbiz-img/img-20.png';
import { FaArrowRightLong } from "react-icons/fa6";

const BlogPage = () => {
  return (
    <div className='p-3'>
      <h5 className="sanFont uppercase text-blue-500">our latest news & blogs</h5>
      <h1 className="sansFont capitalize text-[40px] md:text-[50px]">
        our best solutions <br /> news & blogs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 m-4 gap-5">
        {[img1, img2, img3].map((image, index) => (
          <div 
            key={index} 
            className="shadow-md hover:shadow-xl cursor-pointer overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
          >
            
            <div className="w-full overflow-hidden">
              <img src={image} className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110" />
            </div>
            
            {/* Text Content */}
            <div className="p-3 bg-white">
              <p className='sansFont capitalize text-[17px]'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic consectetur nemo ut! Accusamus reprehenderit voluptatibus.
              </p>
              <button className='inline-flex items-center gap-2 text-blue-500 mt-2'>
                View more <FaArrowRightLong />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
