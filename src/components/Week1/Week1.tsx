import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Group1Icon } from './Group1Icon.js';
import { Group61Icon } from './Group61Icon.js';
import { Group313Icon } from './Group313Icon.js';
import { Group599Icon } from './Group599Icon.js';
import { Group925Icon } from './Group925Icon.js';
import { Group926Icon } from './Group926Icon.js';
import { Group1458Icon } from './Group1458Icon.js';
import { Group1459Icon } from './Group1459Icon.js';
import { Group1460Icon } from './Group1460Icon.js';
import { Group1461Icon } from './Group1461Icon.js';
import { Group1462Icon } from './Group1462Icon.js';
import { GroupIcon2 } from './GroupIcon2.js';
import { GroupIcon3 } from './GroupIcon3.js';
import { GroupIcon4 } from './GroupIcon4.js';
import { GroupIcon5 } from './GroupIcon5.js';
import { GroupIcon } from './GroupIcon.js';
import { Layer_7Icon2 } from './Layer_7Icon2.js';
import { Layer_7Icon } from './Layer_7Icon.js';
import { Rectangle6Icon } from './Rectangle6Icon.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon } from './VectorIcon.js';
import classes from './Week1.module.css';

interface Props {
  className?: string;
  setPage: (newPage: number) => void;
}


/* @figmaId 0:215 */
export const Week1: FC<Props> = memo(function Week1({setPage}) {
const handleClick = () => {
  console.log("test")
    setPage(2); // Update the current page to 2
  };

  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.group1}>
        <Group1Icon className={classes.icon} />
      </div>
      <div className={classes.funFoxLogo1Copy1}></div>
      <div className={classes.group1458}>
        <Group1458Icon className={classes.icon2} />
      </div>
      <div className={classes.group1459}>
        <Group1459Icon className={classes.icon3} />
      </div>
      <div className={classes.frame19}></div>
      <div className={classes.rectangle6}>
        <Rectangle6Icon className={classes.icon4} />
      </div>
      <div className={classes.elementsOfStoryWriting}>Elements of Story Writing</div>
      <div className={classes.welcomeToTerm2OfWritersClubAre}>
        <div className={classes.textBlock}>
          Welcome to term 2 of Writers Club. Are you excited for this amazing journey?
        </div>
        <div className={classes.textBlock2}>
          Over the next week, we will be practicing the different elements of story writing.
        </div>
        <div className={classes.textBlock3}>Our aim is to make stories more interesting and exciting.</div>
      </div>
      <div className={classes.youMustBeFamiliarWithSomeOfThe}>
        You must be familiar with some of these. If not, do not worry! we will cover all these elements as we go along.
      </div>
      <div className={classes.group926}>
        <Group926Icon className={classes.icon5} />
      </div>
      <div className={classes.forTodaySLessonWeWillTryToUnde}>
        <div className={classes.textBlock5}>
          For today’s lesson, we will try to understand and practice writing the setting for our stories.
        </div>
        <div className={classes.textBlock6}>The setting is an important element of every fiction story.</div>
        <div className={classes.textBlock7}>
          <p></p>
        </div>
      </div>
      <div className={classes.rectangle7}></div>
      <div className={classes.group925}>
        <Group925Icon className={classes.icon6} />
      </div>
      <div className={classes.thereAreElementsWhichMakeTheFo}>
        There are five elements which make the foundation for story writing. An element is an essential part of something and
        every fiction story has the same key elements:
      </div>

      <div className={classes.layer_72}  >
        <Layer_7Icon2 className={classes.icon8} />
      </div>
      <div className={classes.rectangle8}></div>
      <div className={classes.rectangle9}></div>
      <div className={classes._1}>1</div>
      <div className={classes.rectangle10}></div>
      <div className={classes.rectangle11}></div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon9} />
      </div>
      <div className={classes.group313}>
        <Group313Icon className={classes.icon10} />
      </div>

        <div className={classes.layer_7}   >
        <Layer_7Icon className={classes.icon7} onClick={handleClick} />
      </div>
    
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon11} />
      </div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon12} />
      </div>
      <div className={classes.week1}>Week 1</div>
      <div className={classes.group599}>
        <Group599Icon className={classes.icon13} />
      </div>
      {/* <div className={classes.five}>five</div> */}
      <div className={classes.frame}>
        <div className={classes.group}>
          <GroupIcon className={classes.icon14} />
        </div>
        <div className={classes.setting}>Setting</div>
      </div>
      <div className={classes.frame2}>
        <div className={classes.group2}>
          <GroupIcon2 className={classes.icon15} />
        </div>
        <div className={classes.pLOT}>PLOT</div>
      </div>
      <div className={classes.frame3}>
        <div className={classes.group3}>
          <GroupIcon3 className={classes.icon16} />
        </div>
        <div className={classes.cHARACTERS}>CHARACTERS</div>
      </div>
      <div className={classes.frame4}>
        <div className={classes.group4}>
          <GroupIcon4 className={classes.icon17} />
        </div>
        <div className={classes.rESOLUTION}>RESOLUTION</div>
      </div>
      <div className={classes.frame5}>
        <div className={classes.group5}>
          <GroupIcon5 className={classes.icon18} />
        </div>
        <div className={classes.pROBLEMORCONFLICT}>
          <div className={classes.textBlock8}>PROBLEM</div>
          <div className={classes.textBlock9}>OR</div>
          <div className={classes.textBlock10}>CONFLICT</div>
        </div>
      </div>
      <div className={classes.group61}>
        <Group61Icon className={classes.icon19} />
      </div>
      <div className={classes.group1460}>
        <Group1460Icon className={classes.icon20} />
      </div>
      <div className={classes.group1461}>
        <Group1461Icon className={classes.icon21} />
      </div>
      <div className={classes.group1462}>
        <Group1462Icon className={classes.icon22} />
      </div>
    </div>
  );
});
