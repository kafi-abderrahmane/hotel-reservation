import React, { useState } from "react";

//next
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

//mui
import { ClickAwayListener, Fade } from "@mui/material";

const DropDownGuests = ({
  numberAdults,
  setnumberAdults,
  numberChildren,
  setNumberChildren,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className="relative">
        <div className="px-4 py-3 text-base font-jost text-white flex flex-row items-center justify-between min-h-[60px] gap-4">
          <span className="capitalize font-marcellus">Guests</span>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex flex-row items-center justify-center">
            <span className="text-sm">
              <span>
                {numberAdults || 1} {numberAdults > 1 ? "Adults" : "Adult"}
              </span>
              ,{" "}
              <span>
                {numberChildren || 0}{" "}
                {numberChildren > 1 ? "children" : "child"}
              </span>
            </span>
            <span className="text-base flex items-center justify-center text-golden">
              <KeyboardArrowDownIcon fontSize="inherit" />
            </span>
          </button>
        </div>

        <Fade
          className={`absolute z-[1001] top-[70px] w-[300px] px-7 py-6 bg-white shadow-lg border border-golden font-marcellus`}
          in={open}
          timeout={{ enter: 300, exit: 300 }}>
          <div>
            <div className="flex flex-col items-center justify-center w-full gap-4">
              <div className="w-full flex flex-row items-center justify-between">
                <span>Adults</span>
                <div className="flex flex-row items-center justify-center gap-4">
                  <button
                    type="button"
                    disabled={numberAdults > 1 ? false : true}
                    className={`text-lg font-bold ${
                      numberAdults > 1 ? " " : "opacity-30"
                    }`}
                    onClick={() => setnumberAdults((old) => old - 1)}>
                    -
                  </button>
                  <span className="font-jost min-w-[25px] text-center">
                    {numberAdults || 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => setnumberAdults((old) => old + 1)}
                    className="text-lg font-bold">
                    +
                  </button>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-between">
                <span>Children</span>
                <div className="flex flex-row items-center justify-center gap-4">
                  <button
                    type="button"
                    disabled={numberChildren > 0 ? false : true}
                    className={`text-lg font-bold ${
                      numberChildren > 0 ? " " : "opacity-30"
                    }`}
                    onClick={() => setNumberChildren((old) => old - 1)}>
                    -
                  </button>
                  <span className="font-jost min-w-[25px] text-center">
                    {numberChildren || 0}
                  </span>
                  <button
                    type="button"
                    onClick={() => setNumberChildren((old) => old + 1)}
                    className="text-lg font-bold">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </ClickAwayListener>
  );
};

export default DropDownGuests;
