import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';

import audioAtom from '@/recoil/audio';

const { audioPlayerRefAtom } = audioAtom;

function Audio() {
  const [audioPlayer, setAudioPlayer] = useRecoilState(audioPlayerRefAtom);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;
    setAudioPlayer(audioRef.current);
  }, [audioRef, setAudioPlayer]);

  useEffect(() => {
    if (audioPlayer && audioPlayer.paused) {
      audioPlayer.play();
    }
  }, [audioPlayer]);

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
