import { atom } from 'recoil';

export const audioPlayerRefAtom = atom<HTMLAudioElement | undefined>({
  key: 'audioPlayerRef',
  default: undefined,
});
