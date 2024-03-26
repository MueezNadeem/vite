import { memo } from 'react';
import type { FC } from 'react';
import { useState } from 'react';
import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Week1 } from './components/Week1/Week1';
import { Week2 } from './components/Week2/Week2';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
let [currentPage,setPage]=useState(1);
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      {currentPage==1 ?<Week1 setPage={setPage} /> : null}
      {currentPage==2 ?<Week2 setPage={setPage}/> : null}
    </div>
  );
});
