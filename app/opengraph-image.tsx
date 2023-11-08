import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Next.js Partial Prerendering';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  // Font
  const interSemiBold = fetch(
    new URL('../fonts/Inter-SemiBold.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <svg
          fill="none"
          height="441"
          viewBox="0 0 843 441"
          width="843"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_4)">
            <rect fill="black" height="441" width="843" />
            <path
              d="M421.176 4.22058V306.779"
              stroke="#333333"
              strokeDasharray="3.18 3.18"
              strokeWidth="0.794118"
            />
            <path
              d="M468.824 4.22058V306.779"
              stroke="#333333"
              strokeDasharray="3.18 3.18"
              strokeWidth="0.794118"
            />
            <path
              d="M516.471 4.22058V306.779"
              stroke="#333333"
              strokeDasharray="3.18 3.18"
              strokeWidth="0.794118"
            />
            <path
              d="M564.118 4.22058V306.779"
              stroke="#333333"
              strokeDasharray="3.18 3.18"
              strokeWidth="0.794118"
            />
            <path
              d="M373.529 4.22058V306.779"
              stroke="#333333"
              strokeDasharray="3.18 3.18"
              strokeWidth="0.794118"
            />
            <path
              d="M325.882 4.22058V306.779"
              stroke="#333333"
              strokeDasharray="3.18 3.18"
              strokeWidth="0.794118"
            />
            <path
              d="M841 105L7.39098e-06 105"
              stroke="#333333"
              strokeDasharray="3.18 3.18"
              strokeWidth="0.794118"
            />
            <path
              d="M841 57L7.39098e-06 57"
              stroke="#333333"
              strokeDasharray="3.18 3.18"
              strokeWidth="0.794118"
            />
            <path
              d="M841 153L7.39098e-06 153"
              stroke="#333333"
              strokeDasharray="3.18 3.18"
              strokeWidth="0.794118"
            />
            <path
              d="M841 201L7.39098e-06 201"
              stroke="#333333"
              strokeDasharray="3.18 3.18"
              strokeWidth="0.794118"
            />
            <path
              d="M841 9L7.39098e-06 8.99998"
              stroke="#333333"
              strokeDasharray="3.18 3.18"
              strokeWidth="0.794118"
            />
            <path
              d="M135.294 4.22058V306.779"
              stroke="#333333"
              strokeDasharray="3.18 3.18"
              strokeWidth="0.794118"
            />
            <path
              d="M182.941 4.22058V306.779"
              stroke="#333333"
              strokeDasharray="3.18 3.18"
              strokeWidth="0.794118"
            />
            <path
              d="M230.588 4.22058V306.779"
              stroke="#333333"
              strokeDasharray="3.18 3.18"
              strokeWidth="0.794118"
            />
            <path
              d="M278.235 4.22058V306.779"
              stroke="#333333"
              strokeDasharray="3.18 3.18"
              strokeWidth="0.794118"
            />
            <path
              d="M87.6471 4.22058V306.779"
              stroke="#333333"
              strokeDasharray="3.18 3.18"
              strokeWidth="0.794118"
            />
            <path
              d="M40 4.22058V306.779"
              stroke="#333333"
              strokeDasharray="3.18 3.18"
              strokeWidth="0.794118"
            />
            <path
              d="M707.059 4.22058V306.779"
              stroke="#333333"
              strokeDasharray="3.18 3.18"
              strokeWidth="0.794118"
            />
            <path
              d="M754.706 4.22058V306.779"
              stroke="#333333"
              strokeDasharray="3.18 3.18"
              strokeWidth="0.794118"
            />
            <path
              d="M802.353 4.22058V306.779"
              stroke="#333333"
              strokeDasharray="3.18 3.18"
              strokeWidth="0.794118"
            />
            <path
              d="M659.412 4.22058V306.779"
              stroke="#333333"
              strokeDasharray="3.18 3.18"
              strokeWidth="0.794118"
            />
            <path
              d="M611.765 4.22058V306.779"
              stroke="#333333"
              strokeDasharray="3.18 3.18"
              strokeWidth="0.794118"
            />
            <rect fill="url(#paint0_radial_1_4)" height="441" width="841" />
            <g filter="url(#filter0_f_1_4)" opacity="0.3">
              <path
                d="M380.212 410C317.656 297.133 289.595 147.189 339.938 79.0527C390.281 10.9163 508.998 45.4216 547 153.881L452.005 204.983L380.212 410Z"
                fill="#0141FF"
              />
            </g>
            <rect
              fill="black"
              fillOpacity="0.5"
              height="87"
              rx="13.05"
              width="87"
              x="378"
              y="110"
            />
            <rect
              height="88.0875"
              rx="13.5937"
              stroke="url(#paint1_radial_1_4)"
              stroke-opacity="0.15"
              strokeWidth="1.0875"
              width="88.0875"
              x="377.456"
              y="109.456"
            />
            <rect
              height="88.0875"
              rx="13.5937"
              stroke="url(#paint2_linear_1_4)"
              stroke-opacity="0.5"
              strokeWidth="1.0875"
              width="88.0875"
              x="377.456"
              y="109.456"
            />
            <path
              d="M448.943 183.13L411.967 135.5H405V168.613H410.573V142.578L444.568 186.5C446.102 185.473 447.564 184.347 448.943 183.13Z"
              fill="url(#paint3_linear_1_4)"
            />
            <rect
              fill="url(#paint4_linear_1_4)"
              height="33.1273"
              width="5.52122"
              x="433.066"
              y="135.5"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="766"
              id="filter0_f_1_4"
              width="633"
              x="114"
              y="-156"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4"
                stdDeviation="100"
              />
            </filter>
            <radialGradient
              cx="0"
              cy="0"
              gradientTransform="translate(416 -39) rotate(90) scale(336 640.762)"
              gradientUnits="userSpaceOnUse"
              id="paint0_radial_1_4"
              r="1"
            >
              <stop stopOpacity="0" />
              <stop offset="1" />
            </radialGradient>
            <radialGradient
              cx="0"
              cy="0"
              gradientTransform="translate(421.5 110) rotate(90) scale(111.857)"
              gradientUnits="userSpaceOnUse"
              id="paint1_radial_1_4"
              r="1"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" />
            </radialGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint2_linear_1_4"
              x1="378"
              x2="397.031"
              y1="110"
              y2="145.344"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint3_linear_1_4"
              x1="430.306"
              x2="446.639"
              y1="164.256"
              y2="184.501"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint4_linear_1_4"
              x1="435.827"
              x2="435.735"
              y1="135.5"
              y2="159.828"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_1_4">
              <rect fill="white" height="441" width="843" />
            </clipPath>
          </defs>
        </svg>
        <div
          style={{
            position: 'absolute',
            fontFamily: 'Inter',
            fontSize: '48px',
            fontWeight: '600',
            letterSpacing: '-0.04em',
            color: 'white',
            top: '250px',
            left: '50%',
            transform: 'translateX(-50%)',
            whiteSpace: 'pre-wrap',
            maxWidth: '750px',
            textAlign: 'center',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
          }}
        >
          {alt}
        </div>
      </div>
    ),
    {
      width: 843,
      height: 441,
      fonts: [
        {
          name: 'Inter',
          data: await interSemiBold,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  );
}
