import PropTypes from "prop-types";

const JobChatagory = ({ chategory }) => {
  const { logo, category_name, availability } = chategory;
  return (
    <div>
      <div className="card text-left bg-base-100 shadow-xl border border-slate-300 p-4">
        <figure>
          <img className="flex"
            src={logo}
            alt={category_name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category_name}</h2>
          <p>{availability}</p>
        </div>
      </div>
    </div>
  );
};

JobChatagory.propTypes = {
  chategory: PropTypes.object,
};
export default JobChatagory;
