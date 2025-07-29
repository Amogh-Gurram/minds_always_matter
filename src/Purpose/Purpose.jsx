import './Purpose.css'
import "@fontsource/lora";

export default function Purpose() {
  return (
    <div className="purpose-page" style={{ paddingTop: '20vh' }}>
      <div>
        <h1 style={{ textAlign: 'center', fontFamily: 'Lora', color: '#ffdaed', fontWeight: 'bold'}}>
          OUR PURPOSE
        </h1>

        <p style={{ textAlign: 'center', fontFamily: 'Lora', color: '#ffdaed',fontSize: '20px', width: '75vw', margin: '0 auto', fontWeight: 'bold'}}>
          Minds Always Matter is a youth-led nonprofit that is dedicated to making a lasting impact 
          on the future of mental health for both teens and children. Our goal is to support their 
          mental well-being by creating and distributing thoughtful care kits filled with comfort, 
          encouragement, and essential resources. At the same time, we are committed to advancing 
          the future of mental health by donating to research efforts that seek better treatment 
          and deeper understanding. We strive to build a supportive, stigma-free community because 
          every young mind truly does matter.
        </p>
      </div>
    </div>
  )
}
