import { useState } from 'react';
import './Events_Page.css'
import "@fontsource/lora";
import Lemonade from '../assets/Lemonade.jpg'
import Lemonade_21 from '../assets/Lemonade_2.1.png'


export default function App() {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div style={{ 
        paddingTop: '20vh',
        backgroundColor: '#5d7559',
        minHeight: '100vh',
        fontFamily: 'Lora, serif'
      }}>
        <div>
          <h1 style={{ 
            textAlign: 'center', 
            fontFamily: 'Lora', 
            color: '#ffdaed', 
            marginBottom: '-10px', 
            marginTop: '10px'
          }}>
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
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{
                      display: 'inline-block',
                      textAlign: 'center',
                      fontFamily: 'Lora',
                      color: '#ffdaed',
                      fontSize: '20px',
                      fontStyle: 'italic',
                      textDecoration: 'none',
                      marginBottom: '10px',
                      marginTop: '20px',
                      position: 'relative',
                      alignSelf: 'center'
                  }}
              >
                  Click Here!
                  <span
                      style={{
                          position: 'absolute',
                          bottom: '-2px',
                          left: '0',
                          width: isHovered ? '100%' : '0%',
                          height: '2px',
                          backgroundColor: '#ffdaed',
                          transition: 'width 0.3s ease-in-out',
                          transformOrigin: 'left'
                      }}
                  />
              </a>
  
              <div
                  style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '5vw',
                      flexWrap: 'wrap',
                  }}
              >
                  <img
                      src={Lemonade}
                      className="logo"
                      alt="Lemonade Front"
                      style={{ 
                        height: 'auto', 
                        width:'24vw',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                      }}
                  />
  
                  <img
                      src={Lemonade_21}
                      className="logo"
                      alt="Lemonade Back"
                      style={{ 
                        height: 'auto', 
                        width:'24vw',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                      }}
                  />
              </div>
          </div>
        </div>
      </div>
    )
  }
  