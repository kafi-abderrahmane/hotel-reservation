import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import IDateRangePicker from "./IDateRangePicker";

export default function DateRangePickerModal({
  open,
  setOpen,
  value,
  setValue,
  buttonRef,
}) {
  const [initState, setInitState] = React.useState([
    {
      startDate: value?.startDate,
      endDate: value?.endDate,
      key: "selection",
    },
  ]);

  const handleClose = () => {
    setOpen(false);
  };

  const onConfirm = () => {
    setValue &&
      setValue((prevState) => ({
        ...prevState,
        startDate: initState[0]?.startDate || new Date(),
        endDate: initState[0]?.endDate || new Date(),
      }));
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Menu
        anchorEl={buttonRef}
        id="account-menu"
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
        <Box className="flex flex-col">
          <IDateRangePicker
            initState={initState}
            setInitState={setInitState}
            value={value}
          />

          <Box className="h-[35px] flex gap-2 justify-end w-full px-2">
            <button
              onClick={handleClose}
              type="button"
              className="rounded border border-golden px-4 text-golden">
              Cancel
            </button>

            <button
              onClick={onConfirm}
              type="button"
              className="rounded text-white bg-golden px-4">
              Done
            </button>
          </Box>
        </Box>
      </Menu>
    </React.Fragment>
  );
}
