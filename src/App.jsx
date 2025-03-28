import React from 'react'
import { 
  Services, 
  Announcement, 
  Portfolio,
  Contact_Us, 
  Footer, 
  Hero, 
  Navbar, 
  Partners,
  Stats, 
  Testimonials 
} from './components'
import styles from './style'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>      
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Announcement/>
          <Services/>
          <Portfolio/>
          <Testimonials/>
          <Partners/>
          <Contact_Us/>
          <Footer/>     
        </div>
      </div>
    </div>
  )
}

export default App