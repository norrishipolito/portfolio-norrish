import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import NavigationBar from "@/features/navigation/components/navigation-bar";
import React, { PropsWithChildren } from "react";

const BaseLayout = (props: PropsWithChildren) => {
  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-zinc-50 to-zinc-300">
      <AnimatedGridPattern
        width={65}
        height={65}
        maxOpacity={0.1}
        numSquares={15}
      />
      <div className="left-0 top-0 mx-auto w-full">
        <NavigationBar />
      </div>
      {props.children}
      <div />
    </div>
  );
};

export default BaseLayout;
