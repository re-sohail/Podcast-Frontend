import React from "react";

let NoDataFound = React.memo(({ name }) => {
  return (
    <div className="w-full h-[60vh] bg-[#F7EDE8] flex items-center justify-center">
      No Data Found of {name}
    </div>
  );
});

export default NoDataFound;
