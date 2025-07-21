import './Purpose.css'
import "@fontsource/lora";

export default function Purpose() {
  return (
    <div className="purpose-page" style={{ paddingTop: '20vh' }}>
      <div>
        <h1 style={{ textAlign: 'center', fontFamily: 'Lora', color: '#ffdaed'}}>
          OUR PURPOSE
        </h1>

        <p style={{ textAlign: 'center', fontFamily: 'Lora', color: '#ffdaed',fontSize: '20px', width: '75vw', margin: '0 auto'}}>
          Minds Always Matter is a youth-led nonprofit founded by passionate highschool 
          students who are dedicated to making a positive impact. Our goal is to create a 
          safe, inclusive space where individuals feel supported, heard, and never alone. 
          We aim to spark meaningful conversation, foster new connections, and encourage 
          openness among individuals.  Minds Always Matter strives to build an open community 
          for everyone, because every mind truly does matter.
        </p>
      </div>
    </div>
  )
}
