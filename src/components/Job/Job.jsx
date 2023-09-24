import { GoLocation } from 'react-icons/Go';
import { FiDollarSign } from 'react-icons/Fi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Job = ({ feature }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary
  } = feature || {};
  return (
    <div className='border border-s-violet-200 pt-8 rounded-lg'>
      <div className="card card-compact bg-base-100 shadow-xl p-5">
        <div className='flex ml-4'>
        <figure>
          <img
            src={logo}
            alt={job_title}
          />
        </figure>
        </div>
        <div className="card-body text-left">
          <h2 className="card-title">{job_title}</h2>
          <p className='my-4'>{company_name}</p>
          <div>
            <button className="border rounded-md py-1 px-3 mr-4">{remote_or_onsite}</button>
            <button className="border rounded-md py-1 px-3">{job_type}</button>
          </div>
          <div className='flex items-center my-2'>
          <GoLocation></GoLocation> &nbsp;<span className='mr-4'>{location}</span>
            <FiDollarSign></FiDollarSign><span>{salary}</span>
          </div>
          <div className="card-actions">
            <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};


Job.propTypes = {
  feature: PropTypes.object
}
export default Job;
