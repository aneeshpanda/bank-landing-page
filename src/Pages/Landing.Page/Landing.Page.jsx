import Navbar from "../../Components/Navbar.Component/Navbar.Component";
import Family from "../../assets/Family.svg";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row items-center justify-center">
        <div className="lg:column-6 p-20 mt-6">
          <h1 className="text-6xl font-black ">Chase Your Dreams With Us.</h1>
          <p className="text-xl text-gray-600 my-6">
            The harder you work for something, the greater you'll feel when you
            achieve it.
          </p>
          <div className="flex flex-row items-center space-x-2">
            <button className="bg-[#ED017F] hover:bg-[#F13499] text-white font-bold py-2 px-4 rounded-md border-[#ED017F] border-2">
              Get Started
            </button>
            <button className=" hover:bg-[#F13499] font-bold hover:text-white py-2 px-4 border-[#ED017F] border-2 rounded-md">
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:column-6 lg:block hidden lg:mt-44">
          <img src={Family} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
