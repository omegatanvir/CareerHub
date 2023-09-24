import { useEffect, useState } from "react";
import Job from "../job/Job";

const FeaturedList = () => {
  const [featre, setFeature] = useState([]);

  //not best way to  see more when i will learn pagination than i will use pagination

  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setFeature(data));
  }, []);

  return (
    <div className="my-20">
      <h2 className="text-5xl font-extrabold mb-4">
        Featured Jobs: {featre.length}
      </h2>
      <p className="text-xl font-medium">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-12 gap-12 justify-between ">
        {featre?.slice(0, dataLength).map((featre) => (
          <Job key={featre.id} feature={featre}></Job>
        ))}
      </div>

      <div className={dataLength === featre.length && 'hidden'}>
        <button onClick={()=> setDataLength(featre.length)} className="btn btn-primary mt-5">Show All Data</button>
      </div>
    </div>
  );
};

export default FeaturedList;
