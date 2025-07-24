import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/ui/button";

const rows = [
  { label: "A", count: 9 },
  { label: "B", count: 9 },
  { label: "C", count: 8 },
  { label: "D", count: 8 },
  { label: "E", count: 9 },
  { label: "F", count: 9 },
];

const timings = ["08:30 PM", "02:30 PM", "05:30 PM"];

const SeatLayout = () => {
  const navigate = useNavigate();
  const [selectedTiming, setSelectedTiming] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const { id, date } = useParams();

  const toggleSeat = (seatId) => {
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seatId)
        ? prevSeats.filter((s) => s !== seatId)
        : [...prevSeats, seatId]
    );
  };

  const isProceedDisabled = !selectedTiming || selectedSeats.length === 0;

  return (
    <div className="h-screen mt-20 bg-[#141015] text-white flex items-start justify-center font-[Montserrat,sans-serif] py-10">
      {/* Timings Panel */}
      <div className="bg-[rgba(60,20,40,0.3)] rounded-xl px-10 py-8 mr-16 min-w-[240px] shadow-[0_0_24px_#2c1026]">
        <div className="font-semibold text-lg mb-7">Available Timings</div>
        <ul className="list-none p-0 m-0">
          {timings.map((time) => (
            <li
              key={time}
              onClick={() => setSelectedTiming(time)}
              className={`my-4 flex items-center text-base cursor-pointer transition-colors duration-200 ${
                selectedTiming === time
                  ? "text-[#ff3e7f] font-bold"
                  : "text-white"
              }`}
            >
              <span
                className={`inline-block w-5 h-5 rounded-full mr-3 box-border border-2 ${
                  selectedTiming === time
                    ? "border-[#ff3e7f] bg-[#ff3e7f]"
                    : "border-[#ff3e7f]"
                }`}
              />
              {time}
            </li>
          ))}
        </ul>
      </div>

      {/* Seat Layout */}
      <div className="flex-1 max-w-[900px]">
        <div className="text-center mb-4 text-2xl font-bold">
          Select your seat
        </div>
        <div className="mx-auto mb-4 w-[70%] h-2 bg-gradient-to-r from-[#ff3e7f] to-[#b8005a] rounded opacity-60" />
        <div className="text-center text-[#aaa] text-sm mb-6">SCREEN SIDE</div>

        <div className="flex flex-col items-center gap-2">
          {rows.map((row) => (
            <div key={row.label} className="flex gap-3 mb-2">
              {Array.from({ length: row.count }).map((_, idx) => {
                const seatId = `${row.label}${idx + 1}`;
                const isSelected = selectedSeats.includes(seatId);

                return (
                  <button
                    key={seatId}
                    onClick={() => toggleSeat(seatId)}
                    className={`w-[38px] h-[34px] border rounded-md font-medium text-sm cursor-pointer transition-colors duration-200 ${
                      isSelected
                        ? "bg-[#ff3e7f] text-black border-[#ff3e7f]"
                        : "bg-transparent text-white border-[#ff3e7f] hover:bg-[#ff3e7f] hover:text-black"
                    }`}
                  >
                    {seatId}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        <div className="mt-10 text-[#ff3e7f] text-center text-base">
          <div>
            Movie ID: <b>{id}</b>
          </div>
          <div>
            Selected Time:{" "}
            <b className={`${selectedTiming ? "text-green-400" : ""}`}>
              {selectedTiming || "None"}
            </b>
          </div>
          <div>
            Selected Date:{" "}
            <b className={`${date ? "text-green-400" : ""}`}>
              {date || "None"}
            </b>
          </div>
          <div>
            Selected Seats:{" "}
            <b className={`${selectedSeats.length ? "text-green-400" : ""}`}>
              {selectedSeats.length ? selectedSeats.join(", ") : "None"}
            </b>
          </div>
        </div>

        <div className="flex items-center justify-center mt-1">
          <Button
            disabled={isProceedDisabled}
            onClick={() =>
              // stripe intregation
              navigate(`/movies/${id}/${date}/${selectedTiming}`)    
            }
            className={`bg-[#F84565] text-white cursor-pointer ${
              isProceedDisabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#F84565]/80"
            }`}
          >
            Buy tickets
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SeatLayout;
