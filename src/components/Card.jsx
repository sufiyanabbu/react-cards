
const Card = (props) => {
  return (
    <div className='card'>
        <div>
          <div className='top'>
            <img src={props.img} alt="" />
          <button>Save <i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>
</i></button>
        </div>
        <div className='center'>
          <h3>{props.company} <span>5 days ago</span></h3>
          <h2>{props.post}</h2>
          <div className='tag'>
            <h4>Part-Time</h4>
            <h4>{props.timing}</h4>
          </div>
        </div>
        </div>
        <div className='bottom'>
            <div className='bottom-left'>
              <h3>$120/hr</h3>
              <p>Mumbai,india</p>
            </div>
            <button>Apply Now</button>
          </div>
      </div>
  );
};

export default Card
