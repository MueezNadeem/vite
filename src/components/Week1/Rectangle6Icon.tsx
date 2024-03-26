import { memo, SVGProps } from 'react';

const Rectangle6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 529 50' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 22.0955C0 9.89251 9.89251 0 22.0955 0H506.904C519.108 0 529 9.89251 529 22.0955V27.9045C529 40.1075 519.107 50 506.904 50H22.0955C9.89251 50 0 40.1075 0 27.9045V22.0955Z'
      fill='#FE6784'
      stroke='#FFAEBE'
      strokeWidth={3.31433}
      strokeDasharray='5.52 5.52'
    />
  </svg>
);
const Memo = memo(Rectangle6Icon);
export { Memo as Rectangle6Icon };
