import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import useMedia from 'use-media';

import Audio from '@/components/Audio';
import BottomBar from '@/components/BottomBar';
import { PencilBorder } from '@/components/PencilBox';
import { MOBILE_WIDTH } from '@/configs';

type HomeLayoutProps = {
  children: ReactNode;
};

type BackgroundImgDivProps = {
  entrance: boolean;
};

const BackgroundImgDiv = styled.main<BackgroundImgDivProps>`
  background-image: ${(props) =>
    `url(${
      !props.entrance
        ? '/assets/images/background/groundBg.png'
        : '/assets/images/background/entranceBg.png'
    })`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function HomeLayout({ children }: HomeLayoutProps) {
  const router = useRouter();
  const wrapperRef = useRef(null);
  const isEntrance = router.asPath === '/';
  const isDesktop = useMedia({ minWidth: MOBILE_WIDTH });

  if (isEntrance) {
    return (
      <div className="fixed right-0 bottom-0 flex h-screen w-screen items-center justify-center">
        <video className="h-full w-full object-cover" autoPlay loop muted>
          <source src="/assets/videos/bgVideo.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }

  // const routePrev = () => {
  //   const targetRouteIndex = routes.findIndex((x) => x.link === router.asPath);
  //   if (targetRouteIndex === -1) return;
  //   const prevRoute = routes[targetRouteIndex - 1];
  //   if (!prevRoute) return;
  //   router.push(prevRoute.link);
  // };

  // const routeNext = () => {
  //   const targetRouteIndex = routes.findIndex((x) => x.link === router.asPath);
  //   if (targetRouteIndex === -1) return;
  //   const nextRoute = routes[targetRouteIndex + 1];
  //   if (!nextRoute) return;
  //   router.push(nextRoute.link);
  // };

  if (isDesktop) {
    return (
      <BackgroundImgDiv
        ref={wrapperRef}
        entrance={isEntrance}
        className="flex h-screen w-screen items-center justify-center overflow-scroll pb-[70px]"
      >
        {children}
        <PencilBorder className="fixed bottom-0 z-[60] h-[70px] w-full bg-[#a0aeef]">
          <div className="h-full w-full border-t-2 border-white px-4">
            <BottomBar></BottomBar>
          </div>
          <Audio></Audio>
        </PencilBorder>
      </BackgroundImgDiv>
    );
  }

  return (
    <BackgroundImgDiv
      ref={wrapperRef}
      entrance={isEntrance}
      className="flex h-screen w-screen items-center justify-center pb-[70px]"
    >
      {children}
      <Audio></Audio>
    </BackgroundImgDiv>
  );
}

export default HomeLayout;
