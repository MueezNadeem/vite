import { memo, SVGProps } from 'react';

const FrameIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_3_4373)'>
      <path
        d='M24.1521 47.7255C37.3311 47.7255 48.0148 37.0418 48.0148 23.8627C48.0148 10.6837 37.3311 0 24.1521 0C10.9731 0 0.289341 10.6837 0.289341 23.8627C0.289341 37.0418 10.9731 47.7255 24.1521 47.7255Z'
        fill='#8258A4'
      />
      <path
        opacity={0.42}
        d='M24.1521 11.4345L16.7515 18.1381C11.1307 23.0767 6.22166 27.9116 1.5203 32.7167C4.8424 41.5114 11.2641 47.1768 22.7728 47.6958L34.0739 36.3948V25.6276L36.8917 22.9581L31.5675 18.1381L24.1521 11.4345Z'
        fill='url(#paint0_linear_3_4373)'
      />
      <path
        d='M24.1521 11.4345L16.7515 18.1381L11.4124 22.9581H13.207L18.0863 18.5385L24.1521 13.0511L30.2179 18.5385L35.0972 22.9581H36.8917L31.5675 18.1381L24.1521 11.4345ZM24.1521 13.9706L19.1838 18.4643L14.2155 22.9581V36.3948H20.8152V25.9687H27.4742V36.3948H34.0739V22.9581L29.1056 18.4643L24.1521 13.9706ZM22.1203 27.3035V36.3948H26.1691V27.3035H22.1203Z'
        fill='white'
      />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_3_4373'
        x1={25.6463}
        y1={25.9678}
        x2={5.13145}
        y2={48.4139}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#010101' />
        <stop offset={1} stopColor='#010101' stopOpacity={0} />
      </linearGradient>
      <clipPath id='clip0_3_4373'>
        <rect width={47.7107} height={47.7107} fill='white' transform='translate(0.289341)' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(FrameIcon);
export { Memo as FrameIcon };
