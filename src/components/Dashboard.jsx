import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CountingCards from "./CountingCards";
import ActionButton from "./ActionButton";

const Dashboard = ({ accessCode, setAccessCode }) => {
  const [data, setData] = useState();
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
        setData(response.data.data);
        console.log(response.data.data);
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

  const parseDate = (date) => {
    let options = {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  const handleUpdateStatus = (data, id, params) => {
    axios
      .put(`/booking/${id}`, params, {
        headers: {
          "x-auth-token": accessCode,
          "content-type": "application/json",
        },
      })
      .then((response) => {
        debugger;
        let newData = [...data];
        let updatedBooking = newData.find((item) => item.booking._id === id);
        updatedBooking.booking.status = params.status;
        setData(newData);
      })
      .catch((err) => {
        if (err.response?.data?.status === 401) {
          sessionStorage.setItem("accessCode", "");
          setAccessCode("");
        }
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 w-full">
      {loading ? (
        <div>
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
          <CountingCards data={data} />
          <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                <tr>
                  <th className="py-3 px-6">SN</th>
                  <th className="py-3 px-6">Name</th>
                  <th className="py-3 px-6">Email</th>
                  <th className="py-3 px-6">Start Date</th>
                  <th className="py-3 px-6">End Date</th>
                  <th className="py-3 px-6">Statue</th>
                  <th className="py-3 px-6">Action</th>
                  <th className="py-3 px-6">View Details</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y">
                {data.map((item, idx) => (
                  <tr key={item.booking._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link to={`/booking/${item.booking._id}`}>{idx + 1}</Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.booking.fullName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.booking.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {parseDate(item.booking.startDate)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {parseDate(item.booking.endDate)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.booking.status}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <ActionButton
                        data={data}
                        id={item.booking._id}
                        status={item.booking.status}
                        updateStatus={handleUpdateStatus}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link to={`/booking/${item.booking._id}`}>
                        <button class="bg-transparent hover:bg-blue text-blue-dark font-semibold  py-2 px-4 border border-blue  rounded">
                          View details
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default Dashboard;
