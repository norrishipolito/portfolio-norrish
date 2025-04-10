import BaseLayout from "@/common/layouts/base-layout";
import React, { PropsWithChildren } from "react";

const LandingPageLayout = (props: PropsWithChildren) => {
  return <BaseLayout>{props.children}</BaseLayout>;
};

export default LandingPageLayout;
