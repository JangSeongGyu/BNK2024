import useSound from 'use-sound';

import Timer from '../../music/タイマー.mp3';

export const Sound = () => {
  const [play] = useSound(Timer);
  play()
}

