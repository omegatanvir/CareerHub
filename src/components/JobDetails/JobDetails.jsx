import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    console.log(jobs, id)
    return (
        <div>
            <h2>Job Details</h2>
        </div>
    );
};

export default JobDetails;