import lottie from 'lottie-web';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import Lottie from 'react-lottie';

import cloud from '@/public/assets/lottie/entrance/cloud.json';
import enterButton from '@/public/assets/lottie/entrance/enterButton.json';
import finger from '@/public/assets/lottie/entrance/finger.json';

export const LottieLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: enterButton,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      className: 'w-[100px]',
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

const Index = () => {
  const router = useRouter();
  const [entering, setEntering] = useState(false);
  const wrapperRef = useRef(null);

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
      router.push('/project');
    }, 3000);
  };
  return (
    <div className="fixed right-0 bottom-0 flex h-screen w-screen items-center justify-center">
      <video className="h-full w-full object-cover" autoPlay loop muted>
        <source src="/assets/videos/bgVideo.mp4" type="video/mp4" />
      </video>

      <div className={`fixed bottom-[30%] ${entering ? 'z-0' : 'z-30'}`}>
        <div onClick={onClickEnter} className="h-auto w-[320px]">
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
