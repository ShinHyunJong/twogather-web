import Image from 'next/image';
import router from 'next/router';
import styled from 'styled-components';

import { routes } from '@/components/BottomBar';

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
  return (
    <MobileHomeWrapper className="relative h-full w-full overflow-y-hidden py-16">
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
          <Image
            width={80}
            height={80}
            layout="fixed"
            src="/assets/images/bottom/twitterMobile.png"
            alt="twitterMobile"
          ></Image>
        </div>
        <Image
          width={80}
          height={80}
          layout="fixed"
          src="/assets/images/bottom/discordMobile.png"
          alt="discordMobile"
        ></Image>
        <Image
          width={80}
          height={80}
          src="/assets/images/bottom/openCMobile.png"
          alt="openCMobile"
          layout="fixed"
        ></Image>
      </div>
    </MobileHomeWrapper>
  );
}

export default MobileHomePage;
