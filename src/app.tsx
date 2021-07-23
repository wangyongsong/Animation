import { RunTimeLayoutConfig, history } from "umi";

export const layout: RunTimeLayoutConfig = () => {
  return {
    rightContentRender: () => <div></div>,
    onPageChange: () => {
    },
    menuHeaderRender: undefined,
  };
};
