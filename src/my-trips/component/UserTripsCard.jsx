import React from 'react'
import { Link } from 'react-router-dom'

function UserTripsCard({ trip }) {
    return (
        <Link to={'/view-trip/' + trip?.id} className='cursor-pointer'>
            <div className='hover:scale-105 transition-all'>
                <img src="/placeholder.jpg" alt="" className='object-cover rounded-xl h-[220px]' />
                <div>
                    <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label}</h2>
                    <h2 className='text-sm text-gray-500'>{trip?.userSelection?.noOfDays} Days trips with {trip?.userSelection?.budget}</h2>
                </div>
            </div>
        </Link>
    )
}

export default UserTripsCard
