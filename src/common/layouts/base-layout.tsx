import React, { PropsWithChildren } from "react";

const BaseLayout = (props: PropsWithChildren) => {
  return (
    <div className="relative flex min-h-screen flex-col ">
      <div className="absolute left-0 top-0 z-50 mx-auto w-full">
        <div className="w-full" />
      </div>
      {props.children}
      <div />
    </div>
  );
};

export default BaseLayout;
