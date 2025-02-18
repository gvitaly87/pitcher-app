import "./JerseyIcon.css";
import { getLastName } from "../utils/formatters";
import { formatPlayerStatus } from "../utils/formatters";

type JerseyIconProps = {
  fill: string;
  status: string;
  width: string;
  number: number;
  name: string;
};
export default function JerseyIcon(props: JerseyIconProps) {
  let fill = props.fill;
  if (props.status === "Available") {
    fill = "hsl(140.6, 60%, 20%)";
  } else if (props.status === "Not Available") {
    fill = "hsl(0, 100%, 30%)";
  } else if (props.status === "Partial") {
    fill = "hsl(55, 100%, 35%)";
  }
  return (
    <div className="center-cell-content">
      <div
        className={"jersey-text-container " + formatPlayerStatus(props.status)}
      >
        {props.name && (
          <div className="jersey-name">{getLastName(props.name)}</div>
        )}
        <div className="jersey-number">{props.number}</div>
      </div>
      <svg
        width={props.width}
        viewBox="0 0 254 272"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{props.name + "'s Jersey"}</title>
        <desc>
          {"A baseball jersey with the Number #" +
            props.number +
            " and " +
            getLastName(props.name) +
            " written on the back"}
        </desc>
        <g clipPath="url(#clip0_4_2)">
          <path
            d="M217 0.00551462C217.166 0.0018421 217.333 0 217.5 0C237.658 0 254 26.8629 254 60V120H217V0.00551462Z"
            fill={fill}
          />
          <path
            d="M37 0.00551462C36.8336 0.0018421 36.6669 0 36.5 0C16.3416 0 0 26.8629 0 60V120H37V0.00551462Z"
            fill={fill}
          />
          <path
            d="M37 0H86.7658C93.6652 12.0223 109.308 20.4138 127.5 20.4138C145.692 20.4138 161.335 12.0223 168.234 0H217V220C217 239.372 210.879 257.315 200.466 272H53.5336C43.1206 257.315 37 239.372 37 220V0Z"
            fill={fill}
          />
          <g opacity="0.3" filter="url(#filter0_d_4_2)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M216.939 23C238.934 47.9618 252.849 82.0209 253.877 119.746H216.939V23ZM0 119.746C1.02846 82.0209 14.9436 47.9618 36.9387 23V119.746H0Z"
              fill="url(#paint0_radial_4_2)"
              shapeRendering="crispEdges"
            />
          </g>
          <g filter="url(#filter1_f_4_2)">
            <ellipse
              cx="127"
              cy="272"
              rx="66"
              ry="32"
              fill="url(#paint1_linear_4_2)"
              fillOpacity="0.14"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_4_2"
            x="-4"
            y="23"
            width="261.878"
            height="104.746"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_4_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_4_2"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_f_4_2"
            x="57"
            y="236"
            width="140"
            height="72"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="2"
              result="effect1_foregroundBlur_4_2"
            />
          </filter>
          <radialGradient
            id="paint0_radial_4_2"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(126.939 124.246) rotate(90) scale(143.5 127)"
          >
            <stop offset="0.5" stopColor="#880000" stopOpacity="0.333333" />
            <stop offset="1" stopColor="#DDDDDD" stopOpacity="0.6" />
          </radialGradient>
          <linearGradient
            id="paint1_linear_4_2"
            x1="127"
            y1="240"
            x2="127"
            y2="304"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#880000" stopOpacity="0.2" />
            <stop offset="0.8" stopColor="#220000" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_4_2">
            <rect width="254" height="272" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
