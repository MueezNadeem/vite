import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { FrameIcon2 } from './FrameIcon2.js';
import { FrameIcon3 } from './FrameIcon3.js';
import { FrameIcon4 } from './FrameIcon4.js';
import { FrameIcon } from './FrameIcon.js';
import { Group1Icon } from './Group1Icon.js';
import { Group53Icon } from './Group53Icon.js';
import { Group61Icon } from './Group61Icon.js';
import { Group313Icon } from './Group313Icon.js';
import { Group1452Icon } from './Group1452Icon.js';
import { Group1459Icon } from './Group1459Icon.js';
import { Group1460Icon } from './Group1460Icon.js';
import { Group1461Icon } from './Group1461Icon.js';
import { Group1462Icon } from './Group1462Icon.js';
import { Layer_7Icon2 } from './Layer_7Icon2.js';
import { Layer_7Icon } from './Layer_7Icon.js';
import { MaskGroupIcon } from './MaskGroupIcon.js';
import { VectorIcon } from './VectorIcon.js';
import classes from './Week2.module.css';

interface Props {
  className?: string;
   setPage: (newPage: number) => void;
}
/* @figmaId 0:812 */
export const Week2: FC<Props> = memo(function Week2( {setPage}) {
const handleClick = () => {
  setPage(1);
}

  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.group1}>
        <Group1Icon className={classes.icon} />
      </div>
      <div className={classes.funFoxLogo1Copy1}></div>
      <div className={classes.frame19}></div>
      <div className={classes.canYouFigureOutTheDefinitionOf}>
        <div className={classes.textBlock}>
          Can you figure out the definition of setting from the following examples?
        </div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
        <div className={classes.textBlock3}>
          <p></p>
        </div>
      </div>
      <div className={classes.TakeAMinuteToThinkAboutThis}>(take a minute to think about this)</div>
      <div className={classes.group1452}>
        <Group1452Icon className={classes.icon2} />
      </div>
      <div className={classes.rectangle6}></div>
      <div className={classes.sunnyDayAtABeach}>Sunny day at a beach</div>
      <div className={classes.aColdRainyNightInAHauntedHouse}>
        <div className={classes.textBlock4}>A cold rainy night in a </div>
        <div className={classes.textBlock5}>haunted house in October</div>
      </div>
      <div className={classes.soWhatDoYouThinkTheDefinitionO}>
        <div className={classes.textBlock6}>So, what do you think the definition of setting is?</div>
        <div className={classes.textBlock7}>
          <p></p>
        </div>
        <div className={classes.textBlock8}>Any guesses?</div>
      </div>
      <div className={classes.theTimeOfTheStoryCouldBeInTheP}>
        <div className={classes.textBlock9}>
          The time of the story could be in the past, future, day, night, summer or winter.
        </div>
        <div className={classes.textBlock10}>
          A story may take place in a school, a mall, a desert, an airplane or in a variety
        </div>
        <div className={classes.textBlock11}>of other places.</div>
      </div>
      <div className={classes.______________________________}> ________________________________________</div>
      <div className={classes.hint}>Hint: </div>
      <div className={classes.frame}>
        <FrameIcon className={classes.icon3} />
      </div>
      <div className={classes.frame2}>
        <FrameIcon2 className={classes.icon4} />
      </div>
      <div className={classes.rectangle7}></div>
      <div className={classes.settingIsTheTimeAndPlaceOfASto}>
        Setting is the time           
        &nbsp;  &nbsp; and place &nbsp; &nbsp;  &nbsp; of a story. It often answers the questions: when? and where?
      </div>
      <div className={classes.frame3}>
        <FrameIcon3 className={classes.icon5} />
      </div>
      <div className={classes.frame4}>
        <FrameIcon4 className={classes.icon6} />
      </div>
      <div className={classes.group53}>
        <Group53Icon className={classes.icon7} />
      </div>
      <div className={classes.layer_7}>
        <Layer_7Icon className={classes.icon8} />
      </div>
   

      <div className={classes.rectangle8}></div>
      <div className={classes.rectangle9}></div>
      <div className={classes._2}>2</div>
      <div className={classes.rectangle10}></div>
      <div className={classes.rectangle11}></div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon10} />
      </div>
      <div className={classes.group313}>
        <Group313Icon className={classes.icon11} />
      </div>

         <div className={classes.layer_72} onClick={handleClick}>
        <Layer_7Icon2 className={classes.icon9} />
      </div>
      <div className={classes.maskGroup}>
        <MaskGroupIcon className={classes.icon12} />
      </div>
      <div className={classes.group1459}>
        <Group1459Icon className={classes.icon13} />
      </div>
      <div className={classes.group61}>
        <Group61Icon className={classes.icon14} />
      </div>
      <div className={classes.group1460}>
        <Group1460Icon className={classes.icon15} />
      </div>
      <div className={classes.group1461}>
        <Group1461Icon className={classes.icon16} />
      </div>
      <div className={classes.group1462}>
        <Group1462Icon className={classes.icon17} />
      </div>
    </div>
  );
});
