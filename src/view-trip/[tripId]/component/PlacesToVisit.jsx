import React from 'react';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {
  return (
    <div>
      <h2 className='font-bold text-lg'>Places to visit</h2>
      <div>
        {trip?.tripData?.itinerary && Object.entries(trip.tripData.itinerary).map(([day, schedule], index) => (
          <div className='mt-5'>
            <h2 className='font-medium text-lg'>{day}</h2>
            <div className='grid md:grid-cols-2 gap-2'>
              {Object.entries(schedule).map(([timeOfDay, details], index) => (
                <div key={index}>
                  <h2 className='font-medium text-sm text-orange-600'>{details.time}</h2>
                  <PlaceCardItem place={details} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
