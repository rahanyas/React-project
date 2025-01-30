import { clientsDetails } from "../utils/clientsDetails";
import { FaArrowRightLong } from "react-icons/fa6";

const ClientGrid = () => {
  return (
    <div className="px-4 py-8">
      <h2 className="uppercase text-blue-500  mb-8 sansFont md:ml-11">
        Clients & Friends
      </h2>
      <p className="text-[40px] md:text-[50px] capitalize sansFont mb-8 md:ml-11">We&#39;ve worked <br /> with lovely clients</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-2">
        {clientsDetails.map((client, index) => (
          <div
            key={index}
            className="flex items-center justify-center border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition md:w-[200px] md:h-[100px] md:mx-auto"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-16 object-contain"
            />
          </div>
        ))}
      </div>
      <div className="mt-8">
        <button className="px-4 py-2  rounded-lg  flex items-center gap-3 hover:shadow-lg cursor-pointer transition ease-in duration-300 md:ml-11">
        <FaArrowRightLong />
          View More
        </button>
      </div>
    </div>
  );
};

export default ClientGrid;
