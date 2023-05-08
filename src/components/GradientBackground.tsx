type Props = {
  className?: string;
};

export default function GradientBackground({ className }: Props) {
  return (
    <svg
      className={className}
      preserveAspectRatio="none"
      viewBox="0 0 255 137"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_17_7)">
        <path d="M255 0H0V137H255V0Z" fill="url(#paint0_radial_17_7)" />
        <mask
          id="mask0_17_7"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="255"
          height="137"
        >
          <path d="M255 0H0V137H255V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_17_7)">
          <g opacity="0.765433" filter="url(#filter0_f_17_7)">
            <path
              d="M-0.5 55.5C52.5193 55.5 95.5 12.5193 95.5 -40.5C95.5 -93.5193 52.5193 -136.5 -0.5 -136.5C-53.5193 -136.5 -96.5 -93.5193 -96.5 -40.5C-96.5 12.5193 -53.5193 55.5 -0.5 55.5Z"
              fill="#7AD8FB"
            />
          </g>
          <g filter="url(#filter1_f_17_7)">
            <path
              d="M304.5 233.5C357.519 233.5 400.5 190.519 400.5 137.5C400.5 84.4807 357.519 41.5 304.5 41.5C251.481 41.5 208.5 84.4807 208.5 137.5C208.5 190.519 251.481 233.5 304.5 233.5Z"
              fill="#FBB57A"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_17_7"
          x="-186.203"
          y="-226.203"
          width="371.407"
          height="371.407"
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
            stdDeviation="44.8517"
            result="effect1_foregroundBlur_17_7"
          />
        </filter>
        <filter
          id="filter1_f_17_7"
          x="118.797"
          y="-48.2034"
          width="371.407"
          height="371.407"
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
            stdDeviation="44.8517"
            result="effect1_foregroundBlur_17_7"
          />
        </filter>
        <radialGradient
          id="paint0_radial_17_7"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(264.945 -14.2296) rotate(146.823) scale(322.666 301.288)"
        >
          <stop stopColor="#E84D70" />
          <stop offset="0.530886" stopColor="#A337F6" />
          <stop offset="1" stopColor="#28A7ED" />
        </radialGradient>
        <clipPath id="clip0_17_7">
          <rect width="255" height="137" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
