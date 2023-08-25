import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookingDetail = ({ accessCode, setAccessCode }) => {
  const [data, setData] = useState();
  const bookingId = useParams().id;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/booking", {
        headers: {
          "x-auth-token": accessCode,
          "content-type": "application/json",
        },
      })
      .then((response) => {
        let requiredData = response.data.data.find(
          (item) => item.booking._id === bookingId
        );
        setData(requiredData);
        console.log(requiredData);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response?.data?.status === 401) {
          sessionStorage.setItem("accessCode", "");
          setAccessCode("");
          setLoading(false);
        }
      });
  }, []);

  return (
    <div className="p-8">
      {loading ? (
        <div className="w-[500px]">
          <div className="border shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-700 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="border shadow rounded-md p-4 my-3 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-700 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="border shadow rounded-md p-4 my-3 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-700 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="border shadow rounded-md p-4 my-3 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-700 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="border shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-700 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">Booking Detail</h2>
          <div>
            <a
              href={data.hotel.url}
              class="mb-4 px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
              target="_blank"
            >
              Visit Site
            </a>
          </div>
          <div className="grid gap-4 grid-cols-2">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-xl font-semibold mb-2">Hotel Information</h3>
              <p className="mb-4">Hotel Name: {data.hotel.name}</p>
              <p className="mb-4">Description: {data.hotel.about}</p>
              <p className="mb-4">Price: {data.hotel.price}</p>
              <p className="mb-4">Rate: {data.hotel.rate}</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-xl font-semibold mb-2">
                Booking Information
              </h3>
              <p className="mb-4">Full Name: {data.booking.fullName}</p>
              <p className="mb-4">Email: {data.booking.email}</p>
              <p className="mb-4">Contact: {data.booking.contact}</p>
              <p className="mb-4">Status: {data.booking.status}</p>
              <p className="mb-4">
                Is Expired: {data.booking.isExpired ? "Yes" : "No"}
              </p>
              <p className="mb-4">Room Type: {data.booking.roomType}</p>
              <p className="mb-4">Payment: {data.booking.payment}</p>
              <p className="mb-4">
                Payment Method: {data.booking.paymentMethod}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Gallery</h3>
            <div className="grid gap-4 grid-cols-3">
              {data.hotel.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index}`}
                  className="w-full h-auto"
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BookingDetail;
