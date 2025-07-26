import './Events_Page.css'
import "@fontsource/lora";
import Lemonade from '../assets/Lemonade.jpg'
import Lemonade_2 from '../assets/Lemonade_2.jpg'


export default function App() {
  return (
    <div style={{ paddingTop: '20vh' }}>
      <div>
        <h1 style={{ textAlign: 'center', fontFamily: 'Lora', color: '#ffdaed', marginBottom: '-10px', marginTop: '10px'}}>
          EVENTS
        </h1>
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '0px',
            }}
        >
            <a
                href="https://www.wikipedia.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'block',
                    textAlign: 'center',
                    fontFamily: 'Lora',
                    color: '#ffdaed',
                    fontSize: '20px',
                    textDecoration: 'italic',
                    marginBottom: '10px',
                    marginTop: '20px',
                }}
            >
                View Pictures of Past Events (Tell me what to write here unless you want the url & if you want it underlined)
            </a>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',      // 👈 center the image row
                    alignItems: 'center',
                    gap: '5vw',                    // 👈 add space between images
                    flexWrap: 'wrap',              // 👈 optional: lets them wrap on small screens
                }}
            >
                <img
                    src={Lemonade}
                    className="logo"
                    alt="Lemonade Front"
                    style={{ height: 'auto', width:'24vw' }} // Ensure the image scales properly
                />

                <img
                    src={Lemonade_2}
                    className="logo"
                    alt="Lemonade Back"
                    style={{ height: 'auto', width:'24vw' }} // Ensure the image scales properly
                />
            </div>
        </div>
      </div>
    </div>
  )
}
