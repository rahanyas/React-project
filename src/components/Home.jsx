import HomeImg from '../assets/progbiz-img/img-1.png'

const Home = () => {
  return (
    <div className='border p-2'>

      <div className='border p-4 mb-2'>
        <div className='sansFont border-blue-400 border'>
         <h1 className='text-[50px] md:text-[64px] capitalize '>your trusted partner in</h1>
         <h1 className='text-[50px] md:text-[64px] capitalize '>cooling solution</h1>
         <p className='text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum velit, a rem quo corrupti ad cum nesciunt vel veniam <br /> esse molestias voluptas aliquam tempore culpa. Quasi quae magnam eaque odio?</p>
        </div>

        <div className='m-4 border'>
          <button>lets talk</button>
          <button>explore our products</button>
        </div>

      </div>

      <div className='border'>
         <img src={HomeImg} alt="" />
      </div>

    </div>
  )
};

export default Home