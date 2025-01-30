
import { GoArrowUpRight } from "react-icons/go";
import { footerItems } from "../utils/FooterItems";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20 md:mt-4 mt-2">
      <div className="max-w-7xl mx-auto">
            <div className="m-4">
         <h2 className="text-2xl md:text-[30px] capitalize mb-4">ready to experience superior <br /> cooling?</h2>
         <div className="flex items-center md:p-3">
         <button className='rounded-full px-5 md:px-7 py-2 mr-4 flex items-center border border-white flex-nowrap whitespace-nowrap gap-2 cursor-pointer hover:bg-gray-600 transition ease-in duration-300'>lets talk <GoArrowUpRight /></button>
        <span className="underline cursor-pointer">info@cooltech.com</span>
         </div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div >
            <h3 className="text-xl font-semibold mb-4">COOL TECHNOLOGIES</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
          </div>
          {footerItems.map((section, index) => (
            <div key={index} className="md:ml-14">
              <h3 className="text-xl font-semibold mb-4 capitalize">{section.title}</h3>
              <ul className="space-y-2">
                {section.item.map((link, idx) => (
                  <li key={idx}><a href="#" className="hover:text-white">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center  pt-6">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-white">INSTAGRAM</a>
            <a href="#" className="hover:text-white">FACEBOOK</a>
            <a href="#" className="hover:text-white">TWITTER</a>
            <a href="#" className="hover:text-white">PINTEREST</a>
          </div>
          <p className="text-sm">Copyright &copy; 2024 CoolTech. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;