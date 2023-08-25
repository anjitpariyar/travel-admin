import React from 'react'

const CountingCards = ({data}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-blue-500 p-4 rounded-lg text-white">
        <h2 className="text-2xl font-bold mb-2">Request</h2>
        <h3 className="text-lg">{data.filter((item) => item.booking.status === 'request').length}</h3>
      </div>
      <div className="bg-green-500 p-4 rounded-lg text-white">
        <h2 className="text-2xl font-bold mb-2">Booked</h2>
        <h3 className="text-lg">{data.filter((item) => item.booking.status === 'booked').length}</h3>
      </div>
      <div className="bg-yellow-500 p-4 rounded-lg text-white">
        <h2 className="text-2xl font-bold mb-2">Cancel</h2>
        <h3 className="text-lg">{data.filter((item) => item.booking.status === 'cancel').length}</h3>
      </div>
      <div className="bg-red-500 p-4 rounded-lg text-white">
        <h2 className="text-2xl font-bold mb-2">Canceled</h2>
        <h3 className="text-lg">{data.filter((item) => item.booking.status === 'canceled').length}</h3>
      </div>
    </div>
  )
}

export default CountingCards