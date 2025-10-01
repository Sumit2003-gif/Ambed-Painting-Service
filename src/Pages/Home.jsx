import React from 'react'
import HomeHero from '../Components/HomeHero'
import FeaturesSection from '../Components/FeatureSection'
import Introduction from '../Components/Introduction'
import FeaturedProjects from '../Components/ProjectData'
import HomeFaq from '../Components/HomeFaq'
import HomeService from '../Components/HomeService'
import HomeProcess from '../Components/HomeProcess'
import HomeLatest from '../Components/HomeLatest'
const Home = () => {
  return (
    <div className='overflow-hidden'>
      <HomeHero/>
      <section>
        <FeaturesSection/>
      </section>
      <section>
        <Introduction/>
      </section>
      <section>
        <FeaturedProjects/>
      </section>
      <section>
        <HomeFaq/>
      </section>
      <section>
        <HomeService/>
      </section>
      <section>
        <HomeProcess/>
      </section>
      <section>
        <HomeLatest/>
      </section>
    </div>
  )
}

export default Home
