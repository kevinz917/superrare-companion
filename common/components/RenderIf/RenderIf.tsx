import React, { ReactElement } from "react";

interface RenderIfProps {
  value: any;
  children: any;
}

const RenderIf = (props: RenderIfProps): ReactElement | null => {
  return props.value ? props.children : null;
};

export default RenderIf;
