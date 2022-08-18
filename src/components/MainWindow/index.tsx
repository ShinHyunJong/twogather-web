import Image from 'next/image';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import useMedia from 'use-media';

import { MOBILE_WIDTH } from '@/configs';
import leftQJson from '@/public/assets/lottie/faq/page5-L question.json';
import rightQJson from '@/public/assets/lottie/faq/page5-R exclamation.json';
import treeJson from '@/public/assets/lottie/project/page1-L tree.json';
import cactusJson from '@/public/assets/lottie/project/page1-R cactus.json';
import pinkfaryJson from '@/public/assets/lottie/roadmap/page3-L pinkfary.json';
import puplefaryJson from '@/public/assets/lottie/roadmap/page3-R purplefary.json';

import { PencilBorder, PencilBorderBottom } from '../PencilBox';

type MainWindowProps = {
  children: ReactNode;
  page: string;
};

type BigDivProps = {
  page: string;
};

const BgDiv = styled.section<BigDivProps>`
  background-image: ${(props) => `url(/assets/images/${props.page}/bgImg.png)`};
  background-repeat: no-repeat;
  background-size: 130% 130%;
  background-position: center;
`;

export const TreeLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: treeJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie isClickToPauseDisabled options={defaultOptions} />;
};

export const CactusLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: cactusJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie isClickToPauseDisabled options={defaultOptions} />;
};

export const PinkFary = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pinkfaryJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie isClickToPauseDisabled options={defaultOptions} />;
};

export const PurpleFary = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: puplefaryJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie isClickToPauseDisabled options={defaultOptions} />;
};
export const LeftQ = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: leftQJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie isClickToPauseDisabled options={defaultOptions} />;
};
export const RightQ = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: rightQJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie isClickToPauseDisabled options={defaultOptions} />;
};
function MainWindow({ children, page }: MainWindowProps) {
  const router = useRouter();
  const isDesktop = useMedia({ minWidth: MOBILE_WIDTH });

  const renderLeftImg = () => {
    switch (router.asPath) {
      case '/project':
        return (
          <>
            <div className="absolute bottom-[-20px] left-[-45px] z-30">
              <Image
                width={200}
                height={300}
                alt="leftCorner"
                src="/assets/images/project/leftCorner.png"
              ></Image>
            </div>
            <div className="absolute bottom-0 left-[-40px] z-20 w-[350px]">
              <TreeLottie></TreeLottie>
            </div>
          </>
        );
      case '/roadmap':
        return (
          <>
            <div className="absolute bottom-[-20px] left-[-63px] z-30">
              <Image
                width={300}
                height={250}
                alt="leftRoadCorner"
                src="/assets/images/roadmap/leftRoadCorner.png"
              ></Image>
            </div>
            <div className="absolute top-0 left-[-10px] z-20 w-[250px]">
              <PinkFary></PinkFary>
            </div>
          </>
        );
      case '/faq':
        return (
          <>
            <div className="absolute bottom-[-10px] left-[-5px] z-30">
              <Image
                width={200}
                height={150}
                alt="leftFaqCorner"
                src="/assets/images/faq/leftFaqCorner.png"
              ></Image>
            </div>
            <div className="absolute bottom-10 left-[-10px] z-20 w-[350px]">
              <LeftQ></LeftQ>
            </div>
          </>
        );
      default:
        return <div></div>;
    }
  };

  const renderRightImg = () => {
    switch (router.asPath) {
      case '/project':
        return (
          <>
            <div className="absolute bottom-[-20px] right-[-34px] z-30 w-[250px]">
              <Image
                width={400}
                height={350}
                alt="rightCorner"
                src="/assets/images/project/rightCorner.png"
              ></Image>
            </div>
            <div className="absolute bottom-[-10px] right-[-50px] z-20 w-[350px]">
              <CactusLottie></CactusLottie>
            </div>
          </>
        );
      case '/roadmap':
        return (
          <>
            <div className="absolute bottom-[-45px] right-[-50px] z-30 w-[300px]">
              <Image
                width={300}
                height={300}
                alt="rightRoadCorner"
                src="/assets/images/roadmap/rightRoadCorner.png"
              ></Image>
            </div>
            <div className="absolute top-0 right-[-10px] z-20 w-[250px]">
              <PurpleFary></PurpleFary>
            </div>
          </>
        );
      case '/faq':
        return (
          <>
            <div className="absolute bottom-[-10px] right-[-5px] z-30">
              <Image
                width={200}
                height={150}
                alt="rightFaqCorner"
                src="/assets/images/faq/rightFaqCorner.png"
              ></Image>
            </div>
            <div className="absolute bottom-[-10px] right-[-10px] z-20 w-[350px]">
              <RightQ></RightQ>
            </div>
          </>
        );
      default:
        return <div></div>;
    }
  };

  const renderPartnerImages = () => {
    if (router.asPath === '/partner') {
      return (
        <>
          <div className="absolute top-[40px] left-4">
            <Image
              alt="leftTopCorner"
              width={70}
              height={60}
              src="/assets/images/partner/leftTopPartner.png"
            ></Image>
          </div>
          <div className="absolute top-[30%] left-0">
            <Image
              alt="leftMiddleCorner"
              width={200}
              height={55}
              src="/assets/images/partner/leftMiddleCorner.png"
            ></Image>
          </div>
          <div className="absolute bottom-[-10px] left-[-10px]">
            <Image
              alt="leftBottomCorner"
              width={300}
              height={264}
              src="/assets/images/partner/leftPartnerCorner.png"
            ></Image>
          </div>
          <div className="absolute bottom-[-15px] right-[-12px]">
            <Image
              alt="rightBottomCorner"
              width={300}
              height={407}
              src="/assets/images/partner/rightPartnerCorner.png"
            ></Image>
          </div>
        </>
      );
    }
    return null;
  };

  if (isDesktop) {
    return (
      <PencilBorder className="relative h-[90%] w-[80%]">
        <div id="mainWindow" className="h-full w-full">
          <div className="relative flex h-8 min-w-full justify-end bg-[#d5bffd] px-2">
            <PencilBorderBottom className="absolute bottom-[-2px] left-0 z-10 w-full"></PencilBorderBottom>
            <div className="flex items-center gap-2">
              <img
                alt="circle"
                className="h-5 w-5"
                src="/assets/images/background/circle.png"
              ></img>
              <img
                alt="circle"
                className="h-5 w-5"
                src="/assets/images/background/close.png"
              ></img>
            </div>
          </div>
          <BgDiv
            className="relative flex w-full justify-center overflow-y-hidden"
            style={{ height: `calc(100% - 32px)` }}
            page={page}
          >
            {children}
          </BgDiv>
          {renderLeftImg()}
          {renderPartnerImages()}
          {renderRightImg()}
        </div>
      </PencilBorder>
    );
  }

  return (
    <PencilBorder className="h-[90%] w-[80%]">
      <div id="mainWindow" className="relative h-full w-full">
        <BgDiv
          className="relative flex w-full justify-center overflow-y-hidden"
          style={{ height: `calc(100% - 55px)` }}
          page={page}
        >
          {children}
        </BgDiv>
        <PencilBorder
          role="button"
          onClick={() => router.push('/m-home')}
          className="font absolute bottom-[-5px] z-50 h-16 w-full text-2xl"
        >
          <div className="flex h-full w-full items-center justify-center bg-[#d5bffd]">
            닫기
          </div>
        </PencilBorder>
      </div>
    </PencilBorder>
  );
}

export default MainWindow;
