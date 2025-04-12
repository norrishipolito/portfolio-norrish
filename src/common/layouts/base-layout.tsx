import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import NavigationBar from "@/features/navigation/components/navigation-bar";
import NavigationFooter from "@/features/navigation/components/navigation-footer";
import React, { PropsWithChildren } from "react";

const BaseLayout = (props: PropsWithChildren) => {
  return (
    <div className="relative flex min-h-screen flex-col bg-(image:--background-gradient)">
      <AnimatedGridPattern
        width={80}
        height={80}
        maxOpacity={0.1}
        numSquares={15}
      />
      <div className="left-0 top-0 mx-auto w-full">
        <NavigationBar />
      </div>
      {props.children}
      <NavigationFooter />
    </div>
  );
};

export default BaseLayout;
