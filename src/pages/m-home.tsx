import Image from 'next/image';
import router from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

import { routes } from '@/components/BottomBar';
import { PencilBorder, PencilBorderBottom } from '@/components/PencilBox';

const MobileHomeWrapper = styled.div`
  background-image: url('/assets/images/background/mobileGroundBg.png');
  background-position: center;
  background-size: cover;
`;

const RouteIcon = ({
  text,
  value,
  onClick,
}: {
  text: string;
  value: string;
  onClick: () => void;
}) => {
  return (
    <div
      role="button"
      onClick={onClick}
      className="flex flex-col items-center justify-center"
    >
      <Image
        width={80}
        layout="fixed"
        height={80}
        src={`/assets/images/entrance${value}Icon.png`}
        alt="projectIcon"
      ></Image>
      <h1 className="font mobileText mt-1 text-xl">{text}</h1>
    </div>
  );
};

function MobileHomePage() {
  const [isOpenc, setOpenc] = useState(false);

  return (
    <MobileHomeWrapper className="relative h-full w-full overflow-y-auto pt-16 pb-32">
      <div className="grid auto-cols-min grid-flow-row grid-cols-3 gap-3 px-4">
        {routes.map((x) => {
          return (
            <RouteIcon
              onClick={() => router.push(x.link)}
              value={x.link}
              key={x.id}
              text={x.name}
            ></RouteIcon>
          );
        })}
      </div>
      <div className="fixed bottom-0 flex h-20 w-full justify-center">
        <div className="mr-1">
          <a
            href="https://twitter.com/twogatther?s=21&t=A7HLVP6_56ffPNX35wP6YQ"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              width={80}
              height={80}
              layout="fixed"
              src="/assets/images/bottom/twitterMobile.png"
              alt="twitterMobile"
            ></Image>
          </a>
        </div>
        <a href="https://discord.gg/twogather" target="_blank" rel="noreferrer">
          <Image
            width={80}
            height={80}
            layout="fixed"
            src="/assets/images/bottom/discordMobile.png"
            alt="discordMobile"
          ></Image>
        </a>
        <div
          className="relative z-[300]"
          role="button"
          onClick={() => setOpenc(!isOpenc)}
        >
          <Image
            width={80}
            height={80}
            src="/assets/images/bottom/openCMobile.png"
            alt="openCMobile"
            layout="fixed"
          ></Image>
        </div>
        {isOpenc && (
          <PencilBorder
            role="button"
            onClick={() => setOpenc(false)}
            className="fixed right-[2px] bottom-[85px] z-[300] flex h-[180px] w-[200px] flex-col"
          >
            <div
              id="comingSoon"
              className="flex h-full w-full flex-col items-center justify-center bg-white"
            >
              <div className="relative flex h-full w-full flex-col items-center justify-center bg-white px-2 pb-4">
                <div className="absolute top-0 left-0 h-6 w-full bg-red-400">
                  <PencilBorderBottom className="absolute bottom-[-2px] left-0 z-10 w-full"></PencilBorderBottom>
                </div>
                <h1 className="font text-4xl">커밍순...</h1>
              </div>
            </div>
          </PencilBorder>
        )}
      </div>
    </MobileHomeWrapper>
  );
}

export default MobileHomePage;
