import React from 'react'

const ActionButton = ({data, id, status, updateStatus}) => {
  switch (status) {
    case "request":
      return (
        <button
          className="px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
          onClick={() => updateStatus(data, id, {status: "booked"})}
        >
          Book
        </button>
      )
    case "cancel":
      return (
        <button
          className="px-3 py-1.5 text-sm text-white duration-150 bg-red-400 rounded-lg hover:bg-red-500 active:shadow-lg"
          onClick={() => updateStatus(data, id, {status: "canceled"})}
        >
          Cancel
        </button>
      )
    default:
      return ""
  }
}

export default ActionButton