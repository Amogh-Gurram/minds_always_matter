import './About_Us.css'
import "@fontsource/lora";
import { useState } from 'react';
import Anshu_Image from '../assets/Anshu_Image.jpg'
import Divya_Image from '../assets/Divya_Image.jpg'
import Kayla_Image from '../assets/Kayla_Image.jpg'
import Kaylin_Image from '../assets/Kaylin_Image.jpg'


const teamMembers = [
    {
      name: 'Anshu Gurram',
      title: 'President: Anshu Gurram',
      description:
        'Anshu Gurram, one of the co-founders and the president of Minds Always Matter, is a rising sophomore in high school. She helped create this organization because she wanted to educate people about teen mental health in a fun, interactive, and meaningful way. She likes singing and reading in her freetime, and she believes that her purpose in life is to truly make a difference in a kind and caring way.',
      image: Anshu_Image,
    },
    {
      name: 'Divya Hariharan',
      title: 'Vice President: Divya Hariharan',
      description:
        'Divya Hariharan, one of the co-founders and the vice president of Minds Always Matter, is a rising sophomore in high school. She helped create this organization because she firmly believes that mental health support is essential, yet too often overlooked. To address this, she is dedicated to building a community to raise awareness and provide meaningful support to those who need it. In her freetime, she loves going on long walks, watching TV, and traveling.',
      image: Divya_Image,
    },
    {
      name: 'Kayla Teo',
      title: 'Logistics Director: Kayla Teo',
      description:
        'Kayla Teo, a co-founder and the logistics director of Minds Always Matter, is going to be a sophomore in high school next year. She helped create this organization because she believes that everyone should be in a community where they can speak about their mental health while feeling free from judgment and ridicule. In her free time, she loves listening to music, singing, and spending quality time with her friends and family.',
      image: Kayla_Image,
    },
    {
      name: 'Kaylin Choi',
      title: 'Treasurer: Kaylin Choi',
      description:
        'Kaylin Choi, one of the co-founders and treasurer of Minds Always Matter, is going into her sophomore year of high school next year. She helped create this organization because she believes that mental health is an important topic that needs to be discussed for the overall well-being of everyone. She enjoys singing, working out, and hanging out with friends.',
      image: Kaylin_Image,
    },
  ];
  
  export default function App() {
    const [index, setIndex] = useState(0);
  
    const nextSlide = () => setIndex((index + 1) % teamMembers.length);
    const prevSlide = () => setIndex((index - 1 + teamMembers.length) % teamMembers.length);
  
    return (
      <div style={{
        height: '100vh',
        backgroundColor: '#5d7559',
        margin: 0,
        padding: 0,
        fontFamily: 'Lora, serif',
        overflow: 'hidden'
      }}>
        <div style={{
          paddingTop: '18vh',
          overflow: 'hidden',
          width: '100vw',
          height: '100vh',
          position: 'relative',
          backgroundColor: '#5d7559'
        }}>
          <h1 style={{
            textAlign: 'center',
            fontFamily: 'Lora, serif',
            color: '#ffdaed',
            marginBottom: '-10px',
            fontSize: '48px',
            fontWeight: 'bold',
          }}>
            ABOUT US
          </h1>
  
          <div style={{
            display: 'flex',
            transition: 'transform 0.6s ease-in-out',
            height: '60vh',
            transform: `translateX(-${index * 100}vw)`,
            width: `${100 * teamMembers.length}vw`
          }}>
            {teamMembers.map((member, i) => (
              <div key={i} style={{
                width: '100vw',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: '0 5vw',
                boxSizing: 'border-box'
              }}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  style={{
                    width: '20vw',
                    height: 'auto',
                    borderRadius: '10px',
                    maxHeight: '400px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  maxWidth: '60vw',
                  color: '#ffdaed',
                  fontWeight: 'bold',
                  fontFamily: 'Lora, serif'
                }}>
                  <h2 style={{
                    fontSize: '30px',
                    marginBottom: '20px',
                    lineHeight: '1.2'
                  }}>
                    {member.title}
                  </h2>
                  <p style={{
                    fontSize: '20px',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
  
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
            gap: '40px'
          }}>
            <button 
              onClick={prevSlide}
              style={{
                backgroundColor: '#ffdaed',
                color: '#5d7559',
                fontSize: '24px',
                padding: '15px 25px',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                minWidth: '60px'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#ffd0eb'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#ffdaed'}
            >
              ←
            </button>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              {teamMembers.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: i === index ? '#ffdaed' : 'rgba(255, 218, 237, 0.3)',
                    transition: 'background-color 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              style={{
                backgroundColor: '#ffdaed',
                color: '#5d7559',
                fontSize: '24px',
                padding: '15px 25px',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                minWidth: '60px'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#ffd0eb'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#ffdaed'}
            >
              →
            </button>
          </div>
        </div>
      </div>
    );
  }