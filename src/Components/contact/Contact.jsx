import { Link } from 'react-router-dom';
import './contact.scss';

const Contact = () => {




  return (
    <div className='contact'>
      <div className="textcontainer">
        <h2>Let's Work<br /> Togather</h2>
        <div className="conlinks">
          <div className="item">
            <h2>Email</h2>
            <span><Link to="mailto:shahzaibafridi3377@gmail.com">Shahzaibafridi3377@gmail.com</Link></span>
          </div>
          <div className="item">
            <h2>Phone</h2>
            <span><Link to="tel:+923480276224">+923480276224</Link></span>
          </div>
          <div className="item">
            <h2>Address</h2>
            <span>A/56 Block 6 P.E.C.H.S Karachi</span>
          </div>
        </div>
      </div>


      <div className="formcontainer">
        <form action="submit">
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email' />
          <textarea rows={8} placeholder='Message' />
        </form>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Contact
