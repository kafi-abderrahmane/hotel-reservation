import React, { useState, useRef } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import DropDownGuests from "./DropDownGuests";
import DateRangePickerModal from "./DateRangePickerModal";

const locales = { en: "en-US", fr: "fr-FR" };

const CheckAvailability = () => {
  const [numberAdults, setnumberAdults] = useState(1);
  const [numberChildren, setNumberChildren] = useState(0);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24),
  });

  const [buttonRef, setButtonRef] = React.useState(null);
  const router = useRouter();
  return (
    <div className="w-full px-10 md:px-16">
      <div className="flex flex-col items-center justify-center gap-6 mt-[140px] md:mt-[230px] lg:mt-[180px]">
        <span className="font-medium text-xs text-golden font-jost uppercase tracking-[0.1em] text-center">
          Welcome to CozyStay, a luxury apartment hotel in Times Square
        </span>
        <h1 className="font-marcellus text-white text-[40px] md:text-[48px] lg:text-[72px] leading-[54px] md:leading-[65px] lg:leading-[97px] uppercase w-full lg:w-4/5 text-center">
          Your Next Boutique Apartments
        </h1>
        <div className="relative flex items-center justify-center w-full max-w-[1000px] ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center border border-golden divide-y md:divide-y-[0px] lg:divide-x divide-golden z-50 w-full">
            <button
              ref={(button) => setButtonRef(button)}
              onClick={() => setOpen(!open)}
              className="px-4 py-3 text-base font-jost text-white flex flex-row items-center justify-between gap-4 min-h-[60px]">
              <span className="capitalize font-marcellus ">Check in</span>
              <div className="flex flex-row items-center justify-center">
                <span className="text-sm">
                  {value?.startDate
                    ?.toLocaleDateString(locales[router?.locale], {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })
                    .replaceAll("/", "-")}
                </span>
                <span className="text-base flex items-center justify-center text-golden">
                  <KeyboardArrowDownIcon fontSize="inherit" />
                </span>
              </div>
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="px-4 py-3 text-base font-jost text-white flex flex-row items-center justify-between gap-4 min-h-[60px]">
              <span className="capitalize font-marcellus">Check out</span>
              <div className="flex flex-row items-center justify-center">
                <span className="text-sm">
                  {value?.endDate
                    ?.toLocaleDateString(locales[router?.locale], {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })
                    .replaceAll("/", "-")}
                </span>
                <span className="text-base flex items-center justify-center text-golden">
                  <KeyboardArrowDownIcon fontSize="inherit" />
                </span>
              </div>
            </button>

            <DropDownGuests
              numberAdults={numberAdults}
              setnumberAdults={setnumberAdults}
              numberChildren={numberChildren}
              setNumberChildren={setNumberChildren}
            />
            <Link
              href={"/"}
              className="px-4 text-base text-white font-marcellus min-h-[60px] flex items-center justify-center text-center">
              <span>Check Availability</span>
            </Link>
          </div>
          <div className="absolute border border-golden w-[calc(100%+10px)] h-[calc(100%-10px)]"></div>
        </div>
        <div className="bg-red-200">
          <DateRangePickerModal
            open={open}
            setOpen={setOpen}
            value={value}
            setValue={setValue}
            buttonRef={buttonRef}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckAvailability;
