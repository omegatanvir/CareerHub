import { useEffect, useState } from "react";
import JobChatagory from "../JobChatagory/JobChatagory";


const ChatagoryList = () => {
    const [chategory, setChategory] = useState([]);

    useEffect(()=> {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setChategory(data))
    },[])
    return (
        <div className="my-20">
            <h2 className="text-5xl font-extrabold mb-4">Job Category List</h2>
            <p className="text-xl font-medium mb-20">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
                {
                    chategory.map(chategory => <JobChatagory key={chategory.id} chategory={chategory}></JobChatagory>)
                }
            </div>
        </div>
    );
};

export default ChatagoryList;