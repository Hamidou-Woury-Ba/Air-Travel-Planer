import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { IoIosSend } from "react-icons/io";
import { GetPlaceDetails } from '@/service/GlobalApi';

/**
 * Information Section Component
 * @name InfoSection
 * @function InfoSection 
 * @param {object} trip - les données du voyage
 * @returns {JSX.Element} Information Section Component 
 */
function InfoSection({ trip }) {

  // useEffect(() => {
  //   trip && GetPlacePhotos()
  // }, [trip]) 

  // const GetPlacePhotos = async () => {
  //   const data = {
  //     textQuery: trip?.userSelection?.location?.label,
  //   }
  //   const result = await GetPlaceDetails(data).then((res) => (
  //     console.log(res.data)
  //   ))
  // }

  return (
    <div>
      <img src="/placeholder.jpg" alt="" className='h-[340px] w-full object-cover rounded-xl' />
      <div className='flex justify-between items-center'>
        <div className='my-5 flex flex-col gap-2'>
          <h2 className='font-bold text-2xl'>{trip?.userSelection?.location?.label}</h2>
          <div className='flex gap-5'>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>📅 {trip?.userSelection?.noOfDays} Days</h2>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 md:text-md'>💸 {trip?.userSelection?.budget} budget</h2>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 md:text-md'>🍷 No. of traveler : {trip?.userSelection?.traveler} peoples</h2>
          </div>
        </div>
        <Button>
          <IoIosSend />
        </Button>
      </div>
    </div>
  )
}

export default InfoSection
