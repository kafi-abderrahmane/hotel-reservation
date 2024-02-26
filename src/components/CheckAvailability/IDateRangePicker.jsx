import React, { useState } from "react";
import { DateRange } from "react-date-range";
import fr from "date-fns/locale/fr";
import en from "date-fns/locale/en-US";

import { useRouter } from "next/router";

const IDateRangePicker = ({ value, initState, setInitState }) => {
  const [state, setState] = useState([
    {
      startDate: value?.startDate,
      endDate: value?.endDate,
      key: "selection",
    },
  ]);

  const handleDateChange = (rangesByKey) => {
    const { selection } = rangesByKey;
    if (selection && selection.startDate && selection.endDate) {
      setState([selection]);
      setInitState && setInitState([selection]);
    }
  };

  const router = useRouter();

  const locales = { en: en, fr: fr };

  return (
    <DateRange
      locale={locales[router?.locale]}
      onChange={handleDateChange}
      moveRangeOnFirstSelection={false}
      retainEndDateOnFirstSelection={false}
      months={2}
      ranges={state}
      direction="horizontal"
      rangeColors={["#ab916c"]}
      showMonthAndYearPickers={true}
      editableDateInputs={false}
      minDate={new Date()}
      staticRanges={[]}
      showDateDisplay={true}
      dragSelectionEnabled={false}
      inputRanges={[]}
      //   showPreview={false}
    />
  );
};

export default IDateRangePicker;
