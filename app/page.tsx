import HeroCarousel from '@/Components/HeroCarousel'
import SearchBar from '@/Components/SearchBar'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <>
      <section className='px-6 py-0 md:px-20'>
        <div className='flex max-xl:flex-col gap-16'>
          <div className='flex flex-col justify-center'>
            <p className='small-text'>
              Smart Shopping Starts Here:
              <Image
                src={"/assets/icons/arrow-right.svg"}
                alt='arrow-right'
                width={16}
                height={16}
              />
            </p>
            <h1 className='head-text'>
            Transform Your Shopping Experience with
              <span className='text-primary'> PriceWatch</span>
            </h1>
            <p className='mt-6'>
            Unlock powerful, self-service product and growth analytics to boost conversions, engage effectively, and retain effortlessly.
            </p>
            <SearchBar/>
          </div>
          <HeroCarousel/>
        </div>
      </section>

      <section className='trending-section'>
        <h2 className='section-text'>Trending</h2>
        <div className='flex flex-wrap gap-x-8 gap-y-16'>

        </div>
      </section>
    </>
  )
}

export default Home