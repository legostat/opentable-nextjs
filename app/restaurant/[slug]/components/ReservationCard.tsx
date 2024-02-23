"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { partySize as partySizes, times } from "../../../../data";

import "react-datepicker/dist/react-datepicker.css";
import { useAvailabilities } from "../../../../hooks/useAvailabilities";
import {
  Time,
  convertToDisplayTime,
} from "../../../../utils/convertToDisplayTime";
import { CircularProgress } from "@mui/material";
import Link from "next/link";

export default function ReservationCard({
  openTime,
  closeTime,
  slug,
}: {
  openTime: string;
  closeTime: string;
  slug: string;
}) {
  const { data, loading, error, fetchAvailabilities } = useAvailabilities();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState(openTime);
  const [partySize, setPartySize] = useState("2");
  const [day, setDay] = useState(new Date().toISOString().split("T")[0]);

  const handleChangeDate = (date: Date | null): void => {
    if (date) {
      setDay(date.toISOString().split("T")[0]);
      return setSelectedDate(date);
    }
    return setSelectedDate(null);
  };

  const handleFindTimeClick = () => {
    fetchAvailabilities({
      slug,
      day,
      time,
      partySize,
    });
  };

  const filterTimeByRestaurantOpenWindow = () => {
    let timesWithinWindow: typeof times = [];
    let isInWindow = false;
    times.forEach((time) => {
      if (time.time === openTime) {
        isInWindow = true;
      }
      if (isInWindow) {
        timesWithinWindow = timesWithinWindow.concat(time);
      }
      if (isInWindow && time.time === closeTime) {
        isInWindow = false;
      }
    });

    return timesWithinWindow;
  };

  return (
    <div className="sticky top-4 rounded bg-white p-3 shadow-lg">
      <h4 className="border-b pb-2 text-center text-lg font-bold">
        Make a reservation
      </h4>
      <label className="my-3 flex flex-col">
        <span>Party Size</span>
        <select
          className="bord er-b bg-transparent py-2 font-light"
          value={partySize}
          onChange={(e) => {
            setPartySize(e.target.value);
          }}
        >
          {partySizes.map((size) => (
            <option key={size.value} value={size.value}>
              {size.label}
            </option>
          ))}
        </select>
      </label>
      <div className="flex justify-between">
        <label className="flex w-[48%] flex-col">
          <span>Date</span>
          <DatePicker
            wrapperClassName="w-[48%]"
            dateFormat="MMMM d"
            selected={selectedDate}
            onChange={handleChangeDate}
            minDate={new Date()}
            className="w-24 border-b py-2 text-reg font-light"
          />
        </label>
        <label className="flex w-[48%] flex-col">
          <span>Time</span>
          <select
            className="border-b bg-transparent py-2 font-light"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          >
            {filterTimeByRestaurantOpenWindow().map(({ time, displayTime }) => (
              <option key={time} value={time}>
                {displayTime}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="mt-5">
        <button
          className="h-12 w-full rounded bg-red-600 px-4 font-bold text-white"
          onClick={handleFindTimeClick}
          disabled={loading}
        >
          {loading ? <CircularProgress color="inherit" /> : "Find a Time"}
        </button>
      </div>
      {data && data.length ? (
        <div className="mt-4">
          <p className="text-reg">Select a Time</p>
          <div className="mt-2 flex flex-wrap gap-3">
            {data.map((time) => {
              return time.available ? (
                <Link
                  href={`/reserve/${slug}?date=${day}T${time.time}&partySize=${partySize}`}
                  className="w-24 cursor-pointer rounded bg-red-600 p-2 text-center text-sm font-bold text-white"
                >
                  {convertToDisplayTime(time.time as Time)}
                </Link>
              ) : (
                <div className="w-24 bg-gray-300 p-2 text-white">
                  {convertToDisplayTime(time.time as Time)}
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
