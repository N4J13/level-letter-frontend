import { SVGAttributes } from "react";

export const ErrorIcon = (props: SVGAttributes<SVGSVGElement>) => (
  <svg
    width="1.5em"
    height="1.5em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#000000"
      d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6zm-.5-9h1v5h-1zm0 6h1v1h-1z"
    ></path>
  </svg>
);
