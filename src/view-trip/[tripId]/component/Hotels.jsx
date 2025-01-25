import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Hotels({ trip }) {
    return (
        <div>
            <h2 className='font-bold mt-5 text-xl'>Hotels Recommendation</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {trip?.tripData?.hotels?.map((hotel, index) => (
                    <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotel?.hotelName + ", " + hotel?.hotelAddress} target='_blank' key={index}>
                        <div className='hover:scale-105 transition-all cursor-pointer'>
                            <img src="/placeholder.jpg" alt="" className='rounded-xl' />
                            <div className='my-2 flex flex-col  gap-2'>
                                <h2 className='font-medium'>{hotel?.hotelName}</h2>
                                <h2 className='text-xs text-gray-500'>📍{hotel?.hotelAddress}</h2>
                                <h2 className='text-sm'>💰 {hotel?.price}</h2>
                                <h2 className='text-sm'>⭐ {hotel?.rating}</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
Hotels.propTypes = {
    trip: PropTypes.shape({
        tripData: PropTypes.shape({
            hotels: PropTypes.arrayOf(
                PropTypes.shape({
                    hotelName: PropTypes.string,
                    hotelAddress: PropTypes.string,
                    price: PropTypes.number,
                    rating: PropTypes.number
                })
            )
        })
    })
}

export default Hotels
