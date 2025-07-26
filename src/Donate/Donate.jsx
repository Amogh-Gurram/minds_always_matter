import './Donate.css'
import "@fontsource/lora";
import '@fontsource/alice';
import InstagramIcon from '../assets/instagram_icon.png';
import GmailIcon from '../assets/gmail_icon.jpg';
import ZelleIcon from '../assets/zelle_icon.png';
import PendingIcon from '../assets/pending_icon.png';

const boxStyle = {
    backgroundColor: '#2b4323',
    padding: '20px',
    width: '180px',
    textAlign: 'center',
    borderRadius: '8px',
    textDecoration: 'none',
    color: '#ffdaed',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    transition: 'transform 0.2s',
  };
  
  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '6px',
  };
  
  const textStyle = {
    fontFamily: 'Alice',
    fontSize: '16px',
    marginTop: '10px',
  };
  

export default function App() {
  return (
    <div style={{ paddingTop: '20vh' }}>
      <div>
        <h1 style={{ textAlign: 'center', fontFamily: 'Alice', color: '#ffdaed', marginBottom: '20px', marginTop: '10px'}}>
            Donate Today To Help Us Make a Difference
        </h1>

        <p style={{ textAlign: 'center', fontFamily: 'Lora', color: '#ffdaed',fontSize: '20px', width: '75vw', margin: '0 auto'}}>
            At Minds Always Matter, donations are a crucial part of running this program. 
            From hygiene kits and essential care items to stress relief toys, we will use 
            every dollar we receive to supply and support individuals who truly need it. 
            Many of these individuals face overwhelming challenges that make it hard to 
            care for themselves, so by joining us today, we can collectively create a more 
            compassionate world, one package at time.
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '30px',
          marginTop: '40px'
        }}>
          {/* Instagram */}
          <a href="https://www.instagram.com/mindsalwaysmatter_/" target="_blank" rel="noopener noreferrer"
             style={boxStyle}>
            <img src={InstagramIcon} alt="Instagram" style={imageStyle} />
            <p style={textStyle}>mindsalwaysmatter_</p>
          </a>

          {/* Gmail */}
          <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer" 
             style={boxStyle}>
            <img src={GmailIcon} alt="Gmail" style={imageStyle} />
            <p style={textStyle}>mindsalwaysmatter
            .foundation@gmail.com</p>
          </a>

          {/* Zelle */}
          <a href="https://www.zellepay.com/" target="_blank" rel="noopener noreferrer" style={boxStyle}>
            <img src={ZelleIcon} alt="Zelle" style={imageStyle} />
            <p style={textStyle}>Zelle</p>
          </a>
 
          <a href="#" style={boxStyle}>
            <img src={PendingIcon} alt="Pending" style={imageStyle} />
    <p style={textStyle}>Pending</p> 
          </a>
        </div>
      </div>
    </div>
  )
}
