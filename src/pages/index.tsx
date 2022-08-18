import lottie from 'lottie-web';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import useMedia from 'use-media';

import { MOBILE_WIDTH } from '@/configs';
import cloud from '@/public/assets/lottie/entrance/cloud3.json';
import enterButton from '@/public/assets/lottie/entrance/enterButton.json';
import finger from '@/public/assets/lottie/entrance/finger.json';

export const LottieLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: enterButton,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} />;
};

export const FingerLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: finger,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} />;
};

const MobileBg = styled.main`
  background-image: url('/assets/images/background/mobileBg.png');
  background-position: center;
  background-size: cover;
`;

const Index = () => {
  const router = useRouter();
  const [entering, setEntering] = useState(false);
  const wrapperRef = useRef(null);
  const isDesktop = useMedia({ minWidth: MOBILE_WIDTH });

  const onClickEnter = () => {
    setEntering(true);
    if (!wrapperRef || !wrapperRef.current) return;
    lottie.loadAnimation({
      container: wrapperRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: cloud,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    });
    setTimeout(() => {
      setEntering(false);
      if (isDesktop) {
        router.push('/project');
      } else {
        router.push('/m-home');
      }
    }, 3000);
  };
  return (
    <div className="fixed right-0 bottom-0 flex h-full w-full items-center justify-center">
      {isDesktop ? (
        <video className="h-full w-full object-cover" autoPlay loop muted>
          <source src="/assets/videos/bgVideo.mp4" type="video/mp4" />
        </video>
      ) : (
        <MobileBg className="h-full w-full"></MobileBg>
      )}

      <div
        className={`fixed ${entering ? 'z-0' : 'z-30'} ${
          isDesktop ? 'bottom-[30%]' : 'bottom-[25%]'
        }`}
      >
        <div
          onClick={onClickEnter}
          className={`h-auto ${isDesktop ? 'w-[320px]' : 'w-[250px]'}`}
        >
          <LottieLoader></LottieLoader>
        </div>
      </div>
      <div ref={wrapperRef} className="fixed h-full w-full"></div>
      {entering && (
        <div className="fixed z-50 w-[300px]">
          <FingerLoader></FingerLoader>
        </div>
      )}
    </div>
  );
};

export default Index;
