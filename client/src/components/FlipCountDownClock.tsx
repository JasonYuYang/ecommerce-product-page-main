import { useState, useEffect, useCallback } from 'react';

interface AnimatedCardPropsType {
  animation: string;
  digit: string;
}
interface StaticCardPropsType {
  position: string;
  digit: string;
}
interface FlipUnitContainerPropsType {
  digit: number;
  shuffle: boolean;
  unit: 'hours' | 'minutes' | 'seconds';
}
interface FlipCountDownClockPropsType {
  setEventTime: { hours: number; minutes: number; seconds: number };
}
// function component
const AnimatedCard = ({ animation, digit }: AnimatedCardPropsType) => {
  return (
    <div className={`flipCard ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};

// function component
const StaticCard = ({ position, digit }: StaticCardPropsType) => {
  return (
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};

// function component
const FlipUnitContainer = ({ digit, shuffle, unit }: FlipUnitContainerPropsType) => {
  // assign digit values
  let currentDigit = digit;
  let nextDigit = digit + 1;

  // to prevent a negative value
  if (unit !== 'hours') {
    nextDigit = nextDigit === -1 ? 59 : nextDigit;
  } else {
    nextDigit = nextDigit === -1 ? 23 : nextDigit;
  }

  // shuffle digits
  const digit1 = shuffle ? nextDigit : currentDigit;
  const digit2 = !shuffle ? nextDigit : currentDigit;

  // shuffle animations
  const animation1 = shuffle ? 'fold' : 'unfold';
  const animation2 = !shuffle ? 'fold' : 'unfold';

  return (
    <div className='flipUnitContainer'>
      <StaticCard
        position='upperCard'
        digit={currentDigit < 10 ? `0${currentDigit}` : `${currentDigit}`}
      />
      <StaticCard position='lowerCard' digit={nextDigit < 10 ? `0${nextDigit}` : `${nextDigit}`} />
      <AnimatedCard digit={digit1 < 10 ? `0${digit1}` : `${digit1}`} animation={animation1} />
      <AnimatedCard digit={digit2 < 10 ? `0${digit2}` : `${digit2}`} animation={animation2} />
    </div>
  );
};

export const FlipCountDownClock = ({ setEventTime }: FlipCountDownClockPropsType) => {
  const initialClockState = {
    hours: setEventTime.hours,
    hoursShuffle: true,
    minutes: setEventTime.minutes,
    minutesShuffle: true,
    seconds: setEventTime.seconds,
    secondsShuffle: true,
    secondsCount: setEventTime.hours * 60 * 60 + setEventTime.minutes * 60 + setEventTime.seconds,
  };
  const [clockState, setClockState] = useState<typeof initialClockState>(initialClockState);
  const [then] = useState<number>(Date.now() + clockState.secondsCount * 1000);
  const updateTime = useCallback(() => {
    const secondsLeft = (then - Date.now()) / 1000;
    // set time units
    const hours = Math.floor(secondsLeft / (60 * 60));
    const minutes = Math.floor((secondsLeft / 60) % 60);
    const seconds = Math.floor(secondsLeft % 60);
    // on hour chanage, update hours and shuffle state
    if (hours !== clockState.hours) {
      const hoursShuffle = !clockState.hoursShuffle;
      setClockState((prev) => {
        return { ...prev, hours, hoursShuffle };
      });
    }
    // on minute chanage, update minutes and shuffle state
    if (minutes !== clockState.minutes) {
      const minutesShuffle = !clockState.minutesShuffle;
      setClockState((prev) => {
        return { ...prev, minutes, minutesShuffle };
      });
    }
    // on second chanage, update seconds and shuffle state
    if (seconds !== clockState.seconds) {
      const secondsShuffle = !clockState.secondsShuffle;
      setClockState((prev) => {
        return { ...prev, seconds, secondsShuffle };
      });
    }
  }, [clockState, then]);

  useEffect(() => {
    const timerID = setInterval(() => updateTime(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, [updateTime]);

  return (
    <div className='count-down-timer'>
      <div className='flipClock'>
        <FlipUnitContainer
          unit='hours'
          digit={clockState.hours}
          shuffle={clockState.hoursShuffle}
        />
        <FlipUnitContainer
          unit='minutes'
          digit={clockState.minutes}
          shuffle={clockState.minutesShuffle}
        />
        <FlipUnitContainer
          unit='seconds'
          digit={clockState.seconds}
          shuffle={clockState.secondsShuffle}
        />
      </div>
    </div>
  );
};
