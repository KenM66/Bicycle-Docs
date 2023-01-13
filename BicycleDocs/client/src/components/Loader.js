import bicycle from '../logos/bicycle-GIF.gif';


export default function Loader() {
    return (
      <div className='mt-5'>
        {/* <div className="spinner-border text-success mt-5" role="status" style={{width: '100px', height: '100px'}}> */}
        <div>
          <img src={bicycle} alt="loading..."/>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  