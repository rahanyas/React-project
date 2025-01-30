import { product } from "../utils/ProductImg";
import { GoArrowUpRight } from "react-icons/go";

const Products = () => {
  return (
    <div className="p-3">
         <h1 className="sansFont capitalize text-blue-500 md:mt-9 ml-9">our products</h1>
         <div className="p-3 mt-4 mx-3">
      {/* product heading */}
          <h1 className="sansFont capitalize text-[30px] md:text-[50px] mb-5">explore our top <br /> categories</h1>

          {/* decription */}

          <p className="sansFont capitalize text-[18px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, <br /> magni dignissimos. Provident architecto at enim, <br /> rem sapiente non sequi quasi unde consectetur</p>
         </div>

         {/* container for card */}
         <div className="grid grid-cols-2 justify-center  mt-9 p-3 gap-5 w-[80%] mx-auto">
          {product.map((item, index) => (
            // card container
        <div 
        key={index} 
        className="p-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer"
      >
        <img src={item.img} alt="product-img" className="rounded" /> 
        <h4 className="capitalize sansFont flex items-center gap-2 mt-3">
          {item.title} <GoArrowUpRight />
        </h4>
      </div>
           
          ))}
         </div>
    </div>
  )
};

export default Products