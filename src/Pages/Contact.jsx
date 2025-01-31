
import { FaArrowRightLong } from "react-icons/fa6";
const Contact = () => {
  return (
    <div>

   
    <div className="grid grid-cols-1 md:grid-cols-2 contactBg bg-cover bg-center bg-local bg-origin-content overflow-hidden h-4/5 md:h-screen m justify-center items-center">

       <div className="max-h-fit mt-11 p-4 mx-3">
           <h5 className="uppercase sansFont text-white ">get in touch mow</h5>
           <h2 className="capitalize text-white whitespace-nowrap sansFont text-[40px]">ready to upgrade <br /> your cooling?</h2>
           <p className="sansFont text-white capitalize text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, corporis. Nisi doloremque explicabo esse laudantium harum nulla itaque optio laboriosam voluptates excepturi vitae, assumenda 
           </p>     
           <button className="inline-flex items-center gap-4 rounded-full p-3 mt-3 ml-2 mb-2 bg-slate-900 text-white cursor-pointer transition-transform duration-300 ease-in-out hover:bg-slate-700 hover:text-blue-400 hover:scale-105">
  View More <FaArrowRightLong />
</button>  
       </div>

       <div className="w-fit mx-auto bg-white p-6 rounded-lg mb-3">
        <h2 className="capitalize sansFont text-2xl ml-6 md:mt-9 w-fit">let&apos;s connect</h2>
          <form action="" className="text-black py-11 px-9 ">
            <input type="text" placeholder="enter your name" className="outline-none bg-gray-200 p-2 capitalize sansFont mr-4 rounded-lg"/>
            <input type="email" placeholder="enter your email" className="outline-none bg-gray-200 p-2 capitalize sansFont mb-2 rounded-lg"/>
            <br />
            <input type="text"  placeholder="enter your phone number" className="outline-none bg-gray-200 p-2 capitalize sansFont whitespace-nowra w-[250px] mt-4 rounded-lg"/>
            <div className="flex justify-around items-center mt-9 mb-5">
              <label htmlFor="" className="flex items-center gap-2 ">
                <input type="checkbox" defaultChecked     className="" />
                <span className="">purchase</span>
              </label>
              <label htmlFor="" className="flex items-center gap-2 ">
                <input type="checkbox"   className=""/>
                <span className="">installation</span>
              </label>
              <label htmlFor="" className="flex items-center gap-2 ">
                <input type="checkbox"   className=""/>
                <span className="">service</span>
              </label>
            </div>
             <textarea  className="outline-none bg-gray-200 p-2 capitalize sansFont w-[200px] h-[100px] rounded-lg">

             </textarea>
             <div className="mt-9 ">
             <button className="border inline-flex items-center gap-3 rounded-full px-6 py-3 text-white bg-blue-600 transition-transform duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 cursor-pointer">
        Send Message
        <FaArrowRightLong />
      </button>

             </div>
          </form>
       </div>
    </div>
    </div>
  )
}

export default Contact