import banner from '../../assets/user.png'
const Banner = () => {
  return (
    <div>
        <div className="hero bg-[#8b82ff0d]">
          <div className="hero-content flex-col text-left lg:flex-row-reverse">
            <img
              src={banner}
              className="max-w-xl"
            />
            <div>
              <h1 className="text-7xl font-bold">One Step
              <br /> Closer To Your 
              <br /> <span className='text-[#7E90FE]
              
              '>Dream Job</span></h1>
              <p className="py-6">
              Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Banner;
