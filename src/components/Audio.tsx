import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';

import audioAtom from '@/recoil/audio';

const { audioPlayerRefAtom } = audioAtom;

function Audio() {
  const setAudioPlayer = useSetRecoilState(audioPlayerRefAtom);
  const audioRef = useRef(null);

  useEffect(() => {
    return () => setAudioPlayer(undefined);
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    setAudioPlayer(audioRef.current);
  }, [audioRef, setAudioPlayer]);

  return (
    <audio
      ref={audioRef}
      src="/assets/music/mixkit-delightful-4.mp3"
      className="hidden"
      loop
      controls
    ></audio>
  );
}

export default Audio;
