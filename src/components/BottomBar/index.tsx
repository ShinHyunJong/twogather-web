import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import audioAtom from '@/recoil/audio';

const { audioPlayerRefAtom } = audioAtom;

function BarItem({
  content,
  onClick,
}: {
  content: string;
  onClick: () => void;
}) {
  return (
    <div className="border-4 border-black">
      <div
        onClick={onClick}
        className="flex w-32 cursor-pointer items-start justify-center border-2 border-white py-1"
      >
        {content}
      </div>
    </div>
  );
}

export const routes = [
  {
    id: 0,
    name: '프로젝트',
    link: '/project',
  },
  {
    id: 1,
    name: '팀 소개',
    link: '/about',
  },
  {
    id: 2,
    name: '로드맵',
    link: '/roadmap',
  },
  {
    id: 3,
    name: '파트너',
    link: '/partner',
  },
  {
    id: 4,
    name: 'FAQ',
    link: '/faq',
  },
];

function BottomBar() {
  const router = useRouter();
  const audioRef = useRecoilValue(audioPlayerRefAtom);
  const [isMuted, setIsMuted] = useState(false);
  const [isOpenc, setOpenc] = useState(false);

  useEffect(() => {
    if (audioRef?.volume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  }, [audioRef]);

  const handleSound = () => {
    if (!audioRef) return;
    if (audioRef.volume !== 0) {
      audioRef.volume = 0;
      setIsMuted(true);
    } else {
      audioRef.volume = 1;
      setIsMuted(false);
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-between overflow-x-auto text-xl font-bold">
      {isOpenc && (
        <div
          role="button"
          onClick={() => setOpenc(false)}
          className="fixed left-[20%] bottom-[20%] z-[300] flex h-[200px] w-[200px] flex-col"
        >
          <div className="flex h-full w-full flex-col items-center justify-center border-2 border-black bg-white">
            <div className="relative flex h-full w-full flex-col items-center justify-center border-4 border-black bg-white px-2 pb-4">
              <div className="absolute top-0 left-0 h-6 w-full border-b-4 border-black bg-red-400"></div>
              <h1 className="font text-5xl">커밍순</h1>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-row items-center">
        <div className="border-4 border-black">
          <div
            role="button"
            onClick={() => router.push('/')}
            className="flex w-20 flex-row justify-center border-2 border-white py-1"
          >
            <img
              className="h-6 w-auto"
              alt="soundOn"
              src="/assets/images/bottom/logo.png"
            ></img>
            시작
          </div>
        </div>
        <div className="mx-1 h-9 w-1 bg-black"></div>
        <div className="mx-1 flex w-[200px] flex-row gap-2">
          <a
            href="https://discord.gg/twogather"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/images/bottom/discord.png"
              alt="discord"
              className="h-auto w-14"
            ></img>
          </a>
          <a
            href="https://twitter.com/twogatther?s=21&t=A7HLVP6_56ffPNX35wP6YQ"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/images/bottom/twitter.png"
              alt="twitter"
              className="h-auto w-14"
            ></img>
          </a>

          <div role="button" onClick={() => setOpenc(!isOpenc)}>
            <img
              src="/assets/images/bottom/openC.png"
              alt="openC"
              className="h-auto w-14"
            ></img>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 text-xl font-bold">
          {routes.map((x) => {
            return (
              <BarItem
                key={x.id}
                onClick={() => router.push(`${x.link}`)}
                content={x.name}
              ></BarItem>
            );
          })}
        </div>
      </div>
      <div className="flex h-full flex-row items-center">
        <div className="mr-1 h-9 w-1 bg-black"></div>
        <div className="flex flex-row items-center border-4 border-black p-1">
          <img
            className="h-6 w-auto cursor-pointer"
            onClick={handleSound}
            alt="soundOnOff"
            src={`/assets/images/bottom/sound${isMuted ? 'Off' : 'On'}.png`}
          ></img>
          <div className="flex flex-row text-xl font-bold">
            <p className="mx-2">{format(new Date(), 'aa')}</p>{' '}
            {format(new Date(), 'hh:mm')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
