import './About_Us.css'
import "@fontsource/lora";
import Anshu_Image from '../assets/Anshu_Image.jpg'
import Divya_Image from '../assets/Divya_Image.jpg'
import Kayla_Image from '../assets/Kayla_Image.jpg'
import Kaylin_Image from '../assets/Kaylin_Image.jpg'
import Melody_Image from '../assets/Melody_Image.jpg'


export default function App() {
  return (
    <div style={{ paddingTop: '20vh', backgroundColor: '#5d7559'}}>
      <div>
        <h1 style={{ textAlign: 'center', fontFamily: 'Lora', color: '#ffdaed', marginBottom: '-10px', marginTop: '10px'}}>
          ABOUT US
        </h1>
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '0px',
            }}
        >
            <p 
                style={{
                    textAlign: 'left',
                    fontFamily: 'Lora',
                    color: '#ffdaed',
                    marginBottom: '-20px',
                    marginLeft:'22px',
                    fontSize: '30px',
                    fontWeight: 'bolder'
                }}
            > 
                President
            </p>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '0px'
                }}
            >
                <img
                    src={Anshu_Image}
                    className="logo"
                    alt="Anshu Image"
                    style={{ height: 'auto', width:'20vw' }} // Ensure the image scales properly
                />

                <p style={{ textAlign: 'center', fontFamily: 'Lora', color: '#ffdaed', fontSize: '20px', width: '75vw', margin: '0 auto'}}>
                    Anshu Gurram, one of the co-founders and the president of Minds 
                    Always Matter, is a rising sophomore in high school. She helped 
                    create this organization because she wanted to educate people 
                    about teen mental health in a fun, interactive, and meaningful 
                    way. She likes singing and reading in her freetime, and she believes 
                    that her purpose in life is to truly make a difference in a kind and 
                    caring way.
                </p>
            </div>

            <p 
                style={{
                    textAlign: 'left',
                    fontFamily: 'Lora',
                    color: '#ffdaed',
                    marginBottom: '-20px',
                    marginLeft:'22px',
                    fontSize: '30px',
                    fontWeight: 'bolder'
                }}
            > 
                Vice President 
            </p>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '0px'
                }}
            >
                <img
                    src={Divya_Image}
                    className="logo"
                    alt="Divya Image"
                    style={{ height: 'auto', width:'20vw' }} // Ensure the image scales properly
                />

                <p style={{ textAlign: 'center', fontFamily: 'Lora', color: '#ffdaed', fontSize: '20px', width: '75vw', margin: '0 auto'}}>
                    Divya Hariharan, one of the co-founders and the vice president of Minds 
                    Always Matter, is a rising sophomore in high school. She helped create 
                    this organization because she firmly believes that mental health support 
                    is essential, yet too often overlooked. To address this, she is dedicated 
                    to building a community to raise awareness and provide meaningful support 
                    to those who need it. In her freetime, she loves going on long walks, watching 
                    TV, and traveling.
                </p>
            </div>

            <p 
                style={{
                    textAlign: 'left',
                    fontFamily: 'Lora',
                    color: '#ffdaed',
                    marginBottom: '-20px',
                    marginLeft:'22px',
                    fontSize: '30px',
                    fontWeight: 'bolder'
                }}
            > 
                Social Media Manager 
            </p>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '0px'
                }}
            >
                <img
                    src={Melody_Image}
                    className="logo"
                    alt="Melody Image"
                    style={{ height: 'auto', width:'20vw' }} // Ensure the image scales properly
                />

                <p style={{ textAlign: 'center', fontFamily: 'Lora', color: '#ffdaed', fontSize: '20px', width: '75vw', margin: '0 auto'}}>
                    Tan Sin Khine Khant, one of the co-founders and the social media director of 
                    Minds Always Matter, is going into her sophomore year of high school. She helped 
                    create this organization because she wanted to spread awareness about mental health 
                    and end the stigma around it. She enjoys shopping and socializing in her free time, 
                    and wants to dedicate her time to interacting and helping people in an empowering way.
                </p>
            </div>

            <p 
                style={{
                    textAlign: 'left',
                    fontFamily: 'Lora',
                    color: '#ffdaed',
                    marginBottom: '-20px',
                    marginLeft:'22px',
                    fontSize: '30px',
                    fontWeight: 'bolder'
                }}
            > 
                Logistics Director 
            </p>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '0px'
                }}
            >
                <img
                    src={Kayla_Image}
                    className="logo"
                    alt="Kayla Image"
                    style={{ height: 'auto', width:'20vw' }} // Ensure the image scales properly
                />

                <p style={{ textAlign: 'center', fontFamily: 'Lora', color: '#ffdaed', fontSize: '20px', width: '75vw', margin: '0 auto'}}>
                    Kayla Teo, a co-founder and the logistics director of Minds Always Matter, 
                    is going to be a sophomore in high school next year. She helped create this 
                    organization because she believes that everyone should be in a community where 
                    they can speak about their mental health while feeling free from judgment and 
                    ridicule. In her free time, she loves listening to music, singing, and spending 
                    quality time with her friends and family. 
                </p>
            </div>

            <p 
                style={{
                    textAlign: 'left',
                    fontFamily: 'Lora',
                    color: '#ffdaed',
                    marginBottom: '-20px',
                    marginLeft:'22px',
                    fontSize: '30px',
                    fontWeight: 'bolder'
                }}
            > 
                Treasurer 
            </p>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '0px'
                }}
            >
                <img
                    src={Kaylin_Image}
                    className="logo"
                    alt="Kaylin Image"
                    style={{ height: 'auto', width:'20vw' }} // Ensure the image scales properly
                />

                <p style={{ textAlign: 'center', fontFamily: 'Lora', color: '#ffdaed', fontSize: '20px', width: '75vw', margin: '0 auto'}}>
                    Kaylin Choi, one of the co-founders and treasurer of Minds Always Matter, 
                    is going into her sophomore year of high school next year. She helped create 
                    this organization because she believes that mental health is an important topic 
                    that needs to be discussed for the overall well-being of everyone. She enjoys 
                    singing, working out, and hanging out with friends.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}
