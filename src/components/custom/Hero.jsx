import React from 'react'
import { Button } from '../ui/button'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-50 gap-9'>
        <h1 className='font-extrabold text-[60px] text-center mt-16'>
            <span className='text-[#f56551]'>Discover your next Adventure with AI :</span> Persinalised Itineraries at Your Fingertips
        </h1>
        <p className='text-xl text-gray-500 text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci molestiae impedit incidunt a cum, minima repellendus possimus quo repudiandae pariatur, atque blanditiis tempore explicabo. Officiis aliquid asperiores minima praesentium cum.
        </p>
        <Button>
            Get started, It's free
        </Button>
    </div>
  )
}

export default Hero
